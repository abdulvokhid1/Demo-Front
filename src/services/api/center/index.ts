import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { centerRegistrationProps} from './type'
import CenterRegistration from '@/components/pages/SalesManagement/center_management/index';
import { QueryType } from './type';

const CENTER_API = {
  getList: (params: QueryType) =>
      axiosClient.post(API_ENDPOINTS.CENTER.LIST, params),
  updateCenter: (params: centerRegistrationProps) =>
    axiosClient.post(API_ENDPOINTS.CENTER.REGISTRATION, params),
}

export default CENTER_API
