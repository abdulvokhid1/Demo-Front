import { signUpUsernameTypeProps } from "../auth/type";
import axiosClient from "../axiosClient";
import {
  AssignTeacherCourse,
  ChangePasswordTypeProps,
  FilterTypeProps,
} from "../collection";
import { API_ENDPOINTS } from "../endPoint";
import {
  AssignRoleTypeProps,
  CreateUserTypeProps,
  QueryType,
  SponsorTypeProps,
  updateUserTypeProps,
  UserQueryType,
} from "./type";

const USER_API = {
  // getList: (params: FilterTypeProps) =>
  // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getUserInfo: (params: UserQueryType) =>
    axiosClient.post(API_ENDPOINTS.USERS.USER_INFO, params),
  updateUser: (params: updateUserTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.UPDATE, params),
  softDeleteUser: (id: string) =>
    axiosClient.post(`${API_ENDPOINTS.USERS.SOFT_DELETE}/${id}`, {
      isDeleted: true,
    }),
  // deleteUser: (userId: string) =>
  //   axiosClient.delete(`${API_ENDPOINTS.USERS.DELETE}/${userId}`),
  assignRole: (params: AssignRoleTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.ASSIGN_ROLE, params),
  createUser: (params: CreateUserTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.CREATE, params),
  signUpByUsername: (params: signUpUsernameTypeProps) =>
    axiosClient.post(API_ENDPOINTS.AUTH.SIGNUP_BY_USERNAME, params),
  changePasswordUser: (params: ChangePasswordTypeProps) => {
    const { id, ...rest } = params;
    return axiosClient.post(
      `${API_ENDPOINTS.USERS.CHANGE_PASSWORD}/${id}`,
      rest
    );
  },
  sponsorList: (params: SponsorTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.GET_SPONSORS, params),
  limitedSponsorList: (params: SponsorTypeProps) =>
    axiosClient.post(API_ENDPOINTS.USERS.GET_LIMITED_SPONSORS, params),
};

export default USER_API;
