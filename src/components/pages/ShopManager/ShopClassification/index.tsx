'use client'
import Slider  from '@/components/layouts/Slider/Shop';
import { useEffect, useState } from 'react';
const ShopClassification= () => {
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
				<Slider/>
<div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                   
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						메인상품분류설정					
					</span>
                    <span className="location">홈 &gt; 상품관리 &gt; 메인상품분류설정</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

<form name="frm" method='post' action="_product.main_setup_pro.php" encType='multipart/form-data'>

{/* <!-- 내부 서브타이틀 --> */}
<div className="sub_title"><span className="icon"></span><span className="title">메인분류설정</span></div>
{/* <!-- // 내부 서브타이틀 --> */}

<div className="form_box_area">

	<table className="form_TB" summary="검색항목">
		<colgroup>
			<col width="200"/>
            {/* <!-- 마지막값은수정안함 --> */}
            <col width="*"/>
		</colgroup>
		<tbody>
			<tr>
				<td className="article">분류1 설정</td>
				<td className="conts">
					<div className="line" style={{border:0}}><b>분류1 타이틀</b> : <input type="text" name="s_main_hot_title" className="input_text" value="메인상품"/></div>
				</td>
			</tr>

			<tr>
				<td className="article">분류2 설정</td>
				<td className="conts">
					<div className="line" style={{border:0}}><b>분류2 타이틀</b> : <input type="text" name="s_main_new_title" className="input_text" value="메인상품2"/></div>
				</td>
			</tr>

			<tr>
				<td className="article">매진임박 설정</td>
				<td className="conts">
					<div className="line"><b>매진임박 타이틀</b> : <input type="text" name="s_main_close_title" className="input_text" value=""/></div>
					<div className="line"><b>매진일수</b> : <input type="text" name="s_main_close_day" className="input_text" style={{width:'20px'}} value='0' />일전 상품이 매진임박 상품으로 설정됩니다.</div>
					<div className="line"><b>매진개수</b> : 재고가 <input type="text" name="s_main_close_cnt" className="input_text" style={{width:'40px'}} value='0' />개 이하일 경우 매진임박 상품으로 설정됩니다. </div>
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>메인에 노출되는 세번째 분류인 매진임박은 조건에 맞는 상품이 자동으로 노출됩니다.</span></div>				</td>
			</tr>
		</tbody> 
	</table>
</div>
{/* <!-- 검색영역 --> */}

					<div className='bottom_btn_area'>
						<div className='btn_line_up_center'>
							<span className='shop_btn_pack btn_input_red'><input type='submit' name='' className='input_large' value='확인'/></span>
						</div>
					</div>		
		
</form>
				<div style={{height:'30px'}}></div>

			</div>
		</div>
	
</div>	


    )}
    export default ShopClassification;