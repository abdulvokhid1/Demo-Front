'use client'

import React from 'react'

const rq_withdrawal = () => {
  return (
    <>
    <div className="common_pages_top">

		<div className="this_page_name">
			<a href="#none" onClick={()=>{}} className="btn_back" title="뒤로"><span className="shape"></span></a>
		

		</div>		

	</div>
	{/* <!-- / 레이아웃 상단 --> */}

<div className="common_page" style={{background:'#fff'}}>

<div className="section-title" style={{marginLeft:'20px',marginTop:'10px',textAlign:"center"}}>
출금하실 금액을 입력하시고 자동계산 버튼을 누른 후  출금요청을 클릭해주세요! 
<br/><br/>
</div>
	<div className="cm_member_title">
		{/* <strong>출금 요청하기</strong> */}
	</div>
		<div className="cm_member_form cm_order_last_step" style={{marginTop:'0px', clear:'both'}}>
		<input type="hidden" name="_asset_type" value="rech" />

{/* <!--<input type="hidden" name="_paymethod" value="wallet" />--> */}
			<ul>

				<li className="ess">
					{/* <!--<span className="opt">출금방식</span>--> */}
					<div className="value this_area_open" style={{marginLeft:'10px'}}>
			 <div className="select_radio_trans_2">
       <input type="radio" name="_paymethod" value="online" id="_paymethod_online" onClick={()=>{}} checked/><label htmlFor="_paymethod_online">계좌출금</label>
			</div>
					</div>
				</li>
			</ul>
		</div>
		<div style={{paddingBottom:'50px'}}></div>
    <form name='frm' method='post' target="common_frame">
	<input type="hidden" name="_mode" value="withdraw" />
	<input type="hidden" name="_point_return_last" />
	<input type="hidden" name="_point_fee" />
	<input type="hidden" name="_point_per" />
	<input type="hidden" name="_manage_fee" />
	<input type="hidden" name="_manage_per" />
	<input type="hidden" name="_cashback_return" />
	<input type="hidden" name="wr_tid" value="" />

	<div className="cm_mypage_action_bonus">

		<div className="my_score" style={{display: 'flex'}}>
			<ul>
				<li>
					<div className="opt" style={{fontSize:'16px'}}>보유 캐시</div>
					<div className="value"><strong style={{fontSize:'20px'}}>0</strong></div>
				</li>
				<li>
					<div className="opt" style={{fontSize:'18px'}}>인출금액</div><br/>
					<div className="value">
					<input type="text" name="_point_return" className="input_design_withdraw" style={{marginTop:'-5px'}}/>
					</div>
				</li>

					<li>
						<div className="opt" style={{fontSize:"16px"}}>수수료 3.5%</div>
						<div className="value"><span className='shop_btn_pack' style={{float:'none'}}>
              <input type="button" id="return_per_calc" className="input_small gray" style={{cursor: "pointer"}} value="자동계산"/></span></div>
					</li>	
					<li>
						<div className="opt" style={{fontSize:"16px"}}>출금요청금액</div>
						<div className="value"><strong id="ID_return_confirm" style={{fontSize:"20px"}}>0</strong></div>
					</li>	

			</ul>
		</div>
		<div className="cm_user_guide_bonus" style={{fontWeight:'normal',color:"red"}}>
			<dl  style={{fontWeight:'normal',color:"red"}}>

				<dt id="wallet_ret_msg" style={{fontWeight:'normal',color:"red",textAlign:'center'}}>
				금액 입력 후 자동계산을 눌러주세요
				</dt>
			<dd></dd>
			</dl>
		</div>

	</div>
  <div className="cm_user_guide_bonus asset_online">
			<dl>
				<dt style={{textAlign:"center"}}>
								국민은행  / 111111111111111111 /
				</dt>
				<dd></dd>
			</dl>
		</div>
		<div className="cm_bottom_button">
			<ul style={{marginTop:'20px'}}>
				<li><span className="button_pack"><a href="#none" onClick={()=>{}}title="" className="btn_lg_color" style={{fontSize:"16px"}}>출금요청하기<span className="edge"></span></a></span></li>
			</ul>
		</div>
	</form>
	<div className="cm_member_title">
		<strong>출금 리스트</strong>
	</div>

	{/* <!-- 마이리스트 --> */}
	<div className="cm_bonus_list5 list_return">
				{/* <!-- 내용없을경우 모두공통 --> */}
		<div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
		{/* <!-- // 내용없을경우 모두공통 --> */}
			</div>
      {/* <!-- .cm_mypage_list --> */}
	<div className="cm_paginate"  style={{display:"none"}}>
			<span className='lineup'><span className='nextprev'><span className='btn'/>
        <span className='no'><span className='icon ic_first'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=1' className='ok' title='처음' >
          <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'>
            </span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=0' className='ok' title='이전' >
              <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span>
              <span className='nextprev'/><span className='btn'><span className='no'/>
                <span className='icon ic_next'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=2' className='ok' title='다음' ></a>
	{/* <!-- 마이리스트 --> */}
	<div className="cm_bonus_list5 list_transfer" style={{display:"none"}}>
				{/* <!-- 내용없을경우 모두공통 --> */}
		<div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
		{/* <!-- // 내용없을경우 모두공통 --> */}
			</div>
      {/* <!-- .cm_mypage_list --> */}

	<div className="cm_paginate"  style={{display:"none"}}>
			<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'>
        <span className='icon ic_first'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=1' className='ok' title='처음' >
          <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'>
            <span className='icon ic_prev'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=0' className='ok' title='이전' >
              <span className='icon ic_prev'></span></a></span></span>
              <span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span><span className='nextprev'>
                <span className='btn'><span className='no'><span className='icon ic_next'></span></span>
                <a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=2' className='ok' title='다음' >
                  <span className='icon ic_next'></span></a></span><span className='btn'><span className='no'>
                    <span className='icon ic_last'></span></span><a href=' ?&sk=myoffice&pn=mypage.bonus_withdraw.request&listpg=0' className='ok' title='끝' >
                      <span className='icon ic_last'></span></a></span></span></span>	</div>
</div>
</div>
</>

  )
}

export default rq_withdrawal