'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const ApplicationOfWithdrawal = () => {
const [sliderVisible, setSliderVisible] = useState(true)
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
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
					출금신청 관리					
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 출금신청 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
 
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

<form name='searchfrm' method='post' action='/myAdmin/_entershop.bonus_return.list.php'>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">기간</td>
								<td className="conts" colSpan={3}>
									<div className='btn_line_up_left'>
									 <input type='text' name='time_start' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>
												~
									<input type='text' name='time_end' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
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
								<td className="article">구분</td>
								<td className="conts" colSpan={20}>
					  
								  <input type="radio" name='chk_buy' id="" value=""  />
								  <label  style={{height:'18px'}}>전체</label>
								  &nbsp;
										
								  <input type="radio" name='chk_buy' id="" value="01" />
								  <label style={{height:'18px'}}>신규</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="02" />
								  <label style={{height:'18px'}}>재구매</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="03" />
								  <label style={{height:'18px'}}>전환매출</label>
								  &nbsp;
								</td>
							</tr>
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_pointID' className='input_text' value=""/></td>
								<td className="article">성명</td>
								<td className="conts"><input type='text' name='pass_name' className='input_text' value=""/></td>
								<td className="article">소속센터</td>
								<td className="conts">
    <select name='assign_center' id="assign_center" className='add_option add_option_chk' style={{width:'200px'}}>
    <option value="">선택</option>
        <option value="1" >본사</option>
        <option value="2" >봉천센타</option>
        <option value="3" >강남센타</option>
        </select>
							</td>
							</tr>
						</tbody> 
					</table>
					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href="_entershop.bonus_return.form.php?_loc=&_mode=add&app_mode=" className="medium red" title="출금신청" >출금신청</a></span>
						</div>
					</div>
			</div>
            
</form>
				{/* <!-- // 검색영역 --> */}

<form name='frm' method='post' >
<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value='0'/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIDEgIA=="/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					
					<div className="ctl_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택포인트삭제" >선택포인트삭제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}
					{/* <!-- 리스트 제어버튼영역 //--> */}

					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
						<span className="shop_btn_pack" style={{float:'right'}}><a href="javascript:select_update_send();" className="small blue" title="선택완료처리" style={{borderRadius:0}}>선택완료처리</a></span>
					</div>
				
					{/* <!-- // 리스트 제어버튼영역 --> */}
					<table className="list_TB" summary="리스트기본">

						{/* <!-- <colgroup> 
							<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
						</colgroup> --> */}

						<thead>
							<tr>
								<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">구분</th>
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">회원명</th>
								<th scope="col" className="colorset">등급</th>
								<th scope="col" className="colorset">소속센터</th>
								<th scope="col" className="colorset">출금구분</th>
								<th scope="col" className="colorset">출금요청금액</th>
								<th scope="col" className="colorset">수수료</th>
								<th scope="col" className="colorset">출금지급금액</th>
								<th scope="col" className="colorset">은행</th>
								<th scope="col" className="colorset">계좌번호</th>
								<th scope="col" className="colorset">예금주</th>
								<th scope="col" className="colorset">현재잔액</th>
								<th scope="col" className="colorset">상태</th>
								{/* <!--<th scope="col" className="colorset">지급예정일</th>--> */}
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={30} height='40'>내용이 없습니다.</td></tr>
						</tbody> 
					</table>
					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onclick='return false;' className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}

			</div>

            <div style={{height:'30px'}}></div>
</form>

	</div>
	</div>
</div>

 )}
 export default ApplicationOfWithdrawal;