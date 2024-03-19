// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#22c79d'}}>매출등록 관리<span>〓</span></span>
            <a href="_shop_product_talk.list.php" className="menu" title="매출등록"
               style={{display: 'block'}}>매출등록</a>
            <a href="_shop_request.list.php"
               className="menu" title="센터등록 관리"
               style={{display: 'block'}}>센터등록</a>
                  <span style={{backgroundColor: '#22c79d'}}>신청업무 관리<span>〓</span></span>
            <a href="_bbs.post_qna.list.php" className="menu" title="입금신청" style={{display: 'block'}}>입금신청</a>
            <a href="_bbs.post_notice.list.php" className="menu" title="공지사항 게시판" style={{display: 'block'}}>출금신청</a>
              <span style={{backgroundColor: '#22c79d'}}>레벨 관리<span>〓</span></span>
            <a href="_main_bonus_dashboard.php" className="menu_on" title="관리자 메인" style={{display: 'block'}}>회원레벨 설정</a>
          
            <a href="_normalpage.list.php" className="menu" title="일반페이지 관리" style={{display: 'block'}}>기타환경 설정</a>
          
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}

export default Slider