import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FiSkipBack } from 'react-icons/fi'
import { useIssue } from '../hooks/useIssue'
import { Spinner } from '../../shared/components/spinner'
import { IssueComment } from '../components/issue-comment'

export function IssueView() {
  const navigate = useNavigate()
  const params = useParams()

  const issueNumber = Number(params.number ?? 0)

  const { issue, comments } = useIssue(issueNumber)

  if (issue.isLoading) {
    return (
      <div className='flex justify-center items-center h-52'>
        <Spinner />
      </div>
    )
  }

  if (!issue.data) {
    return <Navigate to={'/404'} />
  }

  return (
    <div className='mb-5'>
      <div className='mb-4'>
        <button
          onClick={() => navigate(-1)}
          className='hover:underline text-blue-400 flex items-center'
        >
          <FiSkipBack />
          Go Back
        </button>
      </div>

      <IssueComment issue={issue.data} />

      {comments.isLoading
        ? <Spinner />
        : comments.data?.map(comment => (
          <IssueComment key={comment.id} issue={comment} />
        ))
      }
    </div>
  )
}
