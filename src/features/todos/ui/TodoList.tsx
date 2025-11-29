import { useTodosContext } from './useTodosContext'
import { TodoItem } from './TodoItem'
import { useI18n } from '../../../shared/i18n/i18n'
import './todos.css'

export function TodoList() {
  const { visibleTodos } = useTodosContext()
  const { t } = useI18n()

  if (!visibleTodos.length) {
    return <p className="todos__empty">{t('emptyState')}</p>
  }

  return (
    <ul className="todos__list">
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
