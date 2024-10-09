import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../actions/get-issues'
import { State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export function useIssues({ state, selectedLabels }: Props) {
  const [page, setPage] = useState<number>(1)

  const issues = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues({
      state,
      selectedLabels,
      page
    }),
    staleTime: 1000 * 60
  })

  useEffect(() => {
    setPage(1)
  }, [state])

  useEffect(() => {
    setPage(1)
  }, [selectedLabels])

  const prevPage = () => {
    if (page === 1) {
      return
    }

    setPage(prev => prev -1)
  }

  const nextPage = () => {
    if (issues.data?.length === 0) {
      return
    }

    setPage(page + 1)
  }

  return {
    issues,
    page,
    prevPage,
    nextPage
  }
}
