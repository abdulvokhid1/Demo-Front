import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/Browser'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page