export const API_ENDPOINTS = {
  AUTH: {
    REGISTRATION: "/api/v1/auth/register_by_admin",
    LOGIN: "/api/v1/auth/login_admin_page",
    SIGNUP_BY_USERNAME: "/api/v1/user/username",
    ME: "/api/v1/auth/me",
    UPDATE_PROFILE: "/api/v1/auth/update-profile",
    CHANGE_PASSWORD: "/api/v1/auth/change-password",
  },

  SALESLEVEL: {
    LIST: "/api/v1/sales_level/list",
    REGISTRATION: "/api/v1/sales_level/update",
  },

  CENTER: {
    LIST: "/api/v1/center/list",
    REGISTRATION: "/api/v1/center/create",
    UPDATE: "/api/v1/center/update",
  },

  SETUP_FEE: {
    LIST: "/api/v1/setup_fee/list",
    REGISTRATION: "/api/v1/setup_fee/update",
  },

  SALEREGISTER: {
    LIST: "/api/v1/deposit/list",
    LIST_BY_USERID: "/api/v1/deposit/list_by_userid",
    REGISTRATION: "/api/v1/deposit/create",
    CONFIRM: "/api/v1/deposit/confirm",
    CALCULATION_LIST: "/api/v1/deposit/calculation_list",
    CALCULATION_DETAIL_LIST: "/api/v1/deposit/calculation_detail_list",
    CONFIRM_CALCULATION: "/api/v1/deposit/confirm_calculation",
  },
  PRODUCT: {
    GET_LIST: "/api/v1/product/list_without_access",
    CREATE: "/api/v1/product/create",
    UPDATE: "/api/v1/product/update",
  },

  CATEGORY: {
    GET_LIST: "/api/v1/category/list",
    CREATE: "/api/v1/category/create",
    UPDATE: "/api/v1/category/update",
    DELETE: "/api/v1/category",
  },

  CENTERS: {
    GET_LIST: "/api/v1/center/list",
  },

  LEVELS: {
    GET_LIST: "/api/v1/level/list",
    UPDATE: "/api/v1/level/update",
  },

  USERS: {
    GET_LIST: "/api/v1/user/list",
    USER_INFO: "/api/v1/user/info",
    UPDATE: "/api/v1/user/update",
    SOFT_DELETE: "/api/v1/user/delete",
    ASSIGN_ROLE: "/api/v1/user/assign-role",
    CREATE: "/api/v1/user",
    CHANGE_PASSWORD: "/api/v1/user/change-password",
    ASSIGN_TEACHER_COURSE: "/api/v1/course/change-teacher-course",
    GET_SPONSORS: "/api/v1/user/sponsors",
    GET_LIMITED_SPONSORS: "/api/v1/user/limited-sponsors",
  },

  NOTIFICATIONS: {
    CREATE_NOTIFICATIONS: "/api/v1/notification/create-notification",
  },

  UPLOAD: {
    UPLOAD_CATEGORY_FILE: "/api/v1/upload/upload_category",
    UPLOAD_PRODUCT_FILE: "/api/v1/upload/upload_product",
  },
};
