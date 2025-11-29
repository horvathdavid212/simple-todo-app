import { FormEvent, useState } from 'react'
import { Button } from '../../../shared/ui/Button'
import { TextField } from '../../../shared/ui/TextField'
import { useTodosContext } from './useTodosContext'
import { useI18n } from '../../../shared/i18n/i18n'
import './todos.css'

export function TodoInput() {
  const { add } = useTodosContext()
  const { t } = useI18n()
  const [text, setText] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const value = text.trim()
    if (!value) return
    add(value)
    setText('')
  }

  return (
    <form className="todos__input" onSubmit={onSubmit}>
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={t('addTodoPlaceholder')}
        aria-label={t('addTodo')}
      />
      <Button type="submit" variant="primary">
        {t('addTodo')}
      </Button>
    </form>
  )
}
