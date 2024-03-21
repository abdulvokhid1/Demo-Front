import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Ordermanager/ReqPartialCancellation'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page