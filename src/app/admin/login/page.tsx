import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/auth/login'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page