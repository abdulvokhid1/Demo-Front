'use client'
import Slider from '@/components/layouts/Slider/Log';
import { useEffect, useState } from "react";

const DetailedLog = () => {
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
				      	상세로그					
					</span>
                    <span className="location">홈 &gt; 로그분석 &gt; 상세로그</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				  {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}
           <div className="common_ajax_proc"></div>

				{/* <!-- 검색영역 --> */}
			
					<form name='searchfrm' method='post' action='/myAdmin/_counter.log.php'>
					<div className="form_box_area">
					<input type='hidden' name='mode' value='search'/>
					<table className="form_TB" summary="검색항목">
						<colgroup>
							<col width="120px"/><col width="500px"/><col width="120px"/><col width="200px"/>
							{/* <!-- 마지막값은수정안함 --> */}
							<col width="*"/>
						</colgroup>
						<tbody> 
							<tr>
								<td className="article">검색방법</td>
								<td className="conts"><select name='idtype'  id='idtype' value='Connect_Route' >
									<option value=''>-선택-</option>
									<option value='Connect_Route' selected>접속경로</option>
									<option value='Connect_IP' >접속IP</option></select> 
									<input type="text" id="id" name="id" style={{width:'150px'}} className='input_text' value=""/>
										<div className='guide_text'><span className='ic_blue'></span><span className='blue'>접속경로가 없는 내역은 즐겨찾기나 도메인을 바로 입력해서 접속한 경우입니다.</span></div></td>
								<td className="article">목록수</td>
								<td className="conts"><select name='limit'  id='limit' value='1000' onChange={()=>{'search()'}}>
									<option value=''>-선택-</option>
									<option value='100' >100</option>
									<option value='1000' >1000</option>
									<option value='2000' >2000</option></select></td>
								<td className="conts"></td>
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

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 */}
					{/* <div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택해제</a></span>
			     	</div> */}
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						<colgroup>
							<col width="60px"/><col width="130px"/><col width="130px"/><col width="130px"/><col width="*"/>
						</colgroup> 
						<thead>
							<tr>
								<th scope="col" className="colorset">번호</th>
								<th scope="col" className="colorset">아이피</th>
								<th scope="col" className="colorset">접속시간</th>
								<th scope="col" className="colorset">키워드</th>
								<th scope="col" className="colorset">접속경로</th>
							</tr>
						</thead> 
						<tbody> 
						<tr><td colSpan={10} height='40'>내용이 없습니다.</td></tr>
						</tbody> 
					</table>
					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?pass_menu=&&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?pass_menu=&&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?pass_menu=&&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?pass_menu=&&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}

		    	</div>
			
				<div style={{height:'30px'}}></div>
			</div>

		</div>
	


	    )}
    export default DetailedLog;