import axios from 'axios'
import dayjs from 'dayjs'
import moment from 'moment-timezone'
import { jwtDecode } from "jwt-decode";
let domain = process.env.NEXT_PUBLIC_API_URL_DEV
if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV == 'production' && window.location.origin !== 'http://localhost:3001') {
        domain = process.env.NEXT_PUBLIC_API_URL
    }
}


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

export const uploadImageFile = async (fileImage: File, url: string) => {
    const formData = await new FormData()
    formData.append('image', fileImage)
    try {
        if (!isLoggedIn()) throw new Error('Invalid logged in')
        const result = await axios.post(`${domain}${url}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' +localStorage.getItem('accessToken')
            },
        })

        return result.data
    } catch (error) {
        Promise.reject(error)
    }
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

export const hasSpecialCharacters = (str: string) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    return format.test(str);
}