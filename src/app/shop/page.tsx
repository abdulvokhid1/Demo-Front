'use client'
import { userState } from '@/services/recoil/user'
// import Loading from '@/storybook/Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import PAGE_ROUTES from 'src/utils/constants/routes'
import ClientHeader from '@/components/layouts/ClientHeader'

const ShopGeneral = () => {
    const userStateData = useRecoilValue(userState)
    const router = useRouter()

    useEffect(() => {
        userStateData.email === ''
            ? router.push(PAGE_ROUTES.AUTH.LOGIN)
            : router.push(PAGE_ROUTES.GENERAL.DASHBOARD)
    }, [router])

    return (
        <div>
            <ClientHeader/>
        </div>
    )
}
export default ShopGeneral;