import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/SalesManagement/SalesRegistrationManager'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page