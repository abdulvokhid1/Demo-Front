'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from "next/navigation";
const View = dynamic(() => import('@/components/pages/ShopManager/addCategory'), { ssr: false })

const Page = () => {
    const searchParam = useSearchParams()
    const depth = searchParam.get('depth');
    const parent = searchParam.get('parent');
    console.log(depth)
    return (
        <View
        depth={depth || '1'}
        parent={parent || '0'}
        />)
}

export default Page