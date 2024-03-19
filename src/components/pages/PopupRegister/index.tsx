'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const PopupRegister = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }
  
    return(
        <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
        style={{background: "#f0f0f0"}}>
			   <Slider />
            <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
				  style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
				    <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
				  style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                  
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
			팝업 등록					
					</span>
                    <span className="location">홈 &gt; 디자인관리 &gt; 팝업 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
   
<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{display:'none'}}></iframe>

<div className="common_ajax_proc"></div>

<form name="frm" method="post" action="_popup.pro.php" encType="multipart/form-data">
	<input type="hidden" name="_mode" value="add"/>
	<input type="hidden" name="_uid" value=""/>
	<input type="hidden" name="_PVSC" value=""/>

	<div className="form_box_area">
		<table className="form_TB" summary="검색항목">
			<colgroup>
				<col width="200px"/>
				<col width="*"/>
			</colgroup>
			<tbody>
				<tr>
					<td className="article">이미지</td>
					<td className="conts"><div style={{}}><img src='' id='img__img' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
					<input type='file' name='_img' size={20} className='input_text'/></td>
				</tr>

				<tr>
					<td className="article">링크 형식</td>
					<td className="conts"><span className='multi' ><label htmlFor='_target_self'>
						<input type='radio' id='_target_self' name='_target' value='_self'/> 같은창</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' >
						<label htmlFor='_target_blank'><input type='radio' id='_target_blank' name='_target' value='_blank'/> 새창</label></span>&nbsp;&nbsp;&nbsp;</td>
				</tr>
				<tr>
					<td className="article">링크 정보(url)</td>
					<td className="conts">
						<input type="text" name="_link" value="" className="input_text" style={{width:'300px'}}/>&nbsp;
						<span className="shop_btn_pack" style={{float:'none'}}><a onClick={()=>{'productWin()'}} className='small blue'>상품연결</a></span>
						<br/><div className='guide_text'><span className='ic_blue'></span>
						<span className='blue'> 팝업클릭시 바로갈 수 있는 링크주소를 입력하시기 바랍니다.</span></div></td>
				</tr>
				<tr>
					<td className="article">타이틀</td>
					<td className="conts">
						<input type="text" name="_title" value="" style={{width:'200px'}} className="input_text"  />
						<br/><div className='guide_text'><span className='ic_blue'></span><span className='blue'> 타이틀은 이미지에 마우스를 올렸을 경우 의 내용을 설명해주는 것으로 웹표준화의 주요 방침 입니다.<br/>&nbsp;&nbsp;또한 팝업창의 경우 팝업창 타이틀에 적용됩니다.</span></div></td>
				</tr>
				<tr>
					<td className="article">노출</td>
					<td className="conts">
						<span className='multi' ><label htmlFor='_viewY'><input type='radio' id='_viewY' name='_view' value='Y' checked /> 노출</label></span>&nbsp;&nbsp;&nbsp;
						<span className='multi' ><label htmlFor='_viewN'>
						<input type='radio' id='_viewN' name='_view' value='N' /> 숨김</label></span>&nbsp;&nbsp;&nbsp;	</td>
				</tr>
				<tr>
					<td className="article">노출순위</td>
					<td className="conts"><input type="text" name="_idx" className="input_text" style={{width:'20px'}} value="0"  />순위&nbsp;&nbsp;
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>낮은 순위가 먼저 나오며, 순위가 같을 경우 먼저 최근 등록한 순으로 나옵니다.</span></div></td>
				</tr>
				<tr>
					<td className="article">노출위치<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						왼쪽으로부터 <input type="text" name="_left" className="input_text" style={{width:'50px'}} value="" />px
						위쪽으로부터 <input type="text" name="_top" className="input_text" style={{width:'50px'}} value="" />px
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>노출위치는 브라우저(창) 전체가 아니라 해당 사이트 전체 영역 기준으로부터의 위치를 말합니다.</span></div></td>
				</tr>
				<tr>
					<td className="article">노출기간</td>
					<td className="conts">
						시작일 : <input type="text" name="_sdate" className="input_text" size={11}  id="_sdate" value="" readOnly style={{cursor:'pointer'}}/>
						~
						종료일 <input type="text" name="_edate" className="input_text" size={11}  id="_edate" value="" readOnly style={{cursor:'pointer'}}/>
					</td>
				</tr>
			</tbody> 
		</table>
	</div>
	
					<div className='bottom_btn_area'>
						<div className='btn_line_up_center'>
							<span className='shop_btn_pack btn_input_red'><input type='submit' name='' className='input_large' value='확인'/></span>
							<span className='shop_btn_pack'><span className='blank_3'></span></span>
							<span className='shop_btn_pack btn_input_gray'>
								<input type='button' name='' className='input_large' value='목록' onClick={()=>{'productWin()'}}/>
							</span>
						</div>
					</div>		
		</form>


			<div style={{height:'30px'}}></div>

			</div>
		</div>
       </div>
	   
	   
    )
}

export default PopupRegister;