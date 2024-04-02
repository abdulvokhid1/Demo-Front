import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Ordermanager/WaitingForDelivery'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page