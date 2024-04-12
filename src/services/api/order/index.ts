import { OrderProps, QueryType } from './type'
import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'


const Order_API = {
  // getList: (params: FilterTypeProps) =>
    // axiosClient.post(API_ENDPOINTS.USERS.GET_LIST, params),
  getList: (params: QueryType) =>
    axiosClient.post(API_ENDPOINTS.Order.GET_LIST, params),
}

export default Order_API
