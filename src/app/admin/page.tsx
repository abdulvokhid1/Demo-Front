'use client'
import { userState } from '@/services/recoil/user'
// import Loading from '@/storybook/Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import PAGE_ROUTES from 'src/utils/constants/routes'

const Controller = () => {
    const userStateData = useRecoilValue(userState)
    const router = useRouter()

    useEffect(() => {
        userStateData.email === ''
            ? router.push(PAGE_ROUTES.AUTH.LOGIN)
            : router.push(PAGE_ROUTES.DASHBOARD)
    }, [router])

    return (
        <div>
            {/*<Loading />*/}
        </div>
    )
}

export default Controller
