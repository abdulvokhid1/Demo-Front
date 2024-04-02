import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/users/ProceedsOfChanges'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page