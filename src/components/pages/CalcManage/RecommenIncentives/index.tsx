'use client'
// import './styles.css'
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
import { it } from "date-fns/locale";
import { CalculationCompletionQueryType, CalculationCompletionType } from "@/services/api/saleregister/type";

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
    const [totalRewardAmountState, setTotalRewardAmountState] = useState<number>(0)
    const [calcListState, setCalcListState] = useState<any>()
    const [selectedListState, setSelectedListState] = useState<boolean[]>([])
    const [selectedPayListState, setSelectedPayListState] = useState<boolean[]>([])
    const [calculationChecked, setCalculationChecked] = useState<boolean>(false)
    const [calculationConfirmListState, setCalculationConfirmListState] = useState<any>()
    const [editedAmountListState, setEditedAmountListState] = useState<string[]>([])
    const [isReadonlyListState, setIsReadonlyListState] = useState<boolean[]>([])
    const [confirmedUserIdListState, setConfirmedUserIdListState] = useState<number[]>([])

    const {mutate: mutateConfirmCalculation} = useMutation(
        {
            mutationFn: SALEREGISTER_API.confirmCalculation,
            onSuccess: async (values: any) => {
                // console.log('success')
                setCalcListState([])
                setCalculationConfirmListState(null)
                setConfirmedUserIdListState([])
                setCalculationChecked(false)
                startDate && endDate &&
                mutate({
                    startDate: startDate,
                    endDate: endDate,
                    page: currentPage,
                    limit: perPage,
                })
            },
            onError: async (error: any, variables, context) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )
    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: SALEREGISTER_API.getCalculationDetailList,
            onSuccess: async (values: any) => {
                let calList: any = {};
                let selfBalance: any = {}
                let totalSaleAmount = 0;
                let totalRewardAmount = 0;
                values.list.map((item: any) => {
                    totalRewardAmount += item.rewardAmount
                    totalSaleAmount += item.saleAmount
                })
                setTotalRewardAmountState(totalRewardAmount);
                setCalcListState(values.list)
                setTotalSales(values.selfBalanceList.length);
                setTotalSaleAmountState(totalSaleAmount);

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

    const confirmCalculationHandler = () => {
        // startDate && endDate &&
        // mutateConfirmCalculation({
        //     startDate: startDate,
        //     endDate: endDate,
        //     page: currentPage,
        //     limit: perPage,
        // })
        // console.log('calculationHandler');
        const confirmList:any = {}
        const userList: any = []
        calcListState && calcListState.map((item: any) => {
            const userId = item.id;
            const name = item.name;
            const memberId = item.memberId;
            const levelId = item.levelId;
            const levelTitle = item.levelTitle;
            const rewardAmount = item.rewardAmount;
            const bankAccount = item.bankAccount;
            const saleId = item.saleId;
            if (userId in confirmList) {
                confirmList[userId].rewardAmount += rewardAmount;
                confirmList[userId].saleIds.push(saleId);
            }
            else {
                confirmList[userId] = {
                    userId: userId,
                    name: name,
                    memberId: memberId,
                    levelId: levelId,
                    levelTitle:levelTitle,
                    rewardAmount:rewardAmount,
                    bankAccount: bankAccount,
                    saleIds: [saleId],
                }
                userList.push(userId)
            }
        })
        setCalculationConfirmListState(confirmList);
        setConfirmedUserIdListState(userList);
        setSelectedPayListState(new Array(Object.keys(confirmList).length).fill(false))
        setSelectedListState(new Array(Object.keys(confirmList).length).fill(false))
        setIsReadonlyListState(new Array(Object.keys(confirmList).length).fill(true))
        const amountList: string[] = []
        Object.keys(confirmList).map((userId: any) => {
            amountList.push(confirmList[userId].rewardAmount)
        })
        setEditedAmountListState(amountList);
        // router.refresh()
    }

    const handleSelectPayAll = (event:any) => {
        //filled all checkboxes' states with `Check All` value
        const list = new Array(calculationConfirmListState.length).fill(
            event.target.checked
        );
        setSelectedPayListState(list);

    };
    const handleSelectAll = (event:any) => {
        //filled all checkboxes' states with `Check All` value
        const list = new Array(confirmedUserIdListState.length).fill(
            event.target.checked
        );
        setSelectedListState(list);

    };

    const handleOnChange = (position:number) => {
        const updatedCheckedState = selectedListState.map((item, index) =>
            index === position ? !item : item
        );

        setSelectedListState(updatedCheckedState);
    };

    const handlePayOnChange = (position:number) => {
        const updatedCheckedState = selectedPayListState.map((item, index) =>
            index === position ? !item : item
        );

        setSelectedPayListState(updatedCheckedState);
    };

    const editButtonHandler = (position:number) => {
        const updateList = calculationConfirmListState;
        // updateList.map((item:any, index:number) =>{
        //     index == position ? item.rewardAmount = editedAmountListState[index] : noop;
        // })
        // updateList[position].rewardAmount =editedAmountListState[position];
        // setCalculationConfirmListState(updateList);
    }

    const completeCalculation = () => {
        // const idList
        if (!startDate || !endDate) return;
        const params: CalculationCompletionType = {item: []};
        confirmedUserIdListState.map((item: any, index: number) => {
            if (!selectedListState[index]) return;
            const param = {
                startDate: startDate,
                endDate: endDate,
                userId: calculationConfirmListState[item].userId,
                name: calculationConfirmListState[item].name,
                memberId: calculationConfirmListState[item].memberId,
                levelId: calculationConfirmListState[item].levelId,
                levelTitle: calculationConfirmListState[item].levelTitle,
                rewardAmount: calculationConfirmListState[item].rewardAmount,
                bankAccount: calculationConfirmListState[item].bankAccount,
                deposits: calculationConfirmListState[item].saleIds,
            }
            params.item.push(param);
        })
        console.log(params);
        mutateConfirmCalculation(params)
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
                                    calcListState.map((item: any, index: number) => {
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
                                                    <li className="txt">전체 합계 <span className="value">
                                                        {totalRewardAmountState}
                                                        &nbsp;원 </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </form>
                    <div className="content_section_inner">

                        <table className="list_TB" summary="리스트기본" style={{borderTop:'none'}}>
                            <thead>
                            {!calcListState?.length ? (
                                    <tr>
                                        <td width="100%" height="50" align="center">

                                            <div style={{height: '40px', margin: '0 auto', textAlign: 'center'}}><span
                                                style={{
                                                    color: 'red',
                                                    fontSize: '18px',
                                                    fontWeight: 'bold',
                                                    padding: '5px'
                                                }}>{endDate ? format(endDate, "yyyy-MM-dd") + ' 매출 일마감이 되지 않았습니다': ''}</span>
                                            </div>

                                        </td>
                                    </tr>
                                )
                                : (
                                    <tr>
                                        <td width="100%" height="50" align="center">
                                            <div style={{marginBottom: '10px'}}>
                                                <span style={{
                                                    color: 'red',
                                                    fontSize: '18px',
                                                    fontWeight: 'bold',
                                                    border: '1px solid red',
                                                    padding: '5px'
                                                }}>
                                                    {calcListState.length} 건 마감할 데이터가 있습니다. 마감 정산해주세요
                                                </span>
                                            </div>
                                            <input className="pay_drapt" type="image"
                                                   src="/images/btn_pay_drapt.gif"
                                                   style={{display:calculationChecked? 'inline':'none'}}
                                                   onClick={()=>{confirmCalculationHandler()}}
                                            />
                                            <div style={{margin: '20px'}}>
                                                {/*<div style={{height: '40px'}}>*/}
                                                {/*        <span style={{*/}
                                                {/*            color: 'blue',*/}
                                                {/*            fontSize: '18px',*/}
                                                {/*            fontWeight: 'bold',*/}
                                                {/*            border: '1px solid blue',*/}
                                                {/*            padding: '5px'*/}
                                                {/*        }}>*/}
                                                {/*            정산완료 {calcListState.length} 건*/}
                                                {/*        </span>*/}
                                                {/*</div>*/}
                                                <div style={{margin: '10px'}}>
                                                        <span>
                                                            <label>
                                                                <input type="checkbox" name="agree"
                                                                       className="bonus_hidden_chkbox hidde_pay_drapt"
                                                                       onClick={() => {setCalculationChecked(!calculationChecked)}}
                                                                />
                                                            </label>
                                                        </span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                )}
                            </thead>
                        </table>
                    </div>
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
                                <span className="shop_btn_pack pay_drapt">
                                    <a className="large red"
                                       onClick={() => {completeCalculation()}}
                                    >정산완료</a></span>
                                <span className="shop_btn_pack pay_drapt"><span className="blank_3"></span></span>
                                <span className="shop_btn_pack pay_drapt"><span className="blank_3"></span></span>
                                <span className="shop_btn_pack"><a onClick={()=> {}}
                                                                   className="large white"
                                                                   title="선택엑셀저장">선택엑셀저장</a></span>
                            </div>
                            <table className="list_TB" summary="리스트기본">
                                <thead>
                                <tr style={{height: '50px align: center'}}>
                                    <th scope="col" className="colorset">
                                        <input type='checkbox' name='chkall'
                                               checked={selectedListState.every((value) => value)}
                                               onChange={handleSelectAll}
                                        />
                                    </th>
                                    {/*<th scope="col" className="colorset" style={{fontSize: '11px', color: 'red'}}>*/}
                                    {/*    (지급X체크)<br/>*/}
                                    {/*    <input type='checkbox' name='pointlockall'*/}
                                    {/*           checked={selectedPayListState.every((value) => value)}*/}
                                    {/*           onChange={handleSelectPayAll}*/}
                                    {/*    />*/}
                                    {/*</th>*/}
                                    <th scope="col" className="colorset">No</th>
                                    <th scope="col" className="colorset"><a><u>회원명</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>아이디</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>레벨</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>발생금액</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>세금공제</u></a>
                                    </th>
                                    {/*<th scope="col" className="colorset"><a><u>적립공제</u></a>*/}
                                    {/*</th>*/}
                                    <th scope="col" className="colorset"><a><u>실수령액</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>메모</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>계좌번호</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>기간</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a><u>상태</u></a>
                                    </th>
                                    {/*<th scope="col" className="colorset"><a><u*/}
                                    {/*    style={{color: 'red'}}>발생금액-수정</u></a></th>*/}
                                    <th scope="col" className="colorset"><a><u>조직도</u></a>
                                    </th>
                                </tr>
                                </thead>
                                {!confirmedUserIdListState?.length ? (
                                        <tr>
                                            <td height={50} colSpan={20} align='center'>내역이 없습니다.</td>
                                        </tr>

                                    )
                                : (
                                    confirmedUserIdListState.map((item:any, index: number) => {
                                        return (
                                            <tr key={index} className="list0" style={{height:"30px",alignItems:"center"}}>
                                                <td>
                                                    <input type="checkbox" name="chk[]" className="chk"
                                                           checked={selectedListState[index]}
                                                           onChange={() => handleOnChange(index)}
                                                    />
                                                </td>
                                                {/*<td style={{width:'50px'}}>*/}
                                                {/*    <input type="checkbox" name="pointlock[1374]" className="pointlock"*/}
                                                {/*           checked={selectedPayListState[index]}*/}
                                                {/*           onChange={() => handlePayOnChange(index)}*/}
                                                {/*    />*/}
                                                {/*</td>*/}
                                                <td className="f_list1">{index+1}</td>
                                                <td className="f_listb">{calculationConfirmListState[item].name}</td>


                                                <td className="f_list1"><a onClick={()=>{}}><b>{calculationConfirmListState[item].memberId}</b></a></td>

                                                <td className="f_list1">{calculationConfirmListState[item].levelTitle}</td>
                                                <td className="f_lists">{calculationConfirmListState[item].rewardAmount}</td>
                                                <td className="f_lists">{calculationConfirmListState[item].rewardAmount * 3.3/100}</td>



                                                <td className="f_listr">{calculationConfirmListState[item].rewardAmount * (1-3.3/100)}</td>




                                                <td className="f_listl" style={{fontSize:'11px',letterSpacing:'-0.3px',wordSpacing:'-2px'}}>
                                                    <br/>
                                                </td>

                                                <td className="f_listl">{item.bankAccount}</td>
                                                <td className="f_list0">{endDate ? format(endDate, "yyyy-MM-dd") : ''}</td>

                                                <td className="f_list0"><span style={{color:'blue'}}>정상</span></td>

                                                {/*<td className="f_list" style={{width:'90px'}}>*/}
                                                {/*    <div style={{position:'absolute',marginTop:'-9px'}}>*/}
                                                {/*        <input type="number" name="total[]" defaultValue={editedAmountListState[index]} style={{width:'80px',float:'left'}}*/}
                                                {/*               onChange={(e) => {*/}
                                                {/*                   const updatedList = editedAmountListState;*/}
                                                {/*                   updatedList[index] = e.target.value*/}
                                                {/*                   setEditedAmountListState(updatedList)*/}
                                                {/*                   console.log(editedAmountListState)*/}
                                                {/*               }}*/}
                                                {/*               // readOnly={isReadonlyListState[index]}*/}
                                                {/*        />*/}
                                                {/*        <span className="shop_btn_pack">*/}
                                                {/*            &nbsp;*/}
                                                {/*            <input type="button" className="input_small gray ex_modify" data-uid="1374" value="수정"*/}
                                                {/*                   style={{fontSize:'11px',padding:'0px',borderRadius:0,height:'19px',marginLeft:'-20px'}}*/}
                                                {/*                   onClick={()=>{*/}
                                                {/*                       editButtonHandler(index)*/}
                                                {/*                   }}*/}
                                                {/*            />*/}
                                                {/*        </span>*/}
                                                {/*    </div>*/}
                                                {/*</td>*/}

                                                <td className="f_list0">
                                                    {/*<a href="_cardsys.sub_tree_chart.php?_mode=modify&amp;app_mode=popup&amp;tree_memid=hjh6209" onClick={()=>{}}>*/}
                                                    {/*    <img src="./images/icon/recomid_icon.png" style={{verticalAlign:'bottom'}}/>*/}
                                                    {/*</a>*/}

                                                    {/*<a href="_cardsys.sub_tree_sponid.php?_mode=modify&amp;app_mode=popup&amp;tree_memid=hjh6209" onClick={()=>{}}>*/}
                                                    {/*    <img src="./images/icon/sponid_icon.png" style={{verticalAlign:'bottom'}}/>*/}
                                                    {/*</a>*/}
                                                    <input type="button" value="조직도" className="input_small white"
                                                           onClick={() => {
                                                           }}/>
                                                </td>
                                            </tr>
                                        )
                                    })

                                    )}

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

                                    {/* <!--<img src='./image/btn_mmpoint_02.gif' onClick="btn_check('defer')" style='cursor:hand' alt='정산유보'>
		<img src='./image/btn_mmpoint_03.gif' onClick="btn_check('refusal')" style='cursor:hand' alt='정산거절'>--> */}
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