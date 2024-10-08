import { useQuery } from '@tanstack/react-query'
import { getIssue } from '../actions/get-issue'

export function useIssue(issueNumber: number) {
  const issue = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60
  })

  return {
    issue
  }
}
