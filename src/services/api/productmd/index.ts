import { ProductManageTypeProps, QueryType } from './type'
import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'


const ProductManage_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.PRODUCTMANAGE.GET_LIST, params),
}

export default ProductManage_API
