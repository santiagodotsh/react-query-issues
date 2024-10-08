import { useQuery } from '@tanstack/react-query'
import { sleep } from '../../helpers/sleep'

async function getLabels(): Promise<any[]> {
  try {
    const res = await fetch('https://api.github.com/repos/facebook/react/labels')
    const data = await res.json()

    await sleep(1500)

    return data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}

export function LabelPicker() {
  const labels = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
  })

  if (labels.isLoading) {
    return (
      <span className='flex justify-center items-center h-52'>
        Loading...
      </span>
    )
  }

  return (
    <>
      <span
        className='px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer'
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </>
  )
}
