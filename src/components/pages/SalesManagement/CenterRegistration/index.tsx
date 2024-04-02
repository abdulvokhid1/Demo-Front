'use client'
import Slider  from '@/components/layouts/Slider/Sales';
import CENTER_API from '@/services/api/center';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useEffect, useState } from 'react';
const CenterRegistration = () => {
const [sliderVisible, setSliderVisible] = useState(true)
const [messageApi, contextHolder] = message.useMessage()
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
}

const {isPending, mutate, isSuccess, isError} = useMutation(
	{
		mutationFn: CENTER_API.updateCenter,
		onSuccess: async (values: any) => {
			console.log('success')
		},

		onError: (error: any) => {
			const errorType = error.response.data.errors[0]
			messageApi.open({
				type: 'error',
				content: 't(`errorMessages.${errorType}`)',
			})
		},
	}
)

const onSubmit = async (formData: FormData) => {

	const id = formData.get('id');
	const linkedId = formData.get('sales_id');
	const center_name = formData.get('name')
	const center_owner = formData.get('owner_name');
	
	
	const params = {
		id: Number(id),
		// linkedId: linkedId ? linkedId.toString() : '',
		center_name:center_name ?.toString() || '',
		center_owner: center_owner? center_owner.toString(): '',
	}
	console.log(params)
	mutate(params);

	// Handle response if necessary
	// const data = await response.json()
	// ...
}

return(
    <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
		<Slider />
	    <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
				   style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"
				   style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						센터등록 관리
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 센터등록 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				 
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

	<form name='fsearch' method="post" action={onSubmit}>
	<input type='hidden' name='code' value=""/>
		<input type='hidden' name='mode' value="search"/>

				<div className="form_box_area" style={{display:'none'}}>
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
										<input type='text' name='j_ddate' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
							</div>

							<div className='btn_line_up_left'>
							<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}}style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
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
				<option  value='9'>2스타</option><option  value='8'>3스타</option><option  value='7'>4스타</option><option  value='6'>5스타</option><option  value='11'>팀장</option><option  value='10'>1스타</option><option  value='20'>일반회원</option><option  value='19'>정회원</option><option  value='18'>정회원</option><option  value='17'>정회원</option><option  value='16'>정회원</option></select>
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
				<option  value='id'>연동아이디</option>
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
								<span className="shop_btn_pack"><span className="blank_3"></span></span>
								<span className="shop_btn_pack"><a href="_entershop.center_form.php?_mode=add" className="medium red" title="업체등록" >센터등록</a></span>
						</div>
					</div>

	</div>

					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
								<span className="shop_btn_pack"><span className="blank_3"></span></span>
								<span className="shop_btn_pack"><a href="_entershop.center_form.php?_mode=add" className="medium red" title="업체등록" >센터등록</a></span>
						</div>
	     			</div>
					
	</form>

<form name='fboardlist' method='post' >

{/* <!-- 엑셀검색추가 --> */}

