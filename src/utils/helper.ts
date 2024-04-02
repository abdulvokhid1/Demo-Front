import dayjs from 'dayjs'
import moment from 'moment-timezone'

export const LOCAL_TIME_ZONE = dayjs().utcOffset() / 60

export const getFullTime = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD HH:MM:SS');
}

export const getFullDate = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD');
}