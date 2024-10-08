import ReactMarkdown from 'react-markdown'
import { Issue } from '../interfaces/issue'

interface Props {
  issue: Issue
}

export function IssueComment({ issue }: Props) {
  return (
    <div className='w-full'>
      <div className='border border-gray-200 mt-2 rounded-md shadow-sm'>
        <div className='flex items-center bg-blue-500 text-white p-2 rounded-t-md'>
          <img
            src={issue.user.avatar_url}
            alt={`${issue.user.login} avatar`}
            className='w-8 h-8 rounded-full'
          />
          
          <span className='mx-2'>{issue.user.login}</span>
        </div>

        <div className='p-4 bg-gray-700 text-white'>
          <ReactMarkdown>
            {issue.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
