import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/PayManager'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page