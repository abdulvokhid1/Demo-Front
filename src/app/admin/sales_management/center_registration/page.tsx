import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/SalesManagement/center_registration'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
