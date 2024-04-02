// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#22c79d'}}>매출등록 <span>〓</span></span>
            <a href="sale_registration" className="menu" title="매출등록"
               style={{display: 'block'}}>매출등록</a>
            <a href="CenterRegistration"
               className="menu" title="센터등록 관리"
               style={{display: 'block'}}>센터등록</a>
                  <span style={{backgroundColor: '#22c79d'}}>신청업무 관리<span>〓</span></span>
            <a href="PurchaseRequest" className="menu" title="입금신청" style={{display: 'block'}}>입금신청</a>
            <a href="ApplicationOfWithdrawal" className="menu" title="공지사항 게시판" style={{display: 'block'}}>출금신청</a>
              <span style={{backgroundColor: '#22c79d'}}>레벨 관리<span>〓</span></span>
            <a href="LevelManagement" className="menu_on" title="관리자 메인" style={{display: 'block'}}>회원레벨 설정</a>
          
            <a href="OtherPreferences" className="menu" title="일반페이지 관리" style={{display: 'block'}}>기타환경 설정</a>
          
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}

export default Slider