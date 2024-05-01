import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { DepositRegistrationType } from "@/utils/types/type";
import { ProducType } from './type';

const MAINPRODUCT_API = {
  getList: (params: ProducType) =>
      axiosClient.post(API_ENDPOINTS.PRODUCTMANAGE.SET_MAIN_PRODUCT, params),
  create: (params: ProducType) =>
    axiosClient.post(API_ENDPOINTS.PRODUCTMANAGE.SET_MAIN_PRODUCT_REG, params),
 
}

export default MAINPRODUCT_API
