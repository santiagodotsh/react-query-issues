import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions/get-labels'

export function useLabels() {
  const labels = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        "id": 791921801,
        "node_id": "MDU6TGFiZWw3OTE5MjE4MDE=",
        "url": "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        "name": "❤️",
        "color": "ffffff",
        "default": false
      }
    ]
  })

  return {
    labels
  }
}
