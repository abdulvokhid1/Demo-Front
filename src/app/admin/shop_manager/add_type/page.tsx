import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/ShopManager/add_type'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page