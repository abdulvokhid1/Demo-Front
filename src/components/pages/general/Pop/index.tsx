'use client'
import Slider  from '@/components/layouts/Slider/general';
import { useEffect, useState } from 'react';
const Pop = () => {
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
											팝업 관리					
					</span>
                    <span className="location">홈 &gt; 디자인관리 &gt; 팝업 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
   
<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<form name="searchfrm" method="post" action="/myAdmin/_popup.list.php" autoComplete="off">
					<input type="hidden" name="mode" value="search"/>
					<table className="form_TB" summary="검색항목">
						<colgroup>
							<col width="120px"/>
                            <col width="200px"/>
                            <col width="120px"/>
                            {/* <!-- 마지막값은수정안함 --> */}
                            <col width="*"/>
						</colgroup>
						<tbody> 
							<tr>
								<td className="article">노출여부</td>
								<td className="conts"><select name="pass_view"><option value="">-선택-</option><option value="Y">노출</option><option value="N">숨김</option></select></td>
								<td className="conts"></td>
								<td className="conts"></td>
							</tr>
						</tbody> 
					</table>
					
					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
														<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href="_popup.form.php?_mode=add" className="medium red" title="팝업등록">팝업등록</a></span>
						</div>
					</div>
					</form>
				</div>
				{/* <!-- // 검색영역 --> */}

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
					

					{/* <!-- 리스트 제어버튼영역--> */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택해제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}


					<table className="list_TB" summary="리스트기본">
						{/* <!-- <colgroup>
							<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
						</colgroup> --> */}
						<thead>
							<tr>
								<th scope="col" className="colorset">번호</th>
								<th scope="col" className="colorset">순위</th>
								<th scope="col" className="colorset">노출/일정</th>
								<th scope="col" className="colorset">타이틀/이미지</th>
								<th scope="col" className="colorset">타겟/링크</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 


            <tr>
                <td colSpan={10} height="40">내용이 없습니다.</td></tr>
						</tbody> 
					</table>

					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className="lineup"><span className="nextprev"><span className="btn">
                            <span className="no"><span className="icon ic_first"></span>
                            </span><a href=" ?pass_menu=&amp;&amp;listpg=1" className="ok" title="처음">
                            <span className="icon ic_first"></span></a></span><span className="btn"><span className="no"><span className="icon ic_prev"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=0" className="ok" title="이전"><span className="icon ic_prev"></span></a></span></span><span className="number"><a href="#none" onclick="return false;" className="hit">1</a></span><span className="nextprev"><span className="btn"><span className="no"><span className="icon ic_next"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=2" className="ok" title="다음"><span className="icon ic_next"></span></a></span><span className="btn"><span className="no"><span className="icon ic_last"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=0" className="ok" title="끝"><span className="icon ic_last"></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}

			</div>

			<div style={{height:'30px'}}></div>

			</div>
		</div>
       </div>
    )
}

export default Pop;