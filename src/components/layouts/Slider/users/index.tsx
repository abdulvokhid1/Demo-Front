// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
           <span>기본관리<span>〓</span></span>
            <a href="member_management" className="menu_on" title="회원 통합관리" style={{display: 'block'}}>회원 통합관리</a>
            <a href="registration" className="menu" title="회원등록" style={{display: 'none'}}>회원등록</a>
            <a href="StatusOfProceedsPayment" className="menu" title="수익금 지급관리" style={{display: 'block'}}>수익금 지급관리</a>
            <a href="StatusOfProceedsManagement" className="menu" title="수익금 현황관리" style={{display: 'block'}}>수익금 현황관리</a>
            <a href="ProceedsOfChanges" className="menu" title="수익금 변동내역" style={{display: 'block'}}>수익금 변동내역</a>
            <a href="RecommenderChangeLog" className="menu" title="추천인 변경로그" style={{display: 'block'}}>추천인 변경로그</a>
            <a href="SponsorChangeLog" className="menu" title="후원인 변경로그" style={{display: 'block'}}>후원인 변경로그</a>
            
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}

export default Slider