'use client'
import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import PAGE_ROUTES from "@/utils/constants/routes";
const AdminUser = () => {
    const router = useRouter()
    useEffect(() => {
        router.push(PAGE_ROUTES.USERS.USER_MANAGEMENT)
    }, [router])
    return (
        <div/>

    );
}
export default AdminUser;