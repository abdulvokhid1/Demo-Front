'use client'
import Slider from '@/components/layouts/Slider/Calc';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from "recoil";
import { calcSelectedKey } from "@/services/recoil/selectedKey";
const DailyCalc = () => {
	const [sliderVisible, setSliderVisible] = useState(true)
	const setSelectedKey = useSetRecoilState(calcSelectedKey)

	useEffect(() => {
		setSelectedKey(10)
	}, []);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}

	return (
		<div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
			style={{ background: "#f0f0f0" }}>
			<Slider />

			<div className="content_section">
				<div className="content_section_fix" style={{ background: '#fff' }}>

					<div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기" style={{ display: sliderVisible ? "block" : "none" }} onClick={sliderToggle}></span>
						<span className="btn_open" id="open_close_btn_open" title="메뉴열기"
							style={{ display: !sliderVisible ? "block" : "none" }} onClick={sliderToggle}></span></div>
					{/* <!-- 페이지타이틀 --> */}
					<div className="title_area">
						<span className="icon"></span>
						<span className="title">
							데일리
						</span>
						<span className="location">홈 &gt; 전산관리 &gt; 매출 일마감 관리</span>
					</div>
					{/* <!-- // 페이지타이틀 --> */}


					{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

					{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

					<div className="common_ajax_proc"></div>

					{/* <!-- 검색영역 --> */}
					<form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_grade_entry.php">
						<input type='hidden' name='code' value="" />
						<input type="hidden" name="app_mode" value="" />

						<div className="form_box_area">

							<table className="form_TB" summary="검색항목">
								<colgroup>
									<col width="100px" />
									<col width="350px" />
									<col width="100px" />
									<col width="300px" />
								</colgroup>
								<tbody>
									<tr>
										<td className="article" style={{ display: 'none' }}>발생금액</td>
										<td className="conts" style={{ display: 'none' }}>
											<input type='text' name='p_schsh' style={{ width: '70px' }} value="" className='input_text' />
											~
											<input type='text' name='p_dchsh' style={{ width: '69px' }} value="" className='input_text' />
										</td>
										<td className="article">기간</td>
										<td className="conts" colSpan={20}>

											<select name="sh_year" id="sh_year" onChange={() => { }} >
												<option value='2021'>2021년</option><option value='2022'>2022년</option><option value='2023'>2023년</option>
												<option selected={true} value='2024'>2024년</option>			</select>

											<select name="sh_month" id="sh_month" onChange={() => { }} >
												<option value='01'>01월</option><option value='02'>02월</option><option selected={true} value='03'>03월</option><option value='04'>04월</option><option value='05'>05월</option><option value='06'>06월</option><option value='07'>07월</option><option value='08'>08월</option><option value='09'>09월</option><option value='10'>10월</option><option value='11'>11월</option><option value='12'>12월</option>			</select>


											<select name="sh_day" id="sh_day" onChange={() => { }} >
												<option value='01'>01일</option><option value='02'>02일</option><option value='03'>03일</option><option value='04'>04일</option><option value='05'>05일</option><option value='06'>06일</option><option value='07'>07일</option><option value='08'>08일</option><option value='09'>09일</option><option value='10'>10일</option><option selected={true} value='11'>11일</option><option value='12'>12일</option><option value='13'>13일</option><option value='14'>14일</option><option value='15'>15일</option><option value='16'>16일</option><option value='17'>17일</option><option value='18'>18일</option><option value='19'>19일</option><option value='20'>20일</option><option value='21'>21일</option><option value='22'>22일</option><option value='23'>23일</option><option value='24'>24일</option><option value='25'>25일</option><option value='26'>26일</option><option value='27'>27일</option><option value='28'>28일</option><option value='29'>29일</option><option value='30'>30일</option><option value='31'>31일</option>			</select>

											<span id="sh_all" style={{ display: 'none' }}>

												<div className='btn_line_up_left'>
													<input type='text' name='time_start' style={{ width: '75px', textAlign: 'center' }} value="" className='input_text' id="time_start" />
													~
													<input type='text' name='time_end' style={{ width: '75px', textAlign: 'center' }} value="" className='input_text' id="time_end" />&nbsp;&nbsp;&nbsp;

												</div>

												<div className='btn_line_up_left'>

													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>어제</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>이번주</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>7일간</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>지난달</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>이번달</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>30일간</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>60일간</button>&nbsp;&nbsp;</span>
													<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={() => { }} style={{ cursor: 'pointer' }}>90일간</button></span>

												</div>
											</span>
										</td>
										<td className="article" style={{ width: '100px' }}>검색구분</td>
										<td className="conts">

											<input type="radio" name='restoretype' id="restoretype1" value="" onClick={() => { }} checked={true} />
											<label htmlFor='restoretype1' style={{ height: '18px' }}>매출 마감관리</label>
											&nbsp;
											<input type="radio" name='restoretype' id="restoretype2" value="list" onClick={() => { }} />
											<label htmlFor='restoretype2' style={{ height: '18px' }}>매출 마감내역</label>
											&nbsp;

										</td>
										<td className="article search_id" style={{ display: 'none' }}>아이디</td>
										<td className="conts search_id" style={{ display: 'none' }}>

											<input type='text' name='member_id' value="" className='input_text' />
										</td>

									</tr>
									<tr style={{ display: 'none' }}>
										<td className="article">그룹별</td>
										<td className="conts">

											<select name='sst' style={{ width: '18%' }}>
												<option value=''>레벨</option>
												<option value='2'>회사</option><option value='3'>총판</option><option value='4'>지사</option><option value='5'>지점</option><option value='6'>가맹점</option><option value='7'>딜러</option><option value='8'>매장회원</option><option value='9'>회원</option><option value='23'>지사</option><option value='22'>지점</option><option value='21'>가맹점</option><option value='20'>딜러</option><option value='18'>회원</option><option value='19'>매장회원</option><option value='24'>총판</option><option value='25'>회사</option><option value='26'>본사</option><option value='27'>매장회원</option><option value='28'>카운셀러</option><option value='29'>코치</option><option value='30'>대리점</option><option value='31'>지사</option><option value='32'>본부</option><option value='33'>수석본부</option><option value='34'>수석이사</option><option value='35'>회사</option>						</select>

											<select name='sca' style={{ width: '48%' }}>
												<option selected={true} value='' >정산</option>
												<option value='0'>정산대기</option>
												<option value='2'>정산유보</option>
												<option value='3'>정산거절</option>
											</select>
										</td>
										<td className="article">검색</td>
										<td className="conts">

											<select name='sfl' style={{ width: '100%' }}>
												<option value=''>선택</option>
												<option value='member_id'>아이디</option>
												<option value='name'>회원명</option>
											</select>
										</td>
										<td className="article">키워드</td>
										<td className="conts">
											<input type='text' name='stx' style={{ width: '100%' }} value="" className='input_text' />
										</td>
									</tr>
								</tbody>
							</table>

							{/* <!-- 버튼영역 --> */}
							<div className="top_btn_area">
								<div className="btn_line_up_center">
									<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색" /></span>
								</div>
							</div>
						</div>
					</form>
					{/* <!-- // 검색영역 --> */}

					<div className="content_section_inner">

						<table className="list_TB" summary="리스트기본">
							<thead>
								<tr>
									<td colSpan={10} className="new_order_data_sum">

										<div className="inner_sum_box">
											<ul>
												<li className="txt">2024-03-11 전체매출( BV)<span className="value">0</span></li>


											</ul>
										</div>

										{/* <!--
상품테이블 에서 매출 가져옴	<div style="clear:both"></div>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">2024-03-11 전체매출 PV<span className="value">0 PV</span></li>
							<li className="txt">2024-03-11 전체매출(원)<span className="value">0 원</span></li>
						</ul>
					</div>
--> */}
									</td>
								</tr>
							</thead>
						</table>
					</div>

<div>
						<input type="hidden" name="q1" value="code=" />
						<input type="hidden" name="page" value="1" />


						{/* <!-- 리스트영역 --> */}
						<div className="content_section_inner">
							<span className="shop_btn_pack"><a href="javascript:search_send('excel_result');" className="small white" title="엑셀저장">엑셀저장</a></span>
							&nbsp;&nbsp;
							<span className="shop_btn_pack" style={{ float: 'right' }}><a href="#none" onClick={() => { }} className="medium gray">2024-09-12 데일리 취소 처리</a>&nbsp;&nbsp;</span>&nbsp;&nbsp;
							<span className="shop_btn_pack" style={{ float: 'right' }}><a href="#none" onClick={() => { }} className="medium red">2024-09-12 데일리 발생 처리</a>&nbsp;&nbsp;</span>&nbsp;&nbsp;
							&nbsp;&nbsp;<br /><br /><br />

							<div id="grid_table" className="tui-grid-container" data-grid-id="1">
								<div className="tui-grid-content-area"><div className="tui-grid-lside-area" style={{ display: 'block', width: '163px' }} />
									<div className="tui-grid-head-area" style={{ height: "49px" }}>
										<table className="tui-grid-table">
											<colgroup><col data-column-name="read_num" style={{ width: "71px" }} />
												<col data-column-name="p_type" style={{ width: "91px" }} /></colgroup>
												</table>
												
												<tbody>
												<tr>
													<th data-column-name="name" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>번호</th>
													<th data-column-name="pop_meminfo" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>일마감</th>
													<th data-column-name="name" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>취득자</th>
													<th data-column-name="pop_meminfo" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>아이디</th>
													<th data-column-name="memgrade" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>레벨</th>
													<th data-column-name="total_bonus" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>예정금액</th>
													<th data-column-name="memo" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>수당내용</th>
													<th data-column-name="app_right_recomid" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>추천</th>
													<th data-column-name="app_right_sponid" className="tui-grid-cell tui-grid-cell-head" style={{ height: "48" }} colSpan={1} rowSpan={1}>후원</th>
													</tr>
													</tbody>

													<div className="tui-grid-column-resize-container" style={{ marginTop: '-50px', height: '50px', display: 'block' }}>
											<div data-column-index="0" data-column-name="read_num" className="tui-grid-column-resize-handle " style={{ left: "68px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="1" data-column-name="p_type" className="tui-grid-column-resize-handle tui-grid-column-resize-handle-last" style={{ left: '159px' }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div></div></div>
									<div className="tui-grid-body-area" style={{ height: "557px" }}><div className="tui-grid-body-container" style={{ height: "0px" }}>
										<div className="tui-grid-table-container" style={{ top: '0px', overflow: 'visible' }}>

											<table className="tui-grid-table">
												<colgroup>
													<col data-column-name="read_num" style={{ width: "71px" }} />
													<col data-column-name="p_type" style={{ width: "91px" }} /></colgroup>
												<tbody>
												</tbody>
			   			  					</table>
										</div>
											
												
										

										<div className="tui-grid-layer-state" style={{ top: '49px', height: '539px', left: '0px', right: '17px' }}>
												<div className="tui-grid-layer-state-content">   
								 <p>데이터가 존재하지 않습니다.</p>    
								 </div>
								 </div>

										<div className="tui-grid-layer-selection" style={{ display: "none" }}></div>
										<div className="tui-grid-layer-focus" style={{ display: "none" }}>
											<div className="tui-grid-layer-focus-border"></div>
											<div className="tui-grid-layer-focus-border"></div>
											<div className="tui-grid-layer-focus-border"></div>
											<div className="tui-grid-layer-focus-border"></div>
										</div></div></div>
									<div className="tui-grid-scrollbar-left-bottom">
									</div>
								</div>
								<div className="tui-grid-rside-area" style={{ display: 'block', width: '1004px', marginLeft: "163px" }}>
									<div className="tui-grid-head-area" style={{ height: "49px" }}>
										<table className="tui-grid-table">
											<colgroup>
												<col data-column-name="name" style={{ width: "71px" }} />
												<col data-column-name="pop_meminfo" style={{ width: "71px" }} />
												<col data-column-name="memgrade" style={{ width: "71px" }} />
												<col data-column-name="total_bonus" style={{ width: "71px" }} />
												<col data-column-name="memo" style={{ width: "601px" }} />
												<col data-column-name="app_right_recomid" style={{ width: "51px" }} />
												<col data-column-name="app_right_sponid" style={{ width: "50px" }} />
											</colgroup>
											</table>
										<div className="tui-grid-column-resize-container" style={{ marginTop: '-50px', height: '50px', display: "block" }}>
											<div data-column-index="0" data-column-name="name" className="tui-grid-column-resize-handle " style={{ left: "68px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="1" data-column-name="pop_meminfo" className="tui-grid-column-resize-handle " style={{ left: "139px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="2" data-column-name="memgrade" className="tui-grid-column-resize-handle " style={{ left: "210px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="3" data-column-name="total_bonus" className="tui-grid-column-resize-handle " style={{ left: "281px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="4" data-column-name="memo" className="tui-grid-column-resize-handle " style={{ left: "882px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="5" data-column-name="app_right_recomid" className="tui-grid-column-resize-handle " style={{ left: "993px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div>
											<div data-column-index="6" data-column-name="app_right_sponid" className="tui-grid-column-resize-handle tui-grid-column-resize-handle-last" style={{ left: "983px" }} title="마우스 드래그를 통해 컬럼의 넓이를 변경할 수 있고,더블클릭을 통해 넓이를 초기화할 수 있습니다."></div></div></div>
									<div className="tui-grid-body-area" style={{ height: "557px" }}>
										<div className="tui-grid-body-container" style={{ height: "0px" }}>
											<div className="tui-grid-table-container" style={{ top: '0px', overflow: "visible" }}>
												<table className="tui-grid-table">
													<colgroup>
														<col data-column-name="name" style={{ width: '71px' }} />
														<col data-column-name="pop_meminfo" style={{ width: "71px" }} />
														<col data-column-name="memgrade" style={{ width: "71px" }} />
														<col data-column-name="total_bonus" style={{ width: "71px" }} />
														<col data-column-name="memo" style={{ width: "601px" }} />
														<col data-column-name="app_right_recomid" style={{ width: "51px" }} />
														<col data-column-name="app_right_sponid" style={{ width: "50px" }} />
													</colgroup>
													<tbody>
													</tbody>
												</table>
											</div>
											<div className="tui-grid-layer-selection" style={{ display: "none" }}></div>
											<div className="tui-grid-layer-focus" style={{ display: "none" }}>
												<div className="tui-grid-layer-focus-border"></div>
												<div className="tui-grid-layer-focus-border"></div>
												<div className="tui-grid-layer-focus-border"></div>
												<div className="tui-grid-layer-focus-border"></div>
											</div>
										</div>
									</div>
									<div className="tui-grid-scrollbar-head" style={{ height: "48px" }}></div>
									<div className="tui-grid-scrollbar-border" style={{ top: '50px', height: "540px" }}></div>
									<div className="tui-grid-scrollbar-right-bottom"></div></div><div className="tui-grid-border-line tui-grid-border-line-top"></div>
								<div className="tui-grid-border-line tui-grid-border-line-left"></div><div className="tui-grid-border-line tui-grid-border-line-right"></div>
								<div className="tui-grid-border-line tui-grid-border-line-bottom" style={{ bottom: "17px" }}></div></div>
							
							<div className="tui-grid-layer-editing tui-grid-cell-content"></div>
							<textarea className="tui-grid-clipboard"></textarea></div>
							</div>
				</div>

					<div className="content_section_inner"
				style={{ border: '0px', background: '#6ab9eef', margin: '0px', padding: '0px' }}>
				<table className="list_TB" summary="리스트기본"
					style={{ border: '0px', background: '#6ab9eef' }}>
					<td width="100%" height="50" align="center">
						<input className="pay_drapt" type="image" src="/images/btn_pay_drapt.gif" />
					</td>
				</table>
			</div>

		</div>
			</div >
								

)
}
export default DailyCalc;