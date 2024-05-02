'use client'
import Slider from '@/components/layouts/Slider/Shop';
import { useEffect, useState } from 'react';

const AddType = () => {
	const [sliderVisible, setSliderVisible] = useState(true)
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}

	return (
		<div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
			style={{ background: "#f0f0f0" }}>
			<Slider />
			<div className="content_section">
				<div className="content_section_fix" style={{ background: '#fff' }}>

					<div className="open_close">
						<span className="btn_close" id="open_close_btn_close" title="메뉴닫기" style={{ display: sliderVisible ? "block" : "none" }} onClick={sliderToggle}></span>
						<span className="btn_open" id="open_close_btn_open" title="메뉴열기" style={{ display: !sliderVisible ? "block" : "none" }} onClick={sliderToggle}></span></div>

					{/* <!-- 페이지타이틀 --> */}
					<div className="title_area">
						<span className="icon"></span>
						<span className="title">
							상품 타입 추가
						</span>
						<span className="location">홈 &gt; 상품관리 &gt; 메인상품설정 - 베스트상품</span>
					</div>
					{/* <!-- // 페이지타이틀 --> */}

					<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{ display: 'none' }}></iframe>

					<div className="common_ajax_proc"></div>

					{/* <!-- 검색영역 --> */}
					<form name='searchfrm' method='post' action='/myAdmin/_product_main_setup.form.php'>
						<input type='hidden' name="mode" value="search" />
						<input type='hidden' name="_type" value="favor" />
						<div className="form_box_area">
							<table className="form_TB" summary="검색항목">
								<colgroup>
									<col width="120px" /><col width="200px" /><col width="120px" /><col width="200px" /><col width="120px" /><col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<td className="article" colSpan={6} height={30} >검색 후 추가하고자하는 목록을 추가하시기 바랍니다.</td>
									</tr>
									<tr>
										<td className="article">상품분류</td>
										<td className="conts" colSpan={5}>

											1차분류 : <select name='pass_parent01' id="pass_parent01" onChange={() => { }} >
												<option value=''>-1차분류-</option>
												<option value='4' >Food</option>
												<option value='3' >Hair Care</option>
											</select>
											2차분류 : <select name='pass_parent02' id="pass_parent02" onChange={() => { }} >
												<option value=''>-2차분류-</option>
											</select>
											3차분류 : <select name='cateCode' id="pass_parent03" ><option value=''>-3차분류-</option></select>
										</td>
									</tr>
									<tr>
										<td className="article">공급업체</td>
										<td className="conts" colSpan={3}>
											<select name='pass_customerCode' ><option value=''>-공급업체-</option>
												<option value='superadmin' >쇼핑머니(아이디 : MASTER)</option></select>

										</td>
										<td className="article">상품코드</td>
										<td className="conts"><input type='text' name="pass_code" className='input_text' value="" /></td>
									</tr>
									<tr>
										<td className="article">상품명</td>
										<td className="conts"><input type='text' name="pass_name" className='input_text' value="" /></td>
										<td className="article">추천상품</td>
										<td className="conts" ><select name='pass_bestview' >
											<option value=''>-선택-</option>
											<option value='N' >미적용</option>
											<option value='Y' >적용</option></select></td>
										<td className="article">판매기간</td>
										<td className="conts" ><select name='sale_enddate' ><option value=''>-선택-</option>
											<option value='N' >판매중인상품</option>
											<option value='Y' >종료상품</option></select></td>
									</tr>
								</tbody>
							</table>

							{/* <!-- 버튼영역 --> */}
							<div className="top_btn_area">
								<div className="btn_line_up_center">
									<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색" /></span>
									<span className="shop_btn_pack"><span className="blank_3"></span></span>
									<span className="shop_btn_pack"><a href="_product_main_setup.list.php?_type=favor" className="medium gray" title="설정목록보기" >설정목록보기</a></span>
								</div>
							</div>
						</div>
					</form>
					{/* <!-- // 검색영역 --> */}

					<form name='frm' method='post' action="_product_main_setup.pro.php">
						<input type='hidden' name="_mode" value="add" />
						<input type='hidden' name="_type" value="favor" />

						{/* <!-- 리스트영역 --> */}
						<div className="content_section_inner">


							{/* <!-- 리스트 제어버튼영역 //--> */}
							<div className="ctl_btn_area">
								<span className="shop_btn_pack"><a href="#none" onClick={() => { }} className="small red" title="선택상품추가" >선택상품추가</a></span>
							</div>
							{/* <!-- // 리스트 제어버튼영역 --> */}

							<table className="list_TB" summary="리스트기본">
								<thead>
									<tr>
										<th scope="col" className="colorset"><input type="checkbox" name="allchk" /></th>
										<th scope="col" className="colorset">노출순위</th>
										<th scope="col" className="colorset">NO</th>
										<th scope="col" className="colorset">이미지</th>
										<th scope="col" className="colorset">상품정보</th>
										<th scope="col" className="colorset">정상가<br />판매가</th>
										<th scope="col" className="colorset">판매일<br />종료일</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style={{ padding: '30px', textAlign: 'center'}} colSpan={7} >검색 결과가 없습니다.</td>
									</tr>
								</tbody>
							</table>s
						</div>
					<div style={{ height: '30px' }}></div>
					</form>
					</div>
			</div>

					{/* <!-- //내용 --> */}
		</div>
	)
}
export default AddType;