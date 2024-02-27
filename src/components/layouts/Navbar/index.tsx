import styles from './styles.module.css'
import Link from 'next/link'


const NavElement = () => {
    return (
        <div className="nav_admin">
            <div className="nav_adminLayoutFix">
                <div className={styles.nav_adminAdmin_box}>
                    <ul>
                        {/*활성화시 hit클래스 추가*/}

                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_main_bonus_dashboard.php"
                                               className={styles.nav_adminAdmin_boxHitBtn}>기본관리</Link></li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_entershop.member_all.list.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>회원관리</Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_entershop.entry_revenues_list.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>가맹점관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_grade_entry.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>전산관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_cardsys.sub_tree_sponid_frame.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>조직도관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_product_main.list.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>상품관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link
                            href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_total_exchange.php"
                            className="btn">통계관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_order.list.php?odcode=today"
                                            className={styles.nav_adminAdmin_boxHitBtn}>주문관리
                            </Link>
                        </li>
                        <li className={styles.nav_adminAdmin_boxHit}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_banner.list.php"
                                            className={styles.nav_adminAdmin_boxHitBtn}>디자인관리
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavElement