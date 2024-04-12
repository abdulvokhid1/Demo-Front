import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import {  AddCategoryProps} from './type'


const  AddCategory_API = {
  list: () => axiosClient.get(API_ENDPOINTS.AddCategory.GET_LIST),
  updateAddCategory: (params:  AddCategoryProps) =>
    axiosClient.post(API_ENDPOINTS.AddCategory.REGISTRATION, params),
}

export default AddCategory_API
