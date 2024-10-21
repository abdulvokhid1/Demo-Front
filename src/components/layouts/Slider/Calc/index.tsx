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
            <Link key={0} href={PAGE_ROUTES.CALC.CALC_SALES_INCENTIVES} className={selectedKey==0? "menu_on": "menu"} title="일 매출 체크!" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>일 매출 체크!</Link>
            <Link key={1} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES} className={selectedKey==1? "menu_on": "menu"} title="추천수당" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>추천수당</Link>
            <Link key={2} href={PAGE_ROUTES.CALC.CALC_DIVIDEND_INCENTIVES} className={selectedKey==2? "menu_on": "menu"} title="배당수당" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}>배당수당</Link>
            <Link key={3} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_ROLLUP} className={selectedKey==3? "menu_on": "menu"} title="추천롤업수당" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>추천롤업수당</Link>
            <Link key={4} href={PAGE_ROUTES.CALC.CALC_POSITION_INCENTIVES} className={selectedKey==4? "menu_on": "menu"} title="직급수당" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>직급수당</Link>
         <Link key={5} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES} className={selectedKey==5? "menu_on": "menu"} title="광고경품티켓" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>광고경품티켓</Link>
            {/* <Link href="recommend_incentives" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>추천 인센 정산</Link> */}
            {/* <Link href="SponsorshipIncetives" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>후원 인센티브</Link> */}
            
            <span style={{backgroundColor: '#eaf8f5 '}}>일매출 내역 <span>〓</span></span>
            {/* <Link href="_shop_product_talk.list.php" className={selectedKey==0? "menu_on": "menu"} title="데일리 정산" style={{display: 'block'}}>데일리 정산 내역</Link> */}
            {/* <Link href="_shop_request.list.php" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>판매 인센티브 내역</Link> */}
            <Link key={6} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES_LIST} className={selectedKey==6? "menu_on": "menu"} title="추천수당내역" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(6)}>추천수당내역</Link>
            <Link key={7} href={PAGE_ROUTES.CALC.CALC_DIVIDEND_INCENTIVES_LIST} className={selectedKey==7? "menu_on": "menu"} title="배당수당내역" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(7)}>배당수당내역</Link>
            <Link key={8} href={PAGE_ROUTES.CALC.CALC_RECOMMEND_ROLLUP_LIST} className={selectedKey==8? "menu_on": "menu"} title="추천롤업내역" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(8)}>추천롤업내역</Link>
                   <Link key={9} href={PAGE_ROUTES.CALC.CALC_POSITION_INCENTIVES_LIST} className={selectedKey==9? "menu_on": "menu"} title="직급수당내역" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(9)}>직급수당내역</Link>
            {/* <Link href="SponsorshipIncenList" className={selectedKey==0? "menu_on": "menu"} title="추 인센티브" style={{display: 'block'}}>추천 인센 정산 내역</Link> */}
        </div>
    )
}
export default Slider