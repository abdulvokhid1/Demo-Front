'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from "next/navigation";
const View = dynamic(() => import('@/components/pages/ShopManager/updateCategory'), { ssr: false })

const Page = () => {
    const searchParam = useSearchParams()
    const depth = searchParam.get('depth');
    const parent = searchParam.get('parent');
    const id = searchParam.get('id');
    const name = searchParam.get('name');
    const active = searchParam.get('active');
    console.log(depth)
    return (
        <View
        depth={depth || '1'}
        parent={parent || '0'}
        id = {id || '0'}
        name = {name || ''}
        active = {active || '1'}
        />)
}

export default Page