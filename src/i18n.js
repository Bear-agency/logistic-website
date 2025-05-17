import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';

// Define translations for each language
const resources = {
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ua', // Default language
    fallbackLng: 'an', // Fallback language in case translation is missing
    interpolation: {
      escapeValue: false // React already escapes values, so no need for this
    }
  });

export default i18n;
