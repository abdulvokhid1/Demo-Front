import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Ordermanager/OnDelivery'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page