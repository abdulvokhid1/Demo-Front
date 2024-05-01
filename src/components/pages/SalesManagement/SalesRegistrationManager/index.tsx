'use client'
import Slider from '@/components/layouts/Slider/Sales';
import PAGE_ROUTES from "@/utils/constants/routes";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useMutation } from "@tanstack/react-query";
import USER_API from "@/services/api/users";
import { DepositRegistrationType, DepositType } from "@/utils/types/type";
import { useRouter } from "next/navigation";
import SALEREGISTER_API from "@/services/api/saleregister";
import { numberWithCommas } from "@/utils/helper";
import moment from "moment-timezone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import noop from "noop-ts";

const SalesRegistrationManager = () => {
	const router = useRouter();
	const ckboxRef = useRef<any[]>([]);
	const pageUnit = process.env.NEXT_PUBLIC_PER_PAGE || '10' ;
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [perPage, setPerPage] = useState<number>(Number(pageUnit))
    const [totalSales, setTotalSales] = useState<number>(0)
    const [sliderVisible, setSliderVisible] = useState(true)
	const [saleListState, setSaleListState] = useState<DepositType[]>([])
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()
	const [isDatePickerOpen1, setIsDatePickerOpen1] = useState(false);
	const [xColor1, setXColor1] = useState<number>(0)
	const [yColor1, setYColor1] = useState<number>(0)
	const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false);
	const [xColor2, setXColor2] = useState<number>(0)
	const [yColor2, setYColor2] = useState<number>(0)
	const [orderIdState, setOrderIdState] = useState<string>('')
	const [memoState, setMemoState] = useState<string>('')
	const [userNameState, setUserNameState] = useState<string>('')
	const [idState, setIdState] = useState<number>(0)
	const [selectedListState, setSelectedListState] = useState<number[]>([])

	const {isPending, mutate, isSuccess, isError} = useMutation(
		{
			mutationFn: SALEREGISTER_API.getList,
			onSuccess: async (values: any) => {
				setSaleListState(values.deposits);
				setTotalSales(values.total);
				setSelectedListState([])
				console.log(JSON.stringify(saleListState))
			},

			onError: (error: any) => {
				// const errorType = error.response.data.errors[0]
				if (error.response.status === 401) {
					router.push(PAGE_ROUTES.AUTH.LOGIN);
				}
				// messageApi.open({
				//     type: 'error',
				//     content: 't(`errorMessages.${errorType}`)',
				// })
			},
		}
	)

	const {mutate: mutateConfirm} = useMutation(
		{
			mutationFn: SALEREGISTER_API.confirm,
			onSuccess: async (values: any) => {
				setSaleListState(values.deposits);
				setTotalSales(values.total);
				setSelectedListState([])
				ckboxRef.current.map((item, index) => {
					item.checked = false;
				})
				console.log(JSON.stringify(saleListState))
			},

			onError: (error: any) => {
				// const errorType = error.response.data.errors[0]
				if (error.response.status === 401) {
					router.push(PAGE_ROUTES.AUTH.LOGIN);
				}
				else {
					console.log(error.toString())
				}
				// messageApi.open({
				//     type: 'error',
				//     content: 't(`errorMessages.${errorType}`)',
				// })
			},
		}
	)

	useEffect(() => {
		mutate({
			page: currentPage,
			limit: perPage
		});
	}, []);

	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}

	const paginationHandler = (selectedItem: { selected: number }) => {
        const page = selectedItem ? selectedItem.selected+1 : 0;
        mutate({
			startDate: startDate,
			endDate: endDate,
			orderId: orderIdState,
			memo: memoState,
			id: Number(idState),
			userName: userNameState,
			page: page,
			limit: perPage})
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
		const orderId = formData.get('pass_ordernum');
		const memo = formData.get('pass_pointTitle');
		const id = formData.get('pass_pointID');
		const userName = formData.get('pass_name');
		setOrderIdState(orderId?.toString() || '');
		setMemoState(memoState?.toString() || '');
		setIdState(id? Number(id?.toString()) : 0);
		setUserNameState(userNameState?.toString() || '');

		mutate({
			startDate: startDate,
			endDate: endDate,
			orderId: orderId?.toString() || '',
			memo: memoState?.toString() || '',
			id: id? Number(id?.toString()) : 0,
			userName: userName?.toString() || '',
			page: currentPage,
			limit: perPage})

	}

	const onConfirmSubmitHandler = (type: number) => {
		const confirmParams = {
			type: type,
			list: selectedListState,
			query: {
				startDate: startDate,
				endDate: endDate,
				orderId: orderIdState,
				memo: memoState,
				id: idState,
				userName: userNameState,
				page: currentPage,
				limit: perPage,
			}
		}
		mutateConfirm(confirmParams);
	}
