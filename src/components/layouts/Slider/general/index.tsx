// import './styles.css'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { generalSelectedKey } from "@/services/recoil/selectedKey";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    // const [selectedKey, setSelectedKey] = useState(0)
    // const selectedKey = useRef(0)
    const selectedKey = useRecoilValue(generalSelectedKey)
    const setSelectedKey = useSetRecoilState(generalSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(0)
    }, []);
    return (
        <div className="aside_second">
            {/* <span>고객문의 관리<span>〓</span></span>
            <Link key={6} href="/admin/general/dashboard" className={selectedKey==6? "menu_on": "menu"} title="상품문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(6)}>상품문의 관리</Link>
            <Link key={1} href="/admin/general/dashboard" className={selectedKey==1? "menu_on": "menu"} title="고객문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>고객문의 관리</Link>
            <Link key={2} href="/admin/general/dashboard" className={selectedKey==2? "menu_on": "menu"} title="제휴/광고문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}> 제휴/광고문의 관리</Link>
            <Link key={3} href="/admin/general/dashboard" className={selectedKey==3? "menu_on": "menu"} title="일대일문의 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>일대일문의 게시판</Link>
            <span>게시판 통합관리<span>〓</span></span>
            <Link key={4} href="/admin/general/notice" className={selectedKey==4? "menu_on": "menu"} title="공지사항 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>공지사항 게시판</Link>
            <Link key={5} href="/admin/general/dashboard" className={selectedKey==5? "menu_on": "menu"} title="댓글 통합관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>댓글 통합관리</Link> */}
            <span style={{backgroundColor: '#eaf8f5 '}}>기본관리<span>〓</span></span>
            <Link key={0} href="/admin/general/dashboard" className={selectedKey==0? "menu_on": "menu"} title="관리자 메인" style={{display: 'block'}}
                onClick={()=> itemClickedHandler(0)}>대시보드</Link>
            <Link key={1} href="/admin/general/mdinfo" className={selectedKey==1? "menu_on": "menu"} title="관리자 정보수정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>관리자 정보수정</Link>
            <Link key={2} href="/admin/general/dashboard" className={selectedKey==2? "menu_on": "menu"} title="서브관리자 정보수정" style={{display: 'none'}}
                  onClick={()=> itemClickedHandler(2)}>서브관리자 정보수정</Link>
            <Link key={3} href="/admin/general/pop" className={selectedKey==3? "menu_on": "menu"} title="팝업관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>팝업관리</Link>
            {/* <Link key={4} href="/admin/general/Policy" className={selectedKey==4? "menu_on": "menu"} title="약관 및 정책설정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>약관 및 정책설정</Link> */}
            {/* <Link key={5} href="/admin/general/page_manager" className={selectedKey==5? "menu_on": "menu"} title="일반페이지 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>일반페이지 관리</Link> */}
            {/* <Link key={6} href="/admin/general/dashboard" className={selectedKey==6? "menu_on": "menu"} title="서브관리자 관리" style={{display: 'none'}}
                  onClick={()=> itemClickedHandler(6)}>서브관리자 관리</Link> */}
            {/* <div className="favorite_menu">
                <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>
                <div className="box">
                </div>
            </div> */}
        </div>
    )
}

export default Slider