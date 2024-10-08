import { IssueItem } from './issue-item'
import { Issue } from '../interfaces/issue'

interface Props {
  issues: Issue[]
}

export function IssueList({ issues }: Props) {
  return (
    <>
      <div className='flex gap-4'>
        <button className='btn active'>All</button>
        <button className='btn'>Open</button>
        <button className='btn'>Closed</button>
      </div>

      <div className='mt-4'>
        {issues.map(issue => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  )
}
