import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { DepositRegistrationType } from "@/utils/types/type";
import {
  CalculationCompletionType,
  CalculationType,
  ConfirmType,
  QueryGetListByUserIdType,
  QueryType
} from "@/services/api/saleregister/type";

const SALEREGISTER_API = {
  getList: (params: QueryType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.LIST, params),
  getListByUserId: (params: QueryGetListByUserIdType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.LIST_BY_USERID, params),
  create: (params: DepositRegistrationType) =>
    axiosClient.post(API_ENDPOINTS.SALEREGISTER.REGISTRATION, params),
  confirm: (params: ConfirmType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.CONFIRM, params),
  getCalculationList: (params: CalculationType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.CALCULATION_LIST, params),
  getCalculationDetailList: (params: CalculationType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.CALCULATION_DETAIL_LIST, params),
  confirmCalculation: (params: CalculationCompletionType) =>
      axiosClient.post(API_ENDPOINTS.SALEREGISTER.CONFIRM_CALCULATION, params),
}

export default SALEREGISTER_API
