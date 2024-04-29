'use client'
// import './styles.css'
import Link from 'next/link'
import { navSelectedKey } from '@/services/recoil/nav'
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { it } from "date-fns/locale";
import {
    calcSelectedKey, designSelectedKey,
    generalSelectedKey, logSelectedKey, orderSelectedKey,
    orgSelectedKey, prodSelectedKey,
    saleSelectedKey, statSelectedKey,
    userSelectedKey
} from "@/services/recoil/selectedKey";
import { setUseStrictShallowCopy } from "immer";

const NavElement = () => {
    const selectedKey = useRecoilValue(navSelectedKey)
    const setSelectedKey = useSetRecoilState(navSelectedKey)
    const setGeneralSelectedKey = useSetRecoilState(generalSelectedKey)
    const setUserSelectedKey = useSetRecoilState(userSelectedKey)
    const setSaleSelectedKey = useSetRecoilState(saleSelectedKey)
    const setCalcSelectedKey = useSetRecoilState(calcSelectedKey)
    const setOrgSelectedKey = useSetRecoilState(orgSelectedKey)
    const setProdSelectedKey = useSetRecoilState(prodSelectedKey)
    const setStatSelectedKey = useSetRecoilState(statSelectedKey)
    const setOrderSelectedKey = useSetRecoilState(orderSelectedKey)
    const setDesignSelectedKey = useSetRecoilState(designSelectedKey)
    const setLogSelectedKey = useSetRecoilState(logSelectedKey)

    // const [selectedKey, setSelectedKey] = useState(0)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
        switch (item) {
            case 0: setGeneralSelectedKey(0);
            case 1: setUserSelectedKey(0);
            case 2: setSaleSelectedKey(0);
            case 3: setCalcSelectedKey(0);
            case 4: setOrgSelectedKey(0);
            case 5: setProdSelectedKey(1);
            case 6: setStatSelectedKey(0);
            case 7: setOrderSelectedKey(0);
            case 8: setDesignSelectedKey(0);
            case 9: setLogSelectedKey(0);

        }
        // console.log('item:' + item)
    }
    return (
        <div className="nav_admin">
            <div className="layout_fix">
                <div className="nav_admin_box">
                    <ul>
                        <li className={selectedKey == 0 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.GENERAL.DASHBOARD} className="btn"
                                  onClick={() => itemClickedHandler(0)}> 기본관리
                            </Link>
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
                            <Link href={PAGE_ROUTES.CALC.CALC_MANAGEMENT}
                                  className="btn"
                                  onClick={() => itemClickedHandler(3)}>전산관리
                            </Link>
                        </li>
                        <li className={selectedKey == 4 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.ORGANIZATION_TREE.SPONSOR}
                                  className="btn"
                                  onClick={() => itemClickedHandler(4)}>조직도관리
                            </Link>
                        </li>
                        <li className={selectedKey == 5 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.SHOP.SHOP_PRODUCT_MANAGEMENT} className="btn"
                                  onClick={() => itemClickedHandler(5)}>상품관리
                            </Link>
                        </li>
                        <li className={selectedKey == 6 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.STAT.STAT_MANAGEMENT}
                                  className="btn"
                                  onClick={() => itemClickedHandler(6)}>통계관리
                            </Link>
                        </li>
                        <li className={selectedKey == 7 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.ORDER.ORDER_MANAGEMENT} className="btn"
                                  onClick={() => itemClickedHandler(7)}>주문관리
                            </Link>
                        </li>
                        <li className={selectedKey == 8 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.DESIGN.DESIGN_MANAGEMENT} className="btn"
                                  onClick={() => itemClickedHandler(8)}>디자인관리
                            </Link>
                        </li>
                        <li className={selectedKey == 9 ? "hit" : ""}>
                            <Link href={PAGE_ROUTES.LOG.LOG_MANAGEMENT} className="btn"
                                  onClick={() => itemClickedHandler(9)}>로그분석
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavElement