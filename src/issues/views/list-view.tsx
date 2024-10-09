import { useState } from 'react'
import { useIssues } from '../hooks/useIssues'
import { IssueList } from '../components/issue-list'
import { LabelPicker } from '../components/label-picker'
import { Spinner } from '../../shared/components/spinner'
import { State } from '../interfaces/issue'

export function ListView() {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  
  const { issues } = useIssues({ state, selectedLabels })

  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
      <div className='col-span-1 sm:col-span-2'>
        {issues.isLoading
          ? <Spinner />
          : <div className='flex flex-col justify-center'>
              <IssueList
                issues={issues.data?.pages.flat() ?? []}
                onStateChange={setState}
                state={state}
              />

              <button
                onClick={() => issues.fetchNextPage()}
                className='p-2 bg-blue-500 hover:bg-blue-700 transition-all disabled:bg-gray-500'
                disabled={issues.isFetchingNextPage}
              >
                {issues.isFetchingNextPage ? 'Loading...' : 'View more...'}
              </button>
            </div>
        }
      </div>

      <div className='col-span-1 px-2'>
        <LabelPicker
          onLabelSelected={onLabelSelected}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  )
}
