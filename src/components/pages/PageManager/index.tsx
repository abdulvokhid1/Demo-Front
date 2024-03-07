'use client'
import Slider  from '@/components/layouts/Slider';
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
	<div/>
//   <div class="content_section">
//                 <div class="content_section_fix" style="background:#fff;">

//                   <div class="open_close"><span class="btn_close" id="open_close_btn_close" title="메뉴닫기"></span><span class="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>



                  

                  

                  
//                   <!-- 페이지타이틀 -->
//                   <div class="title_area">
//                     <span class="icon"></span>
//                     <span class="title">
// 											일반페이지 관리					
// 					</span>
//                     <span class="location">홈 &gt; 기본관리 &gt; 일반페이지 관리</span>
//                   </div>
//                   <!-- // 페이지타이틀 -->
                  
                  
                  


// <iframe src="inc.bonus_auto.php" width="0" height="0" frameborder="0" style="display:none;"></iframe>

// <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>-->


// <div class="common_ajax_proc"></div>





// 				<!-- 검색영역 -->
// 				<div class="form_box_area">
// 					<form name="searchfrm" method="post" action="/myAdmin/_normalpage.list.php" autocomplete="off">
// 					<input type="hidden" name="mode" value="search">
// 					<table class="form_TB" summary="검색항목">
// 						<tbody> 
// 							<tr>
// 								<td class="article">노출여부</td>
// 								<td class="conts"><select name="pass_view"><option value="">-선택-</option><option value="Y">노출</option><option value="N">숨김</option></select></td>
// 								<td class="article">페이지명</td>
// 								<td class="conts"><input type="text" name="pass_title" class="input_text" value=""></td>
// 							</tr>
// 						</tbody> 
// 					</table>
					
// 					<!-- 버튼영역 -->
// 					<div class="top_btn_area">
// 						<div class="btn_line_up_center">
// 							<span class="shop_btn_pack btn_input_blue"><input type="submit" class="input_medium" title="검색" value="검색"></span>
// 														<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 							<span class="shop_btn_pack"><a href="_normalpage.form.php?_mode=add" class="medium red" title="페이지등록">페이지등록</a></span>

// 						</div>
// 					</div>
// 					</form>
// 				</div>
// 				<!-- // 검색영역 -->



// 				<!-- 리스트영역 -->
// 				<div class="content_section_inner">

// 					<table class="list_TB" summary="리스트기본">
// 						<thead>
// 							<tr>
// 								<th scope="col" class="colorset">NO</th>
// 								<th scope="col" class="colorset">순서</th>
// 								<th scope="col" class="colorset">노출</th>
// 								<th scope="col" class="colorset">페이지명</th>
// 								<th scope="col" class="colorset">등록일</th>
// 								<th scope="col" class="colorset">관리</th>
// 							</tr>
// 						</thead> 
// 						<tbody> 


// 			<tr>
// 				<td>5</td>
// 				<td>10</td>
// 				<td>노출</td>
// 				<td>회사소개</td>
// 				<td>2014-04-28</td>
// 				<td>
// 					<div class="btn_line_up_center">
// 						<span class="shop_btn_pack"><a type="button" class="small white" href="/?pn=service.page.view&amp;pageid=company" target="_blank">바로가기</a></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="수정" class="input_small white" onclick="location.href=(&quot;_normalpage.form.php?_mode=modify&amp;_uid=1&amp;_PVSC=&quot;);"></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="삭제" class="input_small gray" onclick="del(&quot;_normalpage.pro.php?_mode=delete&amp;_uid=1&amp;_PVSC=&quot;);"></span>
// 					</div>
// 				</td>
// 			</tr>
		
// 			<tr>
// 				<td>4</td>
// 				<td>40</td>
// 				<td>노출안함</td>
// 				<td>모바일쇼핑</td>
// 				<td>2014-04-28</td>
// 				<td>
// 					<div class="btn_line_up_center">
// 						<span class="shop_btn_pack"><a type="button" class="small white" href="/?pn=service.page.view&amp;pageid=mobile" target="_blank">바로가기</a></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="수정" class="input_small white" onclick="location.href=(&quot;_normalpage.form.php?_mode=modify&amp;_uid=4&amp;_PVSC=&quot;);"></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="삭제" class="input_small gray" onclick="del(&quot;_normalpage.pro.php?_mode=delete&amp;_uid=4&amp;_PVSC=&quot;);"></span>
// 					</div>
// 				</td>
// 			</tr>
		
