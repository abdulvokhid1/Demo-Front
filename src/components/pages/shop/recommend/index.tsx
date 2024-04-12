'use client'

import React from 'react'

const recommend = () => {
  return (
    <>
    <div className="common_pages_top">

<div className="this_page_name">
  <a href="#none" onClick={()=>{}} className="btn_back" title="뒤로"><span className="shape"></span></a>

  <div className="txt">추천회원</div>

  {/* <!--
  <a href="#none" onclick="view_submenu();return false" className="btn_openmenu" title="메뉴열기"><span className="shape"></span></a>
  <div className="open_menu">
    <ul>
      <li><a href="_order.list.php" className="menu ">주문관리</a></li>
      <li><a href="_order.list.php?style=b" className="menu ">무통장주문관리</a></li>
    </ul>
  </div>
  --> */}

</div>		

</div>
{/* <!-- / 레이아웃 상단 --> */}

<div className="common_page" style={{textAlign:'center',background:'#fff'}}>

<div className="main_tab" style={{borderTop:'2px solid #fff'}}>
  <a href="?sk=myoffice&pn=mypage.recom.list" className="main_product_list_tab btn btn_hit" style={{width:"50%"}}>추천회원</a>
  <a href="?sk=myoffice&pn=mypage.recom.list&subyn=y" className="main_product_list_tab btn " style={{width:"50%"}}>산하회원</a>
</div>

{/* <!--
<div className="main_tab_style1">
  <a href="" className="main_product_list_tab btn"><span className="txt_box ">1</span></a>
  <a href="" className="main_product_list_tab btn"><span className="txt_box ">2</span></a>
  <a href="" className="main_product_list_tab btn"><span className="txt_box btn_hit">3</span></a>
  <a href="" className="main_product_list_tab btn"><span className="txt_box">4</span></a>
</div>
--> */}

<div className="cm_mypage_sumbox" style={{display:'none'}}>
  <dl>
    <dt>추천회원 <strong>2</strong>명</dt>
  </dl>
</div>

<div className="common_inner common_full">
<div className="cm_shop_title">
<strong></strong> 내 고유 추천인 링크
<div className="explain"></div>
</div>
<div className="section-title" style={{marginLeft:'20px', marginTop:'10px'}}>각 회원에게는 친구 및 가족과 공유하고 보너스를 받을 수 있는 고유한 추천인 링크가 있습니다.</div>

<div style={{width:'100%'}}>
{/* <!--
<div className="cm_shop_title">
  <strong></strong> 내 고유 추천 링크
  <div className="explain"></div>
</div>
--> */}
<div className="token_tid_main">

  <div className="mid">
  <div className="area">

    <div className="txt">
    <input id="en_url_owner" style={{width:'100%', float:'left',height:'35px',border:'1px solid #999', fontSize:'18px',paddingLeft:'5px'}} value="http://thesen.moinus.kr/?my_owner=00000001"/>

    <div className="btn_wrap_tid" style={{width:'100%',margin:'0',padding:'0'}}>
      {/* <!--<a href="mypage.token_url_manage.html" className="add"><img src="/pages_unique03/images/main/menu_icon_add_blue.png" border="0" alt="" />추가</a>--> */}
      <a href="#none" className="copy copy_btn_owner" data-clipboard-action="copy" data-clipboard-target="#en_url_owner"  style={{width:'100%', margin:'0',padding:'0',marginTop:'5px'}}>
        <img src="/pages_unique03/images/main/menu_icon_copy_blue.jpg" style={{border: 'none'}} alt="" />추천인가입복사</a>
    </div>
    </div>
  </div>
  </div>
</div>
</div>
<div style={{width:'100%'}}>
{/* <!--
<div className="cm_shop_title">
  <strong></strong> 내 고유 추천 링크
  <div className="explain"></div>
</div>
--> */}
</div>
<br/><br/>
<div className="cm_shop_title">
<strong></strong> 나의 QR
<div className="explain"></div>
</div>
<div style={{width:'100%',textAlign:'center'}}>
<span className="qr"><img src='http://thesen.moinus.kr/qr_img.php?d=http://thesen.moinus.kr/?my_owner=00000001&s=20' style={{width:'90%'}}/></span>
</div>
<div className="cm_shop_title">
<strong></strong> 추천인 목록
<div className="explain"></div>
</div>
{/* <!-- / 페이지 통계박스 --> */}
{/* <!-- ●●●●●●●●●● 주문내역조회 --> */}
<div className="cm_order_search">
  <div className="cm_mypage_sumbox" >
    <dl>
      <dt>
         추천회원 <strong>2</strong>명
      </dt>
    </dl>
  </div>
  {/* <!-- 기간검색 --> */}
  <div className="period">
    <ul>
      <li className="hit"><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=&subyn=&_period=all" className="btn">전체</a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=&subyn=&_period=today" className="btn">오늘</a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=&subyn=&_period=week" className="btn">1주일</a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=&subyn=&_period=month" className="btn">1개월</a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=&subyn=&_period=three" className="btn">3개월</a></li>
    </ul>
  </div>

  {/* <!-- 직접입력검색 --> */}
  <div className="detail">
    <form name="form_period">
    <input type="hidden" name="pn" value="mypage.recom.list"/><input type="hidden" name="_mode" value=""/>
    <div className="input_wrap">
      <ul>
        <li><input type="text" name="_period_s" id="s_date" readOnly value="2023-06-20" className="input_date"/></li>
        <li><input type="text" name="_period_e" id="e_date" readOnly value="2024-03-26" className="input_date"/></li>
      </ul>					
    </div>
    <span className="button_pack"><a href="#none" onClick={()=>{}}className="submit_period btn_md_black">조회</a></span>
    </form>
  </div>
</div>

{/* <!-- ●●●●●●●●●● 카테고리있을경우 게시판메뉴 --> */}
  {/* <!--
<div className="cm_mypage_tab">
  <div className="inner_tab">
    <ul>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=all&_period=all&_period_s=2023-06-20&_period_e=2024-03-26">전체주문<strong>2</strong></a></li>
      <li className="hit"><a href="/m/?sk=myoffice&pn=mypage.recom.list">진행중인주문<strong>0</strong></a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=done&_period=all&_period_s=2023-06-20&_period_e=2024-03-26">완료된주문<strong>0</strong></a></li>
      <li className=""><a href="/m/?sk=myoffice&pn=mypage.recom.list&_mode=cancel&_period=all&_period_s=2023-06-20&_period_e=2024-03-26">취소된주문<strong>0</strong></a></li>
    </ul>
  </div>
</div>
--> */}
{/* <!-- //카테고리있을경우 게시판메뉴 --> */}

{/* <!-- 주문내역 리스트 3개까지  --> */}
<div className="cm_bonus_list4">
  
  <div className="list_TB">
    <ul>

      <li>번호</li>
      <li>날짜</li>
      <li>아이디</li>
      <li>등급</li>


    </ul>
  </div>
  <div className="list_TB">
  
        <ul style={{clear:'both'}}>
          <li>2</li>
          <li>2024-03-26</li>
          <li>2000045</li>
          <li>일반회원</li>
          
        </ul>
        <ul style={{clear:'both'}}>
          <li>1</li>
          <li>2023-06-20</li>
          <li>2000001</li>
          <li>정회원</li>
        </ul>
   <div>

</div>
{/* <!-- .cm_order_list --> */}

</div>
{/* <!-- .common_inner --> */}
</div>
{/* <!-- .common_page --> */}

<div className="common_page" style={{background:"#fff"}}>
<div className="common_inner common_full">

{/* <!-- 페이지네이트 --> */}

{/* <!-- // 페이지네이트 --> */}

</div>
</div>
    </div>
    </div>
    </>
  )
}

export default recommend
