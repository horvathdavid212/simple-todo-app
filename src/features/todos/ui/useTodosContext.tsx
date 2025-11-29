import { createContext, PropsWithChildren, useContext } from 'react'
import { useTodos } from '../model/useTodos'

const TodosContext = createContext<ReturnType<typeof useTodos> | null>(null)

export function TodosProvider({ children }: PropsWithChildren) {
  const value = useTodos()
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export function useTodosContext() {
  const ctx = useContext(TodosContext)
  if (!ctx) {
    throw new Error('useTodosContext must be used within TodosProvider')
  }
  return ctx
}
