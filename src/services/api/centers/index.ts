import { CenterTypeProps } from './type'
import axiosClient from '../axiosClient'
import {
  AssignTeacherCourse,
  ChangePasswordTypeProps,
  FilterTypeProps,
} from '../collection'
import { API_ENDPOINTS } from '../endPoint'

const CENTER_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: () =>
    axiosClient.get(API_ENDPOINTS.CENTERS.GET_LIST),
}

export default CENTER_API
