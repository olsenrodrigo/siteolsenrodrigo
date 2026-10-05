import {
  catalogs,
  htmlLang,
  isLang,
  langCode,
  langFromPath,
  localePath,
  lookup,
  metaKey,
  ogLocale,
  STORAGE_KEY,
  waHref,
  type Lang,
  type WaTopic,
} from "../i18n";

function isTopic(value: string | undefined): value is WaTopic {
  return value === "mentoria" || value === "consultoria" || value === "decisao";
}

function apply(lang: Lang) {
  const dict = catalogs[lang];
  document.documentElement.lang = htmlLang[lang];
  document.body.dataset.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = lookup(dict, key);
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (!key) return;
    const value = lookup(dict, key);
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (!key) return;
    const value = lookup(dict, key);
    if (value !== undefined) el.setAttribute("alt", value);
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-content]").forEach((el) => {
    const key = el.dataset.i18nContent;
    if (!key) return;
    const value = lookup(dict, key);
    if (value !== undefined) el.setAttribute("content", value);
  });

  const title = lookup(dict, `meta.${metaKey(document.body.dataset.page || "home")}.title`);
  if (title) document.title = title;

  document.querySelectorAll<HTMLAnchorElement>("[data-locale-href]").forEach((el) => {
    const href = el.dataset.localeHref;
    if (href) el.setAttribute("href", localePath(lang, href));
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-wa]").forEach((el) => {
    if (isTopic(el.dataset.wa)) el.setAttribute("href", waHref(lang, el.dataset.wa));
  });

  if (document.body.dataset.noRoute !== "1") {
    const url = `${location.origin}${localePath(lang, document.body.dataset.path || "/")}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
  }

  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", ogLocale[lang]);

  document.querySelectorAll<HTMLElement>("[data-show-flag]").forEach((el) => {
    el.hidden = el.dataset.showFlag !== lang;
  });
  document.querySelectorAll<HTMLElement>("[data-lang-code]").forEach((el) => {
    el.textContent = langCode[lang];
  });
  document.querySelectorAll<HTMLElement>("[data-lang-set]").forEach((el) => {
    el.setAttribute("aria-selected", el.dataset.langSet === lang ? "true" : "false");
  });
}

function menu() {
  return document.querySelector<HTMLElement>("[data-lang-menu]");
}

function toggleButton() {
  return document.querySelector<HTMLButtonElement>("[data-lang-toggle]");
}

function closeMenu() {
  const list = menu();
  const button = toggleButton();
  if (list) list.hidden = true;
  button?.setAttribute("aria-expanded", "false");
}

function openMenu() {
  const list = menu();
  const button = toggleButton();
  if (list) list.hidden = false;
  button?.setAttribute("aria-expanded", "true");
}

function choose(lang: Lang) {
  apply(lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* private mode */
  }
  if (document.body.dataset.noRoute !== "1") {
    const next = `${localePath(lang, document.body.dataset.path || "/")}${location.hash}`;
    if (`${location.pathname}${location.hash}` !== next) history.pushState({ lang }, "", next);
  }
  closeMenu();
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const choice = target?.closest<HTMLElement>("[data-lang-set]");
  if (choice && isLang(choice.dataset.langSet)) {
    event.preventDefault();
    choose(choice.dataset.langSet);
    return;
  }
  if (target?.closest("[data-lang-toggle]")) {
    event.preventDefault();
    const list = menu();
    if (list?.hidden) openMenu();
    else closeMenu();
    return;
  }
  if (!target?.closest("[data-lang-root]")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("popstate", () => {
  if (document.body.dataset.noRoute === "1") return;
  const lang = langFromPath(location.pathname);
  apply(lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* private mode */
  }
});

if (document.body.dataset.noRoute === "1") {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored) && stored !== "pt") apply(stored);
  } catch {
    /* private mode */
  }
}
