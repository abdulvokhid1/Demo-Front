'use client'
import Slider from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';

const SponsorChangeLog = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
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

{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span>
                            </span><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=1' className='ok' title='처음' >
                                <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'>
                                    <span className='icon ic_prev'></span></span><a href='/myAdmin/_cardsys.recommend_log.php?code=&page=0' className='ok' title='이전' >
                                        <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span>
                                        <span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span>
                                        <a href='/myAdmin/_cardsys.recommend_log.php?code=&page=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span>
                                        <span className='btn'><span className='no'><span className='icon ic_last'></span></span>
                                        <a href='/myAdmin/_cardsys.recommend_log.php?code=&page=0' className='ok' title='끝' >
                                            <span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}



	</form>


				<div style={{height:'30px'}}></div>

			</div>
		</div>
</div>

 )}
        export default SponsorChangeLog ;