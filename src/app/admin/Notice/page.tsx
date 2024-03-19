import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/notice'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
