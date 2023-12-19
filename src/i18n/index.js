import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationFa from './locales/fa/translation.json'

i18n.use(initReactI18next).init({
    lng: 'fa',
    fallbackLng: ['fa'],
    interpolation: {
        escapeValue: false,
    },
    resources: {
        fa: {
            translations: translationFa,
        },
    },
    ns: ['translations'],
    defaultNS: 'translations',
})

export default i18n
