// import './styles.css'
import Link from 'next/link'
import { generalSelectedKey } from '@/services/recoil/selectedKey'
import { useRecoilValue, useSetRecoilState } from "recoil";
import Routes from "@/utils/constants/routes";

const Slider = () => {
    const selectedKey = useRecoilValue(generalSelectedKey)
    const setSelectedKey = useSetRecoilState(generalSelectedKey)
    // const [selectedKey, setSelectedKey] = useState(0)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    return (
        <div className="aside_second">
            <span>기본관리<span>〓</span></span>
            <Link key={0} href={Routes.GENERAL.DASHBOARD} className={selectedKey==0? "menu_on": "menu"} title="관리자 메인" style={{display: 'block'}}
                onClick={()=> itemClickedHandler(0)}>관리자 메인</Link>
            <Link key={7} href={Routes.GENERAL.MANAGER_INFO_EDIT} className={selectedKey==7? "menu_on": "menu"} title="관리자 정보수정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(7)}>관리자 정보수정</Link>
            {/* <Link key={9} href={Routes.GENERAL.DASHBOARD} className={selectedKey==9? "menu_on": "menu"} title="문자충전관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(9)}>문자충전관리</Link> */}
            <Link key={10} href={Routes.GENERAL.POPUP} className={selectedKey==10? "menu_on": "menu"} title="팝업관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(10)}>팝업관리</Link>
            <Link key={11} href={Routes.GENERAL.POLICY} className={selectedKey==11? "menu_on": "menu"} title="약관 및 정책설정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(11)}>약관 및 정책설정</Link>
            <Link key={4} href={Routes.GENERAL.NOTICE} className={selectedKey==4? "menu_on": "menu"} title="공지사항 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>공지사항 게시판</Link>
            <div className="favorite_menu">
                <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>
                <div className="box">
                </div>
            </div>
        </div>
    )
}

export default Slider