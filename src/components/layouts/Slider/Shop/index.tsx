// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>상품등록 관리<span>〓</span></span>
            <a href="ProductRegister" className="menu" title="상품등록" style={{display: 'block'}}>상품 등록</a>
            <a href="shop_product_management" className="menu" title="상품관리" style={{display: 'block'}}>상품관리</a>

            <span style={{backgroundColor: '#eaf8f5 '}}>상품카테고리 관리<span>〓</span></span>
            <a href="category_management" className="menu" title="카테고리 관리" style={{display: 'block'}}>카테고리 관리</a>
            <a href="ShopClassification" className="menu" title="메인상품분류 설정" style={{display: 'block'}}>메인상품분류 설정</a>
            {/* <a href="top_menu" className="menu" title="판매 인센티브" style={{display: 'block'}}>상단메뉴관리</a> */}
            
            <span style={{backgroundColor: '#eaf8f5 '}}>메인진열 관리 <span>〓</span></span>
            <a href="AllItem" className="menu" title="전체 상품" style={{display: 'block'}}>전체 상품</a>
            <a href="BestItem" className="menu" title="베스트 상품" style={{display: 'block'}}>베스트 상품</a>
            <a href="NewItem" className="menu" title="신 상품" style={{display: 'block'}}>신 상품</a>
            <a href="PopularItem" className="menu" title="인기 상품" style={{display: 'block'}}>인기 상품</a>
            <a href="RecommendedProduct" className="menu" title="추천 상품" style={{display: 'block'}}>추천 상품</a>
            {/* <a href="_shop_request.list.php" className="menu" title="판매 인센티브" style={{display: 'block'}}>브랜드 상품</a> */}

            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider