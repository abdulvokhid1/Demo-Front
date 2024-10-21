'use client'
import 'bootstrap/dist/css/bootstrap.css'
import '@/css/globals.css'
import MainLayout from '@/components/layouts/Slider/users/MainLaoyout'
import type {AppProps} from "next/app";
import Head from "next/head";
import HeadElement from "@/components/layouts/Header";
import Navbar from "@/components/layouts/Navbar";
import Slider from "@/components/layouts/Slider/users";
import FooterElement from "@/components/layouts/Footer";
import {Layout} from "antd";
import type {Metadata} from "next";
import {useEffect, useState} from "react";

// export const metadata: Metadata = {
//     title: "관리자 페이지",
//     description: "관리자 페이지",
// };
export default function AdminLayout({
                                        children, // will be a page or nested layout
                                    }: {
    children: React.ReactNode
}) {
    useEffect(() => {
        import('bootstrap');
    }, []);
    return (
        <div className="wrap" style={{background: '#fff'}}>
            <HeadElement/>
            <Navbar/>
            <div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
                {/*    <div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>*/}
                {/*        <Slider/>*/}
                {/*        {children}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {children}
                <FooterElement/>
            </div>
        </div>
    )
}