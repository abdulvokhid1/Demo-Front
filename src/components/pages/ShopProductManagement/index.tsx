'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const ShopProductManagement = () => {
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

<div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>
              
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					상품관리					
					</span>
                    <span className="location">홈 &gt; 상품관리 &gt; 상품관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

{/* <!-- 검색영역 --> */}
<form name="searchfrm" method="post" action="/myAdmin/_product_main.list.php">
	<input type="hidden" name="mode" value="search"/>
	<div className="form_box_area">
		<table className="form_TB" summary="검색항목">
			<colgroup>
				<col width="120px"/><col width="200px"/><col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
			</colgroup>
			<tbody> 
				<tr>
					<td className="article">상품명</td>
					<td className="conts"><input type="text" name="pass_name" className="input_text" value=""/></td>
					<td className="article">상품코드</td>
					<td className="conts"><input type="text" name="pass_code" className="input_text" value=""/></td>
					<td className="article">판매여부</td>
					<td className="conts" ><select name='sale_enddate' >
                    <option value=''>-선택-</option>
                    <option value='N' >판매중인상품</option>
                    <option value='Y' >종료상품</option></select></td>
					<td className="article">공급업체</td>
					<td className="conts"><select name='pass_customerCode' ><option value=''>-공급업체-</option>
                    <option value='superadmin' >더센2(아이디 : superadmin)</option></select></td>
				</tr>
				<tr>
					<td className="article">상품타입</td>
					<td className="conts">
						<select name='pass_delivery' ><option value=''>-선택-</option><option value='N' >쿠폰상품</option><option value='Y' >배송상품</option></select>	
					</td>
					<td className="article">노출여부</td>
					<td className="conts"><select name='pass_p_view' ><option value=''>-선택-</option><option value='N' >숨김</option><option value='Y' >노출</option></select></td>
					<td className="article">상품추천인MD</td>
					<td className="conts"><input type="text" name="md_name" className="input_text" value=""/></td>
        		</tr>
				<tr>
					<td className="article">상품분류</td>
					<td className="conts" colSpan={7}>
						1차분류 : <select name='pass_parent01'  id="pass_parent01" onChange={()=>{}} >
                            <option value=''>-1차분류-</option><option value='4' >Food</option><option value='3' >Hair Care</option><option value='1' >Skin Care & Body</option> </select>		
                        2차분류 : <select name='pass_parent02'  id="pass_parent02" onChange={()=>{}} ><option value=''>-2차분류-</option></select>	
                        3차분류 : <select name='cateCode'  id="pass_parent03" ><option value=''>-3차분류-</option></select></td>
				</tr>
				<tr>
					<td className="article">상품아이콘</td>
					<td className="conts" colSpan={7}>
				</td>
				</tr>
			</tbody>
		</table>
		
		{/* <!-- 버튼영역 --> */}
		<div className="top_btn_area">
			<div className="btn_line_up_center">
				<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href="_product_main.form.php?_mode=add" className="medium red" title="상품등록" >상품등록</a></span>
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href="javascript:$('.excel_upload_field').toggle();" className="medium white" title="일괄업로드">일괄업로드</a></span>
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href="#none" onClick={()=>{}} className="medium white" title="상품옵션 일괄업로드">상품옵션 일괄업로드</a></span>
			</div>
		</div>
	</div>
</form>
{/* <!-- // 검색영역 --> */}

