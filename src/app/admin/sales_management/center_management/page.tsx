import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/SalesManagement/center_management'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
