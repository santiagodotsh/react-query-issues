import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import { type Issue, State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
  page: number
}

export async function getIssues({ state, selectedLabels, page }: Props): Promise<Issue[]> {
  const params = new URLSearchParams()

  if (state !== State.All) {
    params.append('state', state)
  }

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','))
  }

  params.append('page', `${page}`)
  params.append('per_page', '5')

  const { data } = await github.get<Issue[]>('/issues', { params })

  await sleep(1000)

  return data
}
