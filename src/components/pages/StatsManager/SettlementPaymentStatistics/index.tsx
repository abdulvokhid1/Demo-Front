'use client'
import Slider  from '@/components/layouts/Slider/Stats';
import { useEffect, useState } from 'react';
const SettlementPaymentStatistics = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }
  
    return(
        <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
        style={{background: "#f0f0f0"}}>
			   <Slider />
               <div className ="content_section">
                <div className ="content_section_fix" style={{background:'#fff'}}>
                  <div className ="open_close"><span className ="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                  {/* <!-- 페이지타이틀 --> */}
                  <div className ="title_area">
                    <span className ="icon"></span>
                    <span className ="title">
						정산지급 처리통계					
					</span>
                    <span className ="location">홈 &gt; 통계관리 &gt; 배당한도 처리통계</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                 
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className ="common_ajax_proc"></div>

	<form name='fsearch' method="post">
	<input type='hidden' name='code' value=""/>
	<input type='hidden' name='mode' value="search"/>
				<div className ="form_box_area">
					<table className ="form_TB" summary="검색항목">
						<colgroup>
							<col width="100px"/><col width="200px"/><col width="100px"/><col width="200px"/><col width="100px"/><col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<td className ="article">페이</td>
								<td className ="conts">
									<input type='text' name='p_schsh' style={{width:'70px'}} value=""  className ='input_text'/>
									~
									<input type='text' name='p_dchsh' style={{width:'69px'}} value=""  className ='input_text'/>

								</td>
								<td className ="article">기간</td>
								<td className ="conts" colSpan={3}>

						<select name="sh_year" id="sh_year" onChange={()=>{}}>
							<option  value='2021'>2021년</option><option  value='2022'>2022년</option><option  value='2023'>2023년</option><option  selected={true} value='2024'>2024년</option>						</select>

						<select name="sh_month" id="sh_month" onChange={()=>{}}>
							<option  value='01'>01월</option><option  value='02'>02월</option><option  selected={true} value='03'>03월</option><option  value='04'>04월</option><option  value='05'>05월</option><option  value='06'>06월</option><option  value='07'>07월</option><option  value='08'>08월</option><option  value='09'>09월</option><option  value='10'>10월</option><option  value='11'>11월</option><option  value='12'>12월</option></select>
								</td>
							</tr>
							<tr>
								<td className ="article">레벨</td>
								<td className ="conts">
			<select name='sst' style={{width:'48%'}}>
				<option value=''>레벨</option>
				<option  value='20'>회원</option><option  value='19'>VIP</option><option  value='18'>V-VIP</option><option  value='17'>제휴사</option>			</select>
	
								</td>
								<td className ="article">직접선택</td>
								<td className ="conts">
			<select name='sfl' style={{width:'100%'}}>
				<option value=''>선택</option>
				<option  value='name'>회원명</option>
				<option  value='id'>아이디</option>
				{/* <!--<option  value='tel'>전화번호</option>--> */}
			</select>
				
								</td>
								<td className ="article">검색</td>
								<td className ="conts">
									<input type='text' name='stx' style={{width:'100%'}} value="" className ='input_text'/>
								</td>
							</tr>

							<tr>
								<td className ="conts" colSpan={6}>
								</td>
							</tr>
						</tbody> 
					</table>
					
					{/* <!-- 버튼영역 --> */}
					<div className ="top_btn_area">
						<div className ="btn_line_up_center">
							<span className ="shop_btn_pack btn_input_blue"><input type="submit" className ="input_medium" title="검색" value="검색"/></span>
							{/* <!--
							<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
							<span className ="shop_btn_pack"><a href="_entershop.bonus_no_beneath_list_log_member.php" className ="medium gray" title="배당수정하기" >배당수정하기</a></span>
--> */}
	
		
{/* <!--
								<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
								<span className ="shop_btn_pack"><a href="_cardsys.company.form.php?_mode=add" className ="medium red" title="업체등록" >업체등록</a></span>
--> */}
	
						</div>
					</div>
				</div>
	</form>

	<div className ="form_box_area">
	    <table border={0} cellPadding={0} cellSpacing={0} width='100%'style={{borderCollapse:'collapse'}}>
	    <tr> 
		        <td style={{padding:'5px', color:'#e16007',height:'40',textAlign:'left'}}>
			※ 페이 합계 :  <b>0</b>원&nbsp;&nbsp;|&nbsp;&nbsp;
			{/* <!-- 수정 및 추가 by mview
			쿠폰할인 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			적립금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			예치금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			포인트결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			배송비결제 : <b><font color="4c64ab">0</font></b>원
			--> */}
전체 : <b>1</b> 건  조회
		</td>
	</tr>
	</table>
	</div>
	<form name='fboardlist' method='post'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>
    {/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								{/* <!--<th scope="col" className="colorset"><input type=checkbox name=chkall value="1" onclick="check_all(this.form)"></th>--> */}
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=id&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=owner_code&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=memgrade&orderby=asc'><u>레벨</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>현재 캐시</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>매출합산</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=total_acc&orderby=asc'><u>지급금액</u></a></th>
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=total_acc&orderby=asc'><u>보유잔액</u></a></th>--> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=total_acc&orderby=asc'><u>배당누적금액</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=total_acc&orderby=asc'><u>지급금액 비교</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=total_acc&orderby=asc'><u>환급처리(차감)</u></a></th>
								<th scope="col" className="colorset"><u>배당한도(월)</u></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=signdate&orderby=asc'><u>업데이트날짜</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=&filed=buymethod&orderby=asc'><u>관리</u></a></th>
							</tr>
						</thead> 
						<tbody>

	<input type='hidden' name='od_table[0]' value='1'/>

							<tr>
								{/* <!--<td><input type=checkbox name=chk[] value='0'></td>--> */}
								<td>1</td>
								<td>superadmin</td> 
								<td>아셀</td>
								<td>본사</td>
								<td>0 P</td>
								<td>0</td>
								<td style={{fontWeight:'bold'}}>0</td>
											{/* <!--<td>0</td>--> */}
								<td style={{fontWeight:'bold'}}>
								<span>0</span>								</td>
								<td style={{fontWeight:'bold'}}>
								<span>0</span></td>
								<td>0</td>
								<td>0	</td>
                                {/* <!--재구매 매출 포함 한도 설정하기.. */}
								{/* <!--<td>0</td>--> */}
								<td>-</td>
								<td>
									<div>
										<span className="shop_btn_pack">
								<a href='_entershop.bonus_no_beneath_list_log_member.php?p_type=month&sh_year=2024&sh_month=03&pass_orderid=superadmin&app_mode=popup' onClick={()=>{return false}}>배당내역</a>
								</span>
<span className='shop_btn_pack' style={{marginLeft:'5px'}}><a href='_entershop.card_point.list.php?app_mode=popup&list_id=superadmin' className='small white' onClick={()=>{return false}}>지급내역</a></span>
									</div>
								</td> 
							</tr>
	{/* <script>document.getElementById('dy_0').value='';</script>  */}
	
						</tbody> 
					</table>
			</div>
	<div className="form_box_area">
			<table width="100%" border={0} cellSpacing='0' cellPadding='0'>
			<tr>
				<td align='left' style={{paddingTop:'3px'}}>
					<table border={0} cellSpacing="0" cellPadding="0">
					<tr>
						<td style={{paddingTop:'2px'}}>&nbsp;
					<div className="top_btn_area">
{/* <!--
						<span className="shop_btn_pack"><a onClick={()=>{}} className="small white" title="선택삭제" >선택삭제</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
--> */}
						{/* <span className="shop_btn_pack"><a href="./_calcu.ad_rech_xls.php?code=" className="small white" title="엑셀저장" >엑셀저장</a></span>--> */}

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
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'>
							<span className='icon ic_first'></span></span><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=1' className='ok' title='처음' >
							<span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span>
							<a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=0' className='ok' title='이전' >
							<span className='icon ic_prev'></span></a></span></span>
							<span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span>
							<span className='nextprev'><span className='btn'><span className='no'>
							<span className='icon ic_next'></span></span><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=2' className='ok' title='다음' >
							<span className='icon ic_next'></span></a></span><span className='btn'><span className='no'>
							<span className='icon ic_last'></span></span><a href='/myAdmin/_entershop.bonus_no_rebate_list.php?code=&page=1' className='ok' title='끝' >
							<span className='icon ic_last'></span></a></span></span></span></div>
					{/* <!-- // 페이지네이트 --> */}
</form>
{/* <script>createLayer('Calendar');</script> */}
{/* <script>
function check_all(f)
{
    var chk = document.getElementsByName("chk[]");

    for (i=0; i<chk.length; i++)
        chk[i].checked = f.chkall.checked;
}

function btn_check(act)
{
	var f = document.fboardlist;

    if (act == "update") // 선택변경
    { 
        f.action = './_calcu.ad_rech_update.php';
        str = "변경";
    } 
    else if (act == "decide") // 선택 구매결정
    { 
        f.action = './_calcu.ad_rech_decide.php';
        str = "구매결정";
    } 
	else if (act == "dydate") // 선택수정
    { 
        f.action = './_calcu.ad_rech_update_dy.php';
        str = "수정";
    }

	else if (act == "delete") // 선택수정
    { 
        f.action = './_cardsys.company.delete.php';
        str = "삭제";
    }

    else
        return;

    var chk = document.getElementsByName("chk[]");
    var bchk = false;

    for (i=0; i<chk.length; i++)
    {
        if (chk[i].checked)
            bchk = true;
    }

    if (!bchk) 
    {
        alert(str + "할 자료를 하나 이상 선택하세요.");
        return;
    }

	if (act == "update")
    { 
        if(f.dan.value == 0) {
			alert(str+'할 단계를 선택하세요.');
			f.dan.focus();
			return;
		}
    } 

	if (!confirm("선택한 자료를 "+str+" 하시겠습니까?"))
		return;

    f.submit();
}

function chk_delivery(val) {
	var chk = document.getElementsByName("chk[]");
	var delivery = document.getElementsByName("od_delivery[]");

	for (var i=0; i<chk.length; i++) {
		if (chk[i].checked)
			delivery[i].value = val;
    }
}

function chk_gonumber(val) {
	var chk = document.getElementsByName("chk[]");
	var gonumber = document.getElementsByName("od_gonumber[]");

	for (var i=0; i<chk.length; i++) {
		if (chk[i].checked)
			gonumber[i].value = val;
    }
}
</script> */}
				<div style={{height:'30px'}}></div>
			</div>
		</div>
</div>	
 
    )}

    export default SettlementPaymentStatistics;