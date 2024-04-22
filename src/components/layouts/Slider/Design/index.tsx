// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>쇼핑몰 디자인 관리 <span>〓</span></span>
            {/* <a href="top_menu" className="menu" title="데일리 정산" style={{display: 'block'}}>상단 메뉴</a> */}
            <a href="ShopBanner" className="menu" title="배너 관리" style={{display: 'block'}}>배너 관리</a>
            <a href="CategoryBanner" className="menu" title="카테고리별 배너" style={{display: 'block'}}>카테고리별 배너</a>
      
            
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider