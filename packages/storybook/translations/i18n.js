const translations = { en: require("./en.json"), ar: require("./ar.json") };

let currentLocale = "en";

export function setLocale(locale) {
  currentLocale = locale;
}

export function t(key) {
  return translations[currentLocale][key] || key;
}
