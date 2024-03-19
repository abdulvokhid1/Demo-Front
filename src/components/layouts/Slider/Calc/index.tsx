// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span >마감정산 <span>〓</span></span>
            <a href="_shop_product_talk.list.php" className="menu" title="데일리 정산" style={{display: 'block'}}>데일리 정산</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>판매 인센티브</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>직급 인센 정산</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>추천 인센 정산</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>후원 인센티브</a>
            
            <span >마감정산 내역 <span>〓</span></span>
            <a href="_shop_product_talk.list.php" className="menu" title="데일리 정산" style={{display: 'block'}}>데일리 정산 내역</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>판매 인센티브 내역</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>직급 인센 정산 내역</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>추천 인센 정산 내역</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>후원 인센티브 내역</a>

            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider