import { calc } from "antd/es/theme/internal"

const PAGE_ROUTES = {
  AUTH: {
    LOGIN: '/admin/login',
    FORGOT_PASSWORD: '/forgot-password',
  },
  GENERAL: {
    DASHBOARD: '/admin/general/dashboard',
  },
  ORGANIZATION_TREE: {
    SPONSOR: '/admin/organization_tree/sponsor',
    RECOMMENDATION: '/admin/organization_tree/RECOMMENDATION',
  },
  BLOGS: '/admin/blog',
  CLASSROOMS: '/admin/classrooms',

  USERS: {
    INDEX: '/admin/users',
    USER_MANAGEMENT: '/admin/users/member_management',
    USER_REGISTRATION: '/admin/users/registration',
    USER_LOOKUP: '/admin/users/member_lookup_popup',
    PAY_MANAGER:'/admin/users/pay_manager',
  },
  SALES_MANAGEMENT: {
    SALES_REGISTRATION_MANAGER: '/admin/sales_management/sales_registration_manager',
    SALES_REGISTRATION: '/admin/sales_management/sale_registration',
    SALES_MEMBER_LOOKUP: '/admin/sales_management/sale_registration/member_lookup',
    CENTER_MANAGEMENT: '/admin/sales_management/center_management',
    CENTER_REGISTRATION: '/admin/sales_management/center_registration',
  },
  CALC:{
    CALC_MANAGEMENT: '/admin/calc_manage/position_calc',
    CALC_RECOMMEND_INCENTIVES: '/admin/calc_manage/recommend_incentives',
    CALC_POSITION_INCENTIVES_LIST: '/admin/calc_manage/position_incentive_list',
    CALC_SALES_INCENTIVES: '/admin/calc_manage/sales_incentives',
    CALC_RECOMMEND_INCENTIVES_LIST: '/admin/calc_manage/recomend_incen_list',
   },
 SHOP:{
    SHOP_PRODUCT_MANAGEMENT:'/admin/shop_manager/shop_product_management',
   CATEGORY_REGISTRATION: '/admin/shop_manager/add_category',
   CATEGORY_UPDATE: '/admin/shop_manager/update_category',
   SHOP_CATEGORY_LIST:'/admin/shop_manager/category_list',
   PRODUCT_REGISTER: '/admin/shop_manager/product_register',
 },
 STAT:{
  STAT_MANAGEMENT:'/admin/stats_manager/total_settlement_details',
 },
 ORDER:{
  ORDER_MANAGEMENT:'/admin/order_manager/orders_of_today',
 },
DESIGN:{
  DESIGN_MANAGEMENT:'/admin/design_manager/shop_banner',
  BANNER:'/admin/design_manager/banner_register',
  CATEGORY:'/admin/design_manager/category_register',
},
LOG:{
  LOG_MANAGEMENT:'/admin/log/daily_connection',
},

  COURSES: '/admin/courses',
  LESSONS: '/admin/lessons',
  CATEGORY: '/admin/categories',
  FEEDBACK: '/admin/feedback',
  ASSIGNMENTS: '/admin/assignments',
  SCHEDULE: '/admin/schedule',
  CHATTING: '/admin/chatting',
  CHATTING_DETAIL: '/admin/chatting/detail',
  CHATTING_USER: '/admin/chatting/user',
  SCHEDULE_STUDENT: {
    MANAGEMENT: '/admin/schedule/student',
    COURSES_ENROLLED: '/admin/enrolled/courses',
    LESSONS_ENROLLED: '/admin/enrolled/lessons',
  },
  COURSE_CREATE: '/admin/course/creation',
  COURSE_UPDATE: '/admin/course/update',
  RECORDING: '/admin/record',
}

export const UN_AUTH_ROUTES = [PAGE_ROUTES.AUTH.LOGIN, PAGE_ROUTES.AUTH.FORGOT_PASSWORD]

let domain = process.env.NEXT_PUBLIC_API_URL_DEV

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV == 'production' && window.location.origin !== 'https://dev.rudemy.org') {
    domain = process.env.NEXT_PUBLIC_API_URL
  }
}

export const PREVIEW_IMAGE = `${domain}api/v1/upload`
export default PAGE_ROUTES
