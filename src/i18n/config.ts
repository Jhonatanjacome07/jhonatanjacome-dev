import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es', // Idioma por defecto
    lng: 'es', // Idioma inicial
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    detection: {
      order: ['localStorage', 'navigator'], // Prioriza localStorage sobre navegador
      caches: ['localStorage'], // Guarda preferencia en localStorage
    },
  });

export default i18n;
