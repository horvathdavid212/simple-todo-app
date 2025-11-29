import { useEffect, useMemo, useReducer } from 'react'
import { createId } from '../../../shared/lib/createId'
import { persistTodos, loadTodos } from './storage'
import { Todo, TodoFilter, TodoId } from './types'

type State = {
  todos: Todo[]
  filter: TodoFilter
}

type Action =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: TodoId }
  | { type: 'edit'; id: TodoId; text: string }
  | { type: 'remove'; id: TodoId }
  | { type: 'setFilter'; filter: TodoFilter }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const text = action.text.trim()
      if (!text) return state
      const next: Todo = {
        id: createId(),
        text,
        completed: false,
        createdAt: Date.now(),
      }
      return { ...state, todos: [next, ...state.todos] }
    }
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      }
    case 'edit': {
      const text = action.text.trim()
      if (!text) return state
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, text } : todo)),
      }
    }
    case 'remove':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) }
    case 'setFilter':
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

export function useTodos() {
  const initState = (): State => ({
  todos: loadTodos(),
  filter: 'all',
})
const [state, dispatch] = useReducer(reducer, undefined, initState)

  useEffect(() => {
    persistTodos(state.todos)
  }, [state.todos])

  const visibleTodos = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter((todo) => !todo.completed)
      case 'completed':
        return state.todos.filter((todo) => todo.completed)
      default:
        return state.todos
    }
  }, [state.todos, state.filter])

  return {
    todos: state.todos,
    visibleTodos,
    filter: state.filter,
    add: (text: string) => dispatch({ type: 'add', text }),
    toggle: (id: TodoId) => dispatch({ type: 'toggle', id }),
    edit: (id: TodoId, text: string) => dispatch({ type: 'edit', id, text }),
    remove: (id: TodoId) => dispatch({ type: 'remove', id }),
    setFilter: (filter: TodoFilter) => dispatch({ type: 'setFilter', filter }),
  }
}
