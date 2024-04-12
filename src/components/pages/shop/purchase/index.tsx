'use client'

import React from 'react'

const purchase = () => {
  return (
    <>
    <div className="common_pages_top">

	<div className="this_page_name">
		<a href="#none" onClick={()=>{}} className="btn_back" title="뒤로"><span className="shape"></span></a>


		<div className="txt">입금신청</div>

	</div>		

</div>
<div className="common_page">


{/* <style>
.mypoint_charge {margin:5px;float:right;}
.mypoint_charge dt {font-size:16px; font-weight:600; color:#000;}
.mypoint_charge dt strong {letter-spacing:0px; color:#ff0000}
.mypoint_charge dd {color:#ff6600; margin-top:6px}
.mypoint_charge dd strong {letter-spacing:0px;}

.apply_charge_point {position:absolute; top:50%; margin-top:-18px}
.apply_charge_point input {border:2px solid #ff6600; height:31px; line-height:31px; float:left; text-align:right; padding:0 10px; font-weight:800; color:#000; width:120px; font-size:14px; letter-spacing:0 }
.apply_charge_point input:focus {background:#eee; border:2px solid #ff1919 !important;}
.apply_charge_point .button_pack {float:left;}
.apply_charge_point .button_pack a {margin-left:5px !important}

</style> */}

<div className="section-title" style={{marginLeft:'20px',marginTop:'10px'}}>패키지를 선택하고 입금신청하기를 완료해주세요</div>
<input type="hidden" name="input_product" value="코드페이"/>
<input type="hidden" name="input_name" value="담당자"/>
<input type="hidden" name="input_htel" value="010-0000-0000"/>

	<div className="cm_member_form" style={{clear:'both', margin:'0px 5px'}}>
				<select name='input_amount' id='input_amount' className='select_design add_option add_option_chk' style={{fontSize:'16px'}} onChange={()=>{}}>
					<option value=''>입금 패키지 선택</option>
					<option  value='110,000' >11만원 </option>
        </select>
				<input type="hidden" name="mb_entry_price" value="1200000"/>
			<input type='hidden' name="gross_sale_price" value="1000000"/>
			<input type='hidden' name="temp_pprice" value="1200000"/>
			<input type='hidden' name="temp_gross_sale_price" value="1000000"/>
			<input type='hidden' name="multi_pv" value=""/>
			<input type='hidden' name="multi_real_pv" value=""/>
			<input type='hidden' name="multi_cnt" value=""/>
	</div>
  
<div style={{clear:'both'}}></div>
<div className="cm_member_title">
  <strong></strong>결제방식 선택	</div>

  <input type="hidden" name="_asset_type" value="rech" />

     <div className="select_radio_trans_2">
       <input type="radio" name="_paymethod" value="wallet" id="_paymethod_rech" onClick={()=>{}} checked/><label htmlFor="_paymethod_rech">카드결제</label>
       <input type="radio" name="_paymethod" value="online" id="_paymethod_online" onClick={()=>{}} checked/><label htmlFor="_paymethod_online">계좌이체</label>
       <input type="radio" name="_paymethod" value="online" id="_paymethod_online" onClick={()=>{}} checked/><label htmlFor="_paymethod_online">대면결제</label>
    </div>

  <div className="cm_member_form cm_order_last_step asset_rech" style={{marginTop:'0px',marginBottom:'-40px'}}>
    <ul>
      <li className="ess ID_paymethod_wallet" style={{display:'none'}}>
      </li>
    </ul>
  </div>
<div style={{clear:'both',height:'30px'}}></div>


<div className="cm_member_title asset_online" style={{display:'none',marginTop:'-10px'}}>
  <strong></strong>입금계좌 안내	</div>
  <div className="cm_order_form cm_order_last_step asset_online" style={{display:'none',marginTop:'-10px'}}>
    <ul>
      <li className="ess ID_paymethod_online" style={{display:'none'}}>
        <span className="opt">입금은행 선택</span>
        <div className="value">
          <div className="select">
            <span className="shape"></span>
            <select name='_bank'  >
              <option value=''>- 계좌 선택 - </option>
              <option value='[국민은행 ] 111111111111111111, ' >[국민은행 ] 111111111111111111, </option></select>
          </div>
        </div>
      </li>

      <li className="ess ID_paymethod_online">
        <span className="opt">입금계좌</span>
        <div className="value">
         <input id="" style={{width:'100%',fontSize:'18px'}} className="input_design" value="[국민은행 ] 111111111111111111, " readOnly/>
        </div>
      </li>

              <dl>
              <dd>입금신청 후 3일 이내에 입금하지 않으시면 자동으로 주문이 취소됩니다.</dd>
            </dl>
            
        <li className="ess ID_paymethod_online">
        <span className="opt">입금자명</span>
        <div className="value">
          <input type="text" name="_deposit" className="input_design" style={{width:'150px'}} value="담당자" />
        </div>
      </li>
    </ul>
  </div>

  <div id="pg_loading" style={{margin:'20px 10px'}}>

  <div className="cm_order_form">
  <textarea>
        <input name="_memo" className="textarea_design" style={{textAlign:'center',background:'#fff', border:'1px solid #aaa', width:'100%',height:'40px'}} placeholder='메모 입력'/>
  </textarea>
  </div>

    <div className="cm_bottom_button">
      <ul style={{marginTop:'20px'}}>
        <li><span className="button_pack"><a href="#none" onClick={()=>{}} title="" className="btn_lg_color">입금신청하기<span className="edge"></span></a></span></li>
      </ul>
    </div>
      </div>


<div className="cm_member_title">
  <strong></strong>입금내역	</div>


{/* // <!-- 마이리스트 --> */}

<div className="cm_bonus_list4 list_return">
      <div className="list_TB">

      <ul>
        <li>시간</li>
        <li>내용</li>
        <li>금액</li>

        <li>상태</li>
      </ul>
  </div>

  <div className="list_TB">
        <ul>
          <li>2024-03-26 16:05:24</li>
          <li>입금신청</li>
          <li style={{textAlign:'right'}}>1,000,000</li>
          <li>
          <span>-</span>
          </li>
        </ul>
  </div>

    </div>
    {/* <!-- .cm_mypage_list --> */}

<div className="cm_paginate"  style={{display:"none"}}>
    <span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' >
      <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' >
        <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span><span className='nextprev'><span className='btn'>
          <span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'>
            <span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=1' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>	</div>
</div>
<br/><br/><br/><br/><br/>
</>
  )
}

export default purchase