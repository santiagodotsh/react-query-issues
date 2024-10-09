import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import { type Issue, State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export async function getIssues({ state, selectedLabels }: Props): Promise<Issue[]> {
  const params = new URLSearchParams()

  if (state !== State.All) {
    params.append('state', state)
  }

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','))
  }

  const { data } = await github.get<Issue[]>('/issues', { params })

  await sleep(1000)

  return data
}
