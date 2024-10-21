'use client'
import '../../../pages/users/member_registration/global.d'
import Slider from '@/components/layouts/Slider/general';
import { useEffect, useRef, useState } from "react";
import DaumPostcodeData = globalThis.DaumPostcodeData;
import { useSetRecoilState } from "recoil";
import { generalSelectedKey } from "@/services/recoil/selectedKey";


const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const Mdinfo = () => {
	const [sliderVisible, setSliderVisible] = useState(true)
	const [addressDetail, setAddressDetail] = useState<DaumPostcodeData>()
	const setSelectedKey = useSetRecoilState(generalSelectedKey)

	/*** Daum Address Popup search ***/
	const postcodeRef = useRef<HTMLDivElement | null>(null);

	const loadLayout = () => {
		window.daum.postcode.load(() => {
			const postcode = new window.daum.Postcode({
				oncomplete: function (data) {
					setAddressDetail(data)
					console.log(data);
				}
			});
			postcode.open();
		});
	};

	useEffect(() => {
		const isAlready = document.getElementById(id);

		if (!isAlready) {
			const script = document.createElement("script");
			script.src = src;
			script.id = id;
			document.body.append(script);
		}
	}, []);

	useEffect(() => {
		// console.log('sliderVisible: ', sliderVisible)
		setSelectedKey(1)
	}, []);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}

	return (
		<div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu" style={{ background: "#f0f0f0" }}>
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
							관리자 정보수정
						</span>
						<span className="location">홈 &gt; 기본관리 &gt; 관리자 정보수정</span>
					</div>
					{/* <!-- // 페이지타이틀 --> */}

					{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{ display: 'none' }}></iframe>*/}

					{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

					<div className="common_ajax_proc"></div>

					{/* <!-- 리스트영역 --> */}
					<div className="content_section_inner">

						{/* <!-- 메인추출 --> */}
						<div className="sub_sys_company">

							{/* <!-- 내부 그룹타이틀 --> */}
							<div className="group_title">
								{/* <!--<span className="icon"></span><span className="title">관리자 정보 <b> 본사 </b></span>--> */}

								{/* <!--<span className="btn_area"><span className="shop_btn_pack"><a href="_order.list.php?menu_idx=21" className="small gray" title="더보기" >주문관리 보기</a></span></span>--> */}
							</div>
							{/* <!-- 내부 그룹타이틀 --> */}

						</div>
					</div>

					<form name="frm" method="post" action="_config.agree.pro.php" encType={'multipart:form-data'} >
						<input type='hidden' name="mode" value='modify' />
						<input type='hidden' name="serialnum" value='1' />
						<input type='hidden' name={'PVSC'} value="" />

						<div className="form_box_area">
							<table className="form_TB" summary="검색항목">
								<colgroup>
									<col width="200px" />
									{/* <!-- 마지막값은수정안함 --> */}
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<td className="article">관리자 아이디</td>
										<td className="conts">
											<b>superadmin</b></td>
									</tr>
									<tr>
										<td className="article">비밀번호</td>
										<td className="conts">
											<input type="password" name="passwd" value='' size={20} className="input_text" autoComplete="newPassword" />
											<div className='guide_text'><span className='ic_blue'></span><span className='blue'>변경할 경우에만 입력하세요.</span></div>										</td>
									</tr>
									<tr>
										<td className="article">비번확인</td>
										<td className="conts">
											<input type="password" name="repasswd" value='' size={20} className="input_text" autoComplete="newPassword" />
											<div className='guide_text'><span className='ic_blue'></span><span className='blue'>다시 한번 입력하세요.</span></div>										</td>
									</tr>
									<tr>
										<td className="article">밴더사명</td>
										<td className="conts"><input type='text' name="bannder" value='' size={30} className="input_text" /></td>
									</tr>
									<tr>
										<td className="article">업체명<span className="ic_ess" title="필수"></span></td>
										<td className="conts"><input type='text' name="cName" value='쇼핑머니' size={30} className="input_text" /></td>
									</tr>
									{/* <tr>
										<td className="article">사업자번호 (주민번호)</td>
										<td className="conts"><input type='text' name="cNumber" value='' size={30} className="input_text" /></td>
									</tr> */}
									{/* <tr>
										<td className="article">대표자</td>
										<td className="conts"><input type='text' name="ceoName" value='' size={30} className="input_text" /></td>
									</tr> */}
									{/* <tr>
										<td className="article">업태</td>
										<td className="conts"><input type='text' name="cItem1" value='' size={50} className="input_text" /></td>
									</tr> */}
									{/* <tr>
										<td className="article">업종</td>
										<td className="conts"><input type='text' name="cItem2" value='' size={50} className="input_text" /></td>
									</tr> */}

									{/* <tr>
										<td className="article">통신판매번호</td>
										<td className="conts"><input type='text' name="mail_order_sales" value='' size={50} className="input_text" /></td>
									</tr> */}
									{/* <tr>
										<td className="article">우편번호</td>
										<td className="conts">
											<input type='text' name="zip1" id="_post1" size={5} className="input_text" value={addressDetail?.zonecode.toString().substring(0, 2)} />-
											<input type='text' name="zip2" id="_post2" size={5} className="input_text" value={addressDetail?.zonecode.toString().substring(2)} />
											<span className="shop_btn_pack" style={{ float: 'none' }}>&nbsp;
												<a href="#none"
													onClick={loadLayout}
													className='small gray'>우편번호검색
												</a>
												<div ref={postcodeRef}></div>
											</span>
										</td>
									</tr> */}

									{/* <tr>
										<td className="article">주소</td>
										<td className="conts">
											기본주소 : <input type='text' name="address" id="_addr1" size={50} className="input_text" value={addressDetail?.address} /><br />
											상세주소 : <input type='text' name="address1" id="_addr2" size={50} className="input_text" /><br /><br />
											도로명주소 : <input type='text' name="address_doro" id="_addr_doro" size={70} className="input_text" value={addressDetail?.roadAddress} />
											새 우편번호 : <input type="text" name="zonecode" id="_zonecode" value="" size={10} className="input_text" />
										</td>
									</tr> */}
								</tbody>
							</table>
						</div>

					<div className="cm_bonus_list3 list_transfer">
						</div>
						<div className="cm_paginate" style={{ display: 'none' }}>
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={() => { return false }} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>  </div>
					{/* <!-- 내부 서브타이틀 --> */}
						<div className="sub_title"><span className="icon"></span><span className="title">마이오피스 정보</span></div>
						{/* <!-- // 내부 서브타이틀 --> */}

						<div className="form_box_area">
							<table className="form_TB" summary="검색항목">
								<colgroup>
									<col width="200px" />
									{/* <!-- 마지막값은수정안함 --> */}
									<col width="*" />
								</colgroup>
								<tbody>

									<tr>
										<td className="article">마이오피스 로고<br />
										</td>
										<td className="conts">
											<div style={{}}>
												<img src='' id='img_myoffice_img' style={{ maxWidth: '300px', marginBottom: '5px', display: 'none' }} /></div>
											<div><input type='file' name='myoffice_img' size={50} className='input_text n2b16548968afb5806f588912cbec7109_file' /></div>
											</td>
									</tr>

									<tr>
										<td className="article">마이오피스 상단바<br />
										</td>
										<td className="conts">

											{/* <link href="/include/js/colorpicker/spectrum.css" rel="stylesheet" type="text/css" /> */}
											{/* <script src="/include/js/colorpicker/spectrum.js"></script> */}


											<input id="picker" type="text" name="chatColor" value="#000000" />
										</td>
									</tr>

								</tbody>
							</table>

						</div>

						<div className="sub_title"><span className="icon"></span><span className="title">정산 계좌정보</span></div>
						<div className="form_box_area">
							<table className="form_TB" summary="검색항목">
								<colgroup>
									<col width="200px" /><col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<td className="article">은행명</td>
										<td className="conts"><input type='text' name="account_bank" value='' size={20} className="input_text" /></td>
									</tr>
									<tr>
										<td className="article">계좌번호</td>
										<td className="conts"><input type='text' name="account_deposit" value='' size={40} className="input_text" /></td>
									</tr>
									<tr>
										<td className="article">예금주</td>
										<td className="conts"><input type='text' name="account_name" value='' size={20} className="input_text" /></td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='bottom_btn_area'>
							<div className='btn_line_up_center'>
								<span className='shop_btn_pack btn_input_red'>
									<input type='submit' name='' className='input_large' value='확인' /></span>
								<span className='shop_btn_pack'><span className='blank_3'></span></span>
							</div>
						</div>

					</form>
					<div style={{ height: '30px' }}></div>
				</div>
			</div>

		</div>
	);
}
export default Mdinfo;