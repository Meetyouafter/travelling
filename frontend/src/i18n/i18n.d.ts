import 'react-i18next';
import ru from './locales/ru';
import en from './locales/en';
import defaultNS from './config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      en: typeof en;
      ru: typeof ru;
    };
  }
}
