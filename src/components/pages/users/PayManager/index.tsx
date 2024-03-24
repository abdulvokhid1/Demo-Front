'use client'
import Slider  from '@/components/layouts/Slider/users';
import { useEffect, useState } from 'react';
const PayManager = () => {
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
                  style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}>
                    </span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                    style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                  
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
											수익금 지급관리					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 수익금 지급관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>


<form name='searchfrm' method='post' action='/myAdmin/_entershop.point.list.php'>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_mb_id' className='input_text' value=""/></td>
								<td className="article">적립/변경 사유</td>
								<td className="conts"><input type='text' name='pass_wr_content' className='input_text' value=""/></td>
								<td className="article">지급일</td>
								<td className="conts"><input type='text' name='pass_wr_datetime' className='input_text' value=""/></td>
							</tr>
						</tbody> 
					</table>

					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>

							<span className="shop_btn_pack"><span className="blank_3"></span></span>
							<span className="shop_btn_pack"><a href="_entershop.point.form.php?_loc=&_mode=add" className="medium red" title="관리자 적립" >관리자 적립</a></span>
						</div>
					</div>
									</div>
</form>
				{/* <!-- // 검색영역 --> */}

<form name='frm' method='post' >
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='seachcnt' value='0'/>
<input type='hidden' name='PVSC' value=""/>
<input type='hidden' name='search_que' value="IHdoZXJlIHdyX3N0ZXAgPSAnc3lzdGVtJyA="/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					
					<div className="ctl_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택포인트삭제" >선택포인트삭제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						{/* <!-- <colgroup>
							<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
						</colgroup> --> */}
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">성명</th>
								<th scope="col" className="colorset">적립/변경 사유</th>
								<th scope="col" className="colorset">지급페이</th>
								<th scope="col" className="colorset">차감페이</th>
								<th scope="col" className="colorset">처리후잔액</th>
								<th scope="col" className="colorset">상태</th>
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">구분</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={15} height='40'>내용이 없습니다.</td></tr></tbody> 
					</table>


					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'>
                                <span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' >
                                    <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'>
                                        </span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a>
                                        </span>
                                        </span><span className='number'><a href='#none' onClick={()=>{'return false'}} className='hit'>1</a></span>
                                        <span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>					</div>
					{/* <!-- // 페이지네이트 --> */}

			</div>
</form>


				<div style={{height:'30px'}}></div>

			</div>
		</div>
		


</div>
    )
}

export default PayManager;