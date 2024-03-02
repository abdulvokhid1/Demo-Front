import MainLayout from '@/components/layouts/MainLaoyout'
import type {AppProps} from "next/app";
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
export default App;