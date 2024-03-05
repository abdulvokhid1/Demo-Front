import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/adversting_req'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
