'use client'
import Slider from '@/components/layouts/Slider/Log';
import { useEffect, useState } from "react";

const OperatingSystem = () => {
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
			          브라우저별통계					
					</span>
                    <span className="location">홈 &gt; 로그분석 &gt; 운영체제별통계</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
				  {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}
 <div className="common_ajax_proc"></div>


				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					<table className="list_TB" summary="리스트기본">
						<colgroup>
							<col width="80px"/><col width="100px"/><col width="*"/><col width="100px"/>
						</colgroup>
						<thead>
							<tr>
								<th scope="col" className="colorset">운영체제</th>
								<th scope="col" className="colorset">접속자수</th>
								<th scope="col" className="colorset">그래프</th>
								<th scope="col" className="colorset">비율</th>
							</tr>
						</thead> 
						<tbody> 

						</tbody> 
					</table>

			</div>
			<div style={{height:'30px'}}></div>
</div>
</div>
</div>
    )}
    export default OperatingSystem;