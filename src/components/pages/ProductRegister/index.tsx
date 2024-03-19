'use client'
import Slider from '@/components/layouts/Slider/Shop';
import { useEffect, useState } from 'react';

const ProductRegister = () => {
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
                <div className="content_section_fix" style={{background:'#fff'}}>
                  <div className="open_close">
				  <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
  
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					상품등록					
					</span>
                    <span className="location">홈 &gt; 상품관리 &gt; 상품등록</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
    

				  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

{/* <script src='//code.jquery.com/jquery.min.js'></script> */}

<form name="frm" method="post" encType="multipart/form-data" action="_product_main.pro.php">
	<input type="hidden" name="_mode" value="add"/>

	
	{/* <!-- 사용안함 아래 상품코드 수동입력 --> */}
	{/* <!--<input type="hidden" name="code" value="S5315621">--> */}

	<input type="hidden" name="_PVSC" value=""/>
	<input type="hidden" name="save_chk" value="옵션정보저장"/>
	{/* <!-- // save_chk가 0 초과면 no save 상태이므로 옵션저정해야 함 --> */}
	<input type="hidden" name="v_color" value=""/>
	<input type='hidden' name="pro_idx" value="999"/>
{/* <!-- 검색영역 --> */}
	<div className="form_box_area">
		<table className="form_TB" summary="검색항목">
			<colgroup>
				<col width="120px"/>
				<col width="*"/>
			</colgroup>

			<tbody>
				<tr>
					<td className="article">상품노출</td>
					<td className="conts">
					<span className='multi' ><label htmlFor='p_viewN'><input type='radio' id='p_viewN' name='p_view' value='N' /> 숨김</label>
					</span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='p_viewY'><input type='radio' id='p_viewY' name='p_view' value='Y' checked /> 노출</label></span>&nbsp;&nbsp;&nbsp;
					</td>
				</tr>
				<tr>
					<td className="article">판매설정</td>
					<td className="conts">
						<span className='multi' ><label htmlFor='sale_typeT'><input type='radio' id='sale_typeT' name='sale_type' value='T'  className='sale_type_value'checked /> 기간판매</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='sale_typeA'><input type='radio' id='sale_typeA' name='sale_type' value='A'  className='sale_type_value'/> 상시판매</label></span>&nbsp;&nbsp;&nbsp;</td>
				</tr>
				<tr className="sale_type">
					<td className="article">판매일<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						판매시작일 : 
						<input type="text" name="sale_date" id="sale_date" value='' className="input_text" style={{width:'80px',cursor:'pointer'}} readOnly />
						{/* <!-- 일 --> */}
						<input type="hidden" name="sale_dateh" id="sale_dateh" value='00' className="input_text" style={{width:"20px"}} />
						{/* <!-- 시 --> */}
						<input type="hidden" name="sale_datem" id="sale_datem" value='00' className="input_text" style={{width:"20px"}} />
						{/* <!-- 분 --> */}
						~ 
						판매종료일 : 
						<input type="text" name="sale_enddate" id="sale_enddate" value='' className="input_text" style={{width:'80px',cursor:'pointer'}} readOnly />
						{/* <!-- 일 --> */}
						<input type="hidden" name="sale_enddateh" id="sale_enddateh" value='23' className="input_text" style={{width:"20px"}}  />
						{/* <!-- 시 --> */}
						<input type="hidden" name="sale_enddatem" id="sale_enddatem" value='59' className="input_text" style={{width:"20px"}}  />
						{/* <!-- 분 --> */}
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>판매 시작일이 최근일수록 상품리스트에서 신규상품 정렬 시 상단에 위치합니다.</span></div>	
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>판매 종료일이 최근일수록 상품리스트에서 마감임박 정렬 시 상단에 위치합니다.</span></div>					</td>
				</tr>
				         <tr>
					<td className="article">상품코드<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						{/* <!--아래 랜덤 상품코드 사용안함 --> */}
						{/* <!--<input type="text" name="code" className="proName" size={40} value="S5315621" readOnly>--> */}
						{/* <!-- LDD004 { --> */}
						
						<input type="text" name="code" className="proName" size={40} value={""}/>
								{/* <!-- } LDD004 --> */}
						<span className='shop_btn_pack' style={{float:"none"}}>
							<input type="button" onClick={()=>{}} className="input_small red" style={{cursor: 'pointer'}} value={"상품코드자동생성"}/></span>

                    </td>
				</tr>
				<tr>
					<td className="article">상품분류<span className="ic_ess" title="필수"></span></td>
											
					<div style={{float:'left'}} >
	1차분류 : <select name='pass_cate01' id='pass_cate01' onChange={()=>{}} ><option value=''>-선택-</option>
	<option value='4' >Food</option><option value='3' >Hair Care</option><option value='1' >Skin Care & Body </option> </select>&nbsp;&nbsp;&nbsp;
	2차분류 : <select name='pass_cate02' id='pass_cate02' onChange={()=>{}} ><option value=''>-선택-</option></select>&nbsp;&nbsp;&nbsp;
	3차분류 : <select name='pass_cate03'  ><option value=''>-선택-</option></select></div>
<div style={{float:'left', paddingLeft:'10px'}} >
	<span className="shop_btn_pack" style={{marginRight:'10px'}}><a href="#none" className="small blue" onClick={()=>{}}>선택 카테고리추가</a></span>
</div>


<div style={{clear:'both', paddingTop:'10px'}} ></div>
<div id="_product_cateogry_list">
{/* <!-- 상품카테고리 목록 노출 --> */}
</div>
<div style={{clear:'both', paddingBottom:'5px'}} ></div>


{/* <SCRIPT LANGUAGE="JavaScript">
	// - 카테고리 목록 ---
	function category_list() {

		var jcode = $("input[name=code]").val().trim();
		$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");


		$.ajax({
			url: "_product.inc_category_pro.php",
			type: "POST",
			data: "_mode2=list&code=" + jcode,
			success: function(data){
				$("#_product_cateogry_list").html(data);
				appProductThema();
			}
		});
	}
	// - 카테고리 목록 ---
	// - 카테고리 삭제 ---
	function category_delete(catecode) {

		var jcode = $("input[name=code]").val().trim();
		$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");


		if( confirm('정말 삭제하시겠습니까?') ){
			if( catecode ){
				$.ajax({
					url: "_product.inc_category_pro.php",
					type: "POST",
					data: "_mode2=delete&code=" + jcode + "&catecode=" + catecode ,
					success: function(data){
						category_list();
					}
				});
			}
			else {
				alert("3차 카테고리를 선택하시기 바랍니다.");
			}
		}
	}
	// - 카테고리 삭제 ---
	// - 카테고리 추가 ---
	function category_add() {

		//상품코드 지정시 상품코드 입력하고 등록이 가능하게 처리
		if($("input[name=code]").val().trim() == "") {

			if($("input[name=code]").css('background-color') != 'rgb(238, 238, 238)') {

				$.ajax({
				url: "ajax.product_code_create.php",
				cache: false,
				dataType: "html",
				type: 'POST',
				success: function(data){
					
					$('input[name=code]').val(data);
					$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");

					category_add_return();

				}
				});
			}


			//alert("상품코드를 등록하시고 카테고리 추가가 가능합니다");
			//return false;
		} else {
			category_add_return();
		}


		//if($("input[name=code]").val().length < 6) {
		//	alert("상품코드는 6자리 이상 입력하세요");
		//	return false;
		//}

	}


	function category_add_return() {


		var app_catecode = $("select[name=pass_cate03]").val();
		
		if( app_catecode ){

			var jcode = $("input[name=code]").val().trim();
			$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");


			$.ajax({
				url: "_product.inc_category_pro.php",
				type: "POST",
				data: "_mode2=add&code=" + jcode + "&catecode=" + app_catecode,
				success: function(data){
					category_list();
				}
			});
		}
		else {

			//1. 3차 카테고리 선택해야 카테고리 추가되는 방식 사용안하면 주석처리********************************
			//alert("3차 카테고리를 선택하시기 바랍니다.");
			//1. 3차 카테고리 선택해야 카테고리 추가되는 방식 사용안하면 주석처리********************************


			//2. 1차,2차 카테고리도 선택해서 추가할수있게 추가... 사용안하면 주석처리*****************************

			var app_catecode2 = $("select[name=pass_cate02]").val();
			if( app_catecode2 ){

				var jcode = $("input[name=code]").val().trim();
				$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");


				$.ajax({
					url: "_product.inc_category_pro.php",
					type: "POST",
					data: "_mode2=add&code=" + jcode + "&catecode=" + app_catecode2,
					success: function(data){
						category_list();
					}
				});
			}
			else {

				var app_catecode1 = $("select[name=pass_cate01]").val();
				
				if( app_catecode1 ){

					var jcode = $("input[name=code]").val().trim();
					$("input[name=code]").attr('readOnly' , 'true').css("background-color", "#eee");


					$.ajax({
						url: "_product.inc_category_pro.php",
						type: "POST",
						data: "_mode2=add&code=" + jcode + "&catecode=" + app_catecode1,
						success: function(data){
							category_list();
						}
					});
				}
				else {
					alert("카테고리를 선택하시기 바랍니다.");
				}
			}

		
			//2. 1차,2차 카테고리도 선택해서 추가할수있게 추가... 사용안하면 주석처리*****************************


		}

	}



	// - 카테고리 추가 ---
	// - 카테고리 선택 ---
	function category_select2(_idx) {
        $.ajax({
            url: "../include/categorysearch.pro.php",
			cache: false,
			dataType: "json",
			type: "POST",
            data: "pass_parent03_no_required=&pass_parent01=" + $("[name=pass_cate01]").val() + "&pass_parent02=" + $("[name=pass_cate02]").val()+"&pass_idx=" + _idx,
            success: function(data){
                if(_idx == 2) {
					//$("select[name=pass_cate02]").val(apppass_cate03); // 현재정보 적용
					$("select[name=pass_cate03]").find("option").remove().end().append('<option value="">-선택-</option>');
					var option_str = '';
					for (var i = 0; i < data.length; i++) {
						option_str += '<option value="' + data[i].optionValue + '" >' + data[i].optionDisplay + '</option>';
					}
					$("select[name=pass_cate03]").append(option_str);
				}
				else if(_idx == 1){
					$("select[name=pass_cate02]").find("option").remove().end().append('<option value="">-선택-</option>');
					var option_str = '';
					for (var i = 0; i < data.length; i++) {
						option_str += '<option value="' + data[i].optionValue + '" >' + data[i].optionDisplay + '</option>';
					}
					$("select[name=pass_cate02]").append(option_str);
					$("select[name=pass_cate03]").find("option").remove().end().append('<option value="">-선택-</option>');
				}
            }
		});
	}

	// - 카테고리 선택 ---

	// - 카테고리 선택에 따른 - 테마 적용 ---
	function appProductThema(){
		$(".cls_thema").css("display" ,  "none" ); // 전체테마 닫기
		$("input[name^=chk_cate2]").each( function( index ) {
			$(".cls_category_uid_" + $(this).val() ).css("display" ,  "" ); // 선택 테마 열기
		});
		
	}
	// - 카테고리 선택에 따른 - 테마 적용 ---
</SCRIPT>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>선택하신 2차분류에 의해 테마를 선택할 수 있으며, 동일한 테마가 다른 2차분류에 있을 경우 중복 적용됩니다.</span></div>					</td> */}
				</tr>
              <tr>
					<td className="article">상품명<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="name" className="proName" size={40} value=""/>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>특수문자 제외</b></span></div> </td>
				</tr>
{/* 
<!--
                <tr>
					<td className="article">담당MD<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<select name='md_name'  id='md_name' ><option value=''>-담당MD-<option value='이순신' selected>이순신<option value='홍길동' >홍길동</select>                    </td>
				</tr>
--> */}

				<tr>
					<td className="article">상품아이콘</td>
					<td className="conts">
											</td>
				</tr>

                <tr>
					<td className="article">공급업체ID<span className="ic_ess"></span></td>
					<td className="conts">
						<input type="text" name="customerCode" className="input_text" size={40} value=""/>
                    </td>
				</tr>

				<tr>
					<td className="article">배송기능</td>
					<td className="conts">
						<label><input type="checkbox" name="setup_delivery" value="Y" onClick={()=>{}} /> 배송기능적용</label><br/>	
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>실물 상품을 판매하기 위해 배송기능을 적용하고자 할 경우 사용합니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>배송기능 적용 시 해당 상품의 주문정보는 쿠폰기능을 대체하여 택배송장번호와 배송정보로 변경됩니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>주문이 있을 경우 수정할 수 없습니다.</b></span></div>
						<div id="setup_delivery_apply" style={{display:'none'}}>	<br/>
							<label><input type="radio" name="del_type" value="normal" checked/>일반(입점업체 배송정책을 따름)</label>&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="del_type" value="unit" />개별배송</label>&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="del_type" value="charge" />유료배송</label>&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="del_type" value="collect" />유료배송(착불)</label>&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="del_type" value="condition" />조건부 무료배송</label>&nbsp;&nbsp;&nbsp;
							<label><input type="radio" name="del_type" value="free" />무료배송</label>
							<div className='guide_text'><span className='ic_blue'></span><span className='blue'>개별배송일 경우 상품구매개수당 개별배송비용이 추가됩니다.</span></div>							<div className='guide_text'><span className='ic_blue'></span><span className='blue'>무료배송 선택시 상품에 무료배송 아이콘이 노출됩니다.</span></div>
							<div id="del_type_unit" style={{display:'none'}}>
								<br/>&nbsp;개별배송비 : &nbsp;<input type="text" className="input_text number_style" name="del_price_cnt" size={10} style={{textAlign:'right'}} disabled value=""/>개 수량마다
								 <input type="text" className="input_text number_style" name="del_price" size={10} style={{textAlign:'right'}} disabled value={""}/>원
							</div>
							<div id="del_type_charge" style={{display:'none'}}>
								<br/>&nbsp;유료배송비 : &nbsp;<input type="text" className="input_text number_style" name="del_charge" size={10} style={{textAlign:'right'}} disabled value=""/>원
							</div>
							<div id="del_type_collect" style={{display:'none'}}>
								<br/>&nbsp;유료배송비(착불) : &nbsp;<input type="text" className="input_text number_style" name="del_collect" size={10} style={{textAlign:'right'}} disabled value=""/>원
							</div>
							<div id="del_type_condition" style={{display:'none'}}>
								<br/>&nbsp;배송비 : &nbsp;<input type="text" className="input_text number_style" name="del_condition" size={10} style={{textAlign:'right'}} disabled value=""/>원 배송비를 부과하며 주문금액이 
								<input type="text" className="input_text number_style" name="del_condition_price" size={10} style={{textAlign:'right'}} disabled value=""/>원 이상이면 무료배송 처리됩니다
							</div>
							<div id="del_type_normal" style={{display:'none'}}>
							</div>
							<input type="hidden" name="del_limit" value="0"/>
						</div>

					{/* <script>
							// 배송형태 체크시 노출 - 개별배송비
							$(document).ready(function(){
								//배송정책에 따라 pv계산 배송비 자동 입력
								

								$('.proName').bind("keyup", function(){       
									//자동 대문자 안바뀌게 주석처리
									//$(this).val($(this).val().toUpperCase());  
								});  

								$("input[name='del_type']").on('click',function(){
									if($(this).filter(function() {if (this.checked) return this;}).val() == "normal") { $("#del_type_normal").show();$('input[name=charge_del_cur]').val(''); }
									else { $("#del_type_normal").hide(); }
									if($(this).filter(function() {if (this.checked) return this;}).val() == "unit") { $("#del_type_unit").show();$('input[name=charge_del_cur]').val('');  }
									else { $("#del_type_unit").hide(); }

									if($(this).filter(function() {if (this.checked) return this;}).val() == "charge") { $("#del_type_charge").show(); }
									else { $("#del_type_charge").hide(); }

									if($(this).filter(function() {if (this.checked) return this;}).val() == "collect") { $("#del_type_collect").show(); }
									else { $("#del_type_collect").hide(); }

									if($(this).filter(function() {if (this.checked) return this;}).val() == "condition") { $("#del_type_condition").show(); }
									else { $("#del_type_condition").hide(); }

									if($(this).filter(function() {if (this.checked) return this;}).val() == "free") { $("#del_type_free").show(); $('input[name=charge_del_cur]').val(0);}
									else {  }
								});
							});
						</script> */}
					</td>
				</tr>

                <tr>
					<td className="article">정상가격</td>
					<td className="conts">
						<input type="text" name="price_org" className="input_text number_style" size={10} style={{textAlign:'right' }} value={""}/> 원
                    </td>
				</tr>
                <tr>
					<td className="article">판매가격<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="price" className="input_text number_style zex" size={10} style={{textAlign:'right' }} value={""}/> 원
                    </td>
				</tr>
                <tr>
					<td className="article">공급가<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="purPrice" className="input_text number_style" size={10} style={{textAlign:'right' }} value={""}/> 원
                    </td>
				</tr>

                <tr>
					<td className="article">카드수수료<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="charge_card_per" className="input_text" size={3}style={{textAlign:'right'}} value={0}/> % 
						<span className='shop_btn_pack' style={{float:'none'}}><input type="button" id="charge_card_per_calc" className="input_small gray" style={{cursor: 'pointer'}} value={'자동계산'}/></span>&nbsp;
						<input type="text" name="charge_card_cur" className="input_text number_style zex_charge_card" size={10} style={{textAlign:'right'}} value={"2000"} /> 원 (판매가격 * 3.5%)
						<span id='cur_text_charge_card'></span>
						<input type="hidden" name="charge_card" value=""/>
						<input type="hidden" name="charge_card_exchange_pv"/>
                    </td>
				</tr>

                <tr>
					<td className="article">부가세<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="charge_vat_per" className="input_text" size={3}style={{textAlign:'right'}} value={"10"}/> % 
						<span className='shop_btn_pack' style={{float: 'none'}}><input type="button" id="charge_vat_per_calc" className="input_small gray" style={{cursor: 'pointer'}} value="자동계산"/></span>&nbsp;
						<input type="text" name="charge_vat_cur" className="input_text number_style zex_charge_vat" size={10} style={{textAlign:'right'}} value={"2000"} /> 원 (판매가격 * 10%)
						<span id='cur_text_charge_vat'></span>
						<input type="hidden" name="charge_vat" value=""/>
						<input type="hidden" name="charge_vat_exchange_pv"/>
                    </td>
				</tr>
                <tr>
					<td className="article">PV공제금액</td>
					<td className="conts">
						<input type="text" name="charge_com" className="input_text number_style" size={10} style={{textAlign:'right' }} value={""}/> 원
						{/* <!--<input type="text" name="pv_per_charge_com" className="input_text number_style" size={3}style={{textAlign:'right'}} value=""> %--> */}
						<span className='shop_btn_pack' style={{float: 'none'}}><input type="button" id="pv_per_charge_com_calc" className="input_small red" style={{cursor: 'pointer'}} value="PV계산"/></span> (카드수수료 + 부가세 + 공급가 합산 공제 금액)
						
						<script> 
						{/* // 할인율 자동계산 */}

						</script>
                    </td>
				</tr>
                <tr>
					<td className="article">PV가격</td>
					<td className="conts">
						<input type="text" name="price_pv" className="input_text number_style" size={10} style={{textAlign:'right' }} value={""}/> 원
						<input type="text" name="pv_per" className="input_text number_style" size={3}style={{textAlign:'right'}} value="90"/> %
						<span className='shop_btn_pack' style={{float: 'none'}}><input type="button" id="pv_per_calc" className="input_small gray" style={{cursor: 'pointer'}} value="자동계산"/></span> (수동 PV계산, 판매가 * %적용)
						<script>
						{/* // 할인율 자동계산 */}
						</script>
                    </td>
				</tr>
                <tr>
					<td className="article">할인율<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<input type="text" name="price_per" className="input_text number_style" size={3}style={{textAlign:'right'}} value=""/> %
						<span className='shop_btn_pack' style={{float: 'none'}}><input type="button" id="price_per_calc" className="input_small gray" style={{cursor: 'pointer'}} value="자동계산"/></span>

						{/* <script>
						// 할인율 자동계산
						$(document).ready(function(){

							var auto_card_cur = ($('input[name=price]').val().replace(/,/g,'')*1 / 100) * $('input[name=charge_card_per]').val().replace(/,/g,'')*1;
							$('input[name=charge_card_cur]').val(parseInt(auto_card_cur));


							$('#charge_card_per_calc').on('click',function(){

								var price = $('input[name=price]').val().replace(/,/g,'')*1, per = $('input[name=charge_card_per]').val().replace(/,/g,'')*1;
								var result = (price / 100) * per; if(result < 0) { result = 0; }
								$('input[name=charge_card_cur]').val(parseInt(result));

							});



							var auto_vat_cur = ($('input[name=price]').val().replace(/,/g,'')*1 * $('input[name=charge_vat_per]').val().replace(/,/g,'')*1) / 110;
							$('input[name=charge_vat_cur]').val(parseInt(auto_vat_cur));

							$('#charge_vat_per_calc').on('click',function(){

								var price = $('input[name=price]').val().replace(/,/g,'')*1, per = $('input[name=charge_vat_per]').val().replace(/,/g,'')*1;
								var result = (price * per) / 110 ; if(result < 0) { result = 0; }
								$('input[name=charge_vat_cur]').val(parseInt(result));

							});


							var auto_tax_cur = ($('input[name=charge_card_cur]').val().replace(/,/g,'')*1 + $('input[name=charge_vat_cur]').val().replace(/,/g,'')*1);
							$('input[name=charge_com]').val(parseInt(auto_tax_cur));

							var auto_pvtotal_cur = ($('input[name=price]').val().replace(/,/g,'')*1 - $('input[name=charge_com]').val().replace(/,/g,'')*1);



							

							$('#pv_per_charge_com_calc').on('click',function(){

								var char_cprice = $('input[name=price]').val().replace(/,/g,'')*1;
								var char_cpur = $('input[name=purPrice]').val().replace(/,/g,'')*1;
																
								var char_card = $('input[name=charge_card_cur]').val().replace(/,/g,'')*1;
								var char_vat = $('input[name=charge_vat_cur]').val().replace(/,/g,'')*1;

								$('input[name=charge_com]').val(parseInt(char_card + char_vat));

								//var char_cresult = char_cprice - (char_card + char_vat) - (char_cpur + char_ccom); if(char_cresult < 0) { char_cresult = 0; }
								var char_cresult = char_cprice - (char_card + char_vat) - (char_cpur); if(char_cresult < 0) { char_cresult = 0; }
								$('input[name=price_pv]').val(parseInt(char_cresult));

							});

							if($('input[name=price_org]').val()) {
							var auto_priceorg_cur = ($('input[name=price_org]').val().replace(/,/g,'')*1 - $('input[name=price]').val().replace(/,/g,'')*1) / $('input[name=price_org]').val().replace(/,/g,'')*1 * 100;
							$('input[name=price_per]').val(parseInt(auto_priceorg_cur));
							}

							$('#price_per_calc').on('click',function(){
								var o = $('input[name=price_org]').val().replace(/,/g,'')*1, p = $('input[name=price]').val().replace(/,/g,'')*1;
								if(o==0) { var o2 = 1; } else { o2 = o; }
								var result = (o-p)/o2*100; if(result < 0) { result = 0; }
								$('input[name=price_per]').val(parseInt(result));
							});

							$('#pv_per_calc').on('click',function(){
								var pv = $('input[name=price]').val().replace(/,/g,'')*1, per = $('input[name=pv_per]').val().replace(/,/g,'')*1;
								var result = (pv / 100) * per; if(result < 0) { result = 0; }
								$('input[name=price_pv]').val(parseInt(result));

							});


						});
						</script> */}
                    </td>
				</tr>

                <tr>
					<td className="article">옵션타이틀</td>
					<td className="conts">
						1차 옵션 타이틀 : <input type="text" name="option1_title" className="input_text" size={30}  value=""/><br/>
						2차 옵션 타이틀 : <input type="text" name="option2_title" className="input_text" size={30}  value=""/><br/>
						3차 옵션 타이틀 : <input type="text" name="option3_title" className="input_text" size={30}  value=""/>
                    </td>
				</tr>
				<tr>
					<td className="article">옵션설정</td>
					<td className="conts">
					<span className='multi' ><label htmlFor='option_type_chknooption'>
						<input type='radio' id='option_type_chknooption' name='option_type_chk' value={'nooption'}  className='option_type_chk' checked/> 옵션사용안함</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='option_type_chk1depth'>
							<input type='radio' id='option_type_chk1depth' name='option_type_chk' value='1depth'  className='option_type_chk' /> 1차옵션</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' >
								<label htmlFor='option_type_chk2depth'><input type='radio' id='option_type_chk2depth' name='option_type_chk' value='2depth'  className='option_type_chk' />  2차옵션</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='option_type_chk3depth'>
									<input type='radio' id='option_type_chk3depth' name='option_type_chk' value='3depth'  className='option_type_chk' /> 3차옵션</label></span>&nbsp;&nbsp;&nbsp;<div className='guide_text'><span className='ic_orange'></span><span className='orange'><b>옵션설정은 상품 최초 등록 시에만 설정 하시고 이후에는 수정을 가급적 피하시는게 좋습니다</b>.</span></div>					</td>
				</tr>
				<tr>
					<td className="article">상품옵션</td>
					<td className="conts">
						<span className="shop_btn_pack" style={{marginRight:'10px'}}><a href="#none" onClick={()=>{}} className="small blue">옵션창 열기</a></span>
						<div className='guide_text'><span className='ic_orange'></span><span className='orange'>주문 내역이 있는 상품의 옵션은 변경하지 마시기 바랍니다.</span></div>					</td>
				</tr>

				{/* <!-- 추가옵션 패치 2014-03-24 --> */}
				<tr>
					<td className="article">추가옵션</td>
					<td className="conts">
						<span className="shop_btn_pack" style={{marginRight:'10px'}}><a href="#none" onClick={()=>{}} className="small blue">추가옵션창 열기</a></span>
						<div className='guide_text'><span className='ic_orange'></span><span className='orange'>주문 내역이 있는 추가옵션은 변경하지 마시기 바랍니다.</span></div>						<div className='guide_text'><span className='ic_orange'></span><span className='orange'>추가옵션은 배송상품에만 적용됩니다.</span></div>					</td>
				</tr>
				{/* <!-- 추가옵션 패치 끝 --> */}
				<tr>
					<td className="article">정보제공고시</td>
					<td className="conts">
						<span className="shop_btn_pack" style={{marginRight:'10px'}}><a href="javascript:reqinfo_popup();" className="small blue">정보제공고시 관리창 열기</a></span>
						<div className='guide_text'><span className='ic_orange'></span><span className='orange'>상품에 필요한 정보제공고시 항목: 내용으로 등록하며, 등록된 내용은 상품 상세페이지에 노출됩니다.</span></div>					</td>
				</tr>
                <tr>
					<td className="article">중복구매</td>
					<td className="conts">
						<label><input type="hidden" name="guestDisabled" value={"1"}/><input type="checkbox" name="ipDistinct" value="1" /> 중복구매불가</label>
					</td>
				</tr>
                <tr>
					<td className="article">포인트 적립</td>
					<td className="conts"><input type="text" name="point" className="input_text" size={3}style={{textAlign:'right'}} value="0"/> %</td>
				</tr>
{/* <!--
                <tr>
					<td className="article">노출타입</td>
					<td className="conts">
																	<input type="checkbox" id="p_icon_recom" name="p_icon_recom" value="Y" >추천상품 &nbsp;
																	<input type="checkbox" id="p_icon_best" name="p_icon_best" value="Y" >베스트상품 &nbsp;
																	<input type="checkbox" id="p_icon_sale" name="p_icon_sale" value="Y" >할인상품 &nbsp;
																	<input type="checkbox" id="p_icon_new" name="p_icon_new" value="Y" >신상품 &nbsp;
																	<input type="checkbox" id="p_icon_special" name="p_icon_special" value="Y" >스페셜상품 &nbsp;
																	<input type="checkbox" id="p_icon_hit" name="p_icon_hit" value="Y" >히트상품 &nbsp;					
				</td>
				</tr>
                <tr>
					<td className="article">테마노출</td>
					<td className="conts">
																	<input type="checkbox" id="p_theme_1" name="p_theme_1" value="Y" >테마#1 &nbsp;
																	<input type="checkbox" id="p_theme_2" name="p_theme_2" value="Y" >테마#2 &nbsp;
																	<input type="checkbox" id="p_theme_3" name="p_theme_3" value="Y" >테마#3 &nbsp;
																	<input type="checkbox" id="p_theme_4" name="p_theme_4" value="Y" >테마#4 &nbsp;
																	<input type="checkbox" id="p_theme_5" name="p_theme_5" value="Y" >테마#5 &nbsp;
					</td>
				</tr>
--> */}

                <tr>
					<td className="article">이벤트명 설정</td>
					<td className="conts">
						<input type="text" name="p_eventName" className="proName" size={40} value=""/>
                    </td>
				</tr>
                <tr>
					<td className="article">재고량</td>
					<td className="conts"><input type="text" name="stock" className="input_text number_style" value="10000" size={6} style={{textAlign:'right'}} /> 개</td>
				</tr>
                <tr>
					<td className="article">1회 최대 구매량</td>
					<td className="conts"><input type="text" name="buy_limit" className="input_text number_style" value='5' size={3}/>개</td>
				</tr>
                <tr>
					<td className="article">현 판매량</td>
					<td className="conts"><input type="text" name="saleCnt" className="input_text number_style" value="0" size={5} style={{textAlign:'right'}} /> 개</td>
				</tr>
                <tr>
					<td className="article">관련상품 지정</td>
					<td className="conts">
												<div style={{marginBottom: '10px'}}>
							<span className='multi' ><label htmlFor='relation_autoN'><input type='radio' id='relation_autoN' name='relation_auto' value='N'  className='relation_auto_mode' checked/> 수동지정</label></span>&nbsp;&nbsp;&nbsp;<span className='multi' ><label htmlFor='relation_autoY'><input type='radio' id='relation_autoY' name='relation_auto' value='Y'  className='relation_auto_mode' /> 자동지정</label></span>&nbsp;&nbsp;&nbsp;						</div>
						<div className="relation_use">
							<div className='btn_line_up_center' style={{marginBottom: '5px'}}>
								<span className='shop_btn_pack'><input type='button' value='관련상품정보삭제' className='input_small gray'  onClick={()=>{}}/></span>
								<span className='shop_btn_pack'><span className='blank_3'></span></span>
								<span className='shop_btn_pack'><input type='button' value='관련상품등록/수정' className='input_small blue' onClick={()=>{}}/></span>
							</div>
							<textarea name="p_relation" className="input_text" style={{width:'100%',height:'50px'}} readOnly onClick={()=>{}}></textarea>
							<div className='guide_text'><span className='ic_blue'></span><span className='blue'>* 입력예: 상품코드1/상품코드2/상품코드3 (상품코드의 구분을 / 로 하시기 바랍니다.)</span></div>						</div>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>* <b>수동지정:</b> 관리자가 지정한 상품을 출력 합니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>* <b>자동지정:</b> 동일 카테고리의 상품 10개를 랜덤하게 출력 합니다.</span></div>						                    </td>
				</tr>

                <tr>
					<td className="article">제조사</td>
					<td className="conts">
						<input type="text" name="factName" className="proName" size={40} value=""/>
                    </td>
				</tr>
                <tr>
					<td className="article">원산지</td>
					<td className="conts">
						<input type="text" name="originName" className="proName" size={40} value=""/>

                    </td>
				</tr>

                <tr>
					<td className="article">브랜드</td>
					<td className="conts">
						<input type="text" name="brandName" className="proName" size={40} value=""/>

                    </td>
				</tr>
                <tr>
					<td className="article">간략 상세정보</td>
					<td className="conts">
						<textarea name="short_comment" className="input_text" style={{width:'100%',height:'60px'}} ></textarea>
                    </td>
				</tr>
                <tr>
					<td className="article">상품 사용 정보</td>
					<td className="conts">
						<textarea name="comment_proinfo" className="input_text" style={{width:'100%',height:'150px'}}></textarea>
                    </td>
				</tr>
                <tr>
					<td className="article">업체 이용 정보</td>
					<td className="conts">
						<textarea name="comment_useinfo" className="input_text" style={{width:'100%',height:'150px'}}></textarea>
                    </td>
				</tr>
                <tr>
					<td className="article">상품 상세설명<span className="ic_ess" title="필수"></span><br/><div className='guide_text'><span className='ic_blue'></span><span className='blue'>크기 : 822 x -</span></div></td>
					<td className="conts">
						<textarea name="comment2" className="input_text" style={{width:'100%', height:'400px'}}></textarea>
                    </td>
				</tr>
				                <tr>
					<td className="article">상품 상세설명<br/>(모바일)</td>
					<td className="conts">
						<textarea name="comment2_m" className="input_text" style={{width:'100%', height:'400px'}}></textarea>
                    </td>
				</tr>
								{/* <!--
                <tr>
					<td className="article">주문확인서 주의사항<span className="ic_ess" title="필수"></span></td>
					<td className="conts">
						<textarea name="comment3" className="input_text" style="width:100%; height:150px;"></textarea>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>5줄 이내로 입력하시기 바랍니다.</span></div>						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>쿠폰에 들어갈 주의사항입니다.</span></div>                    </td>
				</tr>
				--> */}

				{/* <!--
               <tr>
               	<td className="article">지도 및 주소<span className="ic_ess" title="필수"></span></td>
               	<td className="conts">
               	               		주소 : <input type="text" name="com_juso" id="com_juso" value="" size="85" className="input_text"/>
               		<div style="margin: 5px 0;">
               		X좌표 : <input type="text" name="com_mapx" id="com_mapx" className="input_text" size="25" value=""/>&nbsp;&nbsp;&nbsp;
               		Y좌표 : <input type="text" name="com_mapy" id="com_mapy" className="input_text" size="25" value=""/>
               		</div>
               		<div className='guide_text'><span className='ic_blue'></span><span className='blue'>주소를 등록하시고 저장을 하시면 지도를 확인할 수 있습니다 (사용자페이지 업체정보 아래 표시됨).</span></div>               		<div className='guide_text'><span className='ic_blue'></span><span className='blue'>주소 등록시 좌표는 자동으로 등록되며, 지도위치를 변경하시려면 X, Y 좌표를 삭제하신 후 주소 변경 후 수정하시면 됩니다.</span></div>               		<div className='guide_text'><span className='ic_blue'></span><span className='blue'>주소 등록시 주변 경관을 설명하는 문구(OO주유소 근처, 교차로 부근 등)를 입력할 경우 좌표 검색이 되지 않을 수 있으니 주의하시기 바랍니다.</span></div>               		<div className='guide_text'><span className='ic_blue'></span><span className='blue'>좌표를 입력하면 지도가 표시됩니다. 세밀한 조정을 원하시면 빨간 마커를 드래그하여 원하는 위치에 놓으시면 됩니다.</span></div>               	</td>
               </tr>
			   --> */}

                <tr style={{display:'none'}}>
					<td className="article">rss 추가 정보</td>
					<td className="conts">
						지역명 : <input type="text" name="rssarea1" size={10} className="input_text" value=""/> /
						위치 : <input type="text" name="rssarea2" size={10} className="input_text" value=""/>
							<br/>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>예) 서울  /  홍대</span></div><br/>
						카테고리 : <input type="text" name="rsscate" size={10} className="input_text" value=""/><br/>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>예) 맛집 , 공연 , LIFE , 여행 , 미분류 : 카테고리는 1개만 적어주시기 바랍니다.</span></div>                    </td>
				</tr>

                <tr>/
					<td className="article">쿠폰사용만료일
					{/* <!--<span className="ic_ess" title="필수"></span>--> */}
					</td>
					<td className="conts">
						<input id="id_expire" type="text" name="expire" size={10} className="input_text" readOnly style={{cursor:'pointer'}} value="2024-04-12"/>
                    </td>
				</tr>
                <tr>
					<td className="article">상품상세메인<span className="ic_ess" title="필수"></span><br/>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>크기 : 500 x 500</span></div>					</td>
					<td className="conts">
						<div style={{}}><img src='' id='img_main_img' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img' size={20} className='input_text n0952f53ebcb24c87ea7f87413ceaeb1f_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n0952f53ebcb24c87ea7f87413ceaeb1f_checkbox'/> 외부이미지 사용</label></div>
		
		{/* <script>
		$(function(){

			file_input_change_0952f53ebcb24c87ea7f87413ceaeb1f($('.n0952f53ebcb24c87ea7f87413ceaeb1f_checkbox'));
			$('.n0952f53ebcb24c87ea7f87413ceaeb1f_checkbox').on('click', function() {

				file_input_change_0952f53ebcb24c87ea7f87413ceaeb1f($(this));
			});
			function file_input_change_0952f53ebcb24c87ea7f87413ceaeb1f(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.n0952f53ebcb24c87ea7f87413ceaeb1f_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n0952f53ebcb24c87ea7f87413ceaeb1f_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
								<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상품상세메인에 노출되는 대표 이미지 입니다.</span></div>                    </td>
				</tr>
                <tr>
					<td className="article">목록이미지<span className="ic_ess" title="필수"></span>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>크기 : 300 x 300</span></div>					</td>
					<td className="conts">
						<div style={{}}><img src='' id='img_prolist_img' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='prolist_img' size={20} className='input_text ne699a4e72392b4c801d16a7fff1390b6_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='ne699a4e72392b4c801d16a7fff1390b6_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_e699a4e72392b4c801d16a7fff1390b6($('.ne699a4e72392b4c801d16a7fff1390b6_checkbox'));
			$('.ne699a4e72392b4c801d16a7fff1390b6_checkbox').on('click', function() {

				file_input_change_e699a4e72392b4c801d16a7fff1390b6($(this));
			});
			function file_input_change_e699a4e72392b4c801d16a7fff1390b6(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.ne699a4e72392b4c801d16a7fff1390b6_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.ne699a4e72392b4c801d16a7fff1390b6_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
													
			<div className='guide_text'><span className='ic_blue'></span><span className='blue'>일반목록 이미지 및 기타 썸네일 이미지에 적용됩니다.</span></div>                    </td>
				</tr>
                <tr>
					<td className="article">직사각형목록<br/>최근본상품<br/>주문확인<br/>기타<br/>와이드이미지<span className="ic_ess" title="필수"></span>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>크기 : 489 x 330</span></div>					</td>
					<td className="conts">
						<div style={{ }}><img src='' id='img_prolist_img2' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='prolist_img2' size={20} className='input_text n340deb960dc36d40e9cc4da7be03ded4_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n340deb960dc36d40e9cc4da7be03ded4_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_340deb960dc36d40e9cc4da7be03ded4($('.n340deb960dc36d40e9cc4da7be03ded4_checkbox'));
			$('.n340deb960dc36d40e9cc4da7be03ded4_checkbox').on('click', function() {

				file_input_change_340deb960dc36d40e9cc4da7be03ded4($(this));
			});
			function file_input_change_340deb960dc36d40e9cc4da7be03ded4(Target) {

				var checked = Target.is(':checked');

				if(checked === true) $('.n340deb960dc36d40e9cc4da7be03ded4_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n340deb960dc36d40e9cc4da7be03ded4_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
								                    </td>
				</tr>

                <tr>
					<td className="article">썸네일 이미지</td>
					<td className="conts">
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>자동적용된 이미지를 노출합니다.</span></div>
				<table width='700' border={1}><tr><th style={{width:'0.03'}}>장바구니</th><th style={{width:'0.03'}}>최근본상품</th>
						<th style={{width:'0.03'}}>주문확인</th>
				</tr>
				<tr>
						<th>(미등록)</th><th>(미등록)</th><th>(미등록)</th></tr>
				</table></td>
				</tr>

                <tr>
					<td className="article">이미지 목록 추가<span className="ic_ess" title="필수"></span><br/>
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>크기 : 500 x 500</span></div>					</td>
					<td className="conts">

		<div style={{ }}><img src='' id='img_main_img_sub1' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img_sub1' size={20} className='input_text n744cc5c7084e8eac3f55e9ba2a2ad6a6_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n744cc5c7084e8eac3f55e9ba2a2ad6a6_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_744cc5c7084e8eac3f55e9ba2a2ad6a6($('.n744cc5c7084e8eac3f55e9ba2a2ad6a6_checkbox'));
			$('.n744cc5c7084e8eac3f55e9ba2a2ad6a6_checkbox').on('click', function() {

				file_input_change_744cc5c7084e8eac3f55e9ba2a2ad6a6($(this));
			});
			function file_input_change_744cc5c7084e8eac3f55e9ba2a2ad6a6(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.n744cc5c7084e8eac3f55e9ba2a2ad6a6_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n744cc5c7084e8eac3f55e9ba2a2ad6a6_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상세페이지 상품정보에 노출되는 이미지1 입니다.</span></div>
						<div style={{ }}><img src='' id='img_main_img_sub2' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img_sub2' size={20} className='input_text n9aaa08aa3c893648c6838cf13dcc3ef0_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n9aaa08aa3c893648c6838cf13dcc3ef0_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_9aaa08aa3c893648c6838cf13dcc3ef0($('.n9aaa08aa3c893648c6838cf13dcc3ef0_checkbox'));
			$('.n9aaa08aa3c893648c6838cf13dcc3ef0_checkbox').on('click', function() {

				file_input_change_9aaa08aa3c893648c6838cf13dcc3ef0($(this));
			});
			function file_input_change_9aaa08aa3c893648c6838cf13dcc3ef0(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.n9aaa08aa3c893648c6838cf13dcc3ef0_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n9aaa08aa3c893648c6838cf13dcc3ef0_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상세페이지 상품정보에 노출되는 이미지2 입니다.</span></div>
						<div style={{ }}><img src='' id='img_main_img_sub3' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img_sub3' size={20} className='input_text n9235cebe04b2923f00430bf44b08d21e_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n9235cebe04b2923f00430bf44b08d21e_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_9235cebe04b2923f00430bf44b08d21e($('.n9235cebe04b2923f00430bf44b08d21e_checkbox'));
			$('.n9235cebe04b2923f00430bf44b08d21e_checkbox').on('click', function() {

				file_input_change_9235cebe04b2923f00430bf44b08d21e($(this));
			});
			function file_input_change_9235cebe04b2923f00430bf44b08d21e(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.n9235cebe04b2923f00430bf44b08d21e_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n9235cebe04b2923f00430bf44b08d21e_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상세페이지 상품정보에 노출되는 이미지3 입니다.</span></div>
						<div style={{ }}><img src='' id='img_main_img_sub4' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img_sub4' size={20} className='input_text ncf7292b3e8d393265e7455dc6f3bd32a_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='ncf7292b3e8d393265e7455dc6f3bd32a_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_cf7292b3e8d393265e7455dc6f3bd32a($('.ncf7292b3e8d393265e7455dc6f3bd32a_checkbox'));
			$('.ncf7292b3e8d393265e7455dc6f3bd32a_checkbox').on('click', function() {

				file_input_change_cf7292b3e8d393265e7455dc6f3bd32a($(this));
			});
			function file_input_change_cf7292b3e8d393265e7455dc6f3bd32a(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.ncf7292b3e8d393265e7455dc6f3bd32a_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.ncf7292b3e8d393265e7455dc6f3bd32a_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
						<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상세페이지 상품정보에 노출되는 이미지4 입니다.</span></div>
						<div style={{ }}><img src='' id='img_main_img_sub5' style={{maxWidth:'300px',marginBottom:'5px',display:'none'}}/></div>
		<div><input type='file' name='main_img_sub5' size={20} className='input_text n1e4376938a911fe9223ddc293910082d_file'/></div>
		<div style={{marginTop:'5px'}}><label><input type='checkbox' className='n1e4376938a911fe9223ddc293910082d_checkbox'/> 외부이미지 사용</label></div>
		{/* <script>
		$(function(){

			file_input_change_1e4376938a911fe9223ddc293910082d($('.n1e4376938a911fe9223ddc293910082d_checkbox'));
			$('.n1e4376938a911fe9223ddc293910082d_checkbox').on('click', function() {

				file_input_change_1e4376938a911fe9223ddc293910082d($(this));
			});
			function file_input_change_1e4376938a911fe9223ddc293910082d(Target) {

				var checked = Target.is(':checked');
				if(checked === true) $('.n1e4376938a911fe9223ddc293910082d_file').attr('type', 'input').attr('placeholder', 'http://를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val('');
				else $('.n1e4376938a911fe9223ddc293910082d_file').attr('type', 'file').removeAttr('placeholder').removeAttr('size').val('');
			}
		});
		</script> */}
					<div className='guide_text'><span className='ic_blue'></span><span className='blue'>상세페이지 상품정보에 노출되는 이미지5 입니다.</span></div>
                    </td>
				</tr>
			</tbody>
			</table>
			</div>
			
{/* <!-- // 검색영역 --> */}

	{/* <!-- 버튼영역 --> */}
	<div className="bottom_btn_area" >
		<div className="btn_line_up_center">
			<span className="shop_btn_pack" >
				<input type="submit" name="" className="input_large red" value="등록하기" />  &nbsp;
				<input type="button" name="" className="input_large gray" value="목록보기" onClick={()=>{}}/>
			</span>
		</div>
	</div>
	{/* <!-- 버튼영역 --> */}

{/* <script language="JavaScript" src="_product.js"></script> */}
{/* <link rel="stylesheet" href="/include/js/jquery/jqueryui/jquery-ui.min.css" type="text/css"/> */}
{/* <script src="/include/js/jquery/jqueryui/jquery-ui.min.js"></script> */}
{/* <script src="/include/js/jquery/jqueryui/jquery.ui.datepicker-ko.js"></script> */}

				<div style={{height:'30px'}}></div>
				</form>
			</div>
		</div>
	</div>	  
)}

export default ProductRegister;