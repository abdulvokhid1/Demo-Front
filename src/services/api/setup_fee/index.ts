import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { setup_feeProps } from './type'

const SETUP_FEE_API = {
  list: () => axiosClient.get(API_ENDPOINTS.SETUP_FEE.LIST),
  updateSetup_fee: (params: setup_feeProps) =>
    axiosClient.post(API_ENDPOINTS.SETUP_FEE.REGISTRATION, params),
}

export default SETUP_FEE_API
 