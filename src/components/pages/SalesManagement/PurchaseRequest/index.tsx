'use client'
import Slider  from '@/components/layouts/Slider/Sales';
import USER_API from '@/services/api/users';
import { PurchaseType } from '@/utils/types/type';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const PurchaseRequest = () => {
const [messageApi, contextHolder] = message.useMessage()
const [sliderVisible, setSliderVisible] = useState(true)
const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
	const [purchase, setPurchase] = useState<PurchaseType>()
    const {mutate: mutateLevel} = useMutation(
        {
            mutationFn: USER_API.getList,
            onSuccess: async (values: any) => {
                setPurchase(values);
                console.log(JSON.stringify(purchase))
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
                setPurchase(values.PayManager);
                setTotalUsers(values.total);
                console.log(JSON.stringify(purchase))
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
  
    return(
        <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
        style={{background: "#f0f0f0"}}>
			   <Slider />
               <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                   style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                   <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                   style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
		      		구매신청 관리					
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 입금신청 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>


<form name='searchfrm' method='post' action='/myAdmin/_calcu.ad_saving.list.php'>
<input type='hidden' name='mode' value='search'/>
		<div className="form_box_area" >
			<table className="form_TB" summary="검색항목">
				<tbody> 
							<tr>
								<td className="article">기간</td>
								<td className="conts" colSpan={3}>
									<div className='btn_line_up_left'>
												<input type='text' name='time_start' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>
												~
												<input type='text' name='time_end' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
									</div>
									<div className='btn_line_up_left'>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
									<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>
									</div>
								</td>
								<td className="article">구분</td>
								<td className="conts" colSpan={20}>
					  
								  <input type="radio" name='chk_buy' id="" value=""  />
								  <label  style={{height:'18px'}}>전체</label>
								  &nbsp;

								  <input type="radio" name='chk_buy' id="" value="01" />
								  <label style={{height:'18px'}}>신규</label>
								  &nbsp;
								  <input type="radio" name='chk_buy' id="" value="02" />
								  <label style={{height:'18px'}}>재구매</label>
								  &nbsp;

								  <input type="radio" name='chk_buy' id="" value="03" />
								  <label style={{height:'18px'}}>전환매출</label>
								  &nbsp;
								</td>
							</tr>
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_pointID' className='input_text' value=""/></td>
								<td className="article">성명</td>
								<td className="conts"><input type='text' name='pass_name' className='input_text' value=""/></td>
								<td className="article">소속대리점</td>
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
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
						</div>
					</div>

			{/* <!-- 버튼영역 --> */}
			<div className="top_btn_area">
				<div className="btn_line_up_center">
				</div>
			</div>
		</div>
</form>


   <form name='fboardlist' method='post'>
        
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>
	<input type='hidden' name='_seachcnt' value='0'/>
	<input type='hidden' name='mode'	value=""/>
	<input type='hidden' name='_mode'	value=""/>
	<input type='hidden' name='_search_que' value="IHdoZXJlIDEgIA=="/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_excel_rech();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_send('excel_rech');" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
						{/* <!--<span className="shop_btn_pack" style="float:right;"><a href="javascript:select_update_send();" className="small blue" title="선택완료처리" style="border-radius:0">선택완료처리</a></span>--> */}
					</div>
				
					{/* <!-- // 리스트 제어버튼영역 --> */}
					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=orderno&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=odrkey&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className="colorset">소속대리점</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=wr_pay_method&orderby=asc'><u>결제수단</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=wr_wdate&orderby=asc'><u>신청 금액</u></a></th>
								{/* <th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=wr_wdate&orderby=asc'><u>수수료</u></a></th> */}
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=wr_wdate&orderby=asc'><u>적용금액</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=del_name&orderby=asc'><u>등록일</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=ismember&orderby=asc'><u>내용</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=ismember&orderby=asc'><u>상태</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_calcu.ad_saving.list.php?code=&page=&filed=ismember&orderby=asc'><u>처리</u></a></th>
							</tr>
						</thead> 

						<tbody>
		                    <tr><td height={50} colSpan={12} align='center'>내역이 없습니다.</td></tr>
                         </tbody>
	 		</table>
        </div>
	
    
	<div className="form_box_area">

			<table width="100%" border={0} cellSpacing="0" cellPadding="0">

			<tr>
				<td align='left' style={{paddingTop:'3px'}}>
					<table border={0} cellSpacing="0" cellPadding="0">
					<tr>

						<td style={{paddingTop:'2px'}}>&nbsp;

					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="top_btn_area">
{/* <!--
						<span className="shop_btn_pack"><a onclick="btn_check('dydate')" className="small white" title="선택수정" >선택수정</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
--> */}
						<span className="shop_btn_pack"><a onClick={()=>{}} className="small white" title="선택삭제" >선택삭제</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>

						{/* <!--<span className="shop_btn_pack"><a href="./_calcu.ad_rech_xls.php?code=" className="small white" title="엑셀저장" >엑셀저장</a></span>--> */}
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}
					
						</td>
					</tr>
					</table>
				</td>
			</tr>
			</table>
</div>


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


                    <div style={{height:'30px'}}></div>

	</form>

</div>
</div>
</div>

)}
export default PurchaseRequest;