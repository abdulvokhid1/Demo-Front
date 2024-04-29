'use client'
import Slider  from '@/components/layouts/Slider/Calc';
import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import PAGE_ROUTES from "@/utils/constants/routes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import SALEREGISTER_API from "@/services/api/saleregister";
import noop from "noop-ts";

import { useRouter } from "next/navigation";
import { top } from "@popperjs/core";
import { it } from "date-fns/locale";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { calcSelectedKey } from "@/services/recoil/selectedKey";
const PositionCalc = () => {
	const router = useRouter();
    const [sliderVisible, setSliderVisible] = useState(true)
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()
	const [isDatePickerOpen1, setIsDatePickerOpen1] = useState(false);
	const [xColor1, setXColor1] = useState<number>(0)
	const [yColor1, setYColor1] = useState<number>(0)
	const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false);
	const [xColor2, setXColor2] = useState<number>(0)
	const [yColor2, setYColor2] = useState<number>(0)
	const [ calcListState, setCalcListState ] = useState<any>()
	const [totalUserListState, setTotalUserListState] = useState<string[]>([])
	const [totalSales, setTotalSales] = useState<number>(0)
	const [totalSaleAmountState, setTotalSaleAmountState] = useState<number>(0)

	const [selectedListState, setSelectedListState] = useState<number[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [perPage, setPerPage] = useState<number>(10)
	const setSelectedKey = useSetRecoilState(calcSelectedKey)


	const {isPending, mutate, isSuccess, isError} = useMutation(
		{
			mutationFn: SALEREGISTER_API.getCalculationList,
			onSuccess: async (values: any) => {
				let calList:any  = {};
				let selfBalance: any = {}
				let totalSaleAmount = 0;
				setTotalSales(values.selfBalanceList.length)
				values.list.map((value: any) => {
					const userId = value.id;
					const sub1Id = value.sub1Id;
					const sub2Id = value.sub2Id;

					if (userId in calList) {
						// userId available in calList
						// Need update subs, depositAmount, sub1Id, sub2Id
						sub1Id && !calList[userId].sub1Id ?  calList[userId].sub1Id =  {id: sub1Id, name: value.sub1Name} : noop;
						sub2Id && !calList[userId].sub2Id ?  calList[userId].sub2Id =  {id: sub2Id, name: value.sub2Name} : noop;
						value.subId
							? calList[userId].subs[value.subId] != undefined
								? (calList[userId].subs[value.subId] += value.saleAmount) && (totalSaleAmount += value.saleAmount)
								: calList[userId].subs[value.subId] = value.saleAmount
							: noop;
						if (value.subId &&
						value.subId != value.sub1Id &&
						value.subId != value.sub2Id &&
						calList[userId].sub1Id &&
						calList[userId].sub2Id &&
						value.subId != value.sub1Id.id &&
						value.subId != value.sub2Id.id) {
							calList[userId].saleAmount += value.saleAmount;
							totalSaleAmount += value.saleAmount;
						}
					}
					else {
						calList[userId] = {
							name: value.name,
							level: value.levelId,
							levelTitle: value.levelTitle,
							// sub1Id: {id: value.sub1Id, name: value.sub1Name},
							// sub2Id: {id: value.sub2Id, name: value.sub2Name},
							selfBalance: 0,
							saleAmount: 0,
							subs: {}
						}
						value.sub1Id ? calList[userId].sub1Id =  {id: value.sub1Id, name: value.sub1Name} : noop;
						value.sub2Id ? calList[userId].sub2Id =  {id: value.sub2Id, name: value.sub2Name} : noop;
						value.subId ? calList[userId].subs[value.subId] = value.saleAmount : noop;
						if (
						value.subId &&
						value.subId != value.sub1Id &&
						value.subId != value.sub2Id &&
						calList[userId].sub1Id &&
						calList[userId].sub2Id &&
						value.subId != value.sub1Id.id &&
						value.subId != value.sub2Id.id
						) {
							calList[userId].saleAmount += value.saleAmount;
							totalSaleAmount += value.saleAmount
						}
					}
				})
				// const keys = Object.keys(calList);
				// let index = -1;
				// index = keys.indexOf('name');
				// index != -1 ? keys.splice(index, 1) : noop;
				// index = keys.indexOf('level');
				// index != -1 ? keys.splice(index, 1) : noop;
				// index = keys.indexOf('levelTitle');
				// index != -1 ? keys.splice(index, 1) : noop;
				// const keyStart = perPage* (currentPage - 1);
				// const keyEnd = keyStart + perPage;
				// setTotalUserListState(keys.slice(keyStart, keyEnd));
				paginationCalculation(currentPage, calList);
				values.selfBalanceList.map((value: any) => {
					calList[value.id] ? calList[value.id].selfBalance += value.selfBalance : noop;
				})
				setCalcListState(calList);
				setTotalSales(values.selfBalanceList.length);
				setTotalSaleAmountState(totalSaleAmount);
				setSelectedListState([])
				console.log(JSON.stringify(calcListState))
			},

			onError: (error: any) => {
				// const errorType = error.response.data.errors[0]
				if (error.response.status === 401) {
					router.push(PAGE_ROUTES.AUTH.LOGIN);
				}
			},
		}
	)

	const paginationCalculation = (page: number = currentPage, calList:any) =>{
		const keys = Object.keys(calList);
		let index = -1;
		index = keys.indexOf('name');
		index != -1 ? keys.splice(index, 1) : noop;
		index = keys.indexOf('level');
		index != -1 ? keys.splice(index, 1) : noop;
		index = keys.indexOf('levelTitle');
		index != -1 ? keys.splice(index, 1) : noop;
		const keyStart = perPage* (page - 1);
		const keyEnd = keyStart + perPage;
		setTotalUserListState(keys.slice(keyStart, keyEnd));
	}


    useEffect(() => {
		setSelectedKey(0)
    }, []);

    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }

	const onDateChangeHandle1 = (e: any) => {
		setIsDatePickerOpen1(!isDatePickerOpen1);
		setIsDatePickerOpen2(false)
		setStartDate(e);
	}
	const onDateChangeHandle2 = (e: any) => {
		setIsDatePickerOpen2(!isDatePickerOpen2);
		setIsDatePickerOpen1(false)
		setEndDate(e);
	}

	const onSearchSubmitHandler = (formData: FormData) => {
		startDate && endDate &&
		mutate({
			startDate: startDate,
			endDate: endDate,
			page: currentPage,
			limit: perPage,
		})
	}

	const paginationHandler = (selectedItem: { selected: number }) => {
		const page = selectedItem ? selectedItem.selected+1 : 0;
		startDate && endDate &&
		// mutate({
		// 	startDate: startDate,
		// 	endDate: endDate,
		// 	page: currentPage,
		// 	limit: perPage,
		// })
		paginationCalculation(page, calcListState)

	}
  
    return(
		<div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
			 style={{background: "#f0f0f0"}}>
			<Slider/>
			<div className="content_section">
				<div className="content_section_fix" style={{background: '#fff'}}>

					<div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
													  style={{display: sliderVisible ? "block" : "none"}}
													  onClick={sliderToggle}></span>
						<span className="btn_open" id="open_close_btn_open" title="메뉴열기"
							  style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
					</div>
					{/* <!-- 페이지타이틀 --> */}
					<div className="title_area">
						<span className="icon"></span>
						<span className="title">
					직급 일마감 관리					
					</span>
						<span className="location">홈 &gt; 전산관리 &gt; 직급 일마감 관리</span>
					</div>

					{/* <!-- 검색영역 --> */}
					<form name='searchfrm' method='post' action={onSearchSubmitHandler}>
						<input type='hidden' name='mode' value='search'/>
						<input type='hidden' name='app_mode' value=" "/>
						<div className="form_box_area">
							<table className="form_TB" summary="검색항목">
								<tbody>
								<tr>
									<td className="article">기간</td>
									<td className="conts">
										<input type='text' name='pass_redRegidate' className='input_text'
											   value={startDate ? format(startDate, "yyyy-MM-dd") : ''}
											   onMouseDown={(e) => {
												   e.preventDefault();
												   setXColor1(e.clientX);
												   setYColor1(e.clientY + 15);
												   setIsDatePickerOpen1(!isDatePickerOpen1);
												   setIsDatePickerOpen2(false);
											   }}
										/>
										~
										<input type='text' name='pass_redRegidate2' className='input_text'
											   value={endDate ? format(endDate, "yyyy-MM-dd") : ''}
											   onMouseDown={(e) => {
												   e.preventDefault();
												   setXColor2(e.clientX);
												   setYColor2(e.clientY + 15);
												   setIsDatePickerOpen2(!isDatePickerOpen2);
												   setIsDatePickerOpen1(false);
											   }}
										/>
										&nbsp;&nbsp;
										<input className="input_medium" title="검색" type="button" value="초기화"
											   width={'40px'} height={'20px'}
											   onClick={(e) => {
												   e.preventDefault();
												   setStartDate(null as any)
												   setEndDate(null as any)
											   }}
										/>
									</td>
									<td className="article">구분</td>
									<td className="conts" colSpan={20}>
										<input type="radio" name='chk_buy' id="" checked/>
										<label style={{height: '18px'}}>신규</label>
										&nbsp;
									</td>
								</tr>
								</tbody>
							</table>
							{/* <!-- 버튼영역 --> */}
							<div className="top_btn_area">
								<div className="btn_line_up_center">
									   <span className="shop_btn_pack btn_input_blue">
										   <input type="submit" className="input_medium" title="검색" value="검색"></input>
									   </span>
								</div>
							</div>
						</div>
					</form>
					{/*<form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_grade_entry.php">*/}
					{/*	<input type='hidden' name='code' value=""/>*/}
					{/*	<input type="hidden" name="app_mode" value=""/>*/}

					{/*	<div className="form_box_area">*/}

					{/*		<table className="form_TB" summary="검색항목">*/}
					{/*			<colgroup>*/}
					{/*				<col width="100px"/>*/}
					{/*				<col width="350px"/>*/}
					{/*				<col width="100px"/>*/}
					{/*				<col width="300px"/>*/}
					{/*			</colgroup>*/}
					{/*			<tbody>*/}
					{/*				<tr>*/}
					{/*					<td className="article" style={{display:'none'}}>발생금액</td>*/}
					{/*					<td className="conts" style={{display:'none'}}>*/}
					{/*						<input type='text' name='p_schsh' style={{width:'70px'}} value=""  className='input_text'/>*/}
					{/*						~*/}
					{/*						<input type='text' name='p_dchsh' style={{width:'69px'}} value=""  className='input_text'/>*/}
					{/*					</td>*/}
					{/*					<td className="article">기간</td>*/}
					{/*					<td className="conts" colSpan={20}>*/}
					{/*						*/}
					{/*			<select name="sh_year" id="sh_year" onChange={()=>{}} >*/}
					{/*				<option  value='2021'>2021년</option><option  value='2022'>2022년</option><option  value='2023'>2023년</option>*/}
					{/*                <option  selected={true} value='2024'>2024년</option>			</select>*/}

					{/*			<select name="sh_month" id="sh_month" onChange={()=>{}} >*/}
					{/*				<option  value='01'>01월</option><option  value='02'>02월</option><option  selected={true} value='03'>03월</option><option  value='04'>04월</option><option  value='05'>05월</option><option  value='06'>06월</option><option  value='07'>07월</option><option  value='08'>08월</option><option  value='09'>09월</option><option  value='10'>10월</option><option  value='11'>11월</option><option  value='12'>12월</option>			</select>*/}


					{/*			<select name="sh_day" id="sh_day" onChange={()=>{}} >*/}
					{/*				<option  value='01'>01일</option><option  value='02'>02일</option><option  value='03'>03일</option><option  value='04'>04일</option><option  value='05'>05일</option><option  value='06'>06일</option><option  value='07'>07일</option><option  value='08'>08일</option><option  value='09'>09일</option><option  value='10'>10일</option><option  selected={true} value='11'>11일</option><option  value='12'>12일</option><option  value='13'>13일</option><option  value='14'>14일</option><option  value='15'>15일</option><option  value='16'>16일</option><option  value='17'>17일</option><option  value='18'>18일</option><option  value='19'>19일</option><option  value='20'>20일</option><option  value='21'>21일</option><option  value='22'>22일</option><option  value='23'>23일</option><option  value='24'>24일</option><option  value='25'>25일</option><option  value='26'>26일</option><option  value='27'>27일</option><option  value='28'>28일</option><option  value='29'>29일</option><option  value='30'>30일</option><option  value='31'>31일</option>			</select>*/}

					{/*			<span id="sh_all" style={{display:'none'}}>*/}
					{/*							*/}
					{/*			<div className='btn_line_up_left'>*/}
					{/*				<input type='text' name='time_start' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>*/}
					{/*				~*/}
					{/*				<input type='text' name='time_end' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;*/}

					{/*			</div>*/}

					{/*			<div className='btn_line_up_left'>*/}

					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>*/}
					{/*			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>*/}

					{/*			</div>*/}
					{/*			</span>*/}
					{/*					</td>*/}
					{/*					<td className="article" style={{width:'100px'}}>검색구분</td>*/}
					{/*					<td className="conts">*/}
					{/*							*/}
					{/*					  <input type="radio" name='restoretype' id="restoretype1" value="" onClick={()=>{}}  checked={true}/>*/}
					{/*					  <label htmlFor='restoretype1' style={{height:'18px'}}>매출 마감관리</label>*/}
					{/*					  &nbsp;*/}
					{/*					  <input type="radio" name='restoretype' id="restoretype2" value="list" onClick={()=>{}} />*/}
					{/*					  <label htmlFor='restoretype2' style={{height:'18px'}}>매출 마감내역</label>*/}
					{/*					  &nbsp;*/}
					{/*					*/}
					{/*					</td>*/}
					{/*					<td className="article search_id" style={{display:'none'}}>아이디</td>*/}
					{/*					<td className="conts search_id" style={{display:'none'}}>*/}
					{/*						*/}
					{/*					<input type='text' name='member_id' value=""  className='input_text'/>*/}
					{/*					</td>*/}

					{/*				</tr>*/}
					{/*				<tr style={{display:'none'}}>*/}
					{/*					<td className="article">그룹별</td>*/}
					{/*					<td className="conts">*/}

					{/*						<select name='sst' style={{width:'18%'}}>*/}
					{/*							<option value=''>레벨</option>*/}
					{/*							<option  value='2'>회사</option><option  value='3'>총판</option><option  value='4'>지사</option><option  value='5'>지점</option><option  value='6'>가맹점</option><option  value='7'>딜러</option><option  value='8'>매장회원</option><option  value='9'>회원</option><option  value='23'>지사</option><option  value='22'>지점</option><option  value='21'>가맹점</option><option  value='20'>딜러</option><option  value='18'>회원</option><option  value='19'>매장회원</option><option  value='24'>총판</option><option  value='25'>회사</option><option  value='26'>본사</option><option  value='27'>매장회원</option><option  value='28'>카운셀러</option><option  value='29'>코치</option><option  value='30'>대리점</option><option  value='31'>지사</option><option  value='32'>본부</option><option  value='33'>수석본부</option><option  value='34'>수석이사</option><option  value='35'>회사</option>						</select>*/}

					{/*						<select name='sca' style={{width:'48%'}}>*/}
					{/*							<option  selected={true} value='' >정산</option>*/}
					{/*							<option  value='0'>정산대기</option>	*/}
					{/*							<option  value='2'>정산유보</option>*/}
					{/*							<option  value='3'>정산거절</option>*/}
					{/*						</select>*/}
					{/*					</td>*/}
					{/*					<td className="article">검색</td>*/}
					{/*					<td className="conts">*/}
					{/*					*/}
					{/*						<select name='sfl' style={{width:'100%'}}>*/}
					{/*							<option value=''>선택</option>*/}
					{/*							<option  value='member_id'>아이디</option>*/}
					{/*							<option  value='name'>회원명</option>*/}
					{/*						</select>*/}
					{/*					</td>*/}
					{/*					<td className="article">키워드</td>*/}
					{/*					<td className="conts">*/}
					{/*						<input type='text' name='stx' style={{width:'100%'}} value="" className='input_text'/>*/}
					{/*					</td>*/}
					{/*				</tr>*/}
					{/*				</tbody> */}
					{/*		</table>*/}
					{/*		*/}
					{/*	/!* <!-- 버튼영역 --> *!/*/}
					{/*		<div className="top_btn_area">*/}
					{/*			<div className="btn_line_up_center">*/}
					{/*				<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>*/}
					{/*							</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</form>*/}
					{/* <!-- // 검색영역 --> */}

					<div className="content_section_inner">

						<table className="list_TB" summary="리스트기본">
							<thead>
							<tr>
								<td colSpan={10} className="new_order_data_sum">

									<div className="inner_sum_box">
										<ul>
											<li className="txt">{startDate ? format(startDate, "yyyy-MM-dd") : ''} ~ {endDate ? format(endDate, "yyyy-MM-dd") : ''}<span className="value">{totalSaleAmountState}</span>
											</li>
										</ul>
									</div>
								</td>
							</tr>
							</thead>
						</table>
					</div>

					<form name='flist' method='post'>
						<input type='hidden' name='q1' value="code="/>
						<input type='hidden' name='page' value="1"/>


						{/* <!-- 리스트영역 --> */}
						<div className="content_section_inner">

							<table className="list_TB" summary="리스트기본">
								<thead>

								<tr style={{height: '50px align: center'}}>
									<th scope="col" className="colorset">번호</th>
									{/*<th scope="col" className="colorset">(일마감)</th>*/}
									<th scope="col" className="colorset">취득자</th>
									<th scope="col" className="colorset">아이디</th>
									{/*<th scope="col" className="colorset">레벨(변경 전)</th>*/}
									<th scope="col" className="colorset">레벨</th>
									<th scope="col" className="colorset">본인매출</th>
									<th scope="col" className="colorset">산하매출</th>
									<th scope="col" className="colorset">직추천</th>
									{/*<th scope="col" className="colorset">달성조건</th>*/}
									{/*<th scope="col" className="colorset">내용</th>*/}
									<th scope="col" className="colorset">조직도</th>
								</tr>
								</thead>
								<tbody>
								{!totalUserListState.length ? (
									<tr>
										<td height={50} colSpan={21} align='center' color='#ffffff'>마감할 자료가 없습니다.</td>
									</tr>
								) : (
									totalUserListState.map((item, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{calcListState[item].name}</td>
												<td>{calcListState[item].memberId}</td>
												<td>{calcListState[item].levelTitle}</td>
												<td>{calcListState[item].selfBalance}</td>
												<td>{calcListState[item].saleAmount}</td>
												<td>{calcListState[item].sub1Id?.name || ''}<br/>{calcListState[item].sub2Id?.name || ''}</td>
												<td>
													<input type="button" value="조직도" className="input_small white"
														   onClick={() => {
														   }}/>
												</td>
											</tr>
										)
									})
								)
								}
								</tbody>
							</table>
						</div>
						<div
							style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
							<ReactPaginate
								previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>}
								nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
								breakLabel={'...'}
								breakClassName={'break-me'}
								activeClassName={'active'}
								containerClassName={'pagination'}
								// subContainerClassName={'pages pagination'}

								initialPage={currentPage - 1}
								pageCount={Math.ceil(totalSales / perPage)}
								marginPagesDisplayed={2}
								pageRangeDisplayed={5}
								onPageChange={paginationHandler}
							/>
						</div>
					</form>

					{/*<table width='100%' cellPadding={0} cellSpacing={0} className='MG-T10'>*/}
					{/*	<form name='share_form' method='post' onSubmit={() => {*/}
					{/*	}}>*/}
					{/*		/!*<input type='hidden' name='q1' value="code="/>*!/*/}
					{/*		/!*<input type='hidden' name='year_month' value="2024-03"/>*!/*/}
					{/*		/!*<input type='hidden' name='year_weekday' value=""/>*!/*/}
					{/*		/!*<input type='hidden' name='year_day' value="2024-03-11"/>*!/*/}
					{/*		<tr>*/}
					{/*			<td width="100%" height="50" align="center">*/}
					{/*				<input className="pay_drapt" type='image' src='./images/sub/btn_pay_drapt.gif'/>*/}

					{/*				<div style={{display: 'none'}}>*/}
					{/*					<span>*/}
					{/*						<label>*/}
					{/*							<input type="checkbox" name="agree"*/}
					{/*								   className="bonus_hidden_chkbox hidde_pay_drapt"/>*/}
					{/*						</label>*/}
					{/*					</span>*/}
					{/*				</div>*/}
					{/*			</td>*/}
					{/*		</tr>*/}
					{/*	</form>*/}
					{/*</table>*/}

					{/*<form name='fboardlist' method='post'>*/}
					{/*	/!*<input type='hidden' name='q1' value="code="/>*!/*/}
					{/*	/!*<input type='hidden' name='page' value="1"/>*!/*/}

					{/*	/!* <!-- 리스트영역 --> *!/*/}
					{/*	<div className="content_section_inner">*/}
					{/*		<table className="list_TB" summary="리스트기본">*/}
					{/*			<thead>*/}
					{/*			<tr style={{height: '50 align: center'}}>*/}
					{/*				<th scope="col" className="colorset">*/}
					{/*					<input type='checkbox' name='chkall' value="1" onClick={() => {}}/>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset">No</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=member_id&orderby=asc'><u>아이디</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=b.memgrade&orderby=asc'><u>레벨(변경*/}
					{/*					전)</u></a></th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>레벨(변경*/}
					{/*					후)</u></a></th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>전체매출</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>당일매출</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>확정매출</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>배당자격*/}
					{/*					금액</u></a></th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=total&orderby=asc'><u>비고</u></a>*/}
					{/*				</th>*/}
					{/*				<th scope="col" className="colorset"><a*/}
					{/*					href='/myAdmin/_entershop.bonus_no_grade_entry.php?code=&page=&filed=ragi&orderby=asc'><u>기간</u></a>*/}
					{/*				</th>*/}
					{/*			</tr>*/}
					{/*			</thead>*/}
					{/*			<tr>*/}
					{/*				<td height={50} colSpan={20} align='center'>내역이 없습니다.</td>*/}
					{/*			</tr>*/}

					{/*			<div className="top_btn_area">*/}
					{/*				/!* <!--<span className="shop_btn_pack"><a href="./calcu/calcu_bonus1_xls.php?code=" className="small white" />엑셀다운로드</a></span>--> *!/*/}
					{/*				/!* <!--<span className="shop_btn_pack"><a onclick="btn_check('update')" className="small white" />정산완료</a></span>--> *!/*/}
					{/*			</div>*/}
					{/*			<tfoot>*/}
					{/*			<tr>*/}
					{/*				<td colSpan={20} style={{height: '20px'}}>*/}
					{/*				</td>*/}
					{/*			</tr>*/}
					{/*			</tfoot>*/}
					{/*		</table>*/}
					{/*	</div>*/}

					{/*	<table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop: '10px'}}>*/}
					{/*		<tr>*/}
					{/*			<td width='50%' align='left'></td>*/}

					{/*			<td width='50%' align="right"></td>*/}
					{/*		</tr>*/}
					{/*	</table>*/}

					{/*</form>*/}
				</div>
			</div>
			<div style={{
				position: 'absolute',
				left: xColor1.toString() + 'px',
				top: yColor1.toString() + 'px',
				display: isDatePickerOpen1 ? 'block ' : 'none',
			}}>
				<DatePicker
					onChange={onDateChangeHandle1}
					selected={startDate}
					maxDate={endDate}
					isClearable={true}
					inline/>
			</div>
			<div style={{
				position: 'absolute',
				left: xColor2.toString() + 'px',
				top: yColor2.toString() + 'px',
				display: isDatePickerOpen2 ? 'block ' : 'none',
			}}>
				<DatePicker
					onChange={onDateChangeHandle2}
					selected={endDate}
					minDate={startDate}
					inline/>
			</div>
		</div>


	)
}
export default PositionCalc;