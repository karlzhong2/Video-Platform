import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import zh from '../locales/zh.json';

i18n
  // 引入 react-i18next 模块。
  .use(initReactI18next)
  // 初始化 i18next。
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    lng: 'en', // 如果需要默认语言可以调整。
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;

