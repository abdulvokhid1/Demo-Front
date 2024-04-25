'use client'
import Slider  from '@/components/layouts/Slider/users';
import LEVEL_API from '@/services/api/levels';
import USER_API from '@/services/api/users';
import PAGE_ROUTES from '@/utils/constants/routes';
import { PayManagerType } from '@/utils/types/type';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import PayManager from '../PayManager/index';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { message } from 'antd';

const StatusOfProceedsPayment = () => {
const [messageApi, contextHolder] = message.useMessage()
const [sliderVisible, setSliderVisible] = useState(true)
const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
	const [payment, setPayments] = useState<PayManagerType>()
    const {mutate: mutateLevel} = useMutation(
        {
            mutationFn: LEVEL_API.getList,
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
				수익금 지급관리					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 수익금 지급관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>


<form name='searchfrm' method='post' action='/myAdmin/_entershop.point.list.php'>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_mb_id' className='input_text' value=""/></td>
								<td className="article">적립/변경 사유</td>
								<td className="conts"><input type='text' name='pass_wr_content' className='input_text' value=""/></td>
								<td className="article">지급일</td>
								<td className="conts"><input type='text' name='pass_wr_datetime' className='input_text' value=""/></td>
							</tr>
						</tbody> 
					</table>

					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
							<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href={PAGE_ROUTES.USERS.PAY_MANAGER} className="medium red" title="관리자 적립" >관리자 적립</a></span>


						</div>
					</div>
									</div>
</form>
				{/* <!-- // 검색영역 --> */}



<form name='frm' method='post'>
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='seachcnt' value='0'/>
<input type='hidden' name='PVSC' value=""/>
<input type='hidden' name='search_que' value="IHdoZXJlIHdyX3N0ZXAgPSAnc3lzdGVtJyA="/>


				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					
					<div className="ctl_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택포인트삭제" >선택포인트삭제</a></span>
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
								<th scope="col" className="colorset">성명</th>
								<th scope="col" className="colorset">적립/변경 사유</th>
								<th scope="col" className="colorset">지급캐시</th>
								<th scope="col" className="colorset">차감캐시</th>
								<th scope="col" className="colorset">처리후잔액</th>
								{/* <th scope="col" className="colorset">상태</th> */}
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">구분</th>
								<th scope="col" className="colorset">관리</th>

							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={15} height='40'>내용이 없습니다.</td></tr>						</tbody> 
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
export default StatusOfProceedsPayment;