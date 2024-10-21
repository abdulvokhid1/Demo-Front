import dynamic from 'next/dynamic'

const View = dynamic(() => import('@/components/pages/users/member_recommendedList'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
