// import './styles.css'
import Link from 'next/link'
import {useState} from "react";
import PAGE_ROUTES from "@/utils/constants/routes";

const Slider = () => {
    const [selectedKey, setSelectedKey] = useState(0)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    return (
        <div className="aside_second">
            <span>멤버쉽 회원 관리<span>〓</span></span>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==0? "menu_on": "menu"} title="회원 통합관리" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(0)}>회원 통합관리
            </Link>

            <span>수익금 관리<span>〓</span></span>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==1? "menu_on": "menu"} title="수익금 지급관리" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(1)}>수익금 지급관리
            </Link>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==2? "menu_on": "menu"} title="수익금 현황관리" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(2)}>수익금 현황관리
            </Link>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==3? "menu_on": "menu"} title="수익금 변동내역" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(3)}>수익금 변동내역
            </Link>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==4? "menu_on": "menu"} title="쇼핑포인트 지급관리" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(4)}>쇼핑포인트 지급관리
            </Link>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==5? "menu_on": "menu"} title="쇼핑포인트 변동내역" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(5)}>쇼핑포인트 변동내역
            </Link>

            <span>추천인 변경로그<span>〓</span></span>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==6? "menu_on": "menu"} title="추천인 변경로그" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(6)}>추천인 변경로그
            </Link>
            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className={selectedKey==7? "menu_on": "menu"} title="후원인 변경로그" style={{display:'block'}}
                  onClick={()=> itemClickedHandler(7)}>후원인 변경로그
            </Link>


            <div className="favorite_menu">
                <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>
                <div className="box">


                </div>
            </div>

        </div>
    )
}

export default Slider