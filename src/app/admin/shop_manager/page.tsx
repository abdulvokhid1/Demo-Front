'use client'
import MainLayout from '@/components/layouts/Slider/users/MainLaoyout'
import type {AppProps} from "next/app";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import PAGE_ROUTES from "@/utils/constants/routes";
const AdminGeneral = () => {
    const router = useRouter()
    useEffect(() => {
        router.push(PAGE_ROUTES.GENERAL.DASHBOARD)
    }, [router])
    return (
        <div/>

    );
}
export default AdminGeneral;