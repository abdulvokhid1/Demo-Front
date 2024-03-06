import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/customer-inquiry-management'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
