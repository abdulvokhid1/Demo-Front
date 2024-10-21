'use client';
// import '@/app/jquery-ui.min.css'
// import './styles.css'

import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/general'
import Head from 'next/head'
import {Layout} from 'antd'
import Navbar from "@/components/layouts/Navbar";
import {useEffect, useState} from "react";

const AdvertingReq = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }
    return (
        // <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
        //      style={{background: "#f0f0f0"}}>
            <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
                 style={{background: "#f0f0f0"}}>
                <Slider/>
                <div className="content_section">
      <div className="content_section_fix" style={{ background: '#fff' }}>

        <div className="open_close">
          <span className="btn_close" id="open_close_btn_close" title="메뉴닫기" style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
          <span className="btn_open" id="open_close_btn_open" title="메뉴열기" style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
          </div>

        {/* <!-- 페이지타이틀 --> */}

        <div className="title_area">
          <span className="icon"></span>
          <span className="title">
            제휴/광고문의 관리
          </span>
          <span className="location">홈 &gt; 기본관리 &gt; 제휴/광고문의 관리</span>
          </div>
        {/* <!-- // 페이지타이틀 --> */}

        {/*<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder='0' style={{ display: 'none' }}></iframe>*/}

        {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}


        <div className="common_ajax_proc"></div>


        {/* <!-- 검색영역 --> */}

        <div className="form_box_area">
          <form name="searchfrm" method="post" action="/myAdmin/_shop_request_partner.list.php">
            <input type="hidden" name="mode" value="search" />
            <input type="hidden" name="pass_menu" value="partner" />
            <table className="form_TB" summary="검색항목">
              <colgroup>
                <col width="120px" />
                <col width="200px" />
                <col width="120px" />

                {/* <!-- 마지막값은수정안함 --> */}
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="article">제목</td>
                  <td className="conts">
                    <input type="text" name="pass_title" className="input_text" style={{ width: 100 }} value="" /></td>
                  <td className="article">답변상태</td>
                  <td className="conts"><select name="pass_status">
                    <option value=""> -선택- </option><option value="답변대기">답변대기</option>
                    <option value="답변완료">답변완료</option></select></td>
                </tr>
              </tbody>
            </table>

            {/* <!-- 버튼영역 --> */}
            <div className="top_btn_area">
              <div className="btn_line_up_center">
                <span className="shop_btn_pack btn_input_blue">
                  <input type="submit" className="input_medium" title="검색" value="검색" /></span>
              </div>
            </div>
          </form>
        </div>

        {/* <!-- // 검색영역 --> */}
        
        {/* <!-- 리스트영역 --> */}
        <div className="content_section_inner">

          {/* <!-- 리스트 제어버튼영역 --> */}

          <div className="top_btn_area">
            <span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
            <span className="shop_btn_pack"><span className="blank_3"></span></span>
            
          </div>
          {/* <!-- // 리스트 제어버튼영역 --> */}


          <table className="list_TB" summary="리스트기본">

            {/* <!-- <colgroup>
                        <col width="120px" /><col width="200px" /><col width="120px" /><col width="*" />
                      </colgroup> --> */}
            <thead>
              <tr>
                <th scope="col" className="colorset">번호</th>
                <th scope="col" className="colorset">아이디<br />(관리자명)</th>
                <th scope="col" className="colorset">문의자명</th>
                <th scope="col" className="colorset">연락처</th>
                <th scope="col" className="colorset">이메일</th>
                <th scope="col" className="colorset">제목</th>
                <th scope="col" className="colorset">상태</th>
                <th scope="col" className="colorset">문의일</th>
                <th scope="col" className="colorset">처리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} height="40">내용이 없습니다.</td>
              </tr>
            </tbody>
          </table>


          {/* <!-- 페이지네이트 --> */}
          <div className="list_paginate">
            <span className="lineup">
              <span className="nextprev">
                <span className="btn">
                  <span className="no">
                    <span className="icon ic_first"></span>
                  </span>
                  <a href=" ?pass_menu=partner&amp;&amp;listpg=1" className="ok" title="처음">
                    <span className="icon ic_first"></span></a></span>
                <span className="btn"><span className="no">
                  <span className="icon ic_prev">
                  </span>
                </span>
                  <a href=" ?pass_menu=partner&amp;&amp;listpg=0" className="ok" title="이전">
                    <span className="icon ic_prev">
                    </span>
                  </a>
                </span>
              </span>
              <span className="number">
                <a href="#none" onClick={() => { return false }} className="hit">1</a>
              </span><span className="nextprev"><span className="btn">
                <span className="no">
                  <span className="icon ic_next"></span></span>
                <a href=" ?pass_menu=partner&amp;&amp;listpg=2" className="ok" title="다음">
                  <span className="icon ic_next"></span></a></span>
                <span className="btn"><span className="no">
                  <span className="icon ic_last"></span></span>
                  <a href=" ?pass_menu=partner&amp;&amp;listpg=0" className="ok" title="끝">
                    <span className="icon ic_last"></span></a></span></span></span>
          </div>
          {/* <!-- // 페이지네이트 --> */}

        </div>
        <div style={{ height: '30' }}></div>

      </div>
    </div>
            </div>
        // </div>
    )
}

export default AdvertingReq