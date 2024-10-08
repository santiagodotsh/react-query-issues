import { useQuery } from '@tanstack/react-query'
import { getIssue } from '../actions/get-issue'
import { getComments } from '../actions/get-comments'

export function useIssue(issueNumber: number) {
  const issue = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60
  })

  const comments = useQuery({
    queryKey: ['issues', issueNumber, 'comments'],
    queryFn: () => getComments(issueNumber),
    staleTime: 1000 * 60
  })

  return {
    issue,
    comments
  }
}
