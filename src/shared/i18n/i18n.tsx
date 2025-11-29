import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en-US.json'
import hu from './locales/hu-HU.json'

const RESOURCES = {
  'en-US': en,
  'hu-HU': hu,
} as const

type Locale = keyof typeof RESOURCES
type Messages = (typeof RESOURCES)[Locale]

type I18nContextValue = {
  locale: Locale
  t: (key: keyof Messages) => string
  setLocale: (locale: Locale) => void
  availableLocales: { code: Locale; label: string }[]
}

const STORAGE_KEY = 'locale:v1'

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (stored === 'hu-HU' || stored === 'en-US') return stored
    return 'en-US'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo<I18nContextValue>(() => {
    const messages = RESOURCES[locale]
    return {
      locale,
      t: (key) => messages[key],
      setLocale,
      availableLocales: [
        { code: 'en-US', label: 'English' },
        { code: 'hu-HU', label: 'Magyar' },
      ],
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
