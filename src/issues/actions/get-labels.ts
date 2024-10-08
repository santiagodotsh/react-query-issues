import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import type { Label } from '../interfaces/label'

export async function getLabels(): Promise<Label[]> {
  const { data } = await github.get<Label[]>('/labels')

  await sleep(1000)

  return data
}
