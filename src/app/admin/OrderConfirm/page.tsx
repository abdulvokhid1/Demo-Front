import dynamic from 'next/dynamic'

<<<<<<<< HEAD:src/app/admin/general/adversting_req/page.tsx
const View = dynamic(() => import('src/components/pages/general/adversting_req'), { ssr: false })
========
const View = dynamic(() => import('src/components/pages/OrderConfirm'), { ssr: false })
>>>>>>>> MeeRyeong:src/app/admin/OrderConfirm/page.tsx

const Page = () => {
    return <View  />
}

export default Page
