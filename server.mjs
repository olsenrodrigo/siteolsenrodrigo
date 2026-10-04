import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { gzip } from "node:zlib";
import { promisify } from "node:util";

const gzipAsync = promisify(gzip);
const root = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const port = Number(process.env.PORT || 3030);
const host = "0.0.0.0";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

const compressible = new Set([".html", ".css", ".js", ".mjs", ".svg", ".txt", ".xml", ".json", ".webmanifest"]);

function insideRoot(full) {
  const rel = normalize(full);
  return rel === root || rel.startsWith(root + sep);
}

function candidate(urlPath) {
  let decoded = "/";
  try {
    decoded = decodeURIComponent(urlPath.split("?")[0]);
  } catch {
    return null;
  }
  if (decoded.includes("\0")) return null;
  const cleaned = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  const full = join(root, cleaned);
  if (!insideRoot(full)) return null;
  return full;
}

async function exists(file) {
  try {
    const info = await stat(file);
    return info;
  } catch {
    return null;
  }
}

async function resolveFile(urlPath) {
  const full = candidate(urlPath);
  if (!full) return null;
  const info = await exists(full);
  if (info?.isDirectory()) {
    const index = join(full, "index.html");
    if (await exists(index)) return index;
    return null;
  }
  if (info?.isFile()) return full;
  if (!extname(full)) {
    const index = join(full, "index.html");
    if (await exists(index)) return index;
  }
  return null;
}

const server = createServer(async (req, res) => {
  const method = req.method || "GET";
  if (method !== "GET" && method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }

  let file = await resolveFile(req.url || "/");
  let status = 200;
  if (!file) {
    file = join(root, "404.html");
    status = 404;
    if (!(await exists(file))) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(method === "HEAD" ? undefined : "Página não encontrada.");
      return;
    }
  }

  const body = await readFile(file);
  const ext = extname(file);
  const headers = {
    "Content-Type": types[ext] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=86400",
  };

  const acceptsGzip = String(req.headers["accept-encoding"] || "").includes("gzip");
  if (acceptsGzip && compressible.has(ext) && body.length > 1024) {
    const zipped = await gzipAsync(body);
    headers["Content-Encoding"] = "gzip";
    headers["Content-Length"] = String(zipped.length);
    headers.Vary = "Accept-Encoding";
    res.writeHead(status, headers);
    res.end(method === "HEAD" ? undefined : zipped);
    return;
  }

  headers["Content-Length"] = String(body.length);
  res.writeHead(status, headers);
  res.end(method === "HEAD" ? undefined : body);
});

server.listen(port, host, () => {
  console.log(`siteolsenrodrigo em http://${host}:${port}`);
});
