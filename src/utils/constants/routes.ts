const PAGE_ROUTES = {
  AUTH: {
    LOGIN: '/admin/login',
    FORGOT_PASSWORD: '/forgot-password',
  },
  GENERAL: {
    DASHBOARD: '/admin/general/dashboard',
  },
  BLOGS: '/admin/blog',
  CLASSROOMS: '/admin/classrooms',
  USERS: {
    INDEX: '/admin/users',
    USER_MANAGEMENT: '/admin/users/member_management',
    USER_REGISTRATION: '/admin/users/registration'
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
