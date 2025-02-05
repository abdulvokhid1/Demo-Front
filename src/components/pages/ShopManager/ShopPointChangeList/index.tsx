'use client'
import Slider from '@/components/layouts/Slider/Shop';
import { useEffect, useState } from 'react';

const ShopPointChangeList = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}
return (
    <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background:'#f0f0f0'}}>
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
											쇼핑포인트 변동내역					
					</span>
                    <span className="location">홈 &gt; 회원관리 &gt; 쇼핑포인트 변동내역</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>


<form name='searchfrm' method='post' action='/myAdmin/_cardsys.card_point.list_mpoint.php'>
<input type='hidden' name='mode' value='search'/>
				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<table className="form_TB" summary="검색항목">
						<tbody> 
							<tr>
								<td className="article">아이디</td>
								<td className="conts"><input type='text' name='pass_mb_id' className='input_text' value=""/></td>
								<td className="article">내용</td>
								<td className="conts"><input type='text' name='pass_pointTitle' className='input_text' value=""/></td>
								<td className="article">등록일</td>
								<td className="conts"><input type='text' name='pass_redRegidate' className='input_text' value=""/></td>
							</tr>
						</tbody> 
					</table>

					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>

						</div>
					</div>
									</div>
</form>
				{/* <!-- // 검색영역 --> */}


<form name='frm' method='post' >
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='seachcnt' value='0'/>
<input type='hidden' name='PVSC' value=""/>
<input type='hidden' name='search_que' value="IHdoZXJlIDE9MSA="/>


				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택포인트삭제" >선택내역삭제</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
					</div>
					
					{/* <!-- // 리스트 제어버튼영역 --> */}


					<table className="list_TB" summary="리스트기본">

						<thead>
							<tr>
								<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">아이디</th>
								<th scope="col" className="colorset">등급</th>
								<th scope="col" className="colorset">적립</th>
								<th scope="col" className="colorset">사용</th>
								<th scope="col" className="colorset">처리후잔액</th>
								<th scope="col" className="colorset">상태</th>
								<th scope="col" className="colorset">내용</th>
								{/* <!--<th scope="col" className="colorset">지급예정일</th>--> */}
								<th scope="col" className="colorset">등록일</th>
								<th scope="col" className="colorset">관리</th>
							</tr>
						</thead> 
						<tbody> 
<tr><td colSpan={12} height='40'>내용이 없습니다.</td></tr>
						</tbody> 
					</table>


					{/* <!-- 페이지네이트 --> */}
					<div className="list_paginate">			
							<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span><span className='btn'><span className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0' className='ok' title='이전' ><span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return 'false'}} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' ><span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=0' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span></div>
					{/* <!-- // 페이지네이트 --> */}

			</div>
</form>




				<div style={{height:'30px'}}></div>

			</div>
		</div>
</div>             


)}
export default ShopPointChangeList;