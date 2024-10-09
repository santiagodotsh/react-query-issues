import { useLabels } from '../hooks/useLabels'
import { Spinner } from '../../shared/components/spinner'

interface Props {
  selectedLabels: string[]
  onLabelSelected: (label: string) => void
}

export function LabelPicker({ selectedLabels, onLabelSelected }: Props) {
  const { labels } = useLabels()

  if (labels.isLoading) {
    return (
      <div className='flex justify-center items-center h-52'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {labels.data?.map(label => (
        <button
          key={label.id}
          onClick={() => onLabelSelected(label.name)}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white ${selectedLabels.includes(label.name) && 'selected-label'}`}
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </button>
      ))}
    </div>
  )
}
