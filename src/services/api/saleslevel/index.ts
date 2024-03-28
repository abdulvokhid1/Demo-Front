import axiosClient from '../axiosClient'
import { ChangePasswordTypes, UpdateUserProfileForm } from '../collection'
import { API_ENDPOINTS } from '../endPoint'
import { authLoginTypeProps, saleslevelRegistrationProps, signUpUsernameTypeProps } from './type'

const SALESLEVEL_API = {
  list: () => axiosClient.get(API_ENDPOINTS.SALESLEVEL.LIST),
  updateSalesLevel: (params: saleslevelRegistrationProps) =>
    axiosClient.post(API_ENDPOINTS.SALESLEVEL.REGISTRATION, params),
}

export default SALESLEVEL_API
 