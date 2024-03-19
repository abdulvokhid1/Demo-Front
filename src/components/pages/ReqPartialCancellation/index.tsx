'use client'
import Slider from '@/components/layouts/Slider/Order';
import { useEffect, useState } from "react";

const ReqPartialCancellation = () => {
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
		<div className="content_section">
			<div className="content_section_fix" style={{ background: '#fff' }}>
				<div className="open_close">
					<span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                </div>

				{/* <!-- 페이지타이틀 --> */}

				<div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					부분취소요청관리					
					</span>
                    <span className="location">홈 &gt; 주문관리 &gt; 취소주문관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
 <div className="common_ajax_proc"></div>

				{/* <!-- 검색영역 --> */}
				<form name='searchfrm' method='post' action='/myAdmin/_order.list.php'>
				<input type='hidden' name='mode' value='search'/>

				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<colgroup>
							<col width="100px"/><col width="200px"/><col width="100px"/><col width="200px"/><col width="100px"/><col width="*"/>
						</colgroup>
						<tbody>
						<tr>
								<td className="article">주문자ID</td>
								<td className="conts"><input type='text' name="pass_orderid" className='input_text' value=""/></td>
								<td className="article">주문자이름</td>
								<td className="conts"><input type='text' name="pass_ordername" className='input_text' value=""/></td>
								<td className="article">주문자연락처</td>
								<td className="conts"><input type='text' name="pass_orderhtel" className='input_text' value=""/></td>
							</tr>
							<tr>
								<td className="article">주문번호</td>
								<td className="conts"><input type='text' name="pass_ordernum" className='input_text' value=""/></td>
								<td className="article">결제수단</td>
								<td className="conts">
									<select name='pass_paymethod' >
									<option value=''>-결제수단-</option>
								<option value='C' >카드결제</option>
								<option value='L' >실시간 계좌이체</option>
								<option value='B' >무통장 입금</option>
								<option value='G' >전액 포인트 결제</option>
								<option value='V' >가상계좌</option>
								</select>
								</td>
								<td className="article">검색기간</td>
								<td className="conts">
									<input type='text' name="pass_sdate" id="pass_sdate" className='input_text' value="" readOnly style={{width:'100px'}}/>
									~ 
									<input type='text' name="pass_edate" id="pass_edate" className='input_text' value="" readOnly style={{width:'100px'}}/>
								</td>
							</tr>
							<tr>
								<td className="article">환불은행</td>
								<td className="conts">
									<select name="pass_bank">
										<option value="">- 선택 -</option>
																				<option value="01" >한국은행</option>
																				<option value="02" >산업은행</option>
																				<option value="03" >기업은행</option>
																				<option value="04" >국민은행</option>
																				<option value="05" >외환은행</option>
																				<option value="06" >주택은행</option>
																				<option value="07" >수협은행</option>
																				<option value="08" >수출입</option>
																				<option value="09" >장기신용</option>
																				<option value="10" >신농협중앙</option>
																				<option value="11" >농협중앙</option>
																				<option value="12~15" >농협회원</option>
																				<option value="16" >축협중앙</option>
																				<option value="20" >우리은행</option>
																				<option value="21" >조흥은행</option>
																				<option value="22" >상업은행</option>
																				<option value="23" >제일은행</option>
																				<option value="24" >한일은행</option>
																				<option value="25" >서울은행</option>
																				<option value="26" >신한은행</option>
																				<option value="27" >한미은행</option>
																				<option value="28" >동화은행</option>
																				<option value="29" >동남은행</option>
																				<option value="30" >대동은행</option>
																				<option value="31" >대구은행</option>
																				<option value="32" >부산은행</option>
																				<option value="33" >충청은행</option>
																				<option value="34" >광주은행</option>
																				<option value="35" >제주은행</option>
																				<option value="36" >경기은행</option>
																				<option value="37" >전북은행</option>
																				<option value="38" >강원은행</option>
																				<option value="39" >경남은행</option>
																				<option value="40" >충북은행</option>
																				<option value="53" >씨티은행</option>
																				<option value="71" >우체국</option>
																				<option value="76" >신용보증</option>
																				<option value="81" >하나은행</option>
																				<option value="82" >보람은행</option>
																				<option value="83" >평화은행</option>
																				<option value="93" >새마을금고</option>
																			</select>
								</td>
								<td className="article">환불계좌번호</td>
								<td className="conts">
									<input type="'text'" name="pass_bank_account" className="'input_text'" value=""/>
								</td>
								<td className="article">환불예금주</td>
								<td className="conts">
									<input type="'text'" name="pass_bank_name" className="'input_text'" value=""/>
								</td>
							</tr>
							<tr>
								<td className="article">취소상황</td>
								<td className="conts">
									<select name="pass_cancel">
										<option value="">- 선택 -</option>
										<option value="Y" >취소완료</option>
										<option value="R" >취소요청중</option>
									</select>
								</td>
								<td className="article">환불수단</td>
								<td className="conts" colSpan={3}>
									<select name="pass_cancel_type">
										<option value="">- 선택 -</option>
										<option value="pg" >PG연동</option>
										<option value="point" >포인트</option>
										<option value="bank" >계좌환불</option>
									</select>
								</td>
							</tr>
							<tr>
								<td className="conts" colSpan={6}>
									<div className='guide_text'><span className='ic_blue'></span>
									<span className='blue'><b>부분취소 요청된 주문을 확인하고 최종 취소처리 할 수 있습니다.</b></span>
								</div>									
									<div className='guide_text'>
									<span className='ic_blue'></span>
									<span className='blue'>주문내역에 대한 <b>엑셀파일</b>은 검색조건에 맞는 내역만 저장됩니다.</span>
									</div>									
									<div className='guide_text'><span className='ic_blue'></span>
									<span className='blue'>카드결제는 취소처리시 PG 연동되며, 전액적립금결제를 제외한 다른 결제수단일 경우 환불계좌로 송금 후 처리하시기 바랍니다.</span></div>	
									<div className='guide_text'>
									<span className='ic_blue'></span><span className='blue'>포</span>
									</div>인트로 환불을 요청한 경우 PG 연동되지 않으며 처리 즉시 고객 적립금으로 환불됩니다.
									<div className='guide_text'><span className='ic_blue'></span>
									<span className='blue'><b>취소 요청한 금액보다 상계가능한 정산예정금액이 부족할 경우 부분취소가 불가능합니다. 이러한 경우 PG사에 문의하시기 바랍니다.</b></span></div></td>
							</tr>
							</tbody> 
							</table>
							
				</div>
							<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
							</div>
					</div>
			</form>
 
			
{/* 검색영역 */}

<form name='frm' method='post' action="_cancel.pro.php" target="common_frame">
<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value='0'/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIDEgIEFORCAob3Aub3BfY2FuY2VsID0gJ1knIE9SIG9wLm9wX2NhbmNlbCA9ICdSJyk="/>

			
				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_delete_send();" className="small white" title="선택삭제" >선택삭제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">공급사</th>
								<th scope="col" className="colorset">주문번호</th>
								<th scope="col" className="colorset">주문자</th>
								<th scope="col" className="colorset">수령인</th>
								<th scope="col" className="colorset">결제방법</th>
								<th scope="col" className="colorset">결제금액</th>
								<th scope="col" className="colorset">주문취소일</th>
								<th scope="col" className="colorset">주문일</th>
								<th scope="col" className="colorset">기능</th>
							</tr>
						</thead> 
						<tbody>
						<tr><td colSpan={15} height='40'>주문 내역이 없습니다.</td></tr>
						</tbody> 
					</table>

		</div>			

					 {/* <!-- 페이지네이트 --> */}
  <div className="list_paginate">
    	<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'>
        <span className='icon ic_first'></span></span><a href=' ?&odcode=today&listpg=1' className='ok' title='처음' >
          <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'>
            <span className='icon ic_prev'></span></span><a href=' ?&odcode=today&listpg=0' className='ok' title='이전' >
              <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span>
              <span className='nextprev'><span className='btn'><span className='no'>
                <span className='icon ic_next'></span></span><a href=' ?&odcode=today&listpg=2' className='ok' title='다음' >
                  <span className='icon ic_next'></span></a></span><span className='btn'><span className='no'>
                    <span className='icon ic_last'></span></span><a href=' ?&odcode=today&listpg=0' className='ok' title='끝' >
                      <span className='icon ic_last'></span></a></span></span></span> 
	 </div>
  {/* <!-- // 페이지네이트 --> */}

				<div style={{height:'30px'}}></div>
			</form>
		</div>
        </div>
        </div>
     )}
     export default ReqPartialCancellation;