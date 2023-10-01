const translations = {
  en: require("./en.json"),
  ar: require("./ar.json")
  // ... you can add more languages here.
};

let currentLocale = "en"; // default language

export function setLocale(locale) {
  currentLocale = locale;
}

export function t(key) {
  return translations[currentLocale][key] || key;
}
