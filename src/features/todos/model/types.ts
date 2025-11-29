export type TodoId = string

export type TodoFilter = 'all' | 'active' | 'completed'

export interface Todo {
  id: TodoId
  text: string
  completed: boolean
  createdAt: number
}
