// import './styles.css'
import Link from 'next/link'
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { calcSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(calcSelectedKey)
    const setSelectedKey = useSetRecoilState(calcSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(3)
    }, []);
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>마감정산 <span>〓</span></span>
            {/* <Link href="daily_calc" className={selectedKey==0? "menu_on": "menu"} title="데일리 정산" style={{display: 'block'}}>데일리 정산</Link> */}
            <Link key={0} href={PAGE_ROUTES.CALC.CALC_MANAGEMENT} className={selectedKey==0? "menu_on": "menu"} title="대리점 인센티브" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>대리점 인센티브</Link>
            <Link key={1} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES} className={selectedKey==1? "menu_on": "menu"} title="추천수당" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>추천수당</Link>
            {/* <Link href="recommend_incentives" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>추천 인센 정산</Link> */}
            {/* <Link href="SponsorshipIncetives" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>후원 인센티브</Link> */}
            
            <span style={{backgroundColor: '#eaf8f5 '}}>마감정산 내역 <span>〓</span></span>
            {/* <Link href="_shop_product_talk.list.php" className={selectedKey==0? "menu_on": "menu"} title="데일리 정산" style={{display: 'block'}}>데일리 정산 내역</Link> */}
            {/* <Link href="_shop_request.list.php" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>판매 인센티브 내역</Link> */}
            <Link key={2} href={PAGE_ROUTES.CALC.CALC_POSITION_INCENTIVES_LIST} className={selectedKey==2? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}>판매 인센 정산 내역</Link>
            <Link key={3} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES_LIST} className={selectedKey==3? "menu_on": "menu"} title="대리점 인센티브" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>대리점 인센 정산 내역</Link>
            {/* <Link href="SponsorshipIncenList" className={selectedKey==0? "menu_on": "menu"} title="추 인센티브" style={{display: 'block'}}>추천 인센 정산 내역</Link> */}
        </div>
    )
}
export default Slider