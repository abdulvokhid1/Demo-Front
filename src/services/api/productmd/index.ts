import { ProductManageTypeProps, QueryType } from './type'
import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { ProductType } from "@/utils/types/type";


const ProductAPI = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  create: (params:  ProductType) =>
      axiosClient.post(API_ENDPOINTS.PRODUCT.CREATE, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.PRODUCT.GET_LIST, params),
}

export default ProductAPI
