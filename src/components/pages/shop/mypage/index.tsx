'use client'

import React from 'react'

const style = {
  display: 'none',
  border: '0',
  width: '100%',
  height: '300px',
  margin: '0',
  position: 'relative',
  WebkitOverflowScrolling: 'touch' // React에서는 카멜 케이스를 사용합니다.
};
const my_page = () => {
  return (
    <>
    <div className="common_pages_top">

<div className="this_page_name">
  <a href="#none" onClick={()=>{}} className="btn_back" title="뒤로"><span className="shape"></span></a>

  <div className="txt">정보수정</div>

</div>		

</div>
{/* <!-- / 레이아웃 상단 --> */}

<div className="common_page">
<div className="common_inner common_full post_hide_section">

{/* <!-- ●●●●●●●●●● 단락타이틀 --> */}
<div className="cm_member_title">
  <strong></strong>나의프로필	</div>
{/* <!-- / 단락타이틀 --> */}

{/* <!-- ●●●●●●●●●● 회원기본정보 --> */}
<form name="join_frm" id="join_frm" method="post" action="/pages_unique03/member.join.pro.php" target="common_frame">
<input type="hidden" name="realCheck" value="1"/>
<input type="hidden" name="nickCheck1" value="1"/>
<input type="hidden" name="_mode" value="return_account"/>
<input type="hidden" name="_id" value="superadmin"/>
<div className="cm_member_form">

  <ul>
    {/* <!-- 클래스값 추가/// ess:필수요소, 두칸으로 쓸 경우 : double --> */}
    <li className="ess double">
      <span className="opt">아이디</span>
      <div className="value" style={{marginLeft:'100px'}}>superadmin</div>
    </li>
    <li className="ess double">
      <span className="opt">이름</span>
      <div className="value" style={{marginLeft:'100px'}}>담당자
      </div>
    </li>
    <li className="ess double">
      <span className="opt">회원등급</span>
      <div className="value" style={{marginLeft:'100px'}}>
        본사
      </div>
    </li>
    <li className="ess double">
      <span className="opt">추천인</span>
      <div className="value" style={{marginLeft:'100px height:50px'}}></div>
    </li>

      <li className="ess double">
        <span className="opt">소속센터</span>
        <div className="value"style={{marginLeft:'100px'}}>무소속&nbsp;</div>
      </li>

{/* 
<!--
    <li className="ess double">
      <span className="opt">직추천인 MS</span>
      <div className="value" style="margin-left:100px;">0 MS

      </div>
    </li>
    <li className="ess double">
      <span className="opt">산하추천인 MS</span>
      <div className="value" style="margin-left:100px;">5 MS
      </div>
    </li>
--> */}

{/* 
<!--
    <li className="ess">
      <span className="opt">하위회원 수</span>
      <div className="value" style="margin-left:100px;">0 명</div>
    </li>
--> */}

{/* <!--
    <li className="ess">
      <span className="opt">산하추천10대</span>
      <div className="value" style="margin-left:100px;">0 명</div>
    </li>

    <li className="ess">
      <span className="opt">산하추천20대</span>
      <div className="value" style="margin-left:100px;">0 명</div>
    </li>
--> */}


  </ul>
</div>

{/* <!-- ●●●●●●●●●● 단락타이틀 --> */}
<div className="cm_member_title">
  <strong></strong> 개인정보	</div>
{/* <!-- / 단락타이틀 --> */}

<div className="cm_member_form">
  <ul>
    {/* <!-- 클래스값 추가/// ess:필수요소, 두칸으로 쓸 경우 : double --> */}

{/* <!--
      <li className="ess">
        <span className="opt">예금주 주민번호</span>
        <div className="value">
          <input type="text" name="_cjumin1" className="input_design" maxlength="13" value="" style="width:140px;"/>
          <span className="dash"></span>
          <input type="text" name="_cjumin2" className="input_design" maxlength="13" value="" style="width:140px;"/>

        </div>
      </li>
--> */}

      <li className="ess">
        <span className="opt">연락처</span>
        <div className="value">
          <input type="text" name="_htel" className="input_design" maxLength={13} value="010-0000-1111" style={{width:'140px'}}/>
          <div className="tip_txt">
          </div>
        </div>
      </li>
      <li className="ess">
        <span className="opt">이메일</span>
        <div className="value">
          <input type="email" name="_email" className="input_design" placeholder="이메일" value="abc@abc.com" />
        </div>
      </li>

    <li className="ess">
      <span className="opt">비밀번호</span>
      <div className="value">
        <input type="password" name="_passwd" id="_passwd" className="input_design" value="" placeholder="비밀번호 입력"/>
        <div className="tip_txt">
          <dl>
            <dd>수정을 원할 경우에만 입력해주세요 (영문, 숫자 6자이상).</dd>
          </dl>
        </div>
      </div>					
    </li>
    <li className="ess">
      <span className="opt">비밀번호 확인</span>
      <div className="value"><input type="password" name="_repasswd" id="_repasswd" className="input_design" value="" placeholder="다시한번 입력"/>
        <div className="tip_txt">
          <dl>
            <dd>동일하게 다시 한번 입력해주세요.</dd>
          </dl>
        </div>
      </div>
    </li>
  </ul>
</div>
{/* <!-- .cm_member_form --> */}
{/* <!-- / 회원기본정보 --> */}


{/* <!-- ●●●●●●●●●● 단락타이틀 --> */}
<div className="cm_member_title">
  <strong></strong> 계좌관리	</div>
{/* <!-- / 단락타이틀 --> */}


<div className="cm_member_form">
  <ul>
    {/* <!-- 클래스값 추가/// ess:필수요소, 두칸으로 쓸 경우 : double --> */}
      <li className="ess">
        <span className="opt">은행명</span>
        <div className="value"><input type="text" name="return_bank" className="input_design icon_name" value="국민은행 " placeholder="은행명" style={{width:'140px'}}  /></div>
      </li>

      <li className="ess">
        <span className="opt">계좌번호</span>
        <div className="value"><input type="text" name="return_account" className="input_design icon_bank" value="111111111111111111" placeholder="계좌번호" style={{}} /></div>
      </li>


      <li className="ess">
        <span className="opt">예금주명</span>
        <div className="value"><input type="text" name="return_name" className="input_design icon_name" value="" placeholder="예금주명" style={{width:'140px'}}  /></div>
      </li>
{/* 
<!--

      <li className="ess">
        <span className="opt">은행명</span>
        <div className="value"><input type="text" name="account_bank" className="input_design icon_name" value="국민은행 " placeholder="은행명" style="width:140px;"/></div>
      </li>

      <li className="ess">
        <span className="opt">계좌번호</span>
        <div className="value"><input type="text" name="account_deposit" className="input_design icon_bank" value="111111111111111111" placeholder="계좌번호" style=""/></div>
      </li>


      <li className="ess">
        <span className="opt">예금주명</span>
        <div className="value"><input type="text" name="account_name" className="input_design icon_name" value="" placeholder="예금주" style="width:140px;"/></div>
      </li>

--> */}
{/* 
<!--
      <li className="ess">
        <span className="opt">예금주 주민번호</span>
        <div className="value">
          <input type="text" name="_cjumin1" className="input_design" maxlength="13" value="" style="width:140px;"/>
          <span className="dash"></span>
          <input type="text" name="_cjumin2" className="input_design" maxlength="13" value="" style="width:140px;"/>

        </div>
      </li>
--> */}

  </ul>
</div>

<div className="cm_bottom_button">
  <ul>
      <li><span className="button_pack"><a href="#none" onClick={()=>{}} title="" className="btn_lg_color">정보수정</a></span></li>
  </ul>
</div>
{/* <!-- / 가운데정렬버튼 --> */}

</form>

</div>
{/* <!-- .common_inner --> */}
</div>
{/* <!-- .common_page --> */}

{/* <div id="find_postcode" className="post_popup_section" 
style={{display:'none',border:'0',width:'100%',height:'300px',margin:'0',position:'relative',-webkit-overflow-scrolling:'touch'}}> */}
<style/>
{/* <img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnFoldWrap" 
style={{cursor:'pointer',position:'absolute',right:'0px', top: '-1px', z-index:{1}} onClick={()=>{}} alt="접기 버튼"> */}

<div style={{clear:'both',height:'45px',margin:'45px'}}></div>

<div className="notice_bottom">
<p><a href="?sk=myoffice&pn=board.view&boardid=&_uid=1">내역이 없습니다.</a></p>
</div>
<div style={{clear:'both',height:'145px',margin:'145px'}}></div>
    </>
  )
}

export default my_page