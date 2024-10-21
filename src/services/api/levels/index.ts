import { LevelTypeProps } from './type'
import axiosClient from '../axiosClient'

import { API_ENDPOINTS } from '../endPoint'
import { Level } from "@/utils/types/type";
type levelListProps = {
  levels: Level[]
}
const LEVEL_API = {
  update: (params: levelListProps) =>
    axiosClient.post(API_ENDPOINTS.LEVELS.UPDATE, params),
  getList: () =>
    axiosClient.get(API_ENDPOINTS.LEVELS.GET_LIST),
}

export default LEVEL_API