return (
	<div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
		 style={{background: "#f0f0f0"}}>
		<Slider/>

		<div className="content_section">
			<div className="content_section_fix" style={{background: '#fff'}}>
				<div className="open_close">
					  <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
							style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}>
					  </span>
					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"
						  style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}>
					  </span>
				</div>

				<div className="title_area">
					<span className="icon"></span>
					<span className="title">
					매출등록 관리
					</span>
					<span className="location">홈 &gt; 매출관리 &gt; 매출등록 관리</span>
				</div>
				<div className="common_ajax_proc"></div>
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
										   value={endDate ? format(endDate, "yyyy-MM-dd") : ''} onMouseDown={(e) => {
										e.preventDefault();
										setXColor2(e.clientX);
										setYColor2(e.clientY + 15);
										setIsDatePickerOpen2(!isDatePickerOpen2);
										setIsDatePickerOpen1(false);
									}}
									/>
									&nbsp;&nbsp;
									<input className="input_medium" title="검색" type="button" value="초기화" width={'40px'} height={'20px'}
									onClick={(e) => {
										e.preventDefault();
										setStartDate(null as any)
										setEndDate(null as any)
									}}
									/>
								</td>
								<td className="article">주문번호</td>
								<td className="conts">
									<input type='text' name='pass_ordernum' className='input_text'/>
								</td>
								<td className="article">내용</td>
								<td className="conts">
									<input type='text' name='pass_pointTitle' className='input_text'/>
								</td>
								<td className="article">구분</td>
								<td className="conts" colSpan={20}>
									{/*<input type="radio" name='chk_buy' id="" value="" />*/}
									{/*<label  style={{height:'18px'}}>전체</label>*/}
									{/*&nbsp;*/}
									<input type="radio" name='chk_buy' id="" checked/>
									<label style={{height: '18px'}}>신규</label>
									&nbsp;
									{/*<input type="radio" name='chk_buy' id="" value="02" />*/}
									{/*<label  style={{height:'18px'}}>재구매</label>*/}
									{/*&nbsp;*/}
									{/*<input type="radio" name='chk_buy' id="" value="03" />*/}
									{/*<label  style={{height:'18px'}}>전환매출</label>*/}
									{/*&nbsp;*/}
								</td>
							</tr>
							<tr>
								<td className="article">아이디</td>
								<td className="conts">
									<input type='number' name='pass_pointID' className='input_text'/>
								</td>
								<td className="article">성명</td>
								<td className="conts">
									<input type='text' name='pass_name' className='input_text'/>
								</td>
								{/*<td className="article">소속대리점</td>*/}
								{/*<td className="conts">*/}
								{/*	<select name='assign_center' id="assign_center" className='add_option add_option_chk' style={{width:'200px'}}>*/}
								{/*		<option value="">선택</option>*/}
								{/*		<option value="1" >본사</option>*/}
								{/*		<option value="2" >봉천센타</option>*/}
								{/*		<option value="3" >강남센타</option>*/}
								{/*	</select>*/}
								{/*</td>*/}
							</tr>
							</tbody>
						</table>
						{/* <!-- 버튼영역 --> */}
						<div className="top_btn_area">
							<div className="btn_line_up_center">
									<span className="shop_btn_pack btn_input_blue">
										<input type="submit" className="input_medium" title="검색" value="검색"></input>
									</span>
								<span className="shop_btn_pack">
										<span className="blank_3"></span>
									</span>
								<span className="shop_btn_pack">
										<a href={PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION} className="medium red"
										   title="매출등록하기">매출등록</a>
									</span>
							</div>
						</div>
					</div>
				</form>
				<div className="form_box_area">
					<table border={0} cellPadding={0} cellSpacing={0} width='100%' style={{borderCollapse: 'collapse'}}>
						<tr style={{height: '40px', textAlign: 'left'}}>
							<td style={{padding: '5px'}}></td>
						</tr>
					</table>
				</div>

				<form name='frm' method='post'>
					<input type='hidden' name='_mode' value=''/>
					<input type='hidden' name='_seachcnt' value='0'/>
					<input type='hidden' name='_PVSC' value=""/>
					<input type='hidden' name='_search_que' value="IHdoZXJlIDEg"/>
					{/* <!-- 리스트영역 --> */}
					<div className="content_section_inner">
						<div className="ctl_btn_area">
							<span className="shop_btn_pack">
								<a className="small white" title="선택엑셀저장">
									선택엑셀저장
								</a>
							</span>
							<span className="shop_btn_pack">
								<span className="blank_3"></span>
							</span>
							<span className="shop_btn_pack">
								<a href="javascript:search_send('excel');" className="small white" title="검색엑셀저장">
									검색엑셀저장 (0)
								</a>
							</span>
							<span className="shop_btn_pack">
								<span className="blank_3"></span>
							</span>
							<span className="shop_btn_pack" style={{background: 'green'}}>
								<a className="small" style={{color: 'white'}}
								   title="선택삭제"
								   onClick={() => {onConfirmSubmitHandler(1)}}
								>
									승인하기
								</a>
							</span>
							<span className="shop_btn_pack">
								<span className="blank_3"></span>
							</span>
							<span className="shop_btn_pack" style={{background: 'orange'}}>
								<a className="small" style={{color: 'white'}}
								   title="선택삭제"
								   onClick={() => {onConfirmSubmitHandler(0)}}
								>
									대기하기
								</a>
							</span>
							<span className="shop_btn_pack">
								<span className="blank_3"></span>
							</span>
							<span className="shop_btn_pack" style={{background: 'gray'}}>
								<a className="small" style={{color: 'white'}}
								   title="선택삭제"
								   onClick={() => {onConfirmSubmitHandler(2)}}
								>
									거절하기
								</a>
							</span>
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
								<th scope="col" className="colorset">주문번호</th>
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">성명</th>
								<th scope="col" className="colorset">소속센터</th>
								<th scope="col" className="colorset">내용</th>
								<th scope="col" className="colorset">매출구분</th>
								<th scope="col" className="colorset">상품코드</th>
								<th scope="col" className="colorset">상품명</th>
								<th scope="col" className="colorset">매출금액</th>
								{/* <th scope="col" className="colorset">매출단위</th>
								<th scope="col" className="colorset">확정매출</th> */}
								<th scope="col" className="colorset">상태</th>
								<th scope="col" className="colorset">등록일</th>
								{/* <th scope="col" className="colorset">만기일</th> */}
								<th scope="col" className="colorset">수당</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
							</thead>
							<tbody>
							{!saleListState.length ? (
								<tr>
									<td colSpan={20} height='40'>내용이 없습니다.</td>
								</tr>
							) : (
								saleListState.map((item, index) => {
									return (
										<tr key={index}>
											<td>
												<input type="checkbox" className="class_id"
													   ref={el => ckboxRef.current.push(el)}
													   onChange={(e) => {
														   if (e.target.checked) {
															   const newUser = item.id || 0;
															   setSelectedListState([...selectedListState, newUser])
														   }
														   else {
															   const indices: number[] = []
															   selectedListState.map((user: number, i: number) => {user == item.id? indices.push(i) : noop})
															   if (indices?.length) {
																   indices.map((index1: any, index: number) => {
																	   selectedListState.splice(index1, 1)
																	   setSelectedListState([...selectedListState])
																   })
															   }
															   // console.log(userState);
														   }
													   }}
												/>
											</td>
											<td>{index + 1}</td>
											<td>619D3A033491</td>
											<td>
												{item.id}
											</td>
											<td>{item.user.name}</td>
											<td style={{textAlign: 'center'}}>{item.user.center.name}</td>
											{/*<td></td>*/}
											<td>{item.memo}</td>
											<td></td>
											<td></td>
											<td></td>
											<td>{numberWithCommas(item.amount)}원</td>
											
											<td>
											<span className="shop_state_pack">
												{/*<span className="orange">*/}
													<select style={item.status == 0? {background: 'orange', color: 'white'} : item.status == 1? {background: 'green', color: 'white'} : {background: 'gray', color: 'white'}}
															onChange={(e) => {
																const color = e.target.value == "0" ? 'orange' : e.target.value == "1" ? 'green' : 'gray'
																e.target.style.background = color;
																const confirmParams = {
																	type: Number(e.target.value) == 0? 0 : Number(e.target.value) == 1? 1 : 2,
																	list: [item.id || 0],
																	query: {
																		startDate: startDate,
																		endDate: endDate,
																		orderId: orderIdState,
																		memo: memoState,
																		id: idState,
																		userName: userNameState,
																		page: currentPage,
																		limit: perPage,
																	}
																}
																mutateConfirm(confirmParams);
															}}
													>
														<option value={0} selected={item.status == 0} >대기</option>
														<option value={1}  selected={item.status == 1}>승인</option>
														<option value={2} selected={item.status != 1 && item.status != 0}>거절</option>
													</select>
												{/*</span>*/}
											</span>
											</td>
											<td>{moment(item.depositDate).format('YYYY-MM-DD')}</td>
											<td>
											<span className="shop_state_pack">
												<span className="blue">{item.isRewarded ? 'O' : 'X'}</span>
											</span>
											</td>
											{/*<td></td>*/}
											<td>
									<span className="shop_state_pack" onClick={() => {
									}}>
										<span className="red">일마감 완료</span>
									</span>
											</td>
										</tr>
									)
								})

							)}

							</tbody>
						</table>

						{/* <!-- 페이지네이트 --> */}
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
						{/* <!-- // 페이지네이트 --> */}
					</div>
				</form>
				<div style={{height: '30px'}}></div>

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

export default SalesRegistrationManager;