{/* <!-- 상품일괄업로드 # LDD014 {--> */}
<form action="_product_main.upload.php" method="post" encType="multipart/form-data">
	<div className="form_box_area excel_upload_field" style={{display:'none'}}>
		<table className="form_TB">
			<colgroup>
				<col width="120"/>
				<col width="*"/>
			</colgroup>
			<tbody>
				<tr>
					<td className="article">일괄 업로드</td>
					<td className="conts">
						<input type="file" name="excel_file" className="input_text"/>
					</td>
				</tr>
				<tr>
					<td className="conts" colSpan={2}>
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품 <b>등록</b>시 상품분류(카테고리)는 1개만 지정 가능하며 이미 등록되어있지 않은 분류(카테고리)는 제외 됩니다.</span></div>
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품 <b>수정</b>시 상품분류(카테고리) 설정은 무시됩니다.</span></div>	
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품 분류 추가/변경은 <b>업로드 수정/확인</b>에서 가능합니다. </span></div>			
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>업로드 파일</b>은 <b>최대 20M까지 업로드 가능</b> 합니다.</span></div>	
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>업로드 용량</b>에 따라 <b>다소시간이 걸릴 수 있습니다.</b></span></div>
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>엑셀내용중 <b>엔터</b>는 <b>생략</b> 하시고 입력 바랍니다.</span></div>	
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>상품 사용 정보</b>, <b>업체 이용 정보</b>, <b>상품상세설명</b>, <b>상품 상세설명 (모바일)</b>, <b>주문확인서 주의사항</b>의 내용은 엔터를 제외 하고 <b>HTML로 입력</b> 바랍니다.  </span></div>	
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품이미지가 <b>외부이미지</b>일 경우 <b>http://</b>부터 시작하도록 입력 바랍니다.</span></div>	
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품이미지가 <b>내부이미지</b>일 경우 <b>./upfiles/product/ 폴더에 사전 업로드</b>를 하시고 엑셀에는 <b>파일명과 확장자만 입력</b> 바랍니다.</span></div>
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>엑셀내용중 금액 또는 수수료의 <b>%</b>, <b>콤마(,)</b>, <b>원</b> 등을 <b>기호를 생략</b> 하세요.</span></div>						
                    <div className='guide_text'><span className='ic_blue'></span><span className='blue'>일괄업로드는 <b>파일업로드</b> - <b>업로드 수정/확인</b> - <b>등록처리</b> 단계를 거쳐 처리됩니다.</span></div>						<div className='guide_text'><span className='ic_orange'></span><span className='orange'><b>엑셀97~2003 버전 파일만 업로드가 가능합니다. 엑셀 2007이상 버전은(xlsx) 다른 이름저장을 통해 97~2003버전으로 저장하여 등록하세요.</b></span></div>					</td>
				</tr>
			</tbody>
		</table>

		<div className="top_btn_area">
			<div className="btn_line_up_center">
				<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="일괄업로드" value="일괄업로드"/></span>
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href="_product_main.download.php" className="medium white" title="엑셀다운로드" >엑셀다운로드</a></span>
			</div>
		</div>
	</div>
</form>
{/* <!--} 상품일괄업로드 # LDD014 --> */}

