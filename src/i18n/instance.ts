import { createI18n } from 'vue-i18n'
import { EAppLocale } from './types'
import { en } from './locales'

export const i18n = createI18n({
  locale: EAppLocale.EN,
  fallbackLocale: EAppLocale.EN,
  messages: {
    [EAppLocale.EN]: en,
  },
})
