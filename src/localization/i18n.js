// Localizations components
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Languages
import en from "./languages/en";
import hr from "./languages/hr";

const resources = {
  en: {
    translation: en
  },
  hr: {
    translation: hr
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
