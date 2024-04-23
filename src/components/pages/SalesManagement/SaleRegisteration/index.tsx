'use client'
import Slider from '@/components/layouts/Slider/Sales';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import LEVEL_API from "@/services/api/levels";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter } from "next/navigation";
import SALEREGISTER_API from "@/services/api/saleregister";
import noop from "noop-ts";

type IdNameStateType = {
    id: number;
    name: string;
}

const SaleRegisteration = () => {
    const router = useRouter();
    const [sliderVisible, setSliderVisible] = useState(true)
    const [startDate, setStartDate] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [xColor, setXColor] = useState<number>(0)
    const [yColor, setYColor] = useState<number>(0)
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false)
    const [isRewarded, setIsRewarded] = useState<boolean>(false)
    const [userListState, setUserListState] = useState<number[]>([])

    const {mutate: mutateSaleRegistration} = useMutation(
        {
            mutationFn: SALEREGISTER_API.create,
            onSuccess: (values: any) => {
                console.log('success')
                router.push(PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION_MANAGER)
            },
            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            }
        },
    )

    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    const getSelectedUser = (users: IdNameStateType[]) => {
        console.log('good')
    }

    const onDateChangeHandle = (e: any) => {
        setIsDatePickerOpen(!isDatePickerOpen);
        setStartDate(e);
    }

    const onSubmitHandler = async (formData: FormData) => {
        const redRegidate = formData.get('redRegidate');
        const memo = formData.get('pointTitle')
        const payment_method = formData.get('chk_payment');
        // const amount = formData.get('amount');
        const userid_hidden = formData.get('userid_hidden')?.toString() || '';
        const str = userid_hidden.split('-');
        setUserListState(str.map((sub) => (Number(sub))))
        // console.log(userListState)

        mutateSaleRegistration({
            depositDate: redRegidate?.toString() || format((new Date()), 'yyyy-MM-dd'),
            users: str.map((sub) => (Number(sub))),
            amount: 110000,
            isConfirmed: isConfirmed,
            method: Number(payment_method),
            memo: memo?.toString() || '',
            // isStatus: false,
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
                                                      onClick={sliderToggle}></span><span className="btn_open"
                                                                                          id="open_close_btn_open"
                                                                                          title="메뉴열기"
                                                                                          style={{display: !sliderVisible ? "block" : "none"}}
                                                                                          onClick={sliderToggle}></span>
                    </div>

                    {/* <!-- 페이지타이틀 --> */}
                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">
					매출등록 관리					
					</span>
                        <span className="location">홈 &gt; 가맹점관리 &gt; 매출등록 관리</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}

                    <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0}
                            style={{display: 'none'}}></iframe>
                    {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

                    <div className="common_ajax_proc"></div>

                    <form name='frm' method='post' action={onSubmitHandler} encType='multipart/form-data'>
                        <input type='hidden' name='_mode' value='add'/>
                        <input type='hidden' name='pointNo' value=''/>
                        <input type='hidden' name="_PVSC" value=""/>
                        <input type='hidden' name="signdate" value=""/>
                        <input type='hidden' name='qstr2' value="&app_mode="/>
                        <input type='hidden' name="temp_pprice" value=""/>
                        <input type='hidden' name="temp_gross_sale_price" value=""/>

                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="200px"/>
                                    {/* <!-- 마지막값은수정안함 --> */}
                                    <col width="*"/>
                                </colgroup>
                                <td>

                                    <tr>
                                        <td className="article">매출일자<span className='ic_ess' title='필수'></span></td>
                                        <td className="conts">
                                            <input type='text' readOnly name='redRegidate' className='input_text'
                                                   value={format(startDate, "yyyy-MM-dd")} onMouseDown={(e) => {
                                                e.preventDefault();
                                                setXColor(e.clientX);
                                                setYColor(e.clientY + 15);
                                                setIsDatePickerOpen(!isDatePickerOpen);
                                            }}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="article">매출구분
                                            <span className='ic_ess' title='필수'></span>
                                        </td>
                                        <td className="conts">
											<span className='multi'>
												<label htmlFor='chk_buy01'>
													<input type='radio' id='chk_buy01' name='chk_buy' value='01'
                                                           className='relation_auto_mode' checked/> 신규
												</label>
											</span>&nbsp;&nbsp;&nbsp;
                                            {/*<span className='multi' >*/}
                                            {/*	<label htmlFor='chk_buy02'>*/}
                                            {/*		<input type='radio' id='chk_buy02' name='chk_buy' value='02'  className='relation_auto_mode'  /> 재구매*/}
                                            {/*	</label>*/}
                                            {/*</span>&nbsp;&nbsp;&nbsp;*/}
                                            {/*<span className='multi' >*/}
                                            {/*	<label htmlFor='chk_buy03'>*/}
                                            {/*        <input type='radio' id='chk_buy03' name='chk_buy' value='03'  className='relation_auto_mode' /> 전환매출*/}
                                            {/*	</label>*/}
                                            {/*</span>&nbsp;&nbsp;&nbsp;*/}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="article">
                                            내용
                                            <span className='ic_ess' title='필수'></span>
                                        </td>
                                        <td className="conts">
                                            <input type='text' name='pointTitle' size={30} className='input_text'/>
                                        </td>
                                    </tr>
                                    <input type='hidden' name='_cd_sdate' value="0"/>
                                    {/* <!--
									<tr>
										<td className="article">지급일 계산<span className='ic_ess' title='필수'></span></td>
										<td className="conts"><input type='text' name='_cd_sdate' size={3} className='input_text' value="7">일 이후부터 지급</td>
									</tr>
--> */}

                                    <tr>
                                        <td className="article">매출유형<span className='ic_ess' title='필수'></span></td>
                                        <td className="conts"><span className='multi'>
										<label htmlFor='entry_modevolume'>
                                        <input type='radio' id='entry_modevolume' name='entry_mode' value='volume'
                                               className='entry_mode' checked/> 일반매출</label></span>&nbsp;&nbsp;&nbsp;
                                        </td>
                                    </tr>

                                    <tr className="entry_product" style={{display: 'none'}}>
                                        <td className="article">관련상품 지정</td>
                                        <td className="conts"></td>
                                        <div className="relation_use">
                                            <div className='btn_line_up_center' style={{marginBottom: '5px'}}>
								<span className='shop_btn_pack'>
                            <input type='button' value='연결상품 등록' className='input_small blue' onClick={() => {
                            }}/></span>
                                            </div>
                                            <br/>
                                            <input type='hidden' name='prod_pserialnum' id='prod_pserialnum' value=""/>
                                            <span className="shop_state_pack"><span className="lightgray"
                                                                                    style={{width: '50px'}}>상품코드</span></span> &nbsp;
                                            <input type='text' name='prod_pcode' id='prod_pcode' size={3}
                                                   className='input_text' value="" readOnly/><br/>
                                            <span className="shop_state_pack"><span className="lightgray"
                                                                                    style={{width: '50px'}}>상품명</span></span> &nbsp;
                                            <input type='text' name='prod_pname' id='prod_pname' size={3}
                                                   className='input_text' value="" readOnly/><br/>
                                            <span className="shop_state_pack"><span className="lightgray"
                                                                                    style={{width: '50px'}}>판매가격</span></span> &nbsp;
                                            <input type='text' name='prod_pprice' id='prod_pprice' size={3}
                                                   className='input_text' value="" readOnly/><br/>
                                            <span className="shop_state_pack"><span className="lightgray"
                                                                                    style={{width: '50px'}}>PV가격</span></span> &nbsp;
                                            <input type='text' name='prod_pprice_pv' id='prod_pprice_pv' size={3}
                                                   className='input_text' value="" readOnly/><b/><br/>
                                            <span className="shop_state_pack"><span className="lightgray"
                                                                                    style={{width: '50px'}}>수량</span></span> &nbsp;
                                            <input type='text' name='prod_cnt' id='prod_cnt' size={3}
                                                   className='input_text' value="10"/> 개
                                            <span className='shop_btn_pack' style={{float: 'none'}}/>
                                            <input type="'button'" id="pcnt_calc" className="input_small gray"
                                                   style={{cursor: 'pointer'}} value={'자동계산'}/>&nbsp;
                                            <input type='hidden' id='set_pprice' name='set_pprice' value=''/>
                                            <input type='hidden' id='set_pprice_pv' name='set_pprice_pv' value=''/>


                                            <label><input type="checkbox" name="prod_chk_free" value="Y"/> 인정 매출시
                                                체크</label>
                                            <div className='guide_text'><span className='ic_blue'></span>
                                                <span className='blue'>인정 매출일때 일부 수당지급에서 제외</span></div>
                                        </div>
                                    </tr>

                                    <tr className="entry_volume">
                                        <td className="article">매출선택<span className='ic_ess' title='필수'></span></td>
                                        {/* <td className="conts"> */}


                                        <select name='chk_ent' id='chk_ent' onChange={() => {
                                        }}>
                                            <option value='110000'>&nbsp; 11 만원</option>
                                        </select>&nbsp;
                                        <label><input type="checkbox" name="chk_free" value="Y"/> 인정 매출시 체크</label>

                                        {/* <div className='guide_text'><span className='ic_blue'></span><span className='blue'>인정 매출일때 일부 수당지급에서 제외</span></div> */}
                                    </tr>

                                    <tr className="entry_volume">
                                        <td className="article">결제수단<span className='ic_ess' title='필수'></span></td>
                                        {/* <td className="conts"> */}


                                        <select name='chk_payment' id='chk_ent' onChange={() => {
                                        }}>
                                            <option value={0}>&nbsp; 캐시</option>
                                            <option value={1}>&nbsp; 무통장</option>
                                            <option value={2}>&nbsp; 카드</option>
                                            <option value={3}>&nbsp; 휴대폰</option>
                                        </select>&nbsp;
                                        {/* <div className='guide_text'><span className='ic_blue'></span><span className='blue'>인정 매출일때 일부 수당지급에서 제외</span></div> */}
                                    </tr>

                                    {/*<tr className="entry_volume">*/}
                                    {/*	<td className="article">매출금액<span className='ic_ess' title='필수'></span></td>*/}
                                    {/*	<td className="conts">*/}
                                    {/*	<input type='text' name='pprice' id='pprice' size={3} className='input_text' value="0"/>*/}
                                    {/*	원*/}
                                    {/*</td>*/}

                                    {/*</tr>*/}

                                    {/* <tr className="entry_volume">
										<td className="article">매출 BV<span className='ic_ess' title='필수'></span></td>
										<td className="conts"><input type='text' name='gross_sale_price' id='gross_sale_price' size={3} className='input_text' value=""/>  BV

			<input type='hidden' name="temp_pprice" value=""/>
			<input type='hidden' name="temp_gross_sale_price" value=""/>
			<input type='hidden' name="multi_pv" value=""/>
			<input type='hidden' name="multi_real_pv" value=""/>
			&nbsp;&nbsp;&nbsp;<span className="shop_state_pack"><span className="lightgray" style={{width:'30px'}}>수량</span></span> &nbsp;
            <input type='text' name='multi_cnt' id='multi_cnt' size={3} className='input_text' value="1" style={{width:'35px'}} onKeyUp={()=>{"multi_calc2()"}}/> 
            <span className='shop_btn_pack' style={{float:'none'}}>
               
                <input type="'button'" id="multi_calc" onClick={()=>{"multi_calc2()"}} className="input_small gray" style={{cursor: 'pointer'}} value="자동계산"/></span>&nbsp;
			
										</td>
									</tr> */}
                                    <tr>
                                        <td className="article">승인상태<span className='ic_ess' title='필수'></span></td>
                                        <td className="conts">
											<span className='multi'>
											    <label htmlFor='pstatusY'>
												    <input type='radio' id='pstatusY' name='pstatus'
                                                           className='relation_auto_mode' checked={isConfirmed}
                                                           onClick={(e) => {
                                                               setIsConfirmed(true)
                                                           }}
                                                    /> 승인
											    </label>
										    </span>&nbsp;&nbsp;&nbsp;
                                            <span className='multi'>
                                                <label htmlFor='pstatusN'>
                                                    <input type='radio' id='pstatusN' name='pstatus'
                                                           className='relation_auto_mode' checked={!isConfirmed}
                                                           onClick={(e) => {
                                                               setIsConfirmed(false)
                                                           }}
                                                    /> 미승인
                                                </label>
                                            </span>&nbsp;&nbsp;&nbsp;
                                        </td>
                                    </tr>
                                    {/*<tr>*/}
                                    {/*    <td className="article">*/}
                                    {/*        수당지급(daily)<span className='ic_ess' title='필수'></span>*/}
                                    {/*    </td>*/}
                                    {/*    <td className="conts">*/}
                                    {/*        <span className='multi'>*/}
                                    {/*            <label htmlFor='bonus_stop_dailyN'>*/}
                                    {/*                <input type='radio' id='bonus_stop_dailyN' name='bonus_stop_daily'*/}
                                    {/*                       className='relation_auto_mode'*/}
                                    {/*                       checked={isRewarded}*/}
                                    {/*                       onClick={(e) => {*/}
                                    {/*                           setIsRewarded(true)*/}
                                    {/*                       }}*/}
                                    {/*                /> 지급*/}
                                    {/*            </label>*/}
                                    {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                    {/*        <span className='multi'>*/}
                                    {/*            <label htmlFor='bonus_stop_dailyY'>*/}
                                    {/*                <input type='radio' id='bonus_stop_dailyY' name='bonus_stop_daily'*/}
                                    {/*                       className='relation_auto_mode'*/}
                                    {/*                       checked={!isRewarded}*/}
                                    {/*                       onClick={(e) => {*/}
                                    {/*                           setIsRewarded(false)*/}
                                    {/*                       }}*/}
                                    {/*                />  정지*/}
                                    {/*            </label>*/}
                                    {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                    <tr>
                                        <td className="article">매출등록 아이디<span className='ic_ess' title='필수'></span></td>
                                        <td className="conts">
                                            <span className="shop_btn_pack">
                                                <a className="small blue" title="유저검색"
                                                   onClick={() => {
                                                       window.open(PAGE_ROUTES.SALES_MANAGEMENT.SALES_MEMBER_LOOKUP, '천천인 검색 페이지', 'height=600px, width=900px')
                                                   }}
                                                >유저검색
                                                </a>
                                            </span><br/>
                                            <input type="hidden" id='userid_hidden' name="userid_hidden" size={30}
                                                   className="input_text"
                                            />
                                            <textarea name="pointIDArray" id="pointIDArray" className="input_text"
                                                      style={{width: '100%', height: '100px'}} readOnly>
                                            </textarea>
                                            <div className='guide_text'><span className='ic_blue'></span><span
                                                className='blue'>유저검색 버튼을 눌러서 매출등록 아이디를 추가해주세요.</span></div>
                                        </td>
                                    </tr>
                                </td>
                            </table>
                        </div>

                        <div className='bottom_btn_area'>
                            <div className='btn_line_up_center'>
                                <span className='shop_btn_pack btn_input_red'>
                                    <input type='submit' name='' className='input_large' value='확인'/>
                                </span>
                                <span className='shop_btn_pack'>
                                    <span className='blank_3'></span>
                                </span>
                                <span className='shop_btn_pack btn_input_gray'>
                                    <input type='button' name='' className='input_large' value='목록'
                                           onClick={() => {
                                               router.push(PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION_MANAGER)
                                           }}
                                    />
                                </span>
                            </div>
                        </div>
                    </form>


                    <div style={{height: '30px'}}></div>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                left: xColor.toString() + 'px',
                top: yColor.toString() + 'px',
                display: isDatePickerOpen ? 'block ' : 'none',
            }}>
                <DatePicker onChange={onDateChangeHandle} selected={startDate} inline/>
            </div>
        </div>

    )
}

export default SaleRegisteration;