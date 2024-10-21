import { CenterTypeProps } from './type'
import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { QueryType } from "@/services/api/center/type";

const CENTER_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.CENTERS.GET_LIST),
}

export default CENTER_API
