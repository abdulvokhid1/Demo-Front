import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/shop/cash_transfer'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page