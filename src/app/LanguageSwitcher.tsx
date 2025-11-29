import { useI18n } from '../shared/i18n/i18n'
import './app.css'

export function LanguageSwitcher() {
  const { locale, setLocale, availableLocales, t } = useI18n()

  return (
    <label className="app__language">
      <span className="app__language-label">{t('language')}:</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        aria-label={t('language')}
      >
        {availableLocales.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  )
}
