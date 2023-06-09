import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru';
import en from './locales/en';

const defaultNS = 'ru';

const resources = {
  ru,
  en,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
  });

export default defaultNS;
