import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/SalesManagement/SaleRegisteration/member_lookup'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page