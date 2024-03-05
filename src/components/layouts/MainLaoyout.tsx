// import './styles.css'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider'
import Head from 'next/head'
import {Layout} from 'antd'
import Navbar from "@/components/layouts/Navbar";
import {ReactElement} from "react";

type MainLayoutProps = {
    children: ReactElement | ReactElement[]
}
const MainLayout = ({children}: MainLayoutProps) => {

    return (
        <div className="wrap">
            <Head>
                <title>Rudemy</title>
            </Head>

            <HeadElement/>
            <Navbar/>
            <div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
                <div className="container" id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
                    <Slider/>
                </div>
            </div>
            {/*<div>{children}</div>*/}
            <FooterElement/>
        </div>

    )
}

export default MainLayout