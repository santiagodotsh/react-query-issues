import { useState } from 'react'
import { useIssues } from '../hooks/useIssues'
import { IssueList } from '../components/issue-list'
import { LabelPicker } from '../components/label-picker'
import { Spinner } from '../../shared/components/spinner'
import { State } from '../interfaces/issue'

export function ListView() {
  const [state, setState] = useState<State>(State.All)
  const { issues } = useIssues()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
      <div className='col-span-1 sm:col-span-2'>
        {issues.isLoading
          ? <Spinner />
          : <IssueList
              issues={issues.data ?? []}
              onStateChange={setState}
              state={state}
            />
        }
      </div>

      <div className='col-span-1 px-2'>
        <LabelPicker />
      </div>
    </div>
  )
}
