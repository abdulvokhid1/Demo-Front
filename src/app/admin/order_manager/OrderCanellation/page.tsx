import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Ordermanager/OrderCanellation'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page