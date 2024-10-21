
const ClientNav = () => {

    return(
        <>
<div className="common_ajax_proc"></div>
{/* <!-- dashboard page --> */}
<div className="wapper">
    <div className="container">

{/* <style>
.nav .menu p {font-size:16px}
</style> */}
       {/* <!-- menu --> */}
        <div className="nav">
            <ul className="menu">
                <li>
                    <a href="/?sk=myoffice">
                        <div className="icon"><img src="/pages_icons/icon_menu_1.svg"/></div>
                        <p>대시보드</p>
                    </a>
                </li>

                {/* <li>
                    <a href="?sk=myoffice&pn=mypage.wallet.info">
                        <div className="icon"><img src="/pages_unique03/images/main/mn_icon_wallet.png"  style={{width:"19px"}}/></div>
                        <p>지갑주소</p>
                    </a>
                </li> */}
                <li>
                    <a href="?sk=myoffice&pn=trade.order.charge">
                        <div className="icon"><img src="/pages_icons/icon_menu_7.svg"/></div>
                        <p>구매신청</p>
                    </a>
                </li>

                <li>
                    <a href="?sk=myoffice&pn=trade.order.charge_list">
                        <div className="icon"><img src="/pages_icons/icon_menu_5.svg"/></div>
                        <p>입금내역</p>
                    </a>
                </li>
                <li>
                    <a href="?sk=myoffice&pn=mypage.bonus_transform.request">
                        <div className="icon"><img src="/pages_icons/icon_care_03_white.png"  style={{width:'23px',height:"23px"}}/></div>
                        <p>전환신청</p>
                    </a>
                </li>
                <li>
                    <a href="?sk=myoffice&pn=mypage.bonus_withdraw.request">
                        <div className="icon"><img src="/pages_icons/member_text_view_white.png" style={{width:"19px"}}/></div>
                        <p>출금신청</p>
                    </a>
                </li>

{/* <!--
                <li>
                    <a href="?sk=myoffice&pn=mypage.bonus_wallet_log.list">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_8.svg"/></div>
                        <p>코드페이거래내역</p>
                    </a>
                </li>
--> */}

                <li>
                    <a href="?sk=myoffice&pn=mypage.bonus.list">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_5.svg"/></div>
                        <p>보너스내역</p>
                    </a>
                </li>

                <li>
                    <a href="?sk=myoffice&pn=mypage.bonus.list_inout">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_6.svg"/></div>
                        <p>입출금내역</p>
                    </a>
                </li>

                <li>
                    <a href="?sk=myoffice&pn=mypage.recom.list">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_4.svg"/></div>
                        <p>추천회원</p>
                    </a>
                </li>
                {/* <li>
                    <a href="?sk=myoffice&pn=sub_tree_chart_frame">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_2_recomid.png" style={{width:'24px'}}/></div>
                        <p>추천계보도</p>
                    </a>
                </li> */}
                {/* <li>
                    <a href="?sk=myoffice&pn=sub_tree_sponid_frame">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_2.svg"/></div>
                        <p>후원계보도</p>
                    </a>
                </li> */}
                <li>
                    <a href="?sk=myoffice&pn=mypage.member.info">
                        <div className="icon"><img src="/pages_unique03/images/icon_menu_3.svg"/></div>
                        <p>나의정보</p>
                    </a>
                </li>

{/* <!--
                <li>
                    <a href="">
                        <div className="icon"><img src="/pages_unique03/images/icon_cs.svg"/></div>
                        <p>고객센터</p>
                    </a>
                </li>
--> */}
                <li className="slide_bot_space">
                </li>
            </ul>
        </div>
<iframe name="common_frame" src="about:blank" style={{display:'none',width:'0',height:'0'}}></iframe>
<iframe name="common_idchk" src="about:blank" style={{display:'none',width:'0',height:'0'}}></iframe>
<iframe name="common_auth" src="about:blank" style={{display:'none',width:'0',height:'0'}}></iframe>

</div>
</div>
</>
    )
}

export default ClientNav