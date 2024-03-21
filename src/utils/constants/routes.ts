const PAGE_ROUTES = {
  AUTH: {
    LOGIN: '/admin/login',
    FORGOT_PASSWORD: '/forgot-password',
  },
  GENERAL: {
    DASHBOARD: '/admin/general/dashboard',
    CUSTOMER_INQUIRY_MANAGEMENT: '/admin/general/customerInquiryManagement',
    ADVERTISING_REQUEST: '/admin/general/adversting_req',
    INQUIRY_BOARD: '/admin/general/inquiryboard',
    NOTICE: '/admin/general/notice',
    MANAGER_INFO_EDIT: '/admin/general/mdinfo',
    POPUP: '/admin/general/pop',
    POLICY: '/admin/general/policy',
    PAGE_MANAGEMENT: '/admin/general/page_management',
  },
  BLOGS: '/admin/blog',
  CLASSROOMS: '/admin/classrooms',

  USERS: {
    INDEX: '/admin/users',
    USER_MANAGEMENT: '/admin/users/member_management',
    USER_REGISTRATION: '/admin/users/registration',
  },
  SALES: {
    // SALES_MANAGEMENT: '/admin/sales_management/',
     SALE_REGISTRATION: '/admin/sales_management/sales_registration_manager',
  },
  CALC:{
   DAILY_CALC:'/admin/CalcManage/daily_calc',
  },
  SHOP:{ 
  SHOP_MANAGEMENT:'/admin/shop_manager/shopproduct_management'
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
