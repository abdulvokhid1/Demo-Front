'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

import ReactPaginate from 'react-paginate';
import Slider from '@/components/layouts/Slider/Sales';
import Head from 'next/head'
import SALEREGISTER_API from '@/services/api/saleregister';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { Layout, message } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import { getFullTime } from "@/utils/helper";
import { useEffect, useState } from 'react';
import { CreatedAtType, UserInfo } from './types/type';
import { LevelTypeProps } from '@/services/api/levels/type';


const SalesRegistrationManager = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
	const [messageApi, contextHolder] = message.useMessage()
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}
	const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    const [userListState, setUserListState] = useState<UserInfo[]>([])
    const [createdAt, setCreatedAt] = useState<CreatedAtType>({})
    const [levels, setLevels] = useState<LevelTypeProps[]>([])
    const [memberId, setMemberId] = useState<string>()
    const [centerId, setCenterId] = useState<number>(0)
    const [email, setEmail] = useState<string>()
    const [bankAccount, setBankAccount] = useState<string>()
    const [mobilephone, setMobilePhone] = useState<string>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
	const {mutate: mutateLevel} = useMutation(
        {
            mutationFn: SALEREGISTER_API.updateSaleRegister,
            onSuccess: async (values: any) => {
                console.log('success')
            },

            onError: (error: any) => {
                const errorType = error.response.data.errors[0]
                messageApi.open({
                    type: 'error',
                    content: 't(`errorMessages.${errorType}`)',
                })
            },
        }
    )
	useEffect(() => {
        mutate({Page: currentPage, limit: perPage});
    }, []);
    useEffect(() => {
        mutateLevel();
    }, []);

    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }

    const pagginationHandler = (selectedItem: { selected: number }) => {
        const page = selectedItem ? selectedItem.selected+1 : 0;
        mutate({page: page, limit: perPage})
    
	const onSubmit = async (formData: FormData) => {

        const id = formData.get('id');
        const sale_date = formData.get('sale_date');
		const income_option = formData.get('new ')
        const sale_type = formData.get('sale_type');
		const income_option_amount = formData.get('mb_entry_option');
        const meno = formData.get('meno')
        const income_option_select_amount = formData.get('select_amount');
        const sale_amount = formData.get('sale_amount');
        const sale_pv = formData.get('sale_pv');
        const income_option_appstatus = formData.get('appstatus');
        const income_option_daily_pay = formData.get('daily_pay');
        const sale_id = formData.get('sale_id');
        const select_ex_date = formData.get('select_ex_date');

		
        const params = {
            name: id? id.toString() : '',
            sale_date: sale_date ? sale_date.toString() : '',
			income_option:income_option === 'Y'? 1 : 0,
			sale_type: sale_type? sale_type.toString(): '',
			income_option_amount: Number(income_option_amount) || 0,
            meno: meno? meno.toString() : '',
            income_option_select_amount: income_option_select_amount?.toString() || '',
			sale_amount: sale_amount?.toString() || '',
			sale_pv: sale_pv?.toString() || '',
			income_option_appstatus: income_option_appstatus?.toString || '',
			income_option_daily_pay: income_option_daily_pay?.toString || '',
			sale_id: sale_id?.toString || '',
			select_ex_date:select_ex_date?.toString || '',
        }
        // console.log(params)
        mutate(params);

        // Handle response if necessary
        // const data = await response.json()
    
    

return (
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
					매출등록 관리
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 매출등록 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

<form name='searchfrm' method='post' action={onsubmit}>
            <input type='hidden' name='mode' value='search' />
            <input type='hidden' name='app_mode' value=" " />

				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 

							<tr>
								<td className="article">기간</td>
								<td className="conts"><input type='text' name='pass_redRegidate' className='input_text' value=""/>
                                ~ <input type='text' name='pass_redRegidate2' className='input_text' value=""/></td>
								<td className="article">주문번호</td>
								<td className="conts"><input type='text' name='pass_ordernum' className='input_text' value=""/></td>
								<td className="article">내용</td>
								<td className="conts"><input type='text' name='pass_pointTitle' className='input_text' value=""/></td>
								<td className="article">구분</td>
								<td className="conts" colSpan={20}>
					  		  <input type="radio" name='chk_buy' id="" value="" />
								  <label  style={{height:'18px'}}>전체</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="01" />
								  <label  style={{height:'18px'}}>신규</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="02" />
								  <label  style={{height:'18px'}}>재구매</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="03" />
								  <label  style={{height:'18px'}}>전환매출</label>
								  &nbsp;
								</td>
							</tr>
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_pointID' className='input_text' value=""/></td>
								<td className="article">성명</td>
								<td className="conts"><input type='text' name='pass_name' className='input_text' value=""/></td>
								<td className="article">소속센터</td>
								<td className="conts">

        <select name='assign_center' id="assign_center" className='add_option add_option_chk' style={{width:'200px'}}>
        <option value="">선택</option>
        <option value="1" >본사</option>
        <option value="2" >봉천센타</option>
        <option value="3" >강남센타</option>
        </select>
								</td>

							</tr>
						</tbody> 
					</table>

					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"></input></span>
							<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href={PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION} className="medium red" title="매출등록하기" >매출등록하기</a></span>
						</div>
					</div>
				</div>	
                
</form>

				{/* <!-- // 검색영역 --> */}

	<div className="form_box_area">

	<table border={0} cellPadding={0} cellSpacing={0} width='100%'style={{borderCollapse:'collapse'}}>
	<tr style={{ height: '40px', textAlign: 'left' }}> 
		<td style={{padding:'5px'}}>

			 {/* ※ 매출 합계 :  <b><font color="e16007">0</font></b> &nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;  */}
			{/* <!--누적지급 합계 : <b><font color="4c64ab">0</font></b> 포인트&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;--> */}

			{/* <!-- 수정 및 추가 by mview
			쿠폰할인 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			적립금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			예치금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			포인트결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
			배송비결제 : <b><font color="4c64ab">0</font></b>원
			--> */}
{/* 전체 : <b><font color="4C64AB">0</font></b> 건  조회</a> */}

		</td>
	</tr>
	</table>

	</div>

<form name='frm' method='post' >
<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value='0'/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIDEg"/>


					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="ctl_btn_area">

						<span className="shop_btn_pack"><a href="javascript:select_send('excel');" className="small white" title="선택엑셀저장" >선택엑셀저장</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_send('excel');" className="small white" title="검색엑셀저장" >검색엑셀저장 (0)</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택삭제" >선택삭제</a></span>
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
								<th scope="col" className="colorset">매출단위</th>
								<th scope="col" className="colorset">확정매출</th>
								<th scope="col" className="colorset">상태</th>
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">만기일</th>
								<th scope="col" className="colorset">수당</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={15} height='40'>내용이 없습니다.</td></tr>	</tbody> 
					</table>

					{/* <!-- 페이지네이트 --> */}
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
                            onPageChange={pagginationHandler}
                        />
                        </div>
</form>

				<div style={{height:'30px'}}></div>

			</div>
		</div>
</div>

)}
	
	}
export default SalesRegistrationManager; 