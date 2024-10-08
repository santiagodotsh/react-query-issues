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
    queryKey: ['issues', issue.data?.number, 'comments'],
    queryFn: () => getComments(issue.data!.number),
    staleTime: 1000 * 60,
    enabled: issue.data !== undefined
  })

  return {
    issue,
    comments
  }
}
