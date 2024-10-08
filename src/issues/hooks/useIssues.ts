import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../actions/get-issues'

export function useIssues() {
  const issues = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    staleTime: 1000 * 60
  })

  return {
    issues
  }
}
