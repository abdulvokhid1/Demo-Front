
const ClientFooter = () => {

    return(
        
<div className="appBottomMenu">
{/* <!--
	<a href="" className="item active">
		<div className="col">
			<strong>대시보드</strong>
		</div>
	</a>
--> */}

	<a href="/?sk=myoffice&pn=dashboard" className="item active">
		<div className="col">
			<img src="/pages_unique03/images/main/navi_icon_home.png" style={{width:"18px"}}/>
			<strong>대시보드</strong>
		</div>
	</a>

	<a href="/?sk=myoffice&pn=mypage.bonus.list" className="item ">
		<div className="col">
			<img src="/pages_unique03/images/main/navi_icon_recomm.png" style={{width:"18px"}}/>
			<strong>보너스</strong>
		</div>
	</a>

	<a href="/?sk=myoffice&pn=mypage.recom.list" className="item ">
		<div className="col">
			<img src="/pages_unique03/images/main/navi_icon_qrn.png" style={{width:"18px"}}/>
			<strong>나의QR</strong>
		</div>
	</a>

	<a href="/?sk=myoffice&pn=mypage.member.info" className="item ">
		<div className="col">
			<img src="/pages_unique03/images/main/navi_icon_my.png" style={{width:"20px"}}/>
			<strong>나의정보</strong>
		</div>
	</a>

</div>
    )
}

export default ClientFooter