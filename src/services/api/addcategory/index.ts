import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { CategoryListType, CategoryType } from "@/utils/types/type";


const  CategoryAPI = {
  list: (params: CategoryListType) => axiosClient.post(API_ENDPOINTS.CATEGORY.GET_LIST, params),
  create: (params:  CategoryType) =>
    axiosClient.post(API_ENDPOINTS.CATEGORY.CREATE, params),
  update: (params:  CategoryType) =>
      axiosClient.post(API_ENDPOINTS.CATEGORY.UPDATE, params),
}

export default CategoryAPI
