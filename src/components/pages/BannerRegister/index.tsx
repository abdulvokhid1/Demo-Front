'use client'
import Slider from '@/components/layouts/Slider/Sales';
import { useEffect, useState } from 'react';

const BannerRegister = () => {
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
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                   style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                   style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

            {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					쇼핑몰 배너 관리 					
					</span>
                    
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
       
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

<div className="common_ajax_proc"></div>


{/* <link href="/include/js/colorpicker/spectrum.css" rel="stylesheet" type="text/css" />  */}
{/* <script src="/include/js/colorpicker/spectrum.js"></script> */}

<form name="frm" method="post" action="_banner.pro.php" encType="multipart/form-data" autoComplete="off" >
	<input type="hidden" name="_mode" value="add"/>
	<input type="hidden" name="_uid" value=""/>
	<input type="hidden" name="_PVSC" value=""/>

	<div className="form_box_area">

	<table className="form_TB" summary="검색항목">
		<colgroup>
		<col width="200px"/>
        {/* <!-- 마지막값은수정안함 --> */}
        <col width="*"/>
		</colgroup>
		<tbody>
			<tr>
				<td className="article">배너위치</td>
				<td className="conts">
                    <select name='_loc'  required >
                        <option value=''>-위치선택-</option>
                        <option value='info_logo' >========== 로고 및 아이콘 ==========</option>
                        <option value='site_top_logo' >사이트 탑 로고 (204 x 35)</option>
                        <option value='site_footer_logo' >사이트 푸터 로고 (220 x 57)</option>
                        <option value='mobile_site_top_logo' >모바일 사이트 탑 로고 (370 x 64)</option>
                        <option value='site_icon_basic' >사이트 기본 아이콘 (114 x 114)</option>
                        <option value='pc_banner' >========== 기본스킨 PC 화면 배너 ==========</option>
                        <option value='site_top_big' >사이트 최상단 큰 배너 (1000 x 80)</option>
                        <option value='site_top_right' >사이트 헤더 우측 배너 (225 x 70)</option>
                        <option value='site_main_big' >메인 상단 큰 배너 (1번:730 x 403, 2번:111x89)</option>
                        <option value='site_main_md' >메인 중앙 MD`&apos`s Pick (250 x 360)</option>
                        <option value='site_main_section3' >메인 상단 배너 - 가로 3개 (321 x 116)</option>
                    </select>
                </td>
			</tr>
			<tr>
				<td className="article">배너이미지1</td>
				<td className="conts"><div style={{}}><img src='' id='img__img' style={{maxWidth:'300px', marginBottom:'5px',display:'none'}}/></div>
                <input type='file' name='_img' size={20} className='input_text'/></td>
			</tr>
			<tr>
				<td className="article">배너이미지2</td>
				<td className="conts"><div style={{}}><img src='' id='img__img' style={{maxWidth:'300px', marginBottom:'5px',display:'none'}}/></div>
                <input type='file' name='_img' size={20} className='input_text'/></td>
			</tr>
			<tr>
				<td className="article">배너이미지3</td>
				<td className="conts"><div style={{}}><img src='' id='img__img' style={{maxWidth:'300px', marginBottom:'5px',display:'none'}}/></div>
                <input type='file' name='_img' size={20} className='input_text'/></td>
			</tr>
			<tr className="banner_color">
				<td className="article">배너 배경 색상</td>
				<td className="conts" id="picker_wrap">
					<input id="picker" type="text" name="_bgcolor" value="#ffffff"/>
					{/* <script>
					$("#picker").spectrum({
						showPaletteOnly: true, togglePaletteOnly: true, preferredFormat: "hex",
						clickoutFiresChange: true, flat: true, showInput: true, allowEmpty:true,
						color: '#ffffff',
						palette: [
							["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
							["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
							["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
							["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
							["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
							["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
							["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
							["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
						]
					});
					</script> */}
				</td>
			</tr>

			<tr>
				<td className="article">배너 링크 형식</td>
				<td className="conts"><span className='multi' ><label htmlFor='_target_self'>
                    <input type='radio' id='_target_self' name='_target' value='_self' checked /> 같은창</label>
                    </span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='_target_blank'>
                        <input type='radio' id='_target_blank' name='_target' value='_blank'  /> 새창</label></span>&nbsp;&nbsp;&nbsp;</td>
			</tr>

			<tr>
				<td className="article">배너 링크 정보</td>
				<td className="conts"><input type='text' name='_link' value="" size={80} maxLength={150} className='input_text'/>&nbsp;
				<span className="shop_btn_pack" style={{float:'none'}}><a onClick={()=>{'productWin()'}} className='small blue'>상품연결</a></span>
			</td>
			</tr>
			<tr>
				<td className="article">배너 타이틀</td>
				<td className="conts">
					<input type='text' name='_title' value="" size={80} maxLength={150} className='input_text'/>
					<div className='guide_text'><span className='ic_blue'></span>
                    <span className='blue'>배너 타이틀은 배너이미지에 마우스를 올렸을 경우 배너의 내용을 설명해주는 것으로 웹표준화의 주요 방침 입니다.<br/>&nbsp;또한 팝업창의 경우 팝업창 타이틀에 적용됩니다.</span></div></td>
			</tr>
			<tr className="banner_content" style={{display:'none'}}>
				<td className="article">배너 설명글</td>
				<td className="conts" id="picker_wrap">
					<textarea name="_content" className="input_text" style={{width:'90%',height:'100px'}}></textarea>
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>배너 설명글은 두줄로 작성하시는 것을 권장합니다.</span></div>				</td>
			</tr>
			<tr>
				<td className="article">배너 노출</td>
				<td className="conts">
					<span className='multi' ><label htmlFor='_viewY'><input type='radio' id='_viewY' name='_view' value='Y' checked /> 노출</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='_viewN'><input type='radio' id='_viewN' name='_view' value='N'  /> 숨김</label></span>&nbsp;&nbsp;&nbsp;</td>
			</tr>
			<tr>
				<td className="article">노출순위</td>
				<td className="conts"><input type="text" name="_idx" className="input_text" style={{width:'20px'}} value="1"  />순위&nbsp;&nbsp;
                <div className='guide_text'><span className='ic_blue'></span><span className='blue'>낮은 순위가 먼저 나오며, 순위가 같을 경우 먼저 최근 등록한 순으로 나옵니다.</span></div></td>
			</tr>
			<tr>
				<td className="article">게재기간</td>
				<td className="conts">
					시작일 : <input type="text" name="_sdate" id="_sdate" value="2024-03-18" className="input_text" style={{width:'100px'}} readOnly /> ~
					종료일 <input type="text" name="_edate" id="_edate" value="2025-03-18" className="input_text" style={{width:'100px'}} readOnly />
				</td>
			</tr>
		</tbody> 
		</table>

	</div>

	
					<div className='bottom_btn_area'>
						<div className='btn_line_up_center'>
							<span className='shop_btn_pack btn_input_red'><input type='submit' name='' className='input_large' value='확인'/></span>
							<span className='shop_btn_pack'><span className='blank_3'></span></span>
							<span className='shop_btn_pack btn_input_gray'><input type='button' name='' className='input_large' value='목록' onClick={()=>{"location.href='_banner.list.php?&&app_mode='"}}/>
							</span>
						</div>
					</div>		
		
</form>

<div style={{height:'30px'}}></div>


</div>
</div>
</div>

)}
export default BannerRegister;