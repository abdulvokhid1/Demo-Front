'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
// import './styles.css';
const UserTotalManagement = () => {
const [sliderVisible, setSliderVisible] = useState(true)
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
}

return(
	<div></div>
//     <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
//     <Slider />

// 	{/* <!-- 내용 --> */}
//               <div className="content_section">
//                 <div className="content_section_fix" style={{background:'#fff'}}>

//                   <div className="open_close">
// 					<span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
// 					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                  
//                   {/* <!-- 페이지타이틀 --> */}
//                   <div className="title_area">
//                     <span className="icon"></span>
//                     <span className="title">
// 						회원 통합관리					
// 					</span>
//                     <span className="location">홈 &gt; 회원관리 &gt; 회원 통합관리</span>
//                   </div>
//                   {/* <!-- // 페이지타이틀 --> */}
                  
//  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

// {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}


// <div className="common_ajax_proc"></div>


//    {/* <script></script></div> */}

// 	<form name='fsearch' method="post">
// 		<input type='hidden' name='code' value=""/>

	
// <input type='hidden' name='app_mode' value=''/>

// <input type='hidden' name='pass_recomid' value=''/>
// <input type='hidden' name='mb2_depscode' value=''/>//</form>

// <input type='hidden' name='depslevel' value=''/>

	
// 	<input type='hidden' name='mode' value='search'/>

// 				<div className="form_box_area">
// 					<table className="form_TB" summary="검색항목">
// 						<colgroup>
// 							<col width="100px"/><col width="200px"/><col width="100px"/><col width="200px"/><col width="100px"/><col width="*"/>
// 						</colgroup>
// 						<tbody>
// 							<tr>
// 								<td className="article">페이</td>
// 								<td className="conts">
// 									<input type='text' name='p_schsh' style={{width:'70px'}} value=""  className='input_text'/>
// 									~<input type='text' name='p_dchsh' style={{width:'69px'}} value=""  className='input_text'/>
// 								</td>
// 								<td className="article">가입날짜</td>
// 								<td className='conts' colSpan={3}>

// 						<div className='btn_line_up_left'>
// 									<input type='text' name='j_sdate' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>
// 									~
// 									<input type='text' name='j_ddate 'style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
// 						</div>

// 						<div className='btn_line_up_left'>

// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="SetYesterday('time_start', 'time_end')" style="cursor:pointer;">어제</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="SetWeek('time_start', 'time_end')" style="cursor:pointer;">이번주</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="Set7Days('time_start', 'time_end')" style="cursor:pointer;">7일간</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="SetPrevMonthDays('time_start', 'time_end')" style="cursor:pointer;">지난달</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="SetCurrentMonthDays('time_start', 'time_end')" style="cursor:pointer;">이번달</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="Set30Days('time_start', 'time_end')" style="cursor:pointer;">30일간</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="Set60Days('time_start', 'time_end')" style="cursor:pointer;">60일간</button>&nbsp;&nbsp;</span>
// 						<span className='shop_btn_pack'><button type='button' className='input_small gray' onclick="Set90Days('time_start', 'time_end')" style="cursor:pointer;">90일간</button></span>

// 						</div>

// 								</td>
// 								<td className="article">구좌보기선택</td>
// 								<td className="conts">

// 					  <input type="radio" name='avatar_search_sel' id="avatar_search_sel" value=""  checked={true}/>

// 					  {/* <label for='p_type2' style={{height:'18px'}}>전체</label> */}

// 					  <input type="radio" name='avatar_search_sel' id="avatar_search_sel" value="only" />

// 					  {/* <label for='p_type2' style={{height:'18px'}}>대표구좌</label> */}
// 					</td>

// 							</tr>

// 		<tr>
// 								<td className="article">업체레벨</td>
// 								<td className="conts">

// 			<select name='sst' style={{width:'48%'}}>
// 				<option value=''>레벨</option>
// 				<option  value='20'>일반회원</option><option  value='19'>정회원</option>
// 				<option  value='18'>정회원</option><option  value='17'>정회원</option>
// 				<option  value='16'>정회원</option><option  value='11'>팀장</option>
// 				<option  value='10'>1스타</option><option  value='9'>2스타</option>
// 				<option  value='8'>3스타</option><option  value='7'>4스타</option>
// 				<option  value='6'>5스타</option>			
// 			</select>
// 		</td>

// 								<td className="article">직접선택</td>
// 								<td className="conts">
// 			<select name='sfl' style={{width:'100%'}}>
// 				<option value=''>선택</option>
// 				<option  value={'email'}>이메일</option>

// 				{/* <!--<option  value='partner_code'>추천인코드</option>--> */}
// 				<option  value='pass_htel'>휴대폰번호</option>

// 				<option  value='pass_account'>계좌번호</option>

// 				{/* <!--<option  value='tel'>전화번호</option>--> */}
// 			</select>
								
// 								</td>

// 								<td className="article">검색</td>
// 								<td className="conts">
// 									<input type='text' name='stx' style={{width:'100%'}} value="" className='input_text'/>
// 								</td>
// 								<td className=""></td>
// 								<td className="conts">
// 								</td>
// 							</tr>

// 							<tr>


// 								<td className="article">아이디</td>
// 								<td className="conts">
// 									<input type='text' name='pass_id' style={{width:'90%'}} value="" className='input_text'/>
// 								</td>

// 								<td className="article">회원명</td>
// 								<td className="conts">
// 									<input type='text' name='pass_name' style={{width:'90%'}} value="" className='input_text'/>
// 								</td>

// 								<td className="article">센터선택</td>
// 								<td className="conts">

//       <select name='pass_option_center' id="pass_option_center" className='add_option add_option_chk'>
//       <option value="">선택</option>
//             <option value="1" >본사</option>
//             <option value="2" >봉천센타</option>
//             <option value="3" >강남센타</option>
//             </select>
// 							</td>

// 							<td className=""></td>
// 								<td className="conts">
// 								</td>
// 						</tr>
// 						</tbody> 
// 					</table>
					
// 					{/* <!-- 버튼영역 --> */}
// 					<div className="top_btn_area">
// 						<div className="btn_line_up_center">
// 							<span className="shop_btn_pack btn_input_blue">
// 								<input type="submit" className="input_medium" title="검색" value="검색"/></span>
// 								<span className="shop_btn_pack"><span className="blank_3"></span></span>
// 								<span className="shop_btn_pack">
// 									<a href="_entershop.member_all.form.php?_mode=add" className="medium red" title="회원등록">회원등록</a></span>

// 						</div>
// 					</div>
					
// 		</div>
	
// 	</form>

// {/* <!-- 상품일괄업로드 # LDD014 {--> */}

// <form action="_entershop.member_all.upload.php" method={'post'} encType={('')}>
// 	<div className="form_box_area excel_upload_field" style={{display:'none'}}>
// 		<table className="form_TB">
// 			<colgroup>
// 				<col width="120"/>
// 				<col width="*"/>
// 			</colgroup>
// 			<tbody>
// 				<tr>
// 					<td className="article">일괄 업로드</td>
// 					<td className="conts">
// 						<input type="file" name="excel_file" className="input_text"/>
// 					</td>
// 				</tr>
// 				<tr>
// 					<td className="conts" colSpan={2}>
// 						<div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>업로드 파일</b>은 <b>최대 20M까지 업로드 가능</b> 합니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>업로드 용량</b>에 따라 <b>다소시간이 걸릴 수 있습니다.</b></span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>엑셀내용중 <b>엔터</b>는 <b>생략</b> 하시고 입력 바랍니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>엑셀내용중 금액 또는 수수료의 <b>%</b>, <b>콤마(,)</b>, <b>원</b> 등을 <b>기호를 생략</b> 하세요.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>일괄업로드는 "<b>파일업로드</b>" - "<b>업로드 수정/확인</b>" - "<b>등록처리</b>" 단계를 거쳐 처리됩니다.</span></div>						<div className='guide_text'><span className='ic_orange'></span><span className='orange'><b>엑셀97~2003 버전 파일만 업로드가 가능합니다. 엑셀 2007이상 버전은(xlsx) 다른 이름저장을 통해 97~2003버전으로 저장하여 등록하세요.</b></span></div>					</td>
// 				</tr>
// 			</tbody>
// 		</table>

// 		<div className="top_btn_area">
// 			<div className="btn_line_up_center">
// 				<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="일괄업로드" value="일괄업로드"/></span>
// 				<span className="shop_btn_pack"><span className="blank_3"></span></span>
// 				<span className="shop_btn_pack"><a href="/upfiles/normal/member_all_sample1.xls" className="medium white" title="엑셀다운로드" >엑셀다운로드</a></span>
	
// 				</div>
// 		</div>
// 	</div>
// </form>
// </div>
//   </div>

)
}

export default UserTotalManagement;