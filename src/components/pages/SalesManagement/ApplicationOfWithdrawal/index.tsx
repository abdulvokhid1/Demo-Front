'use client'
import Slider  from '@/components/layouts/Slider/Sales';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { WithdrawalType } from '../../../../utils/types/type';
import { useMutation } from '@tanstack/react-query';
import USER_API from '@/services/api/users';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const ApplicationOfWithdrawal = () => {
	const [messageApi, contextHolder] = message.useMessage()
	const [sliderVisible, setSliderVisible] = useState(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()
	const [isDatePickerOpen1, setIsDatePickerOpen1] = useState(false);
	const [xColor1, setXColor1] = useState<number>(0)
	const [yColor1, setYColor1] = useState<number>(0)
	const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false);
	const [xColor2, setXColor2] = useState<number>(0)
	const [yColor2, setYColor2] = useState<number>(0)
		const [totalUsers, setTotalUsers] = useState<number>(0)
		const [perPage, setPerPage] = useState<number>(2)
		const [withdrawal, setWithdrawal] = useState<WithdrawalType>()
    	const {mutate: mutateLevel} = useMutation(
			{
				mutationFn: USER_API.getList,
				onSuccess: async (values: any) => {
					setWithdrawal(values);
					console.log(JSON.stringify(withdrawal))
				},
				onError: (error: any) => {
					const errorType = error.response.data.errors[0]
					messageApi.open({
						type: 'error',
						content: 't(`errorMessages.${errorType}`)',
					})
				}
			},
		)
		const {isPending, mutate, isSuccess, isError} = useMutation(
			{
				mutationFn: USER_API.getList,
				onSuccess: async (values: any) => {
					setWithdrawal(values.PayManager);
					setTotalUsers(values.total);
					console.log(JSON.stringify(withdrawal))
				},
	
				onError: (error: any) => {
					 const errorType = error.response.data.errors[0]
					// if (error.response.status === 401) {
					//     router.push(PAGE_ROUTES.AUTH.LOGIN);
					// }
					 messageApi.open({
						 type: 'error',
					 content: 't(`errorMessages.${errorType}`)',
					 })
				},
			}
		)
	useEffect(() => {
	console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
	setSliderVisible(!sliderVisible);
	}
	const paginationHandler = (selectedItem: { selected: number }) => {
		const page = selectedItem ? selectedItem.selected+1 : 0;
		mutate({page: page, limit: perPage})
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
	
	const onSubmit= async(formData: FormData)=>{
		const redRegidate = formData.get('redRegidate');
		const memberId = formData.get('pass_id');
		const name = formData.get('pass_name');
		const page = formData.get('page');
		const limit = formData.get('limit');
	
		
		const params ={
			depositDate: redRegidate?.toString() || format((new Date()), 'yyyy-MM-dd'),
			memberId: memberId?.toString() || '',
			name: name?.toString(),
			page: currentPage,
			limit: perPage,
		}
		console.log(params)
		mutate(params);
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
 
{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

<form name='searchfrm' method='post' action={onSubmit}>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">기간</td>
								<td className="conts" colSpan={3}>
									<div className='btn_line_up_left'>
									<input type="text" name="j_sdate" style={{width: '100px', textAlign: 'center'}}
                                                   className="input_text" id="time_start" 
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
                                            <input type="text" name="j_ddate"
                                                   style={{width: '100px', textAlign: 'center'}} 
                                                   className="input_text" id="time_end"
                                                   value={endDate ? format(endDate, "yyyy-MM-dd") : ''}
                                                   onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    setXColor2(e.clientX);
                                                    setYColor2(e.clientY + 15);
                                                    setIsDatePickerOpen2(!isDatePickerOpen2);
                                                    setIsDatePickerOpen1(false);
                                                }}
                                                   />
									</div>
									{/* <div className='btn_line_up_left'>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>
									</div> */}
								</td>
								<td className="article">구분</td>
								<td className="conts" colSpan={20}>
					  
								  <input type="radio" name='chk_buy' id="" value=""  />
								  <label  style={{height:'18px'}}>전체</label>
								  &nbsp;
										
								  {/* <input type="radio" name='chk_buy' id="" value="01" />
								  <label style={{height:'18px'}}>신규</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="02" />
								  <label style={{height:'18px'}}>재구매</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="03" />
								  <label style={{height:'18px'}}>전환매출</label> */}
								  &nbsp;
								</td>
							</tr>
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_pointID' className='input_text' /></td>
								<td className="article">성명</td>
								<td className="conts"><input type='text' name='pass_name' className='input_text'/></td>
								<td className="article">소속대리점</td>
								<td className="conts">
    <select name='assign_center' id="assign_center" className='add_option add_option_chk' style={{width:'200px'}}>
    <option value="">선택</option>
        <option value="1" >본사</option>
        {/* <option value="2" >봉천센타</option>
        <option value="3" >강남센타</option> */}
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
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">회원명</th>
								<th scope="col" className="colorset">등급</th>
								<th scope="col" className="colorset">소속대리점</th>
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
					<div style={{display:'flex', alignItems:'center', justifyContent:'center' ,margin:'0 auto'}}>
                        <ReactPaginate
                            previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>}
                            nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            activeClassName={'active'}
                            containerClassName={'pagination'}
                            // subContainerClassName={'pages pagination'}

                            initialPage={currentPage-1}
                            pageCount={Math.ceil(totalUsers/ perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={paginationHandler}
                        />
                        </div>
			</div>
            <div style={{height:'30px'}}></div>

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
</form>
	</div>
	</div>
</div>

 )}
 export default ApplicationOfWithdrawal;