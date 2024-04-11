import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/shop/mypage'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page