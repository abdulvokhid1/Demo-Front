'use client'
import Slider from '@/components/layouts/Slider/users';
import { useEffect, useState } from 'react';

const StatusOfProceedsManagement = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}
return (
    <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
		<Slider />

        {/* <!-- 내용 --> */}
              <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
         
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						수익금 현황관리					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 수익금 현황관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
      
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

    <div className="common_ajax_proc"></div>

            <form name='fsearch' method="post">
                <input type='hidden' name='code' value=""/>
                <input type='hidden' name='mode' value="search"/>

                            <div className="form_box_area">
                                <table className="form_TB" summary="검색항목">
                                    <colgroup>
                                        <col width="100px"/><col width="200px"/><col width="100px"/><col width="200px"/><col width="100px"/><col width="*"/>
                                    </colgroup>

                         <tbody>
							<tr>
								<td className="article">페이</td>
								<td className="conts">

									<input type='text' name='p_schsh' style={{width:'70px'}} value=""  className='input_text'/>
									~
									<input type='text' name='p_dchsh' style={{width:'69px'}} value=""  className='input_text'/>

								</td>
								<td className="article">가입날짜</td>
								<td className="conts" colSpan={3}>
<div className='btn_line_up_left'>
			<input type='text' name='j_sdate' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>
			~
			<input type='text' name='j_ddate 'style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
</div>

<div className='btn_line_up_left'>

<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>

</div>

								</td>
							</tr>
							<tr>
								<td className="article">업체레벨</td>
								<td className="conts">
			<select name='sst' style={{width:'48%'}}>
				<option value=''>레벨</option>
				<option  value='20'>일반회원</option><option  value='19'>정회원</option><option  value='18'>정회원</option><option  value='17'>정회원</option><option  value='16'>정회원</option><option  value='11'>팀장</option><option  value='10'>1스타</option><option  value='9'>2스타</option><option  value='8'>3스타</option><option  value='7'>4스타</option><option  value='6'>5스타</option>			</select>
								</td>
								<td className="article">직접선택</td>

								<td className="conts">
			<select name='sfl' style={{width:'100%'}}>
				<option value=''>선택</option>
				<option  value='name'>회원명</option>
				<option  value='ceoName'>대표자명</option>
				<option  value='cName'>상호명</option>
				<option  value='owner_code'>코드번호</option>
				<option  value='mb_card_main'>카드번호</option>
				<option  value='mb_card_main'>파트너코드</option>

				{/* <!--<option  value='partner_code'>추천인코드</option>--> */}
				<option  value='pass_htel'>휴대폰번호</option>
				<option  value='id'>아이디</option>

				{/* <!--<option  value='tel'>전화번호</option>--> */}
			</select>
			</td>
								<td className="article">검색</td>
								<td className="conts">
									<input type='text' name='stx' style={{width:'100%'}} value="" className='input_text'/>

								</td>
							</tr>

							<tr>
								<td className="conts" colSpan={6}>
																																												</td>
							</tr>
						</tbody> 
                    </table>

                    {/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
						</div>
					</div>
                 </div>
           </form>

           <div className="form_box_area">

<table border={0} cellPadding={0} cellSpacing={0} width='100%'style={{borderCollapse:'collapse'}}>
<tr style={{height:40, alignItems:'left'}}>
    <td style={{padding:'5px'}}>
        
        {/* ※ 페이 합계 :  <b><font color="e16007">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp; */}
        {/* <!-- 수정 및 추가 by mview
        쿠폰할인 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        적립금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        예치금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        포인트결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        배송비결제 : <b><font color="4c64ab">0</font></b>원
        --> */}
{/* 전체 : <b><font color="4C64AB">44</font></b> 건  조회</a> */}

    </td>
</tr>
</table>
</div>

<form name='fboardlist' method='post'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					{/* <!--
					<div class="top_btn_area">
						<span class="shop_btn_pack"><a href="javascript:select_excel_send();" class="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span class="shop_btn_pack"><span class="blank_3"></span></span>
						<span class="shop_btn_pack"><a href="javascript:search_excel_send();" class="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
						<span class="shop_btn_pack"><span class="blank_3"></span></span>
						<span class="shop_btn_pack"><a href="javascript:mass_cancel();" class="small white" title="선택주문취소" >선택주문취소</a></span>
					</div>
					--> */}
					{/* <!-- // 리스트 제어버튼영역 --> */}


					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=id&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=id&orderby=asc'></a>
                                    <a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=ceoName&orderby=asc'><u>회원명</u></a></th>
								{/* <th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=cName&orderby=asc'><u>상호명</u></a></th> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=cName&orderby=asc'/>
                                <a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=owner_code&orderby=asc'><u>코드번호</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=mb_card_main&orderby=asc'><u>카드번호</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=memgrade&orderby=asc'><u>레벨</u></a></th>
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=partner_code&orderby=asc'><u>추천인코드</u></a></th>--> */}
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=partner_code&orderby=asc'><u>후원인</u></a></th>--> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=htel1&orderby=asc'><u>핸드폰</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>페이 잔액</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=signdate&orderby=asc'><u>가입일</u></a></th>
								 <th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=&filed=buymethod&orderby=asc'><u>관리</u></a></th>
                              
							</tr>
						</thead> 
                        </table>
                  
            </div>
            <div className="form_box_area">

<table width="100%" border={0} cellSpacing="0" cellPadding="0">

<tr>
    <td align='left' style={{paddingTop:'3px'}}>
        <table border={0} cellSpacing="0" cellPadding="0">
        <tr>
            <td style={{paddingTop:'2px'}}>&nbsp;
        <div className="top_btn_area">
                    <span className="shop_btn_pack"><a onClick={()=>{}} className="small white" title="선택삭제" >선택삭제</a></span>
            <span className="shop_btn_pack"><span className="blank_3"></span></span>
            <span className="shop_btn_pack"><a href="./_calcu.ad_rech_xls.php?code=" className="small white" title="엑셀저장" >엑셀저장</a></span>
        </div>
        
            </td>
        </tr>
        </table>
    </td>
</tr>
</table>

</div>

            {/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
					<span className='lineup'><span className='nextprev'>
                        <span className='btn'><span className='no'><span className='icon ic_first'></span>
                        </span><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=1' className='ok' title='처음' >
                            <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span>
                            </span><a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=0' className='ok' title='이전' >
                                <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span>
                                <span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span>
                                <a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=2' className='ok' title='다음' >
                                    <span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span>
                                    <a href='/myAdmin/_entershop.bonus_point.member_list.php?code=&page=1' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}



	</form>
    </div>
    
</div>
</div>
 )}
 export default StatusOfProceedsManagement;