import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import en from "./locales/en.json";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
            
        },
        fallbackLng: "en",         
        load: "languageOnly",       
        debug: false,
        interpolation: { escapeValue: false },
        detection: {
            
            order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
            caches: ["localStorage", "cookie"] // persiste la elección
        }
    });


i18n.on("languageChanged", (lng) => {
    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("lang", lng);
    }
});

export default i18n;
