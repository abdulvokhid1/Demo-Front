'use client'
import Slider from '@/components/layouts/Slider/Order';
import { useEffect, useState } from "react";

const ReqExchange = () => {
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
						교환반품요청관리					
					</span>
                    <span className="location">홈 &gt; 주문관리 &gt; 1단계 주문확인</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

				  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
 <div className="common_ajax_proc"></div>


{/* <!-- 검색영역 --> */}
<form name='searchfrm' method='post' action='/myAdmin/_order.list.php?&odcode=today'>
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
								<td className="article">검색기간</td>
      							<td className="conts" colSpan={10}>
								<input type='text' name="pass_sdate" id="pass_sdate" className='input_text' value="" readOnly style={{width:'100px'}}/>
								~
								<input type='text' name="pass_edate" id="pass_edate" className='input_text' value="" readOnly style={{width:'100px'}}/>
								</td>
								</tr>
							<tr>
								<td className="article">분류</td>
								<td className="conts">
									<select name="pass_type">
										<option value="">- 선택 -</option>
										<option value="R" >반품</option>
										<option value="E" >교환</option>
									</select>
								</td>
								<td className="article">사유</td>
								<td className="conts">
									<select name="pass_reason">
										<option value="">- 선택 -</option>
										<option value="단순변심" >단순변심</option>
										<option value="상품불량" >상품불량</option>
										<option value="오배송" >오배송</option>
										<option value="기타" >기타</option>
									</select>
								</td>
								<td className="article">상태</td>
								<td className="conts">
									<select name="pass_status">
										<option value="">- 선택 -</option>
										<option value="N" >반려</option>
										<option value="Y" >완료</option>
										<option value="R" >대기</option>
									</select>
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
{/* <!-- // 검색영역 --> */}

<form name='frm' method='post' action="_order.pro.php" target="common_frame">
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='_seachcnt' value='0'/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIDEg"/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					{/* <!-- <div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:mass_cancel();" className="small white" title="선택완료처리" >선택완료처리</a></span>
					</div> --> */}
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								{/* <!-- <th scope="col" className="colorset"><input type="checkbox" name="allchk"></th> --> */}
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">공급사</th>
								<th scope="col" className="colorset">분류</th>
								<th scope="col" className="colorset">상태</th>
								<th scope="col" className="colorset">사유</th>
								<th scope="col" className="colorset">요청일</th>
								<th scope="col" className="colorset">처리일</th>
								<th scope="col" className="colorset">주문번호<br/>주문자</th>
								<th scope="col" className="colorset">상품정보</th>
								<th scope="col" className="colorset">연락처</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody>
<tr><td colSpan={20} height='40'>내역이 없습니다.</td></tr>
						</tbody> 
					</table>
					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
					<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span></div>
					{/* <!-- // 페이지네이트 --> */}

			</div>
</form>

<div style={{height:'30px'}}></div>
	
            </div>
        </div>
        </div>
     )}
     export default ReqExchange;