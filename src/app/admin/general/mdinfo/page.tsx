import dynamic from 'next/dynamic'

const View = dynamic(() => import('src/components/pages/general/mdinfo'), { ssr: false })

const Page = () => {
    return <View  />
}

export default Page
