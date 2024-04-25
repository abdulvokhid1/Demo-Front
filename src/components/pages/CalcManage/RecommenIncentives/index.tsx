'use client'
import Slider from '@/components/layouts/Slider/Calc';
import React, { useEffect, useState } from 'react';
import PAGE_ROUTES from "@/utils/constants/routes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import SALEREGISTER_API from "@/services/api/saleregister";
import noop from "noop-ts";
import { useRouter } from "next/navigation";

const RecommenIncentives = () => {
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
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalUserListState, setTotalUserListState] = useState<string[]>([])
    const [totalSales, setTotalSales] = useState<number>(0)
    const [totalSaleAmountState, setTotalSaleAmountState] = useState<number>(0)
    const [calcListState, setCalcListState] = useState<any>()
    const [selectedListState, setSelectedListState] = useState<number[]>([])

    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: SALEREGISTER_API.getCalculationDetailList,
            onSuccess: async (values: any) => {
                let calList: any = {};
                let selfBalance: any = {}
                let totalSaleAmount = 0;
                // setTotalSales(values.selfBalanceList.length)
                // values.list.map((value: any) => {
                //     const userId = value.id;
                //     const sub1Id = value.sub1Id;
                //     const sub2Id = value.sub2Id;
                //
                //     if (userId in calList) {
                //         // userId available in calList
                //         // Need update subs, depositAmount, sub1Id, sub2Id
                //         sub1Id && !calList[userId].sub1Id ? calList[userId].sub1Id = {
                //             id: sub1Id,
                //             name: value.sub1Name
                //         } : noop;
                //         sub2Id && !calList[userId].sub2Id ? calList[userId].sub2Id = {
                //             id: sub2Id,
                //             name: value.sub2Name
                //         } : noop;
                //         value.subId
                //             ? calList[userId].subs[value.subId] != undefined
                //                 ? (calList[userId].subs[value.subId] += value.saleAmount) && (totalSaleAmount += value.saleAmount)
                //                 : calList[userId].subs[value.subId] = value.saleAmount
                //             : noop;
                //         if (value.subId &&
                //             value.subId != value.sub1Id &&
                //             value.subId != value.sub2Id &&
                //             calList[userId].sub1Id &&
                //             calList[userId].sub2Id &&
                //             value.subId != value.sub1Id.id &&
                //             value.subId != value.sub2Id.id) {
                //             calList[userId].saleAmount += value.saleAmount;
                //             totalSaleAmount += value.saleAmount;
                //         }
                //     } else {
                //         calList[userId] = {
                //             name: value.name,
                //             level: value.level,
                //             levelTitle: value.levelTitle,
                //             // sub1Id: {id: value.sub1Id, name: value.sub1Name},
                //             // sub2Id: {id: value.sub2Id, name: value.sub2Name},
                //             rewardAmount: value.rewardAmount,
                //             selfBalance: 0,
                //             saleAmount: 0,
                //             subs: {}
                //         }
                //         value.sub1Id ? calList[userId].sub1Id = {id: value.sub1Id, name: value.sub1Name} : noop;
                //         value.sub2Id ? calList[userId].sub2Id = {id: value.sub2Id, name: value.sub2Name} : noop;
                //         value.subId ? calList[userId].subs[value.subId] = value.saleAmount : noop;
                //         if (
                //             value.subId &&
                //             value.subId != value.sub1Id &&
                //             value.subId != value.sub2Id &&
                //             calList[userId].sub1Id &&
                //             calList[userId].sub2Id &&
                //             value.subId != value.sub1Id.id &&
                //             value.subId != value.sub2Id.id
                //         ) {
                //             calList[userId].saleAmount += value.saleAmount;
                //             totalSaleAmount += value.saleAmount
                //         }
                //     }
                // })
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
                // paginationCalculation(currentPage, calList);
                // values.selfBalanceList.map((value: any) => {
                //     calList[value.id] ? calList[value.id].selfBalance += value.selfBalance : noop;
                // })
                // setCalcListState(calList);
                setCalcListState(values.list)
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

    const paginationCalculation = (page: number = currentPage, calList: any) => {
        const keys = Object.keys(calList);
        let index = -1;
        index = keys.indexOf('name');
        index != -1 ? keys.splice(index, 1) : noop;
        index = keys.indexOf('level');
        index != -1 ? keys.splice(index, 1) : noop;
        index = keys.indexOf('levelTitle');
        index != -1 ? keys.splice(index, 1) : noop;
        const keyStart = perPage * (page - 1);
        const keyEnd = keyStart + perPage;
        setTotalUserListState(keys.slice(keyStart, keyEnd));
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


    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
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

    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>

            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>

                    <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                                                      style={{display: sliderVisible ? "block" : "none"}}
                                                      onClick={sliderToggle}></span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                    {/* <!-- 페이지타이틀 --> */}
                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">
						추천수당					
					</span>
                        <span className="location">홈 &gt; 전산관리 &gt; 수당2</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}


                    {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

                    {/* <!--<iframe src="inc.bonus_auto_test.php" width='100%' height=100px frameborder=0></iframe>--?> */}

                    <div className="common_ajax_proc"></div>

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
                    {/* <!-- // 검색영역 --> */}

                    <div className="content_section_inner">

                        <table className="list_TB" summary="리스트기본">
                            <thead>
                            <tr>
                                <td colSpan={10} className="new_order_data_sum">
                                    <div className="inner_sum_box">
                                        <ul>
                                            <li className="txt">{startDate ? format(startDate, "yyyy-MM-dd") : ''} ~ {endDate ? format(endDate, "yyyy-MM-dd") : ''}<span
                                                className="value">{totalSaleAmountState}</span></li>
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
                                    <th scope="col" className="colorset">(일마감)</th>
                                    <th scope="col" className="colorset">취득자</th>
                                    <th scope="col" className="colorset">아이디</th>
                                    <th scope="col" className="colorset">레벨</th>
                                    <th scope="col" className="colorset">지급예정</th>
                                    <th scope="col" className="colorset">지급내용</th>
                                    <th scope="col" className="colorset">매출ID</th>
                                    <th scope="col" className="colorset">조직도</th>
                                </tr>
                                </thead>
                                <tbody>
                                {!calcListState?.length ? (
                                    <tr>
                                        <td height={50} colSpan={21} align='center' color='#ffffff'>내역이 없습니다.</td>
                                    </tr>
                                ) : (
                                        calcListState.map((item:any, index:number) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{endDate ? format(endDate, "yyyy-MM-dd") : ''}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.memberId}</td>
                                                    <td>{item.levelTitle}</td>
                                                    <td>{item.rewardAmount}</td>
                                                    <td>{item.memo}</td>
                                                    <td>{item.subMemberId}</td>
                                                    <td>
                                                        <input type="button" value="조직도" className="input_small white"
                                                               onClick={() => {
                                                               }}/>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )}
                                    </tbody>
                                    </table>

                                    <div className="content_section_inner"
                                 style={{border: '0px', background: '#6ab9eef', margin: '0px', padding: '0px'}}>

                                <table className="list_TB" summary="리스트기본"
                                       style={{border: '0px', background: '#6ab9eef'}}>
                                    <tr>

                                        <td className="new_order_data_foot" style={{background: '#6ab9eef'}}>
                                            <div className="inner_sum_box">
                                                <ul>
                                                    <li className="txt">전체 합계 <span className="value">0&nbsp;원 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </form>

                    <table width='100%' cellPadding={0} cellSpacing={0} className='MG-T10'>


                        <form name='share_form' method='post' onSubmit={() => {
                        }}>
                            <input type='hidden' name='q1' value="code="/>

                            <input type='hidden' name='year_month' value="2024-03"/>
                            <input type='hidden' name='year_weekday' value=""/>
                            <input type='hidden' name='year_day' value="2024-03-11"/>
                            <tr>
                                <td width="100%" height="50" align="center">

                                    <div style={{height: '40px', margin: '0 auto', textAlign: 'center'}}><span
                                        style={{color: 'red', fontSize: '18px', fontWeight: 'bold', padding: '5px'}}>2024-03-10 매출 일마감이 되지 않았습니다</span>
                                    </div>

                                </td>
                            </tr>

                        </form>
                    </table>

                    <form name='fboardlist' method='post'>
                        <input type='hidden' name='q1' value="code="/>
                        <input type='hidden' name='page' value="1"/>

                        {/* <!--엑셀다운 추가 --> */}
                        <input type='hidden' name='mode' value=""/>
                        <input type='hidden' name='year_month' value="2024-03"/>
                        <input type='hidden' name='year_weekday' value=""/>
                        <input type='hidden' name='year_day' value="2024-03-11"/>
                        {/* <!--엑셀다운 추가 --> */}
                        {/* <!-- 리스트영역 --> */}
                        <div className="content_section_inner">
                            <div className="top_btn_area">
                                {/* <!--<span className ="shop_btn_pack"><a href="./calcu/calcu_bonus2_xls.php?code=" className ="small white" />엑셀다운로드</a></span>--> */}
                                <span className="shop_btn_pack pay_drapt"><a onClick={() => {
                                }} className="large red">정산완료</a></span>
                                <span className="shop_btn_pack pay_drapt"><span className="blank_3"></span></span>
                                <span className="shop_btn_pack pay_drapt"><span className="blank_3"></span></span>
                                <span className="shop_btn_pack"><a href="javascript:select_send('excel_center');"
                                                                   className="large white"
                                                                   title="선택엑셀저장">선택엑셀저장</a></span>
                                {/* <!--
			<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack"><span className ="blank_3"></span></span>
			<span className ="shop_btn_pack"><a onclick="btn_check('cancel_select')" className ="small white" />선택 마감취소</a></span>
--> */}
                            </div>
                            <table className="list_TB" summary="리스트기본">
                                <thead>
                                <tr style={{height: '50px align: center'}}>
                                    <th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1"
                                                                                onClick={() => {
                                                                                }}/></th>
                                    <th scope="col" className="colorset"
                                        style={{fontSize: '11px', color: 'red'}}>(지급X체크)<br/><input type='checkbox'
                                                                                                    name='pointlockall'
                                                                                                    value="Y"
                                                                                                    onClick={() => {
                                                                                                    }}/></th>
                                    <th scope="col" className="colorset">No</th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=member_id&orderby=asc'><u>아이디</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=b.memgrade&orderby=asc'><u>레벨</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>발생금액</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>세금공제</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>적립공제</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>실수령액</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>메모</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u>계좌번호</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=reg_date&orderby=asc'><u>기간</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=ragi&orderby=asc'><u>상태</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=total&orderby=asc'><u
                                        style={{color: 'red'}}>발생금액-수정</u></a></th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_b2.php?code=&page=&filed=ragi&orderby=asc'><u>조직도</u></a>
                                    </th>
                                </tr>
                                </thead>

                                <tr>
                                    <td height={50} colSpan={20} align='center'>내역이 없습니다.</td>
                                </tr>

                                <tfoot>
                                <tr>
                                    <td colSpan={20} style={{height: '20px'}}>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={20} className="new_order_data_sum">
                                        <div className="inner_sum_box">
                                            <ul>
                                                <li className="txt">정산 총 합계</li>
                                                <li><span className="sum">합계</span><span className="value">0 </span>
                                                </li>
                                                <li><span className="sum">세금공제</span><span className="value">0 </span>
                                                </li>
                                                <li><span className="sum">실수령액</span><span className="value">0 </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>


                        <table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop: '10px'}}>
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
    );
}
export default RecommenIncentives;