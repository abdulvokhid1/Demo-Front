// import './styles.css'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { prodSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(prodSelectedKey)
    const setSelectedKey = useSetRecoilState(prodSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(5)
    }, []);
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>상품등록 관리<span>〓</span></span>
            <Link key={0} href="ProductRegister" className={selectedKey==0? "menu_on": "menu"} title="상품등록" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>상품 등록</Link>
            <Link key={1} href="shop_product_management" className={selectedKey==1? "menu_on": "menu"} title="상품관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>상품관리</Link>

            <span style={{backgroundColor: '#eaf8f5 '}}>상품카테고리 관리<span>〓</span></span>
            <Link key={2} href="category_management" className={selectedKey==2? "menu_on": "menu"} title="카테고리 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}>카테고리 관리</Link>
            <Link key={3} href="ShopClassification" className={selectedKey==3? "menu_on": "menu"} title="메인상품분류 설정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>메인상품분류 설정</Link>
            {/* <Link href="top_menu" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>상단메뉴관리</Link> */}
            
            <span style={{backgroundColor: '#eaf8f5 '}}>메인진열 관리 <span>〓</span></span>
            <Link key={4} href="AllItem" className={selectedKey==4? "menu_on": "menu"} title="전체 상품" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>전체 상품</Link>
            <Link key={5} href="BestItem" className={selectedKey==5? "menu_on": "menu"} title="베스트 상품" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>베스트 상품</Link>
            <Link key={6} href="NewItem" className={selectedKey==6? "menu_on": "menu"} title="신 상품" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(6)}>신 상품</Link>
            <Link key={7} href="PopularItem" className={selectedKey==7? "menu_on": "menu"} title="인기 상품" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(7)}>인기 상품</Link>
            <Link key={8} href="RecommendedProduct" className={selectedKey==8? "menu_on": "menu"} title="추천 상품" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(8)}>추천 상품</Link>
            {/* <Link href="_shop_request.list.php" className={selectedKey==0? "menu_on": "menu"} title="판매 인센티브" style={{display: 'block'}}>브랜드 상품</Link> */}

            {/*<div className="favorite_menu">*/}
            {/*    <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>*/}
            {/*    <div className="box">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Slider