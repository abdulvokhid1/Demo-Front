// import './styles.css'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(userSelectedKey)
    const setSelectedKey = useSetRecoilState(userSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(1)
    }, []);
    return (
        <div className="aside_second">
           <span style={{backgroundColor: '#eaf8f5 '}}>기본관리<span>〓</span></span>
            <Link key={0} href="member_management" className={selectedKey==0? "menu_on": "menu"} title="회원 통합관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>회원 통합관리</Link>
            {/*<Link key={1} href="registration" className={selectedKey==1? "menu_on": "menu"} title="회원등록" style={{display: 'none'}}*/}
            {/*      onClick={()=> itemClickedHandler(1)}>회원등록</Link>*/}
            <Link key={2} href="StatusOfProceedsPayment" className={selectedKey==2? "menu_on": "menu"} title="수익금 지급관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}>수익금 지급관리</Link>
            {/* <Link href="StatusOfProceedsManagement" className={selectedKey==0? "menu_on": "menu"} title="수익금 현황관리" style={{display: 'block'}}>수익금 현황관리</Link> */}
            <Link key={3} href="ProceedsOfChanges" className={selectedKey==3? "menu_on": "menu"} title="수익금 변동내역" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>수익금 변동내역</Link>
            <Link key={4} href="RecommenderChangeLog" className={selectedKey==4? "menu_on": "menu"} title="추천인 변경로그" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>추천인 변경로그</Link>
            {/* <Link href="SponsorChangeLog" className={selectedKey==0? "menu_on": "menu"} title="후원인 변경로그" style={{display: 'block'}}>후원인 변경로그</Link> */}
            
            {/*<div className="favorite_menu">*/}
            {/*    <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>*/}
            {/*    <div className="box">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Slider