import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/general/PopupRegister'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
