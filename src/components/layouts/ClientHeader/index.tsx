
const ClientHeader = () => {

    return(
        <div className="main">

        {/* <!-- header --> */}
        <header>
            <div className="arrow">
                <div className="open"><img src="/pages_unique03/images/icon_open.svg"/></div>
                <div className="closed"><img src="/pages_unique03/images/icon_closed.svg"/></div>
            </div>

            <a href="/m/?sk=myoffice">
            <h1>
      더센						
            </h1>
            </a>
            <div className="userinfo">
                <div className="alarm">
                <a href="/pages_unique03/member.login.pro.php?_mode=logout" className="btn_member" style={{border:'1px solid #666',padding:"4px"}}>로그아웃</a></div>
                <a href="/m/?sk=myoffice&pn=mypage.member.info"><div className="name">
                    <img src="/pages_unique03/images/icon_name.svg"/>
                    <p>담당자</p>
                </div></a>
            </div>
        </header>
</div>

    )
}

export default ClientHeader