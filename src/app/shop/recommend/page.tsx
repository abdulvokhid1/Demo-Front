import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/shop/recommend'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page