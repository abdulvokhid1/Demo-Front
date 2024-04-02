'use client'
import Slider from '@/components/layouts/Slider/Design';
import { useEffect, useState } from "react";

const ShopBanner = () => {
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
			<div className="content_section_fix" style={{ background: '#fff' }}>
				<div className="open_close">
					<span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                </div>
				{/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						쇼핑몰 배너 관리					
					</span>
                    <span className="location">홈 &gt; 디자인관리 &gt; 쇼핑몰 배너 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
 					<div className="common_ajax_proc"></div>




				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<form name='searchfrm' method='post' action='/myAdmin/_banner.list.php' autoComplete={'off'} >
					<input type='hidden' name='mode' value='search'/>
						<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								
			<td className='article'>배너구분</td>
			<td className='conts'>
				<select name='pass_loc' >
					<option value=''>-선택-</option>
					<option value='info_logo' >========== 로고 및 아이콘 ==========</option>
					<option value='site_top_logo' >사이트 탑 로고 (204 x 35)</option>
					<option value='site_footer_logo' >사이트 푸터 로고 (220 x 57)</option>
					<option value='mobile_site_top_logo' >모바일 사이트 탑 로고 (370 x 64)</option>
					<option value='site_icon_basic' >사이트 기본 아이콘 (114 x 114)</option>
					<option value='pc_banner' >========== 기본스킨 PC 화면 배너 ==========</option>
					<option value='site_top_big' >사이트 최상단 큰 배너 (1000 x 80)</option>
					<option value='site_top_right' >사이트 헤더 우측 배너 (225 x 70)</option>
					<option value='site_main_big' >메인 상단 큰 배너 (1번:730 x 403, 2번:111x89)</option>
					<option value='site_main_md' >메인 중앙 MD&apos`s Pick (250 x 360)</option>
					<option value='site_main_section3' >메인 상단 배너 - 가로 3개 (321 x 116)</option></select></td>
										<td className="article">노출여부</td>
								<td className="conts"><select name='pass_view' >
									<option value=''>-선택-</option>
									<option value='Y' >노출</option>
									<option value='N' >숨김</option>
									</select></td>
								<td className="article">배너타이틀</td>
								<td className="conts">
									<input type='text' name='pass_title' className='input_text' value=""/></td>
							</tr>
						</tbody> 
					</table>
					
					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
														<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href="_banner.form.php?_loc=&_mode=add" className="medium red" title="배너등록" >배너등록</a></span>

						</div>
					</div>
					</form>
				</div>
				{/* <!-- // 검색영역 --> */}
				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					{/* <!-- 리스트 제어버튼영역 */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택해제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						{/* <!-- <colgroup>
							<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
						</colgroup> --> */}
						<thead>
							<tr>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">구분</th>
								<th scope="col" className="colorset">순위</th>
								<th scope="col" className="colorset">게재일</th>
								<th scope="col" className="colorset">노출</th>
								<th scope="col" className="colorset">배너타이틀/배너이미지</th>
								<th scope="col" className="colorset">타겟/링크</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 

						<tr><td colSpan={15} height='40'>내용이 없습니다.</td></tr>
						</tbody> 
					</table>


					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}
			</div>
			<div style={{height:'30px'}}></div>
			</div>
                </div>
            </div>
    )}

    export default ShopBanner;