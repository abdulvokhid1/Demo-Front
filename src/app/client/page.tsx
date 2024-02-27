import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
const Admin = ({ Component, pageProps }: AppProps) => {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
export default Admin;