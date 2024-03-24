import dayjs from 'dayjs'

export const LOCAL_TIME_ZONE = dayjs().utcOffset() / 60
