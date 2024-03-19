// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span >통계관리 <span>〓</span></span>
            <a href="_shop_product_talk.list.php" className="menu" title="데일리 정산" style={{display: 'block'}}>정산완료 전체내역</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>회원실적 추천</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>회원실적 후원</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>배당한도 처리통계</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>정산지급 통계</a>
           
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider