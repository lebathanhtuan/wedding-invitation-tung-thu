import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { vi, en, ja } from './locales'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      ja: { translation: ja },
    },
    lng: localStorage.getItem('lang') || 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  })
