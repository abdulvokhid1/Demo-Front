'use client'
import 'bootstrap/dist/css/bootstrap.css'
import '../../globals.css'
// import MainLayout from '@/components/layouts/MainLaoyout'
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
export default function UserLayout({
                                        children, // will be a page or nested layout
                                    }: {
    children: React.ReactNode
}) {
    useEffect(() => {
        import('bootstrap');
    }, []);
    return (
        <html lang="en">
        <Head>
            <title>Rudemy</title>
            {/*<link*/}
            {/*    rel="stylesheet"*/}
            {/*    href="/css/jquery-ui.min.css"*/}
            {/*/>*/}
        </Head>
        <body style={{minWidth: '1260px'}}>
        <div className="adm_loading_wrap">
            <div className="adm_loading_box">
                <div className="loading"></div>
                <div className="iconimg"></div>
            </div>
        </div>
        <div className="wrap" style={{background: '#fff'}}>
            <HeadElement/>
            <Navbar/>
            {/*<div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>*/}
                {/*    <div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>*/}
                {/*        <Slider/>*/}
                {/*        {children}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {children}
                {/*<FooterElement/>*/}
            {/*</div>*/}
        </div>
        </body>
        </html>
    )
}