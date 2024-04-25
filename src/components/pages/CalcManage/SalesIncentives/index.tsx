'use client'
import Slider  from '@/components/layouts/Slider/Calc';
import { useEffect, useState } from 'react';
const SalesIncentives = () => {
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
						판매수당					
					</span>
                    <span className ="location">홈 &gt; 전산관리 &gt; 수당2</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
    
{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

{/* <!--<iframe src="inc.bonus_auto_test.php" width='100%' height=100px frameborder=0></iframe>--?> */}

 <div className ="common_ajax_proc"></div>

{/* <!-- 검색영역 --> */}
<form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_b2.php">
	<input type='hidden' name='code' value=""/>
	<input type="hidden" name="app_mode" value=""/>

	<div className ="form_box_area">
		<table className ="form_TB" summary="검색항목">
			<colgroup>
				<col width="100px"/>
				<col width="350px"/>
				<col width="100px"/>
				<col width="300px"/>
			</colgroup>
			<tbody>
				<tr>

					<td className ="article">기간</td>
					<td className ="conts" colSpan={10}>

			<select name="sh_year" id="sh_year" onChange={()=>{}} >
				<option  value='2021'>2021년</option><option  value='2022'>2022년</option><option  value='2023'>2023년</option><option  selected={true} value='2024'>2024년</option>			</select>

			<select name="sh_month" id="sh_month" onChange={()=>{}} >
				<option  value='01'>01월</option><option  value='02'>02월</option><option  selected={true} value='03'>03월</option><option  value='04'>04월</option><option  value='05'>05월</option><option  value='06'>06월</option><option  value='07'>07월</option><option  value='08'>08월</option><option  value='09'>09월</option><option  value='10'>10월</option><option  value='11'>11월</option><option  value='12'>12월</option>			</select>

			<select name="sh_day" id="sh_day" onChange={()=>{}} >
				<option  value='01'>01일</option><option  value='02'>02일</option><option  value='03'>03일</option><option  value='04'>04일</option><option  value='05'>05일</option><option  value='06'>06일</option><option  value='07'>07일</option><option  value='08'>08일</option><option  value='09'>09일</option><option  value='10'>10일</option><option  selected={true} value='11'>11일</option><option  value='12'>12일</option><option  value='13'>13일</option><option  value='14'>14일</option><option  value='15'>15일</option><option  value='16'>16일</option><option  value='17'>17일</option><option  value='18'>18일</option><option  value='19'>19일</option><option  value='20'>20일</option><option  value='21'>21일</option><option  value='22'>22일</option><option  value='23'>23일</option><option  value='24'>24일</option><option  value='25'>25일</option><option  value='26'>26일</option><option  value='27'>27일</option><option  value='28'>28일</option><option  value='29'>29일</option><option  value='30'>30일</option><option  value='31'>31일</option>			</select>


			<span id="sh_all" style={{display:'none'}}>
							
			<div className ='btn_line_up_left'>
				<input type='text' name='time_start' style={{width:'75px',textAlign:'center'}} value="" className ='input_text' id="time_start"/>
				~
				<input type='text' name='time_end' style={{width:'75px',textAlign:'center'}} value="" className ='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
			</div>
			<div className ='btn_line_up_left'>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>
			</div>

			</span>
					</td>

					<td className ="article search_id" style={{display:'none'}}>아이디</td>
					<td className ="conts search_id" style={{display:'none'}}>
	
					<input type='text' name='member_id' value=""  className ='input_text'/>
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
				<span className ="shop_btn_pack"><a href='_entershop.bonus_stats_term.php?p_type=day&sh_year=2024&sh_month=03&pass_orderid=&app_mode=popup' onclick="openwindow(this,'stats','1200','600','yes');return false" className ="medium gray">회원보기</a></span>
--> */}
			</div>
		</div>
	</div>


</form>
{/* <!-- // 검색영역 --> */}

<div className ="content_section_inner">

	<table className ="list_TB" summary="리스트기본">
		<thead>


			<tr>
				<td colSpan={10} className ="new_order_data_sum">
										<div className ="inner_sum_box">
						<ul>
							<li className ="txt">2024-03-11 전체매출( 원)<span className ="value">0</span></li>


						</ul>
					</div>
{/* 
<!--
상품테이블 에서 매출 가져옴

					<div style="clear:both"></div>
					<div className ="inner_sum_box">
						<ul>
							<li className ="txt">2024-03-11 전체매출 PV<span className ="value">0 PV</span></li>
							<li className ="txt">2024-03-11 전체매출(원)<span className ="value">0 원</span></li>
						</ul>
					</div>
--> */}

				</td>
			</tr>
		</thead> 
	</table>
</div>
			

	<form name='flist' method='post'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>


			{/* <!-- 리스트영역 --> */}
			<div className ="content_section_inner">

				<table className ="list_TB" summary="리스트기본">
					<thead>

						<tr style={{height:'50px align: center'}}>
							<th scope="col" className ="colorset">번호</th>
							<th scope="col" className ="colorset">(일마감)</th>
							<th scope="col" className ="colorset">매출ID</th>
							<th scope="col" className ="colorset">레벨</th>
							<th scope="col" className ="colorset">구매금액</th>
							<th scope="col" className ="colorset">비고</th>
							<th scope="col" className ="colorset">적용ID</th>
							<th scope="col" className ="colorset">추천(전/후)</th>
							<th scope="col" className ="colorset">적용%</th>
							<th scope="col" className ="colorset">적용금액</th>
							<th scope="col" className ="colorset">조직도</th>
						</tr>
					</thead> 
					<tbody>
		<tr><td height={50} colSpan={21} align='center' color='#ffffff'>내역이 없습니다.</td></tr>
	 
				</tbody> 
			</table>

	<div className ="content_section_inner" style={{border:'0px',background:'#6ab9eef',margin:'0px',padding:'0px'}}>

		<table className ="list_TB" summary="리스트기본" style={{border:'0px',background:'#6ab9eef'}}>
			<tr>

				<td className ="new_order_data_foot" style={{background:'#6ab9eef'}}>
					<div className ="inner_sum_box">
						<ul>
							<li className ="txt">전체 합계 <span className ="value">0&nbsp;원 </span></li>
						</ul>
					</div>				
				</td>
			</tr>
		</table>
	</div>
	</div>
	</form>

<table width='100%' cellPadding={0}cellSpacing={0} className ='MG-T10'>


<form name='share_form' method='post' onSubmit={()=>{}}>
<input type='hidden' name='q1'	value="code="/>

<input type='hidden' name='year_month' value="2024-03"/>
<input type='hidden' name='year_weekday' value=""/>
<input type='hidden' name='year_day' value="2024-03-11"/>
<tr>
	<td width="100%" height="50" align="center">

<div style={{height:'40px',margin:'0 auto',textAlign:'center'}}><span style={{color:'red',fontSize:'18px',fontWeight:'bold',padding:'5px'}}>2024-03-10 매출 일마감이 되지 않았습니다</span></div>

</td>
</tr>

</form>
</table>

	<form name='fboardlist' method='pos'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>

	{/* <!--엑셀다운 추가 --> */}
	<input type='hidden' name='mode'	value=""/>
	<input type='hidden' name='year_month' value="2024-03"/>
	<input type='hidden' name='year_weekday' value=""/>
	<input type='hidden' name='year_day' value="2024-03-11"/>
	{/* <!--엑셀다운 추가 --> */}
				{/* <!-- 리스트영역 --> */}

		<div className ="content_section_inner">

				<div className ="top_btn_area">
			{/* <!--<span className ="shop_btn_pack"><a href="./calcu/calcu_bonus2_xls.php?code=" className ="small white" />엑셀다운로드</a></span>--> */}
			<span className ="shop_btn_pack pay_drapt" ><a onClick={()=>{}} className ="large red" >정산완료</a></span>
			<span className ="shop_btn_pack pay_drapt" ><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack pay_drapt" ><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack"><a href="javascript:select_send('excel_center');" className ="large white" title="선택엑셀저장" >선택엑셀저장</a></span>
{/* <!--
			<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack"><a onclick="btn_check('cancel_select')" className ="small white" />선택 마감취소</a></span>
--> */}
		</div>
					<table className ="list_TB" summary="리스트기본">
						<thead>
							<tr  style={{height:'50px align: center'}}>
								<th scope="col" className ="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className ="colorset" style={{fontSize:'11px',color:'red'}}>(지급X체크)<br/><input type='checkbox' name='pointlockall' value="Y" onClick={()=>{}}/></th>
								<th scope="col" className ="colorset">No</th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=member_id&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=b.memgrade&orderby=asc'><u>레벨</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>발생금액</u></a></th>		
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>세금공제</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>적립공제</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>실수령액</u></a></th>	
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>메모</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>계좌번호</u></a></th>	
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=reg_date&orderby=asc'><u>기간</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=ragi&orderby=asc'><u>상태</u></a></th>
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u style={{color:'red'}}>발생금액-수정</u></a></th>		
								<th scope="col" className ="colorset"><a href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=ragi&orderby=asc'><u>조직도</u></a></th>
							</tr>
						</thead> 
                   <tbody>
		<tr><td height={50} colSpan={20} align='center' >내역이 없습니다.</td></tr>
	 	</tbody>
	


					
						<tfoot>
							<tr>
								<td colSpan={20} style={{height:'20px'}}>
								</td>
							</tr>
							<tr>
								<td colSpan={20} className ="new_order_data_sum">
									<div className ="inner_sum_box">
										<ul>
											<li className ="txt">정산 총 합계</li>
											<li><span className ="sum">합계</span><span className ="value">0 </span></li>
											<li><span className ="sum">세금공제</span><span className ="value">0 </span></li>

											<li><span className ="sum">실수령액</span><span className ="value">0 </span></li>

										</ul>
									</div>
								</td>
							</tr>
						</tfoot>
                        </table>
							</div>


	<table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop:'10px'}}>
	<tr>
		<td width='50%' align='left'>

		{/* <!--<img src='./image/btn_mmpoint_02.gif' onclick="btn_check('defer')" style='cursor:hand' alt='정산유보'>
		<img src='./image/btn_mmpoint_03.gif' onclick="btn_check('refusal')" style='cursor:hand' alt='정산거절'>--> */}
        </td>

		<td width='50%' align="right"></td>
	</tr>
	</table>

	</form>

</div>
</div>
</div>
 );
}
 export default SalesIncentives;