// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span >쇼핑몰 디자인 관리 <span>〓</span></span>
            <a href="_shop_product_talk.list.php" className="menu" title="데일리 정산" style={{display: 'block'}}>상단 메뉴</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>팝업 관리</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>배너 관리</a>
            <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>카테고리별 배너</a>
      
            
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider