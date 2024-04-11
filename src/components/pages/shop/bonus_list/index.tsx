'use client'
const bonus_list = () =>{

return(
      <>
    <div className="nav ">

        <div className="category" style={{ margin: '0 auto' }}>
            <div id="swiper_menu">

                <div className="swiper_wrap">
                    <a href="/?sk=myoffice&pn=dashboard" className="ctg ">대시보드<span className="line"></span></a> 
                    <a href="/?sk=myoffice&pn=mypage.bonus.list" className="ctg ">보너스내역<span className="line"></span></a>
                    <a href="/?sk=myoffice&pn=mypage.bonus.list_inout" className="ctg ">입출금내역<span className="line"></span></a>
                    <a href="/?sk=myoffice&pn=mypage.recom.list" className="ctg ">추천회원<span className="line"></span></a>
                </div>
            </div>
        </div>
    </div>
    <div id="section">
            <div className="common_pages_top">
                <div className="this_page_name">s
                    <a href="#none" onClick={() =>{}}></a>
            </div>
            <div className="txt">입금신청</div>
           <div className="common_page">

<div className="section-title" style={{marginLeft:'20px', marginTop:'10px'}}>패키지를 선택하고 입금신청하기를 완료해주세요</div>
<input type="hidden" name="input_product" value="코인거래"/>
<input type="hidden" name="input_name" value="담당자"/>
<input type="hidden" name="input_htel" value="010-0000-0000" />
	<div className="cm_member_form" style={{clear:'both',margin:'0px 5px'}}>
	<select name='input_amount' id='input_amount' className='select_design add_option add_option_chk' style={{fontSize:'16px'}} onChange={()=>{}}>
					<option value=''>입금 패키지 선택</option>
					<option  value='583000^583000' >110000</option>
                    
    </select>
			<input type="hidden" name="mb_entry_price" value="110000"/>

	</div>

    <div style={{clear:'both'}}></div>

<div className="cm_member_title">
    <strong></strong>결제방식 선택	</div>
    <input type="hidden" name="_asset_type" value="rech" />

{/* <!--<input type="hidden" name="_paymethod" value="wallet" />--> */}
         <div className="select_radio_trans_2">
             <input type="radio" name="_paymethod" value="online" id="_paymethod_online" onClick={()=>{}} checked/><label htmlFor="_paymethod_online">계좌입금</label>
        </div>
    <div className="cm_member_form cm_order_last_step asset_rech" style={{marginTop:'0px',marginBottom:'-40px'}}>
        <ul>
            <li className="ess ID_paymethod_wallet" style={{display:'none'}}>
            </li>
        </ul>
    </div>

<div style={{clear:'both',height:'30px'}}></div>

<div className="cm_member_title asset_online" style={{display:'none', marginTop:'-10px'}}>
    <strong></strong>입금계좌 안내	</div>

    <div className="cm_order_form cm_order_last_step asset_online" style={{marginTop:'0px',display:'none'}}>
        <ul>
            <li className="ess ID_paymethod_online" style={{display:'none'}}>
                <span className="opt">입금은행 선택</span>
                <div className="value">
                    <div className="select">
                        <span className="shape"></span>
                        <select name='_bank'  ><option value=''></option>
                            - 계좌 선택 -<option value='[ ]  ,  ' ></option>[],</select>
                    </div>
                </div>
            </li>
            <li className="ess ID_paymethod_online">
                <span className="opt">입금계좌</span>
                <div className="value">

<br/>
<div style={{fontSize:'13px'}}>
<span style={{fontWeight:'bold',fontSize:'15px'}}>a foreign currency bank account</span>
<br/>
{/* <!--KB국민은행 672169-11-006670 (주)에스앤파낙스--> */}
 **  은행 0000000000000 쇼핑머니
   </div>
     </div>
            </li>
            <li className="ess ID_paymethod_online">
                <span className="opt">입금예정일</span>
                <div className="value">
                    <input type="text" name="paydate" id="paydate" className="input_design" value="2024-04-09" readOnly style={{width:'150px'}} />
                    <div className="tip_txt">
                        {/* <!-- LMH004 --> */}
                        <dl>
                            <dd>입금신청 후 3일 이내에 입금하지 않으시면 자동으로 주문이 취소됩니다.</dd>
                        </dl>
                    </div>
                </div>
            </li>
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
         <input
         aria-colspan={0} 
         aria-rowcounts={0}
         name="memo"
         className="textarea_design"
         style={{textAlign:'center', background:'#fff' ,border: '1px solid', backgroundColor:' #aaa', width:'100%',height:'40px'}}></input>
    </div>

        <div className="cm_bottom_button">
           <ul style={{marginTop:'20px'}}>
                <li><span className="button_pack"><a href="#none" onClick={()=>{}} title="" className="btn_lg_color">입금신청하기<span className="edge"></span></a></span></li>
            </ul>
        </div>
        
    </div>
    {/* <!-- // 가운데정렬버튼 --> */}
<div className="cm_member_title"> <strong>입금내역</strong>	</div>

{/* <!--
<div className="cm_mypage_tab">
    <a onclick="list_tab('return');" className="tab_return hit" style="width:100%;text-align:center">&nbsp;</a>
    <!--<a onclick="list_tab('transfer');" className="tab_transfer"  style="width:42%;text-align:center">이체내역</a>--> */}
{/* <!--	</div>--> */}

{/* <!-- 마이리스트 --> */}
<div className="cm_bonus_list4 list_return">
            {/* <!-- 내용없을경우 모두공통 --> */}
    <div className="cm_no_conts"><div className="no_icon"></div><div className="gtxt">내역이 없습니다.</div></div>
    {/* <!-- // 내용없을경우 모두공통 --> */}
        </div>
        {/* <!-- .cm_mypage_list --> */}

<div className="cm_paginate"  style={{display:'none'}}>
        <span className='lineup'>
            <span className='nextprev'>
                <span className='btn'>
                    <span className='no'>
                        <span className='icon ic_first'>
            </span>
            </span>
            <a href=' ?&listpg=1' className='ok' title='처음' >
                <span className='icon ic_first'>
                    </span>
                    </a>
                    </span>

                <span className='btn'>
                <span className='no'><span className='icon ic_prev'></span></span>
                <a href=' ?&listpg=0' className='ok' title='이전' >
                    <span className='icon ic_prev'></span></a></span></span>
                    <span className='number'>
                    <a href='#none' onClick={()=>{}}></a></span></span>1
                    <span className='nextprev'>
                    <span className='btn'>
                    <span className='no'>
                    <span className='icon ic_next'></span></span>
                    <a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span>
                    <span className='btn'><span className='no'>
                    <span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' >
                    <span className='icon ic_last'></span></a></span></span>	</div>
<br/><br/><br/><br/><br/>

        </div>
        </div>
        </div>
        
        </>
        
 )}

export default bonus_list;