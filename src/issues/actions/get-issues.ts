import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import type { Issue } from '../interfaces/issue'

export async function getIssues(): Promise<Issue[]> {
  const { data } = await github.get<Issue[]>('/issues')

  await sleep(1000)

  return data
}
