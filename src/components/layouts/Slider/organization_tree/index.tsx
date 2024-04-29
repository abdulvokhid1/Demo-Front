// import './styles.css'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil";
import { orgSelectedKey } from "@/services/recoil/selectedKey";
import Routes from "@/utils/constants/routes";
import { useEffect } from "react";
import { navSelectedKey } from "@/services/recoil/nav";

const Slider = () => {
    const selectedKey = useRecoilValue(orgSelectedKey)
    const setSelectedKey = useSetRecoilState(orgSelectedKey)
    const setNavSelectedKey = useSetRecoilState(navSelectedKey)
    const itemClickedHandler = (item: number) => {
        setSelectedKey(item);
    }
    useEffect(() => {
        setNavSelectedKey(4)
    }, []);
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>조직도 <span>〓</span></span>
            <Link key={0} href={Routes.ORGANIZATION_TREE.SPONSOR} className={selectedKey==0? "menu_on": "menu"} title="후원조직도" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(0)}>추천 조직도</Link>
            {/* <Link key={1} href={Routes.ORGANIZATION_TREE.RECOMMENDATION} className={selectedKey==1? "menu_on": "menu"} title="추천조직도" style={{display: 'block'}}
                  onClick={()=> itemClickedHandler(1)}>후원 조직도</Link>
             */}
            {/*<div className="favorite_menu">*/}
            {/*    <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>*/}
            {/*    <div className="box">*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Slider