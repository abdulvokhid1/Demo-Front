'use client'
import Slider from '@/components/layouts/Slider/Log';
import { useEffect, useState } from "react";

const AccessPath = () => {
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
				접속경로별통계					
					</span>
                    <span className="location">홈 &gt; 로그분석 &gt; 접속경로별통계</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				  {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}
           <div className="common_ajax_proc"></div>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					

					{/* <!-- 리스트 제어버튼영역 */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택해제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}


					<table className="list_TB" summary="리스트기본">
						<colgroup>
							<col width="60px"/><col width="130px"/><col width="130px"/><col width="*"/><col width="100px"/>
						</colgroup> 
						<thead>
							<tr>
								<th scope="col" className="colorset">번호</th>
								<th scope="col" className="colorset">접속자수</th>
								<th scope="col" className="colorset">키워드</th>
								<th scope="col" className="colorset">접속경로</th>
								<th scope="col" className="colorset">비율</th>
							</tr>
						</thead> 
						<tbody> 

						</tbody> 
					</table>

					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?pass_menu=&&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?pass_menu=&&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?pass_menu=&&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?pass_menu=&&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}

			</div>
			<div style={{height:'30px'}}></div>
			</div>
        </div>
      </div>
 
    )}
    export default AccessPath;