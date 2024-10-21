'use client'
import Slider from '@/components/layouts/Slider/Shop';
import { useEffect, useState } from "react";

const TopMenu = () => {
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
						상단메뉴 관리					
					</span>
                    <span className="location">홈 &gt; 디자인관리 &gt; 상단메뉴 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
                  
                  

				  {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

				<div className="common_ajax_proc"></div>

{/* <script type='text/javascript' src='_moin.shop_head_menu.js'></script> */}

<form name='PUBLIC_FORM' method='post'>
					{/* <!-- 검색영역 --> */}
					<div className="form_box_area">
						<table className="form_TB" summary="검색항목">
							<colgroup>
								<col width="50%"/><col width="50%"/>
							</colgroup>
							<thead>
								<tr>
									<th scope="col" className="colorset">
										<div className='btn_line_up_center'>
											<span className='shop_btn_pack'>쇼핑몰 상단 메뉴</span>
											<span className='shop_btn_pack'><span className='blank_3'></span></span>
											<span className='shop_btn_pack'><input type='button' name='' className='input_small blue' value='추가'  onClick={()=>{}}/></span>
										</div>
									</th>

								</tr>
							</thead> 
							<tbody> 
								<tr>
									<td className="conts">
									<iframe name='list1'  src='_moin.shop_head_menu_pro.php?status=code_list1' width='100%' height='450' style={{textAlign:'center',border:'2px solid #c1c1c1'}} marginWidth={0} marginHeight={0} scrolling='yes'  frameBorder={0}></iframe></td>
									<td className="conts">
									<iframe name='list2'  src='' width='100%' height='450' style={{textAlign:'center',border:'2px solid #c1c1c1'}}  marginWidth={0} marginHeight={0} scrolling='yes'  frameBorder={0} ></iframe></td>
								</tr>
							</tbody> 
						</table>

						<table className="form_TB" summary="검색항목">
							<colgroup>
								<col width="200px"/><col width="*"/>
							</colgroup>
							<tbody> 
								<tr>
									<td className="article">코드값</td>
									<td className="conts">
										<input type='text' name='m2_code1' value='' className='input_text' style={{width:'80px'}}  readOnly />&nbsp;
										<input type='text' name='m2_code2' value='' className='input_text' style={{width:'80px'}}  readOnly />
										<div className='guide_text'><span className='ic_blue'></span><span className='blue'>코드값은 수정할 수 없습니다 (참고용)</span></div>									</td>
								</tr>
								<tr>
									<td className="article">링크주소</td>
									<td className="conts">
										<input type='text' name='m2_link' value='' className='input_text' style={{width:'500px' }} onFocus={()=>{'gf_GetFocus(this)'}} onBlur={()=>{'gf_LostFocus(this)'}} />
										<div className='guide_text'><span className='ic_blue'></span><span className='blue'>예) shop_info</span></div>
									</td>
								</tr>
								<tr>
									<td className="article">노출여부</td>
									<td className="conts">
										<label><input type='radio' name='m2_vkbn' value='y'/>  노출</label>
										&nbsp;&nbsp;&nbsp;
										<label><input type='radio' name='m2_vkbn' value='n' /> 숨김</label>
									</td>
								</tr>
							</tbody> 
						</table>
					</div>

					{/* <!-- 버튼영역 --> */}
					<div className="bottom_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack">
								<input type="button" name="" className="input_large red" value="메뉴저장" onClick={()=>{}}/>&nbsp;
								<input type="button" name="" className="input_large gray" value="새로고침" onClick={()=>{}}/>
							</span>
						</div>
					</div>
					{/* <!-- 버튼영역 --> */}

				<iframe name='set'  src='_moin.shop_head_menu_pro.php?status=code_list1' width='0' height='0' style={{textAlign:'center',border:'2px solid #c1c1c1'}} marginWidth={0} marginHeight={0} scrolling='no'  frameBorder={0}></iframe>
</form>

				<div style={{height:'30px'}}></div>
			</div>
                </div>
            </div>
      
    )}

    export default TopMenu;