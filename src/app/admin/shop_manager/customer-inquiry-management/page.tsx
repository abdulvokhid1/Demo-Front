import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/general/customerInquiryManagement'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
