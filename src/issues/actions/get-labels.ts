import { github } from '../../api/github'
import { sleep } from '../../helpers/sleep'
import { Label } from '../interfaces/label'

export async function getLabels(): Promise<Label[]> {
  try {
    const { data } = await github.get<Label[]>('/labels')

    await sleep(1500)

    return data
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
