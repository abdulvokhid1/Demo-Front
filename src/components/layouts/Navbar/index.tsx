// import './styles.css'
import Link from 'next/link'


const NavElement = () => {
    return (
        <div className="nav_admin">
            <div className="layout_fix">
                <div className="nav_admin_box">
                    <ul>
                        <li className="hit"><a href="http://thesen.moinus.kr/myAdmin/_main_bonus_dashboard.php"
                                               className="btn">기본관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_entershop.member_all.list.php"
                                            className="btn">회원관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_entershop.entry_revenues_list.php"
                                            className="btn">가맹점관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_grade_entry.php"
                                            className="btn">전산관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_cardsys.sub_tree_sponid_frame.php"
                                            className="btn">조직도관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_product_main.list.php"
                                            className="btn">상품관리</a></li>
                        <li className=""><a
                            href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_total_exchange.php"
                            className="btn">통계관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_order.list.php?odcode=today"
                                            className="btn">주문관리</a></li>
                        <li className=""><a href="http://thesen.moinus.kr/myAdmin/_banner.list.php"
                                            className="btn">디자인관리</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavElement