'use client'

import React from 'react'

const index = () => {
  return (

    <div className="content">
    <div className="left_wrap">
        <div className="view con1">
            <ul>
<li>
<a href="#none" onClick={()=>{}} style={{textAlign:"center"}}>
  <img src="/pages_unique03/images/etc/top_logo.png" style={{width:"90%"}}/>
</a>
    <button className="icon_btn" onClick={()=>{}} style={{textAlign:'center',background:'#666', border:'1px solid #666'}}>쇼핑몰 바로가기</button>
</li>
            </ul>
            <div className="title">
                <h2 className="pd_left20">나의정보</h2>
                <button className="icon_btn" onClick={()=>{}}>구매신청<img src="/pages_unique03/images/icon_arrow.svg"/></button>
            </div>
            <ul>

<li>
<p>소속센터</p><span>무소속</span>
</li>
                <li>
                    <p>나의 캐시</p><span>0</span>
                </li>
            </ul>
        </div>

        <div className="view gridform" style={{marginBottom:"20px"}}>
            <h2 className="pd_left20">실적현황</h2>
                <button className="icon_btn" onClick={()=>{}} style={{float:'right',marginTop:"-42px"}}>출금신청<img src="/pages_unique03/images/icon_arrow.svg"/></button>
            <ul>
             <li>

<span style={{margin:'4px 0',display:'block' ,textAlign:"right"}}>0 원</span>
<span style={{margin:'4px 0',display:'block' ,textAlign:"right" ,fontSize:'14px', color:'#999'}}>
</span>
                </li>
                <li className="bg_gr">
                    <p>출금 금액</p><span> 잔액</span>
                </li><br/>
                <li>
                    <p> 실적</p>
                </li>
                {/* <li className="bg_gr"><p>하부전체 실적</p><span>0</span></li> */}
                <li>
                    <p>당일 보너스</p><span>0</span>
                </li>
            </ul>
        </div>
        <div className="view">
                                <div className="title">
                                    <h2 className="pd_left20">추천링크</h2>
									{/* <!--
                                    <ul className="sns-group">
                                        <li><a href=""><img src="/pages_unique03/images/icon_sns1.svg"/></a></li>
                                        <li><a href=""><img src="/pages_unique03/images/icon_sns2.svg"/></a></li>
                                        <li><a href=""><img src="/pages_unique03/images/icon_sns3.svg"/></a></li>
                                        <li><a href=""><img src="/pages_unique03/images/icon_sns4.svg"/></a></li>
                                    </ul>
									--> */}

                                </div>
                                <div className="link_box" style={{paddingBottom:"50px"}}>

<div className="token_tid_main">
	  <div className="mid">
		<div className="area">

		  <div className="txt">
			<input id="en_url_owner" style={{width:'100%',float:'left',height:'35px', border:'1px solid #999', fontSize:'18px', paddingLeft:"5px"}} value="http://thesen.moinus.kr/?my_owner=00000001"/>

			<div className="btn_wrap_tid" style={{width:'100%', margin:'0', padding:"0"}}>
			  {/* <!--<a href="mypage.token_url_manage.html" className="add"><img src="/pages_unique03/images/main/menu_icon_add_blue.png" border="0" alt="" />추가</a>--> */}
			  <a href="#none" className="copy copy_btn_owner" data-clipboard-action="copy" data-clipboard-target="#en_url_owner"  style={{width:'100%', margin:'0', padding:'0', marginTop:"5px"}}>
          <img src="/pages_unique03/images/main/menu_icon_copy_blue.jpg" style={{border:'0'}} alt="" />추천인가입복사</a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
</div>
</div>
</div>
</div>
  )
}

export default index