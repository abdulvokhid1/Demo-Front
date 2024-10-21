'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from "next/navigation";
const View = dynamic(() => import('@/components/pages/ShopManager/CategoryList'), { ssr: false })

const Page = () => {
    const searchParam = useSearchParams()
    const depth = searchParam.get('depth');
    console.log(depth)
    return(
        <View
            depth={depth || '1'}
        />
    )
}

export default Page