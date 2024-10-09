import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../actions/get-issues'
import { State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export function useIssues({ state, selectedLabels }: Props) {
  const issues = useQuery({
    queryKey: ['issues', { state, selectedLabels }],
    queryFn: () => getIssues({ state, selectedLabels }),
    staleTime: 1000 * 60
  })

  return {
    issues
  }
}
