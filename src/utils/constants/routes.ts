import { calc } from "antd/es/theme/internal";

const PAGE_ROUTES = {
  AUTH: {
    LOGIN: "/admin/login",
    FORGOT_PASSWORD: "/forgot-password",
  },
  GENERAL: {
    DASHBOARD: "/admin/general/dashboard",
  },
  ORGANIZATION_TREE: {
    SPONSOR: "/admin/organization_tree/sponsor",
    RECOMMENDATION: "/admin/organization_tree/recommendation",
  },
  BLOGS: "/admin/blog",
  CLASSROOMS: "/admin/classrooms",

  USERS: {
    INDEX: "/admin/users",
    USER_MANAGEMENT: "/admin/users/member_management",
    USER_REGISTRATION: "/admin/users/registration",
    USER_MODIFY: "/admin/users/modify",
    USER_LOOKUP: "/admin/users/member_lookup_popup",
    USERSPON_LOOKUP: "/admin/users/memberspon_lookup_popup",
    PAY_MANAGER: "/admin/users/pay_manager",
    USER_INCENTIVE_LIST: "/admin/users/member_incentive_list",
    USER_SALES_LIST: "/admin/users/member_sales_list",
    USER_RECOMMENDED_LIST: "/admin/users/member_recommended_list",
    USER_SPONSOR_LIST: "/admin/users/member_sponsor_list",
    USER_DIVIDENT_LIST: "/admin/users/member_divident_list",
    USER_PAYMENT_LIST: "/admin/users/member_payment_list",
  },

  SALES_MANAGEMENT: {
    SALES_REGISTRATION_MANAGER:
      "/admin/sales_management/sales_registration_manager",
    SALES_REGISTRATION: "/admin/sales_management/sale_registration",
    SALES_MEMBER_LOOKUP:
      "/admin/sales_management/sale_registration/member_lookup",
    CENTER_MANAGEMENT: "/admin/sales_management/center_management",
    CENTER_REGISTRATION: "/admin/sales_management/center_registration",
  },

  CALC: {
    CALC_MANAGEMENT: "/admin/calc_manage/position_calc",
    CALC_RECOMMEND_INCENTIVES: "/admin/calc_manage/recommend_incentives",
    CALC_POSITION_INCENTIVES: "/admin/calc_manage/position_calc",
    CALC_DIVIDEND_INCENTIVES: "/admin/calc_manage/dividend_incentives",
    CALC_POSITION_INCENTIVES_LIST: "/admin/calc_manage/position_incentive_list",
    CALC_SALES_INCENTIVES: "/admin/calc_manage/sales_incentives",
    CALC_RECOMMEND_INCENTIVES_LIST: "/admin/calc_manage/recomend_incen_list",
    CALC_DIVIDEND_INCENTIVES_LIST:
      "/admin/calc_manage/dividend_incentives_list",
    CALC_RECOMMEND_ROLLUP: "/admin/calc_manage/recommend_rollup",
    CALC_RECOMMEND_ROLLUP_LIST: "/admin/calc_manage/recommen_rollup_list",
  },

  SHOP: {
    SHOP_PRODUCT_MANAGEMENT: "/admin/shop_manager/shop_product_management",
    CATEGORY_REGISTRATION: "/admin/shop_manager/add_category",
    CATEGORY_UPDATE: "/admin/shop_manager/update_category",
    SHOP_CATEGORY_LIST: "/admin/shop_manager/category_list",
    PRODUCT_REGISTER: "/admin/shop_manager/product_register",
    ADD_TYPE: "/admin/shop_manager/add_type",
  },

  STAT: {
    STAT_MANAGEMENT: "/admin/stats_manager/total_settlement_details",
  },

  ORDER: {
    ORDER_MANAGEMENT: "/admin/order_manager/orders_of_today",
  },

  DESIGN: {
    DESIGN_MANAGEMENT: "/admin/design_manager/shop_banner",
    BANNER: "/admin/design_manager/banner_register",
    CATEGORY: "/admin/design_manager/category_register",
  },

  LOG: {
    LOG_MANAGEMENT: "/admin/log/daily_connection",
  },

  COURSES: "/admin/courses",
  LESSONS: "/admin/lessons",
  CATEGORY: "/admin/categories",
  FEEDBACK: "/admin/feedback",
  ASSIGNMENTS: "/admin/assignments",
  SCHEDULE: "/admin/schedule",
  CHATTING: "/admin/chatting",
  CHATTING_DETAIL: "/admin/chatting/detail",
  CHATTING_USER: "/admin/chatting/user",
  SCHEDULE_STUDENT: {
    MANAGEMENT: "/admin/schedule/student",
    COURSES_ENROLLED: "/admin/enrolled/courses",
    LESSONS_ENROLLED: "/admin/enrolled/lessons",
  },
  COURSE_CREATE: "/admin/course/creation",
  COURSE_UPDATE: "/admin/course/update",
  RECORDING: "/admin/record",
};

export const UN_AUTH_ROUTES = [
  PAGE_ROUTES.AUTH.LOGIN,
  PAGE_ROUTES.AUTH.FORGOT_PASSWORD,
];

let domain = process.env.NEXT_PUBLIC_API_URL_DEV;

if (typeof window !== "undefined") {
  if (
    process.env.NODE_ENV == "production" &&
    window.location.origin !== "https://dev.rudemy.org"
  ) {
    domain = process.env.NEXT_PUBLIC_API_URL;
  }
}

export const PREVIEW_IMAGE = `${domain}api/v1/upload`;
export default PAGE_ROUTES;
