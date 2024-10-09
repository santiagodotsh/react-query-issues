import { useInfiniteQuery } from '@tanstack/react-query'
import { getIssues } from '../actions/get-issues'
import { State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export function useIssues({ state, selectedLabels }: Props) {
  const issues = useInfiniteQuery({
    queryKey: ['issues', { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey }) => {
      const [_, args] = queryKey
      const { state, selectedLabels } = args as Props

      return getIssues({
        state,
        selectedLabels,
        page: pageParam
      })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined,
    staleTime: 1000 * 60
  })

  return {
    issues
  }
}
