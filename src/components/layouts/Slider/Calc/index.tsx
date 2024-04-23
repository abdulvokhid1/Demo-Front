// import './styles.css'
import Link from 'next/link'
import PAGE_ROUTES from "@/utils/constants/routes";

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>마감정산 <span>〓</span></span>
            {/* <Link href="daily_calc" className="menu" title="데일리 정산" style={{display: 'block'}}>데일리 정산</Link> */}
            <Link href={PAGE_ROUTES.CALC.CALC_MANAGEMENT} className="menu" title="대리점 인센티브" style={{display: 'block'}}>대리점 인센티브</Link>
            <Link href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES} className="menu" title="추천수당" style={{display: 'block'}}>추천수당</Link>
            {/* <Link href="recommend_incentives" className="menu" title="판매 인센티브" style={{display: 'block'}}>추천 인센 정산</Link> */}
            {/* <Link href="SponsorshipIncetives" className="menu" title="판매 인센티브" style={{display: 'block'}}>후원 인센티브</Link> */}
            
            <span style={{backgroundColor: '#eaf8f5 '}}>마감정산 내역 <span>〓</span></span>
            {/* <Link href="_shop_product_talk.list.php" className="menu" title="데일리 정산" style={{display: 'block'}}>데일리 정산 내역</Link> */}
            {/* <Link href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>판매 인센티브 내역</Link> */}
            <Link href={PAGE_ROUTES.CALC.CALC_POSITION_INCENTIVES_LIST} className="menu" title="판매 인센티브" style={{display: 'block'}}>판매 인센 정산 내역</Link>
            <Link href={PAGE_ROUTES.CALC.CALC_RECOMMEND_INCENTIVES_LIST} className="menu" title="대리점 인센티브" style={{display: 'block'}}>대리점 인센 정산 내역</Link>
            {/* <Link href="SponsorshipIncenList" className="menu" title="추 인센티브" style={{display: 'block'}}>추천 인센 정산 내역</Link> */}
        </div>
    )
}
export default Slider