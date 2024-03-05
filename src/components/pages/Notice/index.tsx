'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
// import './styles.css';
const Notice = () => {
const [sliderVisible, setSliderVisible] = useState(true)
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
}
return(
	<div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
		<Slider />
		<div className="content_section">
			<div className="content_section_fix" style={{background:'#fff'}}>
				<div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
						style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"
						style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

				{/*
				<!-- 페이지타이틀 --> */}
				<div className="title_area">
					<span className="icon"></span>
					<span className="title">
						공지사항 게시판
					</span>
					<span className="location">홈 &gt; 기본관리 &gt; 공지사항 게시판</span>
				</div>


				{/*
				<!-- // 페이지타이틀 --> */}


				<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder={0} style={{display:'none'}}></iframe>

				{/*
				<!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

				<div className="common_ajax_proc"></div>

				{/*
				<!-- 검색영역 --> */}
				<div className="form_box_area">
					<form name="searchfrm" method="post" action="/myAdmin/_bbs.post_notice.list.php">
						<input type="hidden" name="mode" value="search" />
						<input type="hidden" name="pass_menu" value="" />
						<table className="form_TB" summary="검색항목">
							<colgroup>
								<col width="120" />
								<col width="200" />
								<col width="120" />.
								<col width="200" />
								<col width="120" />
								{/*
								<!-- 마지막값은수정안함 --> */}
								<col width="*" />
							</colgroup>
							<tbody>
								<tr>
									<td className="article">공지사항</td>
									<td className="conts"><select name="pass_notice">
											<option value="">-선택-</option>
											<option value="Y">적용</option>
											<option value="N">미적용</option>
										</select></td>
									<td className="article">등록자ID </td>
									<td className="conts"><input type="text" name="pass_inid" className="input_text" style={{width:100}}
											value="" /></td>

								</tr>
								<tr>
									<td className="article">등록자명</td>
									<td className="conts"><input type="text" name="pass_writer" className="input_text" style={{width:100}}
											value="" /></td>
									<td className="article">제목</td>
									<td className="conts"><input type="text" name="pass_title" className="input_text" style={{width:100}}
											value="" /></td>
								</tr>
							</tbody>
						</table>

						{/*
						<!-- 버튼영역 --> */}
						<div className="top_btn_area">
							<div className="btn_line_up_center">
								<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색"
										value="검색" /></span>
								<span className="shop_btn_pack"><span className="blank_3"></span></span>
								<span className="shop_btn_pack"><a href="_bbs.post_notice.form.php?_mode=add" className="medium red"
										title="게시물등록">게시물등록</a></span>

							</div>
						</div>
					</form>
				</div>
				{/*
				<!-- // 검색영역 --> */}

				{/*
				<!-- 리스트영역 --> */}
				<div className="content_section_inner">


					<div className="ctl_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" onClick={()=>
								{}}>전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="선택해제" onClick={()=>
								{}}>선택해제</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small gray" title="선택삭제" onClick={()=>
								{}}>선택삭제</a></span>
					</div>

					<form name="listFrm" id="listFrm" method="post" action="_bbs.post_notice.pro.php">
						<input type="hidden" name="_mode" value="" />
						<input type="hidden" name="_PVSC" value="" />

						<table className="list_TB" summary="리스트기본">
							{/*
							<!-- <colgroup>
			<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
		</colgroup> --> */}
							<thead>
								<tr>
									<th scope="col" className="colorset">선택</th>
									<th scope="col" className="colorset">번호</th>
									<th scope="col" className="colorset">게시판이름</th>
									<th scope="col" className="colorset">아이디<br />(관리자명)</th>
									<th scope="col" className="colorset">제목</th>
									<th scope="col" className="colorset">작성자</th>
									<th scope="col" className="colorset">등록일</th>
									<th scope="col" className="colorset">관리</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><input type="checkbox" name="chk_uid[1]" value="Y" className="className_uid" /></td>
									<td>1</td>
									<td>공지사항</td>
									<td>superadmin<br />(담당자)</td>
									<td style={{textAlign:'left'}}><span className="shop_state_pack"><span
												className="orange">공지</span></span> 테스트중입니다.</td>
									<td>관리자</td>
									<td>2023-07-02</td>
									<td>
										<div className="btn_line_up_right">

											<span className="shop_btn_pack"><a
													href="_bbs.post_notice.form.php?_mode=modify&amp;_uid=1&amp;_PVSC=" className="small white"
													title="수정">수정</a></span>
											<span className="shop_btn_pack"><span className="blank_3"></span></span>
											<span className="shop_btn_pack"><a href="#none" onClick={()=>{}} className="small gray"
													title="삭제">삭제</a></span>
											<span className="shop_btn_pack"><span className="blank_3"></span></span>

										</div>
									</td>
								</tr>
							</tbody>
						</table>

					</form>
					{/*
					<!-- 페이지네이트 --> */}
					<div className="list_paginate">
						<span className="lineup"><span className="nextprev"><span className="btn"><span className="no"><span
											className="icon ic_first"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=1" className="ok"
										title="처음"><span className="icon ic_first"></span></a></span><span className="btn"><span
										className="no"><span className="icon ic_prev"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=0"
										className="ok" title="이전"><span className="icon ic_prev"></span></a></span></span><span
								className="number"><a href="#none" onclick="return false;" className="hit">1</a></span><span
								className="nextprev"><span className="btn"><span className="no"><span
											className="icon ic_next"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=2" className="ok"
										title="다음"><span className="icon ic_next"></span></a></span><span className="btn"><span
										className="no"><span className="icon ic_last"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=1"
										className="ok" title="끝"><span className="icon ic_last"></span></a></span></span></span> </div>
					{/*
					<!-- // 페이지네이트 --> */}

				</div>
				<div style={{height:30}}></div>
			</div>
		</div>
	</div>
	)
}

export default Notice;