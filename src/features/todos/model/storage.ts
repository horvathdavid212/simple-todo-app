import { Todo } from './types'

const STORAGE_KEY = 'todos:v1'

const hasStorage = () => typeof window !== 'undefined' && 'localStorage' in window

export function loadTodos(): Todo[] {
  if (!hasStorage()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Todo[]) : []
  } catch {
    return []
  }
}

export function persistTodos(todos: Todo[]): void {
  if (!hasStorage()) return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    // ignore persistence errors
  }
}
