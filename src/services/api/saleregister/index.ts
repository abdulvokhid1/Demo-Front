import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { saleregisterProps } from './type'

const SALEREGISTER_API = {
  list: () => axiosClient.get(API_ENDPOINTS.SALEREGISTER.LIST),
  updateSaleRegister: (params: saleregisterProps) =>
    axiosClient.post(API_ENDPOINTS.SALEREGISTER.REGISTRATION, params),
}

export default SALEREGISTER_API
 