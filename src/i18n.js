import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    supportedLngs: ["fr", "en"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

const syncHtmlLang = (lng) => {
  document.documentElement.lang = i18n.resolvedLanguage || lng;
  document.title = i18n.t("meta.title");
};
syncHtmlLang(i18n.language);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
