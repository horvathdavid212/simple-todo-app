import { useState } from 'react'
import { Todo } from '../model/types'
import { Button } from '../../../shared/ui/Button'
import { useTodosContext } from './useTodosContext'
import { useI18n } from '../../../shared/i18n/i18n'
import './todos.css'

interface TodoItemProps {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggle, edit, remove } = useTodosContext()
  const { t } = useI18n()
  const [isEditing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const commit = () => {
    const value = draft.trim()
    if (value) {
      edit(todo.id, value)
    } else {
      setDraft(todo.text)
    }
    setEditing(false)
  }

  return (
    <li className="todos__item">
      <label className="todos__item-main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggle(todo.id)}
          aria-label={t('toggleCompleted')}
        />
        {isEditing ? (
          <input
            className="todos__edit"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={commit}
            onKeyDown={(event) => event.key === 'Enter' && commit()}
            autoFocus
          />
        ) : (
          <span className={todo.completed ? 'todos__text todos__text--done' : 'todos__text'}>
            {todo.text}
          </span>
        )}
      </label>
      <div className="todos__actions">
        <Button size="sm" variant="ghost" onClick={() => setEditing((value) => !value)}>
          {isEditing ? t('cancel') : t('edit')}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => remove(todo.id)}>
          {t('remove')}
        </Button>
      </div>
    </li>
  )
}
