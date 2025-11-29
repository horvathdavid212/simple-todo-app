import { TodoFilters } from '../features/todos/ui/TodoFilters'
import { TodoInput } from '../features/todos/ui/TodoInput'
import { TodoList } from '../features/todos/ui/TodoList'
import { TodosProvider } from '../features/todos/ui/useTodosContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useI18n } from '../shared/i18n/i18n'
import './app.css'

export function App() {
  const { t } = useI18n()

  return (
    <TodosProvider>
      <main className="app">
        <header className="app__header">
          <div>
            <h1 className="app__title">{t('appTitle')}</h1>
            <p className="app__subtitle">{t('appSubtitle')}</p>
          </div>
          <LanguageSwitcher />
        </header>

        <section className="app__panel">
          <TodoInput />
          <TodoFilters />
          <TodoList />
        </section>
      </main>
    </TodosProvider>
  )
}

export default App
