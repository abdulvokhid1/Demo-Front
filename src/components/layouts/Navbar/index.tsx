'use client'
// import './styles.css'
import Link from 'next/link'
import { navSelectedKey } from '@/services/recoil/nav'
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRecoilValue, useSetRecoilState } from "recoil";

const NavElement = () => {
    const selectedKey = useRecoilValue(navSelectedKey)
    const setSelectedKey = useSetRecoilState(navSelectedKey)
    // const [selectedKey, setSelectedKey] = useState(0)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
        console.log('item:' + item)
    }
    return (
        <div className="nav_admin">
            <div className="layout_fix">
                <div className="nav_admin_box">
                    <ul>
                        <li className={selectedKey == 0 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.GENERAL.DASHBOARD} className="btn"
                                  onClick={() => itemClickedHandler(0)}> 기본관리
                            </Link>ㄴ
                        </li>
                        <li className={selectedKey == 1 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.USERS.USER_MANAGEMENT} className="btn"
                                  onClick={() => itemClickedHandler(1)}>회원관리
                            </Link>
                        </li>
                        <li className={selectedKey == 2 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION_MANAGER}
                                  className="btn"
                                  onClick={() => itemClickedHandler(2)}>매출관리
                            </Link>
                        </li>
                        <li className={selectedKey == 3 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_grade_entry.php"
                                  className="btn"
                                  onClick={() => itemClickedHandler(3)}>전산관리
                            </Link>
                        </li>
                        <li className={selectedKey == 4 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_cardsys.sub_tree_sponid_frame.php"
                                  className="btn"
                                  onClick={() => itemClickedHandler(4)}>조직도관리
                            </Link>
                        </li>
                        <li className={selectedKey == 5 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_product_main.list.php" className="btn"
                                  onClick={() => itemClickedHandler(5)}>상품관리
                            </Link>
                        </li>
                        <li className={selectedKey == 6 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_entershop.bonus_no_total_exchange.php"
                                  className="btn"
                                  onClick={() => itemClickedHandler(6)}>통계관리
                            </Link>
                        </li>
                        <li className={selectedKey == 7 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_order.list.php?odcode=today" className="btn"
                                  onClick={() => itemClickedHandler(7)}>주문관리
                            </Link>
                        </li>
                        <li className={selectedKey == 8 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_banner.list.php" className="btn"
                                  onClick={() => itemClickedHandler(8)}>디자인관리
                            </Link>
                        </li>
                        <li className={selectedKey == 9 ? "hit" : ""}>
                            <Link href="http://thesen.moinus.kr/myAdmin/_banner.list.php" className="btn"
                                  onClick={() => itemClickedHandler(8)}>로그분석
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavElement