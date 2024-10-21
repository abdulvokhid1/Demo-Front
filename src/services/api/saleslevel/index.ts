import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import {saleslevelProps } from './type'

const SALESLEVEL_API = {
  list: () => axiosClient.get(API_ENDPOINTS.SALESLEVEL.LIST),
  updateSalesLevel: (params: saleslevelProps) =>
    axiosClient.post(API_ENDPOINTS.SALESLEVEL.REGISTRATION, params),
}

export default SALESLEVEL_API
 