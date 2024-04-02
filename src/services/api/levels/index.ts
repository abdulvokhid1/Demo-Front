import { LevelTypeProps } from './type'
import axiosClient from '../axiosClient'

import { API_ENDPOINTS } from '../endPoint'

const LEVEL_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: () =>
    axiosClient.get(API_ENDPOINTS.LEVELS.GET_LIST),
}

export default LEVEL_API
