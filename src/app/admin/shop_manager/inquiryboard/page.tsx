import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/general/inquiryboard'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
