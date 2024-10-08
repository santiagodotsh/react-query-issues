import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions/get-labels'

export function useLabels() {
  const labels = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60
  })

  return {
    labels
  }
}
