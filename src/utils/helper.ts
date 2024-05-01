import dayjs from 'dayjs'
import moment from 'moment-timezone'
import PAGE_ROUTES from "@/utils/constants/routes";
import { jwtDecode } from "jwt-decode";

export const LOCAL_TIME_ZONE = dayjs().utcOffset() / 60

export const getFullTime = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD HH:MM:SS');
}

export const getFullDate = (isoTime: string) => {
    const m = moment(isoTime).tz('Asia/Seoul');
    return m.format('YYYY-MM-DD');
}

export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const isLoggedIn = () => {
    let isLoggedIn = true;
    let accessToken = localStorage.getItem('accessToken')
    if (!accessToken || accessToken === 'undefined' || accessToken == '') {
        isLoggedIn = false;
    } else {
        try {
            const decodedToken: any = jwtDecode(accessToken)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                isLoggedIn = false;
            }
        }
        catch (e) {
            isLoggedIn = false;
        }
    }
    return isLoggedIn;
}