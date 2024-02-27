import HeadElement from '@/components/layouts/Slider'
import Head from 'next/head'
import { Layout } from 'antd'
import Navbar from "@/components/layouts/Navbar";
type MainLayoutProps = {
    children: JSX.Element | JSX.Element[]
}
const MainLayout = ({ children }: MainLayoutProps) => {

    return (
        <Layout>
            <Head>
                <title>Rudemy</title>
            </Head>

            <HeadElement/>
            <Navbar/>
        </Layout>

    )
}

export default MainLayout