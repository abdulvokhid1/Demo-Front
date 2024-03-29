import axiosClient from '../axiosClient'
import { API_ENDPOINTS } from '../endPoint'
import { centerRegistrationProps} from './type'
import CenterRegistration from '../../../components/pages/SalesManagement/CenterRegistration/index';

const CENTER_API = {
  list: () => axiosClient.get(API_ENDPOINTS.CENTER.LIST),
  updateCenter: (params: centerRegistrationProps) =>
    axiosClient.post(API_ENDPOINTS.CENTER.REGISTRATION, params),
}

export default CENTER_API
