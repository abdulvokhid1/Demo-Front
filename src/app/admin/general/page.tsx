'use client'
import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
const AdminGeneral = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/admin/general/dashboard')
    }, [router])
    return (
        <div/>

    );
}
export default AdminGeneral;