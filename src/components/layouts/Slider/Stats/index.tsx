// import './styles.css'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { statSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(statSelectedKey)
    const setSelectedKey = useSetRecoilState(statSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(6)
    }, []);
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>통계관리 <span>〓</span></span>
            <Link key={0} href="total_settlement_details" className={selectedKey==0? "menu_on": "menu"} title="데일리 정산" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>정산완료 전체내역</Link>
            <Link key={1} href="PerformanceOfRecomenship" className={selectedKey==1? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>회원실적 추천</Link>
            {/* <Link href="PerformanceOfSponsorship" className="menu" title="판매 인센티브" style={{display: 'block'}}>회원실적 후원</Link> */}
            {/* <Link href="DistributionLimitProcessingStatistics" className="menu" title="판매 인센티브" style={{display: 'block'}}>배당한도 처리통계</Link> */}
            {/* <Link href="SettlementPaymentStatistics" className="menu" title="판매 인센티브" style={{display: 'block'}}>정산지급 통계</Link> */}
           
            {/*<div className="favorite_menu">*/}
            {/*    <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>*/}
            {/*    <div className="box">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Slider