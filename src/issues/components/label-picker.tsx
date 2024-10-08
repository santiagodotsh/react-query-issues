import { useLabels } from '../hooks/useLabels'
import { Spinner } from '../../shared/components/spinner'

export function LabelPicker() {
  const { labels } = useLabels()

  if (labels.isLoading) {
    return (
      <span className='flex justify-center items-center h-52'>
        <Spinner />
      </span>
    )
  }

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {labels.data?.map(label => (
        <span
          key={label.id}
          className='animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white'
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  )
}
