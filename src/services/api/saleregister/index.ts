import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { DepositRegistrationType } from "@/utils/types/type";
import { QueryType } from "@/services/api/saleregister/type";

const SALEREGISTER_API = {
  getList: (params: QueryType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.LIST, params),
  create: (params: DepositRegistrationType) =>
    axiosClient.post(API_ENDPOINTS.SALEREGISTER.REGISTRATION, params),
}

export default SALEREGISTER_API
