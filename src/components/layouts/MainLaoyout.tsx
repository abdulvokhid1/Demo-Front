import './styles.css'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider'
import Head from 'next/head'
import {Layout} from 'antd'
import Navbar from "@/components/layouts/Navbar";

type MainLayoutProps = {
    children: JSX.Element | JSX.Element[]
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
            <FooterElement/>
        </div>

    )
}

export default MainLayout