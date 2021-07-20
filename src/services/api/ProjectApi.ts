import { api } from '../api'

class ProjectApi {
  public async list() {
    return api.get<App.Project>('/projects').then((res) => res.data)
  }
}

export default new ProjectApi()
