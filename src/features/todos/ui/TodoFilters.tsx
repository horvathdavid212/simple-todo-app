import { TodoFilter } from '../model/types'
import { Button } from '../../../shared/ui/Button'
import { useTodosContext } from './useTodosContext'
import { useI18n } from '../../../shared/i18n/i18n'
import './todos.css'

const FILTERS: TodoFilter[] = ['all', 'active', 'completed']

export function TodoFilters() {
  const { filter, setFilter } = useTodosContext()
  const { t } = useI18n()

  return (
    <div className="todos__filters">
      {FILTERS.map((item) => (
        <Button
          key={item}
          variant={filter === item ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setFilter(item)}
        >
          {item === 'all' ? t('filterAll') : item === 'active' ? t('filterActive') : t('filterCompleted')}
        </Button>
      ))}
    </div>
  )
}
