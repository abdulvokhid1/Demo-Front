'use client'
import dynamic from 'next/dynamic'
import { useRecoilValue } from "recoil";
import { userState } from "@/services/recoil/user";
import { useEffect } from "react";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter } from "next/navigation";
import { jwtDecode } from 'jwt-decode'

const View = dynamic(() => import('src/components/pages/general/dashboard'), {ssr: false})
const Page = () => {
    const userStateData = useRecoilValue(userState)
    const router = useRouter()
    // const refreshToken = localStorage.getItem('refreshToken')
    useEffect(() => {
        let accessToken = localStorage.getItem('accessToken')
        if (!accessToken || accessToken === 'undefined' || accessToken == '') {
            router.replace(PAGE_ROUTES.AUTH.LOGIN)
        } else {
            try {
                const decodedToken: any = jwtDecode(accessToken)
                if (decodedToken.exp * 1000 < new Date().getTime()) {
                    router.replace(PAGE_ROUTES.AUTH.LOGIN)
                }
            }
            catch (e) {
                router.replace(PAGE_ROUTES.AUTH.LOGIN)
            }


        }
        console.log(userStateData);
    }, [router])


    // if (!accessToken || accessToken === '') {
    //     const decodedToken: any = jwtDecode(accessToken)
    //     if (decodedToken.exp * 1000 < new Date().getTime()) {
    //
    //     }
    // if (userStateData.email === '') {
    //     return (<div/>)
    // }
    return (<View/>)

}

export default Page
