import { translations, type Locale } from "./translations";

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return "ko";
}

export function t(lang: Locale, key: string): string {
  const value = translations[lang]?.[key] ?? translations["ko"]?.[key] ?? key;
  return typeof value === "string" ? value : key;
}

export function localePath(path: string, lang: Locale): string {
  if (lang === "ko") return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/en${cleanPath}`;
}

export function getAlternateLangUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === "en") {
    // Remove /en prefix
    return url.pathname.replace(/^\/en/, "") || "/";
  }
  // Add /en prefix
  return `/en${url.pathname}`;
}

export function stripLangPrefix(pathname: string): string {
  return pathname.replace(/^\/en/, "") || "/";
}