<form name='frm' method='post' action="_product_main.pro.php"  target="common_frame">
<input type='hidden' name='_mode' value=''/>
<input type='hidden' name='_seachcnt' value='10'/>
<input type='hidden' name='_PVSC' value=""/>
<input type='hidden' name='_search_que' value="IHdoZXJlIDEg"/>
<input type='hidden' name='_view_status' value=""/>
	{/* <!-- 리스트영역 --> */}
	<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small gray" title="선택순위수정" onClick={()=>{}}>선택순위수정</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:p_view('Y');" className="small red" title="노출" >노출</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="javascript:p_view('N');" className="small gray" title="숨김" >숨김</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack" style={{float:'right'}}><a href="#none" className="small white" title="선택 상품일괄삭제" onClick={()=>{}}>선택 상품일괄삭제</a></span>
					</div>

		<table className="list_TB" summary="리스트기본">
			<thead>
				<tr>
					<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
					<th scope="col" className="colorset">노출순위</th>
					<th scope="col" className="colorset">NO</th>
					<th scope="col" className="colorset">공급업체</th>
					<th scope="col" className="colorset">이미지</th>
					<th scope="col" className="colorset">상품정보</th>
					<th scope="col" className="colorset">정상가<br/>판매가</th>
					<th scope="col" className="colorset">판매일<br/>종료일</th>								
					<th scope="col" className="colorset">상품추천인MD</th>								
					<th scope="col" className="colorset">상태</th>								
					<th scope="col" className="colorset">관리</th>
				</tr>
			</thead> 

			<tbody> 
                {/* 리스트단락시작 */}
							<tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>                    
				    	{/* 리스트 단락 끝 아래 갯수만큼 반복  */}

                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
						<tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               
                        <tr>
						    	<td><input type='checkbox' name='serialnum[]' value='10' className='className_ordernum className_pcode'/></td>
							    <td>
								노출<br/>
								<input type='text' name='chk_idx[6]' value='999' className='input_text' style={{width:'30px'}}/> 
							</td>
							<td>10</td>
							<td><a href='_entershop.member.form.php?_mode=modify&app_mode=popup&id=superadmin' onClick={()=>{}}><b>superadmin</b></a></td>
							<td><img src='http://thesen.moinus.kr/upfiles/product_t31/100x100_' style={{width:'100px'}}/></td>
							<td style={{textAlign:'left' ,paddingLeft:'5px'}}>
								[카테고리]<br/><br/>
								[상품코드] <b>S1520880</b><br/><br/>
								[상품명] <b></b>
							</td>
							{/* <td><strike>0원</strike><br/>0원</td> */}
							<td>-1.11.30<br/>-1.11.30</td>
							<td></td>
							<td><span className='shop_state_pack'><span className='orange'>노출</span></span></td>
							<td>
								<div className='btn_line_up_center'>
									<span className='shop_btn_pack'><input type='button' value='수정' className='input_small blue' onClick={()=>{}}/></span>
									<span className='shop_btn_pack'><span className='blank_3'></span></span>
									<span className='shop_btn_pack'><input type='button' value='삭제' className='input_small gray'  onClick={()=>{}}/></span>
                                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                    <span className='shop_btn_pack'><input type='button' name='' className='input_small gray' value='숨김' onClick={()=>{}}/></span>
								</div>
		    				</td>
						</tr>               	
                </tbody> 
		</table>

		{/* <!-- 페이지네이트 --> */}
		<div className="list_paginate">
				<span className='lineup'><span className='nextprev'>
                    <span className='btn'><span className='no'><span className='icon ic_first'></span></span>
                    <a href=' ?&listpg=1' className='ok' title='처음' ><span className='icon ic_first'></span></a></span>
                    <span className='btn'><span className='no'>
                    <span className='icon ic_prev'></span></span><a href='?&listpg=0' className='ok' title='이전' >
                    <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{}} className='hit'>1</a></span>
                    <span className='nextprev'><span className='btn'><span className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2' className='ok' title='다음' >
                    <span className='icon ic_next'></span></a></span><span className='btn'><span className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=1' className='ok' title='끝' ><span className='icon ic_last'></span></a></span></span></span>
        </div>
		{/* <!-- // 페이지네이트 --> */}
        </div>
        </form>

</div>
{/* <script language="JavaScript" src="_product.js"></script> */}

{/* <SCRIPT>



	// - 옵션열기 ---
	function option_upload_popup() {
		window.open("_product_option.upload.php" ,"","width=1064,height=500,scrollbars=yes");
	}
	// - 옵션열기 ---




	// 선택순위수정
	 function selectSortModify() {
		 if($('.className_ordernum').is(":checked")){
			$("form[name=frm]").attr("action" , "_product_main.pro.php");
			$("input[name=_mode]").val('mass_sort');

			document.frm.submit();
		 }
		 else {
			 alert('1개 이상 선택하시기 바랍니다.');
		 }
	 }


	$(document).ready(function() {
		// 전체 선택 , 취소
		$("input[name=allchk]").click(function (){
			if($(this).is(':checked')){
				$('.className_ordernum').attr('checked',true);
			}
			else {
				$('.className_ordernum').attr('checked',false);
			}
		});
	});


	 function p_view(value) {

		 if($('.className_ordernum').is(":checked")){

			var c=confirm('변경하시겠습니까?');
			if(c) {
				$("input[name=_view_status]").val(value);
				$("input[name=_mode]").val("product_view");
				$("form[name=frm]")[0].submit();
			}

		 } else {
			 alert('1건 이상 선택하세요.');
		 }

	 }





	 function select_delete(value) {

		 if($('.className_ordernum').is(":checked")){

			var c=confirm('일괄 삭제하시겠습니까?');
			if(c) {
				$("input[name=_mode]").val("select_delete");
				//$("form[name=frm]")[0].target = "_blank";
				$("form[name=frm]")[0].submit();
			}

		 } else {
			 alert('1건 이상 선택하세요.');
		 }

	 }



</script> */}


				<div style={{height:'30px'}}></div>
       </div>
	</div>
    
    )}
    export default ShopProductManagement;