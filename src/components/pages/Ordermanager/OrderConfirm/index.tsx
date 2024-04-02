'use client'
import Slider from '@/components/layouts/Slider/Order';
import { useEffect, useState } from "react";

const OrderConfirm = () => {
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
						1단계 주문확인					
					</span>
                    <span className="location">홈 &gt; 주문관리 &gt; 1단계 주문확인</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

				  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
 <div className="common_ajax_proc"></div>


{/* <!-- 검색영역 --> */}
<form name='searchfrm' method='post' action='/myAdmin/_order.list.php?&odcode=today'>
<input type='hidden' name='mode' value='search'/>

{/* <!-- 배송상품 주문단계 5단계 변경 추가 --> */}
<input type='hidden' name='odcode' value="1"/>


<div className="form_box_area">
  <table className="form_TB" summary="검색항목">
  <colgroup>
  <col width="100px"/><col width="200px"/><col width="100px"/><col width="200px"/><col width="100px"/><col width="*"/>
  </colgroup>
  <tbody>
  <tr>
    <td className="article">주문번호</td>
    <td className="conts"><input type='text' name="pass_ordernum" className='input_text' value=""/></td>
    <td className="article">주문자ID</td>
    <td className="conts"><input type='text' name="pass_orderid" className='input_text' value=""/></td>
    <td className="article">주문자이름</td>
    <td className="conts"><input type='text' name="pass_ordername" className='input_text' value=""/></td>
  </tr>
    <tr>
    <td className="article">결제수단</td>
		<td className="conts">
				<select name='pass_paymethod' >
				<option value=''>-결제수단-</option>
				<option value='C' >카드결제</option>
				<option value='L' >실시간 계좌이체</option>
				<option value='B' >무통장 입금</option>
				<option value='G' >전액 포인트 결제</option>
				<option value='V' >가상계좌</option>
				</select>
		</td>
   		 <td className="article">결제상태</td>
			<td className="conts">
				<select name='pass_paystatus' >
						<option value=''>-결제여부-</option>
						<option value='Y' >결제완료</option>
						<option value='N' >결제대기</option>
				</select>
			</td>
    <td className="article">결제승인</td>
    <td className="conts">
		<select name='pass_paystatus2' >
		<option value=''>-승인여부-</option>
		<option value='Y' >결제승인</option>
		<option value='N' >승인대기</option>
		</select>
	</td>
  </tr>
  
    <tr>
    <td className="article">검색기간</td>
    <td className="conts" colSpan={3}>
      <input type='text' name="pass_sdate" id="pass_sdate" className='input_text' value="" readOnly style={{width:'100px'}}/>
      ~
      <input type='text' name="pass_edate" id="pass_edate" className='input_text' value="" readOnly style={{width:'100px'}}/>
    </td>
    <td className="article">주문자연락처</td>
    <td className="conts"><input type='text' name="pass_orderhtel" className='input_text' value=""/></td>
  </tr>

  
  <tr>
    <td className="article">회원타입</td>
    <td className="conts">
		<select name='pass_member_type' >
			<option value=''>-회원타입-</option>
			<option value='member' >회원</option>
			<option value='guest' >비회원</option>
			</select>
			</td>
        <td className="article">구매기기</td>
    <td className="conts" colSpan={3}>
      <select name='pass_mobile_order' >
		<option value=''>-구매기기-</option>
		<option value='Y' >모바일구매</option>
    <option value='N' >PC구매</option>
    </select>  
      </td>
      </tr>
  <tr>
    <td className="conts" colSpan={6}>
      <div className='guide_text'>
        <span className='ic_blue'></span>
        <span className='blue'><b>주문정보를 삭제할 경우 상품 재고량과 회원이 사용한 적립금이 환원되지 않습니다.</b></span></div>  
         <div className='guide_text'><span className='ic_blue'></span>
         <span className='blue'>상품의 재고량과 회원이 사용한 적립금이 환원되기를 바란다면 반드시
          <b style ={{color:'red'}} >주문취소로 처리 하셨다가 삭제</b>하시기 바랍니다.</span></div> 
          <div className='guide_text'><span className='ic_blue'></span><span className='blue'><b>회원주문</b>인 경우 <b>주문번호가 볼드체(굵은글씨)로 표시</b> 됩니다.</span></div>      <div className='guide_text'><span className='ic_blue'></span><span className='blue'>주문내역에 대한 <b>엑셀파일</b>은 검색조건에 맞는 내역만 저장됩니다.</span></div>    </td>
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

<form name='frm' method='post' action="_order.pro.php" target="common_frame">
<input type='hidden' name='mode' value=''/>
<input type='hidden' name='_seachcnt' value='0'/>
<input type='hidden' name='_PVSC' value="Jm9kY29kZT10b2RheQ=="/>
<input type='hidden' name='_search_que' value="IHdoZXJlIGNhbmNlbGVkPSdOJyBBTkQgb3JkZXJzdGF0dXM9J1knIGFuZCAob3JkZXJfdHlwZSA9ICdjb3Vwb24nIG9yIG9yZGVyX3R5cGUgPSAncHJvZHVjdCcgb3Igb3JkZXJfdHlwZSA9ICdib3RoJykgQU5EIG9yZGVyc3RhdHVzX3N0ZXAgIT0gJ§uwnOyGoeyZhOujjCcgQU5EIGxlZnQob3JkZXJkYXRlLDEwKSBiZXR3ZWVuICcyMDI0LTAzLTE1JyBhbmQgJzIwMjQtMDMtMTUnIA=="/>
<input type='hidden' name='odcode' value="today"/>

{/* <!-- 리스트영역 --> */}
<div className="content_section_inner">
  {/* <!-- 리스트 제어버튼영역 //--> */}
  <div className="top_btn_area">
    <span className="shop_btn_pack"><a href="javascript:select_confirm_send();" className="small red" title="선택입금확인" >선택입금확인</a></span>
    <span className="shop_btn_pack"><span className="blank_3"></span></span>
    <span className="shop_btn_pack"><a href="javascript:select_excel_send();" className="small white" title="선택엑셀다운로드" >선택엑셀다운로드</a></span>
    <span className="shop_btn_pack"><span className="blank_3"></span></span>
    <span className="shop_btn_pack"><a href="javascript:search_excel_send();" className="small white" title="검색엑셀다운로드" >검색엑셀다운로드(0)</a></span>
    <span className="shop_btn_pack"><span className="blank_3"></span></span>
    <span className="shop_btn_pack"><a href="javascript:mass_cancel();" className="small white" title="선택주문취소" >선택주문취소</a></span>
    <span className="shop_btn_pack"><span className="blank_3"></span></span>
    <span className="shop_btn_pack" style={{float:'right'}}><a href="javascript:buy_auth();" className="small blue" title="구매승인" >구매승인</a></span>
  </div>
  {/* <!-- // 리스트 제어버튼영역 --> */}

  <table className="list_TB" summary="리스트기본">
  <thead>
  <tr>
    <th scope="col" className="colorset"><input type="checkbox" name="allchk"/></th>
    <th scope="col" className="colorset">NO</th>
    <th scope="col" className="colorset">상품유형</th>
    <th scope="col" className="colorset">주문일</th>
    <th scope="col" className="colorset">공급사</th>
    <th scope="col" className="colorset">주문번호<br/>주문자</th>
    <th scope="col" className="colorset">상품정보</th>
    <th scope="col" className="colorset">연락처</th>
    <th scope="col" className="colorset">결제방법<br/>결제금액</th>
    <th scope="col" className="colorset">결제상황</th>
    <th scope="col" className="colorset">관리</th>
    <th scope="col" className="colorset">구매승인</th>
  </tr>
  </thead>
  <tbody>
  <tr><td colSpan={15} height='40'>주문 내역이 없습니다.</td></tr>
  </tbody>
  </table>

 {/* <!-- 페이지네이트 --> */}
 <div className="list_paginate">
    	<span className='lineup'><span className='nextprev'><span className='btn'><span className='no'>
        <span className='icon ic_first'></span></span><a href=' ?&odcode=today&listpg=1' className='ok' title='처음' >
          <span className='icon ic_first'></span></a></span><span className='btn'><span className='no'>
            <span className='icon ic_prev'></span></span><a href=' ?&odcode=today&listpg=0' className='ok' title='이전' >
              <span className='icon ic_prev'></span></a></span></span><span className='number'><a href='#none' onClick={()=>{return false}} className='hit'>1</a></span>
              <span className='nextprev'><span className='btn'><span className='no'>
                <span className='icon ic_next'></span></span><a href=' ?&odcode=today&listpg=2' className='ok' title='다음' >
                  <span className='icon ic_next'></span></a></span><span className='btn'><span className='no'>
                    <span className='icon ic_last'></span></span><a href=' ?&odcode=today&listpg=0' className='ok' title='끝' >
                      <span className='icon ic_last'></span></a></span></span></span>  </div>
  {/* <!-- // 페이지네이트 --> */}

</div>
</form>
				<div style={{height:'30px'}}></div>


			</div>
        </div>
        </div>
     )}
     export default OrderConfirm;