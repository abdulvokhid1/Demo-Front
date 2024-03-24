import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Log/MonthlyConnection'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page