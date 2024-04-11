'use client'

import React from 'react'


const list = () => {
  return (
    <>
    <div className="common_pages_top">

	<div className="this_page_name">
		<a href="#none" onClick={()=>{}} className="btn_back" title="뒤로"><span className="shape"></span></a>
		<div className="txt">입출금내역</div>
		<a href="#none" onClick={()=>{}} className="btn_openmenu" title="메뉴열기"><span className="shape"></span></a>
		<div className="open_menu">
			<ul>
	<li><a href="?sk=myoffice&pn=mypage.bonus.list_inout&po_type=in" className="menu ">입금내역</a></li>
	<li><a href="?sk=myoffice&pn=mypage.bonus.list_inout&po_type=out" className="menu ">출금내역</a></li>

			</ul>
		</div>

	</div>		

</div>
{/* // <!-- / 레이아웃 상단 --> */}

<div className="common_page" style={{background:'#fff'}}>

<div className="cm_shop_title">
	<strong></strong> 입출금내역
	<div className="explain"></div>
</div>
<div className="section-title" style={{marginLeft:'20px',marginTop:'10px'}}></div>

<div className="common_inner common_full">

	{/* <!-- ●●●●●●●●●● 주문내역조회 --> */}
	<div className="cm_order_search">

	{/* <!--
			<span className="button_pack"><a href="/?sk=myoffice&pn=mypage.bonus_withdraw.request" className="submit_period btn_md_black">출금하기</a></span><br>
--> */}

				{/* <!-- 기간검색 --> */}
		<div className="period">
			<ul>
				<li className="hit"><a href="/m/?sk=myoffice&pn=mypage.bonus.list_inout&_mode=&_period=all" className="btn">전체</a></li>
				<li className=""><a href="/m/?sk=myoffice&pn=mypage.bonus.list_inout&_mode=&_period=today" className="btn">오늘</a></li>
				<li className=""><a href="/m/?sk=myoffice&pn=mypage.bonus.list_inout&_mode=&_period=week" className="btn">1주일</a></li>
				<li className=""><a href="/m/?sk=myoffice&pn=mypage.bonus.list_inout&_mode=&_period=month" className="btn">1개월</a></li>
				<li className=""><a href="/m/?sk=myoffice&pn=mypage.bonus.list_inout&_mode=&_period=three" className="btn">3개월</a></li>
			</ul>
		</div>

		{/* <!-- 직접입력검색 --> */}
		<div className="detail">
			<form name="form_period">
			<input type="hidden" name="pn" value="mypage.bonus.list_inout"/><input type="hidden" name="_mode" value=""/>
			<input type="hidden" name="sk" value="myoffice"/>

			<div className="input_wrap">
				<ul>
					<li><input type="text" name="_period_s" id="s_date" readOnly value="" className="input_date"/></li>
					<li><input type="text" name="_period_e" id="e_date" readOnly value="" className="input_date"/></li>
				</ul>					
			</div>
			<span className="button_pack"><a href="#none" onClick={()=>{}} className="submit_period btn_md_black">조회</a></span>
			</form>
		</div>
	</div>
	{/* <!-- / 주문내역조회 --> */}
	{/* <!-- ●●●●●●●●●● 카테고리있을경우 게시판메뉴 --> */}
	
	{/* <!-- //카테고리있을경우 게시판메뉴 --> */}

	{/* <!-- 주문내역 리스트 3개까지  --> */}
	<div className="cm_bonus_list5">
		

		<div className="list_TB">
			<ul>

				<li>등록일</li>
				<li>내용</li>
				<li>입금</li>

				<li>출금</li>

				<li>처리후잔액</li>

			</ul>
		</div>
		<div className="list_TB">
		
			{/* <!-- 내용없을경우 모두공통 --> */}
			<div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
			{/* <!-- // 내용없을경우 모두공통 --> */}
		
		<div>

	</div>
  {/* <!-- .cm_order_list --> */}

</div>
{/* <!-- .common_inner --> */}
</div>
{/* <!-- .common_page --> */}
<div style={{clear:'both'}}></div>


<div className="common_page" style={{background:'#fff'}}>
<div className="common_inner common_full">

	{/* <!-- 페이지네이트 --> */}
	
	{/* <!-- // 페이지네이트 --> */}

</div>
{/* <!-- .common_inner --> */}
</div>
{/* <!-- .common_page --> */}

{/* <link rel='stylesheet' href='/include/js/jquery/jqueryui/jquery-ui.min.css' type='text/css'> */}

<div className="notice_bottom">

</div>

<div style={{clear:'both',height:'145px',margin:'145px'}}></div>
</div>
</div>
</>
  )
}

export default list