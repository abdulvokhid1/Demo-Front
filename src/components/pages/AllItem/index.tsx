'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const AllItem = () => {
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
				메인상품설정 - 전체상품					
					</span>
                    <span className="location">홈 &gt; 상품관리 &gt; 메인상품설정 - 베스트상품</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
  
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}


<div className="common_ajax_proc"></div>

				{/* <!-- 버튼영역 --> */}
				<div className="form_box_area">
					<div className="top_btn_area">

				<div style={{width:'300px', float:'left'}}>

					<span style={{fontWeight:'bold',fontSize:'30px',textAlign:'left'}}>타입 : AllItem</span>
				</div>

	<form name='fsearch' method="post">
	<input type='hidden' name='code' value=""/>
	<input type='hidden' name='mode' value="search"/>

				<div style={{width:'40%',float:'right'}}>
					<table className="form_TB" summary="검색항목">
						<colgroup>
							<col width="100px"/><col width="300px"/><col width="100px"/><col width="300px"/>
						</colgroup>
						<tbody>
							<tr>
								<td className="article" style={{border:'1px solid#ccc'}}>노출제목<br/>수정</td>
								<td className="conts"  style={{border:'1px solid#ccc'}}>
									<input type='text' name='type_name' style={{width:'40%',height:'30px'}} value="" className='input_text'/>
									<span className="shop_btn_pack btn_input_gray" style={{float:'right'}}>
                                        <input type="button" onClick={()=>{}} className="input_medium" title="수정" value="수정"/></span>

{/* <script>
var xmlHttp;
function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	}
}

function update_type_name() {

	var type_nm = $("input[name=_type_name]").val();


	createXMLHttpRequest();
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open("GET", "_product_main_setup.list.php?_mode=update_type_name&_type_name_update=" + type_nm + "&_type_update=" + "new", true);
	xmlHttp.send(null);

}


function handleStateChange() {
	if(xmlHttp.readyState == 4) {
		if(xmlHttp.status == 200) {
			//alert(xmlHttp.responseText);
			//document.getElementById("msg_mb_id").innerHTML = xmlHttp.responseText;
			location.reload();

		}
	}
}



</script> */}

</td>
								<td className="article" style={{border:'1px solid#ccc'}}>진열관리<br/>타입추가</td>
								<td className="conts"  style={{border:'1px solid#ccc'}}>
									<input type='text' name='_type' style={{width:'40%',height:'30px'}} value="best" className='input_text'/>
									<span className="shop_btn_pack btn_input_blue" style={{float:'right'}}>
                                        <input type="submit" className="input_medium" title="선택" value="선택"/></span>

								</td>
							</tr>
						</tbody> 
					</table>

				</div>
	</form>


    <div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue">
                                <input type="button" className="input_medium" title="메인상품 추가하기" value="메인상품 추가하기" onClick={()=>{}}/></span>
						</div>
					</div>
				</div>
				{/* <!-- 버튼영역 --> */}

<form name='frm' method='post' action="_product_main_setup.pro.php">
<input type='hidden' name='_mode' value=''/>
<input type='hidden' name="_type" value="best"/>

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 //--> */}
					<div className="ctl_btn_area">
						<span className="shop_btn_pack"><a href="#none" onClick={()=>{}} className="small gray" title="선택상품순위수정" >선택상품순위수정</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" onClick={()=>{}} className="small gray" title="선택상품삭제" >선택상품삭제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}

					<table className="list_TB" summary="리스트기본">
						<thead>
							<tr>
								<th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
								<th scope="col" className="colorset">노출순위</th>
								<th scope="col" className="colorset">NO</th>
								<th scope="col" className="colorset">이미지</th>
								<th scope="col" className="colorset">상품정보</th>
								<th scope="col" className="colorset">정상가<br/>판매가</th>
								<th scope="col" className="colorset">판매일<br/>종료일</th>								
							</tr>
						</thead> 
						<tbody> 
{/* 상품진열시작점 */}
			<tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>
            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>

            <tr>
			<td><input type='checkbox' name='chk_pcode[]' value='177' className='className_pcode'/></td>
				 {/* <!--<td><input type=checkbox name='chk_pcode[]' value='S4986872' className=className_pcode></td>--> */}
				<td><input type='text' name='chk_idx[S4986872]' value='1' className='input_text' style={{width:'30px'}} /></td>
				<td>8</td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}><img src='http://thesen.moinus.kr/upfiles/product_t31/2311675546.jpg' style={{width:'150px'}}/></td>
				<td style={{textAlign:'left', paddingLeft:'5px'}}>
					[카테고리]<br/> &gt;  &gt; <br/><br/>
					[상품코드] <b>S4986872</b><br/><br/>
					[상품명] <b>코오롱프리미엄유산균</b>
				</td>
				<td>
                    {/* <strike>58,000원</strike> */}
                35,000원</td>
				<td>상시판매</td>
			</tr>
 
								</tbody> 
					</table>
			</div>
</form>


 {/* <script>

	// - 선택적용 ---
	 function select_send(_mode) {
		 if($('.className_pcode').is(":checked")){
			$("input[name=_mode]").val(_mode);
			if(_mode == "delete") {
				if( confirm("정말 삭제하시겠습니까?") ){
					document.frm.submit();
				}
			}
			else {
				document.frm.submit();
			}
		 }
		 else {
			 alert('1건 이상 선택하시기 바랍니다.');
		 }
	 }
	// - 선택적용 ---


	// - 전체선택 / 해제
	$(document).ready(function() {
		$("input[name=allchk]").click(function (){
			if($(this).is(':checked')){
				$('.className_pcode').attr('checked',true);
			}
			else {
				$('.className_pcode').attr('checked',false);
			}
		});
	});
</script> */}
				<div style={{height:'30px'}}></div>

			</div>
		</div>
</div>
    )}
    export default AllItem;