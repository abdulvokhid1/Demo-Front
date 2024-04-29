// import './styles.css'
import Link from 'next/link'
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { saleSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(saleSelectedKey)
    const setSelectedKey = useSetRecoilState(saleSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(2)
    }, []);
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>매출등록 <span>〓</span></span>
            <Link key={0} href="sale_registration" className={selectedKey==0? "menu_on": "menu"}
                  title="매출등록" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>매출등록</Link>
            <Link key={1} href={PAGE_ROUTES.SALES_MANAGEMENT.CENTER_MANAGEMENT}
               className={selectedKey==1? "menu_on": "menu"} title="센터등록 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>대리점등록</Link>
                  <span style={{backgroundColor: '#eaf8f5'}}>신청업무 관리<span>〓</span></span>
            <Link key={2} href="PurchaseRequest" className={selectedKey==2? "menu_on": "menu"} title="입금신청" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}>구매신청</Link>
            <Link key={3} href="ApplicationOfWithdrawal" className={selectedKey==3? "menu_on": "menu"} title="공지사항 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>출금신청</Link>
              <span style={{backgroundColor: '#eaf8f5'}}>레벨 관리<span>〓</span></span>
            <Link key={4} href="LevelManagement" className={selectedKey==4? "menu_on": "menu"} title="관리자 메인" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>회원레벨 설정</Link>
          
            <Link key={5} href="OtherPreferences" className={selectedKey==5? "menu_on": "menu"} title="일반페이지 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>기타환경 설정</Link>
          
            {/*<div className="favorite_menu">*/}
            {/*    <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>*/}
            {/*    <div className="box">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Slider