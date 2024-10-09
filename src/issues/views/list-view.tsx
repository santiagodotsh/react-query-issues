import { useState } from 'react'
import { useIssues } from '../hooks/useIssues'
import { IssueList } from '../components/issue-list'
import { LabelPicker } from '../components/label-picker'
import { Spinner } from '../../shared/components/spinner'
import { State } from '../interfaces/issue'

export function ListView() {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  
  const {
    issues,
    page,
    prevPage,
    nextPage
  } = useIssues({ state, selectedLabels })

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
          : <>
              <IssueList
                issues={issues.data ?? []}
                onStateChange={setState}
                state={state}
              />

              <div className='flex justify-between items-center'>
                <button
                  onClick={prevPage}
                  className='p-2 bg-blue-500 hover:bg-blue-700 transition-all'
                >
                  Previous
                </button>

                <span>{page}</span>

                <button
                  onClick={nextPage}
                  className='p-2 bg-blue-500 hover:bg-blue-700 transition-all'
                >
                  Next
                </button>
              </div>
            </>
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
