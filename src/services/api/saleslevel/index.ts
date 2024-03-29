import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import {saleslevelRegistrationProps } from './type'

const SALESLEVEL_API = {
  list: () => axiosClient.get(API_ENDPOINTS.SALESLEVEL.LIST),
  updateSalesLevel: (params: saleslevelRegistrationProps) =>
    axiosClient.post(API_ENDPOINTS.SALESLEVEL.REGISTRATION, params),
}

export default SALESLEVEL_API
 