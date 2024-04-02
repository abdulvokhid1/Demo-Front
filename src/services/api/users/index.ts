import { signUpUsernameTypeProps } from '../auth/type'
import axiosClient from '../axiosClient'
import {
  AssignTeacherCourse,
  ChangePasswordTypeProps,
  FilterTypeProps,
} from '../collection'
import { API_ENDPOINTS } from '../endPoint'
import { AssignRoleTypeProps, CreateUserTypeProps, QueryType } from './type'

const USER_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  deleteUser: (userId: string) =>
    axiosClient.delete(`${API_ENDPOINTS.USERS.DELETE}/${userId}`),
  assignRole: (params: AssignRoleTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.ASSIGN_ROLE, params),
  createUser: (params: CreateUserTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.CREATE, params),
  signUpByUsername: (params: signUpUsernameTypeProps) =>
    axiosClient.post(API_ENDPOINTS.AUTH.SIGNUP_BY_USERNAME, params),
  changePasswordUser: (params: ChangePasswordTypeProps) => {
    const { id, ...rest } = params
    return axiosClient.post(
      `${API_ENDPOINTS.USERS.CHANGE_PASSWORD}/${id}`,
      rest,
    )
  },
  assignTeacherCourse: (params: AssignTeacherCourse) =>
    axiosClient.post(API_ENDPOINTS.USERS.ASSIGN_TEACHER_COURSE, params),
}

export default USER_API
