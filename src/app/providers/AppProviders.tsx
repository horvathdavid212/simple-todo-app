import { PropsWithChildren } from 'react'
import { I18nProvider } from '../../shared/i18n/i18n'

// Add global providers (Router, QueryClientProvider, ThemeProvider) here as the app grows.
export function AppProviders({ children }: PropsWithChildren) {
  return <I18nProvider>{children}</I18nProvider>
}
