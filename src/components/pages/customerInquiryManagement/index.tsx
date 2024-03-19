'use client';
<<<<<<<< HEAD:src/components/pages/general/customer-inquiry-management/index.tsx
// import './styles.css'
========

>>>>>>>> MeeRyeong:src/components/pages/customerInquiryManagement/index.tsx
import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/general'
import Head from 'next/head'
import {Layout} from 'antd'
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState } from 'react';

const customerInquiryManagement = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
        style={{background: "#f0f0f0"}}>
       <Slider/>
        <div className="content_section">
            <div className="content_section_fix" style={{background: '#fff'}}>

                <div className="open_close">
                    <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                    <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                </div>
                <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">s
											고객문의 관리
					</span>
                    <span className="location">홈 &gt; 기본관리 &gt; 고객문의 관리</span>
                </div>
                <iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0"
                        style={{display: 'none'}}></iframe>

                <div className="common_ajax_proc"></div>

                <div className="form_box_area">
                    <form name="searchfrm" method="post" action="/myAdmin/_shop_request.list.php">
                        <input type="hidden" name="mode" value="search"/>
                        <input type="hidden" name="pass_menu" value="request"/>
                        <table className="form_TB" summary="검색항목">
                            <colgroup>
                                <col width="120px"/>
                                <col width="200px"/>
                                <col width="120px"></col>
                                <col width="*"></col>
                            </colgroup>
                            <tbody>
                            <tr>
                                <td className="article">제목</td>
                                <td className="conts">
                                    <input type="text" name="pass_title" className="input_text input_style" value=""/>
                                </td>
                                <td className="article">답변상태</td>
                                <td className="conts">
                                    <select name="pass_status select_style">
                                        <option value="">-선택-</option>
                                        <option value="답변대기">답변대기</option>
                                        <option value="답변완료">답변완료</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="top_btn_area">
                            <div className="btn_line_up_center">
                                <span className="shop_btn_pack btn_input_blue">
                                    <input type="submit" className="input_medium" title="검색" value="검색"/>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="content_section_inner">
                    <div className="top_btn_area">
                        <span className="shop_btn_pack">
                            <Link href="#none" className="small white" title="전체선택">전체선택</Link>
                        </span>
                        <span className="shop_btn_pack">
                            <span className="blank_3"></span>
                        </span>
                        <span className="shop_btn_pack">
                            <Link href="#none" className="small white" title="전체선택">전체선택해제</Link>
                        </span>
                    </div>

                    <table className="list_TB" summary="리스트기본">
                        <col width="120px"/>
                        <col width="200px"/>
                        <col width="120px"/>
                        <col width="*"/>
                        <thead>
                        <tr>
                            <th scope="col" className="colorset">번호</th>

                            <th scope="col" className="colorset">회원ID</th>
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

                    <div className="list_paginate">
                        <span className="lineup">
                            <span className="nextprev">
                                <span className="btn">
                                    <span className="no">
                                        <span className="icon ic_first"></span>
                                    </span>
                                    <Link href=" ?pass_menu=request&amp;&amp;listpg=1" className="ok" title="처음">
                                        <span className="icon ic_first"></span>
                                    </Link>
                                </span>
                                <span className="btn">
                                    <span className="no">
                                        <span className="icon ic_prev"></span>
                                    </span>
                                    <Link href=" ?pass_menu=request&amp;&amp;listpg=0" className="ok" title="이전">
                                        <span className="icon ic_prev"></span>
                                    </Link>
                                </span>
                            </span>
                            <span className="number">
                                <Link href="#none" onClick={() => {
                                    return false
                                }} className="hit">1</Link>
                            </span>
                            <span className="nextprev"><span className="btn"><span className="no">
                                <span className="icon ic_next"></span>
                            </span>
                                <Link href=" ?pass_menu=request&amp;&amp;listpg=2" className="ok" title="다음">
                                    <span className="icon ic_next"></span>
                                </Link>
                            </span>
                                <span className="btn">
                                    <span className="no">
                                        <span className="icon ic_last"></span>
                                    </span>
                                    <Link href=" ?pass_menu=request&amp;&amp;listpg=0" className="ok" title="끝">
                                        <span className="icon ic_last"></span>
                                    </Link>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>


                <div style={{height: '30px'}}></div>

            </div>
        </div>
        </div>

    )
}

export default customerInquiryManagement;