<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value=''/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value=""/>
{/* <!-- 엑셀검색추가 --> */}
<input type='hidden' name='q1'	value="code="/>
<input type='hidden' name='page'	value="1"/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className="colorset">NO</th>
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=id&orderby=asc'><u>회원명</u></th>--> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=in_compay&orderby=asc'/><u>센터명</u></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=in_name&orderby=asc'/><u>대표자</u></th>
								<th scope="col" className="colorset"><u>소속회원수</u></th>
								<th scope="col" className="colorset"><u>누적PV</u></th>
								<th scope="col" className="colorset"><u>전화번호</u></th>
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=partner_code&orderby=asc'><u>추천인코드</u></a></th>--> */}
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=partner_code&orderby=asc'><u>후원인</u></a></th>--> */}
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=htel1&orderby=asc'><u>핸드폰</u></a></th>--> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=wdate&orderby=asc'><u>등록일</u></a></th>

								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>승인상태</u></a></th>--> */}
                                {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>영업상태</u></a></th>--> */}

								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=mb_id&orderby=asc'/><u>연동아이디</u></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.center_list.php?code=&page=&filed=state&orderby=asc'><u>처리상태</u></a></th>
								<th scope="col" className="colorset"><u>관리</u></th>
							</tr>
						</thead> 
						<tbody>
	<input type='hidden' name='od_table' value='3'/>

							<tr>
								<td>
									{/* <!--<input type=checkbox name=chk[] value='0' className=className_id>--><input type=checkbox name=chk_id[] value='' className=className_id></td>--> */}
								<td>3</td>
								{/* <!--<td><a href='_entershop.company.form.php?_mode=modify&app_mode=popup&id=' onclick="openwindow(this,'name','1000','600','yes');return false"><b></b></a><br><br></td>-->  */}
								<td>강남센타</td>
								<td></td>
								<td>1</td>
								<td>0</td>
								{/* <!--<td>								</td>-->
								<!--<td></td>--> */}
								<td></td>
								<td>2023/08/22 02:22:53</td>
								<td><br/></td>
								<td>완료</td> 
								</td>
							<td>
								<div className='btn_line_up_center' style={{clear:'both',paddingTop:'3px'}}>
									<span className='shop_btn_pack'><span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
								</div>	
								</td> 
							</tr>

	{/* <script>document.getElementById('dy_0').value='';</script> */}
	<input type='hidden' name='od_table' value='2'/>

							<tr>
								<td>
									{/* <!--<input type=checkbox name=chk[] value='1' className=className_id>--><input type=checkbox name=chk_id[] value='' className=className_id></td>
								<td>2</td>
								<!--<td><a href='_entershop.company.form.php?_mode=modify&app_mode=popup&id=' onclick="openwindow(this,'name','1000','600','yes');return false"><b></b></a><br><br></td>-->  */}
								<td>봉천센타</td>
								<td></td>
								<td>29</td>
								<td>0</td>
								{/* <!--<td></td>-->
								<!--<td></td>--> */}
								<td></td>
								</td>
								<td>2023/08/22 02:22:44</td>
								<td><br/></td>
								<td>완료</td> 
							<td>

								<div className='btn_line_up_center' style={{clear:'both',paddingTop:'3px'}}>
									<span className='shop_btn_pack'><span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
								</div>	
								</td> 
							</tr>


	{/* <script>document.getElementById('dy_1').value='';</script> */}
	<input type='hidden' name='od_table' value='1'/>
							<tr>
								<td>
									{/* <!--<input type=checkbox name=chk[] value='2' className=className_id>--><input type=checkbox name=chk_id[] value='' className=className_id></td>
								<td>1</td>
								<!--<td><a href='_entershop.company.form.php?_mode=modify&app_mode=popup&id=' onclick="openwindow(this,'name','1000','600','yes');return false"><b></b></a><br><br></td>-->  */}
								<td>본사</td>
								<td></td>
								<td>13</td>
								<td>0</td>
								{/* <!--<td>								</td>-->
								<!--<td></td>--> */}
								<td></td>
								</td>

								<td>2023/08/22 02:22:36</td>
								<td><br/></td>
								<td>완료</td> 
							<td>
								<div className='btn_line_up_center' style={{clear:'both',paddingTop:'3px'}}>
									<span className='shop_btn_pack'><span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
								</div>	
								</td> 
							</tr>

	{/* <script>document.getElementById('dy_2').value='';</script>  */}
								</tbody> 
					</table>
			</div>

	<div className="form_box_area">
			<table width="100%" border={0} cellSpacing="0" cellPadding="0">
			<tr>
				<td align='left' style={{paddingTop:'3px'}}>
					<table border={0} cellSpacing={0} cellPadding={0}>
					<tr>
						<td style={{paddingTop:'2px'}}>&nbsp;
					<div className="top_btn_area">

{/* <!--<span className="shop_btn_pack"><a href="./_entershop.company_xls.php?code=" className="small white" title="엑셀저장" >엑셀저장</a></span>--> */}
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
				<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href='/myAdmin/_entershop.center_list.php?code=&page=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href='/myAdmin/_entershop.center_list.php?code=&page=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href='/myAdmin/_entershop.center_list.php?code=&page=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href='/myAdmin/_entershop.center_list.php?code=&page=1' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>
					</div>
					{/* <!-- // 페이지네이트 --> */}
				
	</form>
{/* <script>createLayer('Calendar');</script> */}

				<div style={{height:'30px'}}></div>
	    	</div>
		</div>
	</div>
	

)}
export default CenterRegistration;