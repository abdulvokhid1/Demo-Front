'use client'

import React from 'react'


const cash_transfer = () => {
  return (
   
    <>
     <div className="common_pages_top">
  		<div className="this_page_name">
			<a href="#none" onClick={()=>{}}><span className="shape"></span></a>

			<div className="txt">쇼핑캐시 전환하기</div>

		</div>		

	</div>
	{/* // <!-- / 레이아웃 상단 --> */}

<div className="common_page">

	<div className="section-title" style={{marginLeft:'20px',marginTop:'10px'}}></div>

	{/* <!-- 페이지 이용도움말 --> */}
	<div className="cm_user_guide_bonus">
		<dl>
			<dd></dd>
		</dl>
	</div>

	<form name='frm' method='post' target="common_frame">
	<input type="hidden" name="_mode" value="transfer" />
	<input type="hidden" name="_point_return_last" />
	<input type="hidden" name="_point_fee" />
	<input type="hidden" name="_point_per" value="0" />
	<input type="hidden" name="_manage_fee" />
  <input type="hidden" name="_manage_per" />
	<input type="hidden" name="_cashback_return" />
	<div className="cm_mypage_action_bonus" style={{border:"0px"}}>


		<div className="cm_member_form cm_order_last_step" style={{marginTop:'0px',clear:'both'}}>
		<input type="hidden" name="_asset_type" value="rech" />
		<label style={{width:'100%', float:'left', border:'1px solid #fa0f40', borderRadius:'0px',textAlign:'center', color:'#fa0f40',height:'50px', padding:'15px', fontSize:'18px',fontWeight:'bold'}}>
    <input type="radio" name="_paymethod" value="transform" id="_paymethod_transform" onClick={()=>{}}checked />CASH 전환</label>
    </div>

		{/* <!--  참여점수 통계 --> */}
		<div className="my_score">
			<ul>

			<li>
					<div className="opt" style={{fontSize:'16px'}}>보유금액</div>
					<div className="value"><strong style={{fontSize:'20px'}}>0</strong></div>
				</li>

			<li>
					<div className="opt" style={{fontSize:'16px'}}>금액</div>
					<div className="value"><input type="text" name="_point_return" className="input_design_withdraw" style={{marginTop:'-5px'}} /></div>
				</li>

				<li>
					<div className="opt trans_per_text" style={{fontSize:'16px'}}>수수료 </div>
					<div className="value"><span className='shop_btn_pack' style={{float:'none'}}>
          <input type="button" id="return_per_calc" className="input_small gray" style={{cursor: 'pointer'}} value="자동계산"/></span></div>
				</li>
				<li>
					<div className="opt" style={{fontSize:'16px'}}>요청금액</div>
					<div className="value"><strong id="ID_return_confirm" style={{fontSize:'20px'}}>0</strong></div>
				</li>
		</ul>
		</div>
		<div className="cm_member_form cm_order_last_step asset_transform" style={{marginTop:'0px',clear:'both'}}>
		</div>
    
    		<div className="cm_member_form cm_order_last_step asset_transfer" style={{marginTop:'0px',clear:'both'}}>

			{/* <ul>
				<li className="ess">
					<div className="cm_member_title">
						<strong>받는사람</strong> 검색
					</div>

					<div className="value" style={{marginLeft:'10px'}}>
						<input type="text" name="payee" id="payee" className="input_design" onChange={()=>{}} maxLength={12} placeholder="받는사람 아이디 입력" style={{width:'80%',float:'left'}} />
						<span className="button_pack" style={{width:'19%',float:'right',clear:'none'}}>
              <a href="#none" onClick={()=>{}}className="btn_md_white">검색<span className="edge"></span></a></span>
					</div>

				</li>
			</ul> */}

		</div>

		<div className="cm_user_guide_bonus" style={{fontWeight:'normal', color:"red",display: 'center'}}>
			<dl  style={{fontWeight:'normal', color:"red"}}>
				<dt id="wallet_ret_msg" style={{fontWeight:'normal', color:"red",textAlign:'center'}}>
				금액 입력 후 자동계산을 눌러주세요
				</dt>
				<dd></dd>
			</dl>
		</div>
	</div>

		<div className="cm_bottom_button">
				<ul style={{marginTop:'20px'}}>

					<li><span className="button_pack"><a href="#none" onClick={()=>{}} title="" className="btn_lg_color">신청하기<span className="edge"></span></a></span></li>
				</ul>

			</div>
	</form>
	<div className="cm_member_title">
		<strong></strong>신청 리스트
	</div>

	{/* <!-- 마이리스트 --> */}
	<div className="cm_bonus_list5 list_transfer">
				{/* <!-- 내용없을경우 모두공통 --> */}
		<div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
		{/* <!-- // 내용없을경우 모두공통 --> */}
			</div>
      {/* <!-- .cm_mypage_list --> */}


	<div className="cm_paginate"  style={{display:'none'}}>
			<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'>
      <span className='icon ic_first'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=1' className='ok' title='처음' >
      <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=-1' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=1'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=1' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>	</div>

	{/* <!-- 마이리스트 --> */}
	<div className="cm_bonus_list5 list_transfer" style={{display:"none"}}>
				{/* <!-- 내용없을경우 모두공통 --> */}
		<div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
		{/* <!-- // 내용없을경우 모두공통 --> */}
			</div>
      {/* <!-- .cm_mypage_list --> */}

	<div className="cm_paginate"  style={{display:"none"}}>
			<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}}className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_transform.request&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>	</div>
</div>

{/* <link href="/myAdmin/css/m.shop.css" rel="stylesheet" type="text/css" /> */}
<section id="container_shop" className="payee_popup_section" style={{display:"none"}}>
			{/* <!-- 컨텐츠 --> */}
		<div className="page_title">
			<span></span>
        검색
			<a href="#none" onClick={()=>{}} title="뒤로" style={{right:'0px'}}><span className="shop_icon_small btn_popup_close"></span></a>

		</div>

		<article className="article_box pop ">
		<form name="frm_payee" id="frm_payee" method='get' onSubmit={()=>{}}>

			{/* <!-- 도움말 --> */}
			<div className="guide_tx">
				<ul>
					<li><span className="shop_icon ic_dot"></span> 받으시는분 아이디를 정확하게 입력하세요</li>
				</ul>
			</div>

			{/* <!-- 폼 --> */}
			<div className="zipcode">
				<input type="submit" name="" className="inner_btn2" value="검색" />
				<div className="input"><input type="text" name="payee_keyword" id="payee_keyword"/></div>
			</div>

		</form>
		</article>

		<article className="article_box pop payee_value_display" style={{display:"none"}}>
		</article>

</section>

<div className="notice_bottom">
<p><a href="?sk=myoffice&pn=board.view&boardid=&_uid=1">내용이 없습니다.</a></p>
</div>



<div style={{clear:'both',height:'145px',margin:'145px'}}></div>

</>

  )
}

export default cash_transfer