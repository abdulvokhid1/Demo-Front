import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Log/TimeConnection'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page