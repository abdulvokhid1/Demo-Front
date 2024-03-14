'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const LevelManagement = () => {
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
											가맹점 레벨관리					
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 가맹점 레벨관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

                  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>
	
</div>
</div>
</div>

   )}   
   export default LevelManagement;       
