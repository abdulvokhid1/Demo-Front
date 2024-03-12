// import './styles.css'
import Link from 'next/link'
import {useState} from "react";

const Slider = () => {
    const [selectedKey, setSelectedKey] = useState(0)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    return (
        <div className="aside_second">
            <span>고객문의 관리<span>〓</span></span>
            <Link key={6} href="/admin/general/dashboard" className={selectedKey==6? "menu_on": "menu"} title="상품문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(6)}>상품문의 관리</Link>
            <Link key={1} href="/admin/general/dashboard" className={selectedKey==1? "menu_on": "menu"} title="고객문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>고객문의 관리</Link>
            <Link key={2} href="/admin/general/dashboard" className={selectedKey==2? "menu_on": "menu"} title="제휴/광고문의 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(2)}> 제휴/광고문의 관리</Link>
            <Link key={3} href="/admin/general/dashboard" className={selectedKey==3? "menu_on": "menu"} title="일대일문의 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(3)}>일대일문의 게시판</Link>
            <span>게시판 통합관리<span>〓</span></span>
            <Link key={4} href="/admin/general/dashboard" className={selectedKey==4? "menu_on": "menu"} title="공지사항 게시판" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(4)}>공지사항 게시판</Link>
            <Link key={5} href="/admin/general/dashboard" className={selectedKey==5? "menu_on": "menu"} title="댓글 통합관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(5)}>댓글 통합관리</Link>
            <span>기본관리<span>〓</span></span>
            <Link key={0} href="/admin/general/dashboard" className={selectedKey==0? "menu_on": "menu"} title="관리자 메인" style={{display: 'block'}}
                onClick={()=> itemClickedHandler(0)}>관리자 메인</Link>
            <Link key={7} href="/admin/general/dashboard" className={selectedKey==7? "menu_on": "menu"} title="관리자 정보수정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(7)}>관리자 정보수정</Link>
            <Link key={8} href="/admin/general/dashboard" className={selectedKey==8? "menu_on": "menu"} title="서브관리자 정보수정" style={{display: 'none'}}
                  onClick={()=> itemClickedHandler(8)}>서브관리자 정보수정</Link>
            <Link key={9} href="/admin/general/dashboard" className={selectedKey==9? "menu_on": "menu"} title="문자충전관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(9)}>문자충전관리</Link>
            <Link key={10} href="/admin/general/dashboard" className={selectedKey==10? "menu_on": "menu"} title="팝업관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(10)}>팝업관리</Link>
            <Link key={11} href="/admin/general/dashboard" className={selectedKey==11? "menu_on": "menu"} title="약관 및 정책설정" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(11)}>약관 및 정책설정</Link>
            <Link key={12} href="/admin/general/dashboard" className={selectedKey==12? "menu_on": "menu"} title="일반페이지 관리" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(12)}>일반페이지 관리</Link>
            <Link href="/admin/general/dashboard" className={selectedKey==13? "menu_on": "menu"} title="서브관리자 관리" style={{display: 'none'}}
                  onClick={()=> itemClickedHandler(13)}>서브관리자 관리</Link>
            <div className="favorite_menu">
                <Link className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></Link>
                <div className="box">


                </div>
            </div>


        </div>
    )
}

export default Slider