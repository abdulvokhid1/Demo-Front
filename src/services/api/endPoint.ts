export const API_ENDPOINTS = {
  AUTH: {
    REGISTRATION:'/api/v1/auth/register_by_admin',
    LOGIN: '/api/v1/auth/login_admin_page',
    SIGNUP_BY_USERNAME: '/api/v1/user/username',
    ME: '/api/v1/auth/me',
    UPDATE_PROFILE: '/api/v1/auth/update-profile',
    CHANGE_PASSWORD: '/api/v1/auth/change-password',
  },

  SALESLEVEL: {
    LIST: '/api/v1/sales_level/list',
    REGISTRATION: '/api/v1/sales_level/update'
  },

  CENTER: {
    LIST: '/api/v1/center/list',
    REGISTRATION: '/api/v1/center/create',
    UPDATE: '/api/v1/center/update',
  },
  
  SETUP_FEE: {
    LIST: '/api/v1/setup_fee/list',
    REGISTRATION: '/api/v1/setup_fee/update'
  },

  SALEREGISTER: {
    LIST: '/api/v1/deposit/list',
    REGISTRATION: '/api/v1/deposit/create',
    CONFIRM: '/api/v1/deposit/confirm',
    CALCULATION_LIST: '/api/v1/deposit/calculation_list',
    CALCULATION_DETAIL_LIST: '/api/v1/deposit/calculation_detail_list',
    CONFIRM_CALCULATION: '/api/v1/deposit/confirm_calculation',
  },
  PRODUCTMANAGE: {
    GET_LIST: '/api/v1/product_manage/list',
    REGISTRATION: '/api/v1/product_manage/update',
    SET_MAIN_PRODUCT:'/api/v1/settingmainproduct/list',
    SET_MAIN_PRODUCT_REG:'/api/v1/settingmainproduct/create',
  },

  CATEGORY: {
    GET_LIST: '/api/v1/category/list',
    CREATE: '/api/v1/category/create',
    UPDATE: '/api/v1/category/update',
    DELETE: '/api/v1/category',
  },

  CENTERS: {
    GET_LIST: '/api/v1/center/list',
  },

  LEVELS: {
    GET_LIST: '/api/v1/level/list',
    UPDATE: '/api/v1/level/update',
  },

    USERS: {
    GET_LIST: '/api/v1/user/list',
    DELETE: '/api/v1/user',
    ASSIGN_ROLE: '/api/v1/user/assign-role',
    CREATE: '/api/v1/user',
    CHANGE_PASSWORD: '/api/v1/user/change-password',
    ASSIGN_TEACHER_COURSE: '/api/v1/course/change-teacher-course',
  },

  LESSONS: {
    GET_LIST: '/api/v1/lesson',
    CREATE: '/api/v1/lesson',
    UPDATE: '/api/v1/lesson/update',
    DELETE: '/api/v1/lesson',
    SETTING_CALENDAR: '/api/v1/lesson/bulk-assign-lesson',
    LESSON_ENROLLED: '/api/v1/lesson/picked',
  },

  ASSIGNMENT: {
    GET_LIST: '/api/v1/assignment/list',
    CREATE: '/api/v1/assignment',
    UPDATE: '/api/v1/assignment/update',
    DELETE: '/api/v1/assignment',
  },

  ASSIGNMENT_SUBMIT: {
    GET_LIST: '/api/v1/assignment-submit/list',
    CREATE: '/api/v1/assignment-submit',
    UPDATE: '/api/v1/assignment-submit/update',
    DELETE: '/api/v1/assignment-submit',
  },

  CLASSROOMS: {
    GET_LIST: '/api/v1/class',
    CREATE: '/api/v1/class',
    GET_DETAIL: '/api/v1/class',
    UPDATE: '/api/v1/class/update',
  },

  SCHEDULE: {
    GET_LIST: '/api/v1/course/pick-courses',
    CONFIRM_SCHEDULE: '/api/v1/course/confirm-pick',
    DENY_SCHEDULE: '/api/v1/course/deny-pick',
    UPDATE_AFTER_CONFIRM: '/api/v1/lesson/bulk-update',
  },

  CHATTING: {
    GET_MESSAGES: '/api/v1/chat/history-list',
    GET_USERS_CHATTING: '/api/v1/chat/history-list',
    GET_HISTORY_USER: '/api/v1/chat/history',
  },

  NOTIFICATIONS: {
    CREATE_NOTIFICATIONS: '/api/v1/notification/create-notification',
  },

  UPLOAD: {
    UPLOAD_CATEGORY_FILE: '/api/v1/upload/upload_category',
  },

  RECORD: {
    HOST: '/api/v1/record',
    UPDATE: '/api/v1/record/update',
    DELETE: '/api/v1/record',
  },
}
