import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import type { Issue } from '../interfaces/issue'

export async function getComments(issueNumber: number): Promise<Issue[]> {
  const { data } = await github.get<Issue[]>(`/issues/${issueNumber}/comments`)

  await sleep(1000)

  return data
}
