'use client'
import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
const Admin = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/admin/dashboard')
    }, [router])
    return (
        <div/>

    );
}
export default Admin;