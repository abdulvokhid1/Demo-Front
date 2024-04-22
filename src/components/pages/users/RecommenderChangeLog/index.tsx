'use client'
import Slider from '@/components/layouts/Slider/users';
import { useEffect, useState } from 'react';
import { ChangelogType } from '../../../../utils/types/type';
import { message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import USER_API from '@/services/api/users';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const RecommenderChangeLog = () => {
	const [messageApi, contextHolder] = message.useMessage()
	const [sliderVisible, setSliderVisible] = useState(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
		const [totalUsers, setTotalUsers] = useState<number>(0)
		const [perPage, setPerPage] = useState<number>(2)
		const [log, setLogs] = useState<ChangelogType>()
		const {mutate: mutateLevel} = useMutation(
			{
				mutationFn: USER_API.getList,
				onSuccess: async (values: any) => {
					setLogs(values);
					console.log(JSON.stringify(log))
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
					setLogs(values.PayManager);
					setTotalUsers(values.total);
					console.log(JSON.stringify(log))
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

        <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>
             {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						추천인 변경로그					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 추천인 변경로그</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

<form name='fboardlist' method='post' >

{/* <!-- 엑셀검색추가 --> */}

<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value=''/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIHJlX2NvbHVtbiA9ICdyZWNvbWlkJyAg"/>

{/* <!-- 엑셀검색추가 --> */}
<input type='hidden' name='q1'	value="code="/>
<input type='hidden' name='page'	value="1"/>
				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					{/* <!-- // 리스트 제어버튼영역 --> */}
					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{"check_all(this.form)"}}/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=a.re_check_id&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=b.memgrade&orderby=asc'><u>레벨</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=a.re_wdate&orderby=asc'><u>적용일</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=a.re_old_id&orderby=asc'><u>변경 전</u></a> (대상자 → 추천인)</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=a.re_new_id&orderby=asc'><u>변경 후</u></a> (대상자 → 추천인)</th>

{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=mb_card_point&orderby=asc'><u>영업상태</u></a></th>--> */}

								<th scope="col" className="colorset"><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=&filed=buymethod&orderby=asc'><u>관리</u></a></th>
							</tr>
						</thead> 
						<tbody>

		<tr><td height={50} colSpan={18} align='center' >내역이 없습니다.</td></tr>
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
					<div className="top_btn_area"> 
				
{/* <!--<span className="shop_btn_pack"><a href="./_entershop.company_xls.php?code=" className="small white" title="엑셀저장" >엑셀저장</a></span>--> */}
					</div>
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
	</form>

{/* <script>createLayer('Calendar');</script> */}
{/* <script>
function check_all(f)
{
    var chk = document.getElementsByName("chk[]");

    for (i=0; i<chk.length; i++)
        chk[i].checked = f.chkall.checked;
}

function btn_check(act)
{
	var f = document.fboardlist;

    if (act == "update") // 선택변경
    { 
        f.action = './_calcu.ad_rech_update.php';
        str = "변경";
    } 
    else if (act == "decide") // 선택 구매결정
    { 
        f.action = './_calcu.ad_rech_decide.php';
        str = "구매결정";
    } 
	else if (act == "dydate") // 선택수정
    { 
        f.action = './_calcu.ad_rech_update_dy.php';
        str = "수정";
    }

	else if (act == "delete") // 선택수정
    { 
        f.action = './_entershop.company.delete.php';
        str = "삭제";
    }

    else
        return;

    var chk = document.getElementsByName("chk[]");
    var bchk = false;

    for (i=0; i<chk.length; i++)
    {
        if (chk[i].checked)
            bchk = true;
    }

    if (!bchk) 
    {
        alert(str + "할 자료를 하나 이상 선택하세요.");
        return;
    }

	if (act == "update")
    { 
        if(f.dan.value == 0) {
			alert(str+'할 단계를 선택하세요.');
			f.dan.focus();
			return;
		}
    } 

	if (!confirm("선택한 자료를 "+str+" 하시겠습니까?"))
		return;

    f.submit();
}

function chk_delivery(val) {
	var chk = document.getElementsByName("chk[]");
	var delivery = document.getElementsByName("od_delivery[]");

	for (var i=0; i<chk.length; i++) {
		if (chk[i].checked)
			delivery[i].value = val;
    }
}

function chk_gonumber(val) {
	var chk = document.getElementsByName("chk[]");
	var gonumber = document.getElementsByName("od_gonumber[]");

	for (var i=0; i<chk.length; i++) {
		if (chk[i].checked)
			gonumber[i].value = val;
    }
}






	// - 타입별 액션 적용 ---
	function type_action(_type , _mode){

		
		switch(_type){
			// 문자발송
			case "sms": 
				$("input[name=_mode]").val(_mode);
				$("form[name=fboardlist]").attr("action" , "_sms.form.php");
				break;
			// 포인트지급
			case "point":
				$("input[name=_mode]").val(_mode);
				$("form[name=fboardlist]").attr("action" , "_point.form.php");
				break;
			// 엑셀저장
			case "excel":
				$("input[name=_mode]").val(_mode + "_excel");
				$("form[name=fboardlist]").attr("action" , "_cardsys.recommend_log.pro.php");
				break;
			// 삭제
			case "delete":
				$("input[name=_mode]").val(_mode + "_delete");
				$("form[name=fboardlist]").attr("action" , "_cardsys.recommend_log.pro.php");
				break;
		}
	}
	// - 타입별 액션 적용 ---

	// - 선택적용 ---
	 function select_send(_type) {
		 if($('.className_id').is(":checked")){
			type_action(_type , "select");
			if( _type == "delete" ) {
				if(confirm('정말 삭제하시겠습니까?')){
					document.fboardlist.submit();
				}
			}
			else {
				document.fboardlist.submit();
			}
		 }
		 else {
			 alert('1명 이상 선택하시기 바랍니다.');
		 }
	 }
	// - 검색적용 ---
	 function search_send(_type) {
		 if($('input[name=_seachcnt]').val()*1 > 0 ){
			type_action(_type , "search");
			if( _type == "delete" ) {
				if(confirm('정말 삭제하시겠습니까?')){
					document.fboardlist.submit();
				}
			}
			else {
				document.fboardlist.submit();
			}
		 }
		 else {
			 alert('1명 이상 검색하시기 바랍니다.');
		 }
	 }
	// - 검색적용 ---



</script> */}

				<div style={{height:'30px'}}></div>

			</div>
		</div>
</div>

 )}
        export default RecommenderChangeLog;