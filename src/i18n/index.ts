import { site } from "../data/profile";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Copy } from "./types";
import { zh } from "./zh";

export type { Copy };
export type Lang = "pt" | "en" | "es" | "zh";
export type Foreign = Exclude<Lang, "pt">;
export type WaTopic = "mentoria" | "consultoria" | "decisao";

export const LANGS = ["pt", "en", "es", "zh"] as const;
export const FOREIGN: Foreign[] = ["en", "es", "zh"];
export const PAGES = ["trajetoria", "formacao", "mentoria", "consultoria", "contato"] as const;
export const STORAGE_KEY = "eaiolsen-lang";

export const htmlLang: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-Hans",
};

export const ogLocale: Record<Lang, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  zh: "zh_CN",
};

export const langCode: Record<Lang, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  zh: "中文",
};

export const catalogs: Record<Lang, Copy> = { pt, en, es, zh };

function assertShape(expected: unknown, actual: unknown, path: string) {
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual) || actual.length !== expected.length) {
      const got = Array.isArray(actual) ? String(actual.length) : typeof actual;
      throw new Error(`${path}: expected ${expected.length} items, got ${got}`);
    }
    expected.forEach((item, index) => assertShape(item, actual[index], `${path}.${index}`));
    return;
  }
  if (expected && typeof expected === "object") {
    const exp = expected as Record<string, unknown>;
    const act = (actual && typeof actual === "object" ? actual : {}) as Record<string, unknown>;
    for (const key of Object.keys(exp)) {
      if (!(key in act)) throw new Error(`${path}.${key} missing`);
      assertShape(exp[key], act[key], `${path}.${key}`);
    }
    for (const key of Object.keys(act)) {
      if (!(key in exp)) throw new Error(`${path}.${key} extra`);
    }
    return;
  }
  if (typeof actual !== "string") throw new Error(`${path}: expected string`);
}

for (const lang of FOREIGN) assertShape(pt, catalogs[lang], lang);

export function isLang(value: string | undefined): value is Lang {
  return value === "pt" || value === "en" || value === "es" || value === "zh";
}

export function copy(lang: string | undefined): Copy {
  return isLang(lang) ? catalogs[lang] : pt;
}

export function localePath(lang: Lang, path: string) {
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const raw = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const bare = raw.startsWith("/") ? raw : `/${raw}`;
  const withSlash = bare.endsWith("/") ? bare : `${bare}/`;
  const prefixed = lang === "pt" ? withSlash : withSlash === "/" ? `/${lang}/` : `/${lang}${withSlash}`;
  return `${prefixed}${hash}`;
}

export function langFromPath(pathname: string): Lang {
  const match = pathname.match(/^\/(en|es|zh)(?=\/|$)/);
  return match && isLang(match[1]) ? match[1] : "pt";
}

export function lookup(source: unknown, path: string): string | undefined {
  let node: unknown = source;
  for (const part of path.split(".")) {
    if (Array.isArray(node)) node = node[Number(part)];
    else if (node && typeof node === "object" && part in node) node = (node as Record<string, unknown>)[part];
    else return undefined;
  }
  return typeof node === "string" ? node : undefined;
}

export function waHref(lang: Lang, topic: WaTopic) {
  const dict = catalogs[lang];
  const text = dict.wa.template.replace("{topic}", dict.wa[topic]);
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function metaKey(page: string) {
  return page === "404" ? "missing" : page;
}