// 			<tr>
// 				<td>3</td>
// 				<td>50</td>
// 				<td>노출안함</td>
// 				<td>이메일무단수집거부</td>
// 				<td>2023-04-05</td>
// 				<td>
// 					<div class="btn_line_up_center">
// 						<span class="shop_btn_pack"><a type="button" class="small white" href="/?pn=service.page.view&amp;pageid=email_agree" target="_blank">바로가기</a></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="수정" class="input_small white" onclick="location.href=(&quot;_normalpage.form.php?_mode=modify&amp;_uid=5&amp;_PVSC=&quot;);"></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="삭제" class="input_small gray" onclick="del(&quot;_normalpage.pro.php?_mode=delete&amp;_uid=5&amp;_PVSC=&quot;);"></span>
// 					</div>
// 				</td>
// 			</tr>
		
// 			<tr>
// 				<td>2</td>
// 				<td>60</td>
// 				<td>노출안함</td>
// 				<td>청약절차철회</td>
// 				<td>2023-04-05</td>
// 				<td>
// 					<div class="btn_line_up_center">
// 						<span class="shop_btn_pack"><a type="button" class="small white" href="/?pn=service.page.view&amp;pageid=subscription" target="_blank">바로가기</a></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="수정" class="input_small white" onclick="location.href=(&quot;_normalpage.form.php?_mode=modify&amp;_uid=6&amp;_PVSC=&quot;);"></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="삭제" class="input_small gray" onclick="del(&quot;_normalpage.pro.php?_mode=delete&amp;_uid=6&amp;_PVSC=&quot;);"></span>
// 					</div>
// 				</td>
// 			</tr>
		
// 			<tr>
// 				<td>1</td>
// 				<td>70</td>
// 				<td>노출안함</td>
// 				<td>개인정보처리방침</td>
// 				<td>2023-04-05</td>
// 				<td>
// 					<div class="btn_line_up_center">
// 						<span class="shop_btn_pack"><a type="button" class="small white" href="/?pn=service.page.view&amp;pageid=personal_low_001" target="_blank">바로가기</a></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="수정" class="input_small white" onclick="location.href=(&quot;_normalpage.form.php?_mode=modify&amp;_uid=7&amp;_PVSC=&quot;);"></span>
// 						<span class="shop_btn_pack"><span class="blank_3"></span></span>
// 						<span class="shop_btn_pack"><input type="button" value="삭제" class="input_small gray" onclick="del(&quot;_normalpage.pro.php?_mode=delete&amp;_uid=7&amp;_PVSC=&quot;);"></span>
// 					</div>
// 				</td>
// 			</tr>
		
// 						</tbody> 
// 					</table>


// 					<!-- 페이지네이트 -->
// 					<div class="list_paginate">			
// 							<span class="lineup"><span class="nextprev"><span class="btn"><span class="no"><span class="icon ic_first"></span></span><a href=" ?&amp;listpg=1" class="ok" title="처음"><span class="icon ic_first"></span></a></span><span class="btn"><span class="no"><span class="icon ic_prev"></span></span><a href=" ?&amp;listpg=0" class="ok" title="이전"><span class="icon ic_prev"></span></a></span></span><span class="number"><a href="#none" onclick="return false;" class="hit">1</a></span><span class="nextprev"><span class="btn"><span class="no"><span class="icon ic_next"></span></span><a href=" ?&amp;listpg=2" class="ok" title="다음"><span class="icon ic_next"></span></a></span><span class="btn"><span class="no"><span class="icon ic_last"></span></span><a href=" ?&amp;listpg=1" class="ok" title="끝"><span class="icon ic_last"></span></a></span></span></span>					</div>
// 					<!-- // 페이지네이트 -->

// 			</div>


// 				<div style="height:30px;"></div>

// 			</div>
// 		</div>
)

}