'use client'
import Slider from '@/components/layouts/Slider/users';
import LEVEL_API from '@/services/api/levels';
import USER_API from '@/services/api/users';
import { PayManagerType } from '@/utils/types/type';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const ProceedsOfChanges = () => {
const [messageApi, contextHolder] = message.useMessage()
const [sliderVisible, setSliderVisible] = useState(true)
const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
	const [payment, setPayments] = useState<PayManagerType>()
    const {mutate: mutateLevel} = useMutation(
        {
            mutationFn: USER_API.getList,
            onSuccess: async (values: any) => {
                setPayments(values);
                console.log(JSON.stringify(payment))
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
                setPayments(values.PayManager);
                setTotalUsers(values.total);
                console.log(JSON.stringify(payment))
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
return (
    <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
		<Slider />

		{/* <!-- 내용 --> */}
              <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
				  style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}>
					</span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"
					style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
         
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
	    				수익금 변동내역					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 수익금 변동내역</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
   
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

<form name='searchfrm' method='post' action='/myAdmin/_entershop.bonus_point.list.php'>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_mb_id' className='input_text' value=""/></td>
								<td className="article">내용</td>
								<td className="conts"><input type='text' name='pass_pointTitle' className='input_text' value=""/></td>
								<td className="article">수당구분</td>
								<td className="conts"><input type='text' name='pass_potype' className='input_text' value=""/></td>
								{/* <!--<td className="article">등록일</td>
								<td className="conts"><input type='text' name='pass_wr_datetime' className='input_text' value=""></td>--> */}

								<td className="article">처리날짜</td>
								<td className="conts" colSpan={3}>
<div className='btn_line_up_left'>
			<input type='text' name='j_sdate' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_start"/>
			~
			<input type='text' name='j_ddate' style={{width:'75px',textAlign:'center'}} value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
</div>

<div className='btn_line_up_left'>

<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=> {}} style={{cursor:'pointer'}}>90일간</button></span>

</div>
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


<form name='frm' method='post' >
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='seachcnt' value='0'/>
<input type='hidden' name='PVSC' value=""/>
<input type='hidden' name='search_que' value="IHdoZXJlIDEg"/>


					{/* <!-- 리스트영역 --> */}
					<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
				
					
					{/* <!-- // 리스트 제어버튼영역 --> */}

					{/* <!-- 리스트 제어버튼영역 //--> */}
					
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택내역반환" >선택내역반환삭제</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>

						<span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
					</div>
					
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">

						<thead>
							<tr>
							<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">성명</th>
								<th scope="col" className="colorset">적립/변경 사유</th>
								<th scope="col" className="colorset">지급캐시</th>
								<th scope="col" className="colorset">차감캐시</th>
								<th scope="col" className="colorset">처리후잔액</th>
								{/* <th scope="col" className="colorset">상태</th> */}
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">구분</th>
								{/* <!--<th scope="col" className="colorset">지급예정일</th>--> */}
								<th scope="col" className="colorset">처리날짜</th>
								{/* <th scope="col" className="colorset">관리</th> */}
							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={12} height='40'>내용이 없습니다.</td></tr>	</tbody> 
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
</form>

				<div style={{height:'30px'}}></div>

			</div>
		</div>
		{/* <!-- //내용 --> */}
		</div>
        
)
}

export default ProceedsOfChanges;