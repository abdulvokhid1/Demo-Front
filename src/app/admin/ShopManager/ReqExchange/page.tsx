import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/app/admin/Ordermanager/ReqExchange'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page