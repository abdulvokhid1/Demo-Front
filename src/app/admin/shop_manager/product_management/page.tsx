'use client'
import { Slider } from 'antd';
// import './styles.css'
import type { AppProps } from "next/app";

const ProductManagement = () => {
return (
<div className="content_section">
    <div className="content_section_fix" style={{ background: '#fff' }}>
        <div className="open_close">
            <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span>
            <span className="btn_open" id="open_close_btn_open" title="메뉴열기"></span>
        </div>

        {/*
        <!-- 페이지타이틀 --> */}
        <div className="title_area">
            <span className="icon"></span>
            <span className="title">
                상품문의 관리
            </span>
            <span className="location">홈 &gt; 기본관리 &gt; 상품문의 관리</span>
        </div>

        {/*
        <!-- // 페이지타이틀 --> */}

        {/*<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder='0' style={{display:'none'}}></iframe>*/}

        {/*
        <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

        <div className="common_ajax_proc"></div>
        {/* !-- 검색영역 --> */}
        <div className="form_box_area">
            <form name="searchfrm" method="get" action="/myAdmin/_shop_product_talk.list.php">
                <input type="hidden" name="mode" value="search" />
                <input type="hidden" name="pt_type" value="" />
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="120px" />
                        <col width="200px" />
                        <col width="120px" />
                        {/*
                        <!-- 마지막값은수정안함 --0> */}
                            <col width="*"/>
						</colgroup>
                        <tbody>
                            <tr>
                                <td className="article">상품명</td>
                                <td className="conts"><input type="text" name="pass_pname" className="input_text" style={{ width:'150px'}}  value="" /></td>
                                <td className="article">상품코드</td>
                                <td className="conts"><input type="text" name="pass_ttProCode" className="input_text" style={{ width:  '150px' }} value="" /></td>
                            </tr>
                            <tr>
                                <td className="article">작성자아이디</td>
                                <td className="conts"><input type="text" name="pass_ttID" className="input_text" style={{ width:'150px' }} value="" /></td>
                                <td className="article">댓글내용</td>
                                <td className="conts"><input type="text" name="pass_ttContent" className="input_text" style={{ width:'150px' }} value="" /></td>
                            </tr>
                        </tbody>
                    </table>


                    {/* <!-- 버튼영역 --> */}
                        <div className="top_btn_area">
                            <div className="btn_line_up_center">
                                <span className="shop_btn_pack btn_input_blue">
                                    <input type="submit" className="input_medium" title="검색" value="검색" />
                                </span>
                            </div>
                        </div>
            </form>
        </div>
        {/*
        <!-- // 검색영역 --> */}

        {/*
        <!-- 리스트영역 --> */}
        <div className="content_section_inner">

            <table className="list_TB" summary="리스트기본">

                <thead>
                    <tr>
                        <th scope="col" className="colorset">NO</th>
                        <th scope="col" className="colorset">상품정보</th>
                        <th scope="col" className="colorset">작성자</th>
                        <th scope="col" className="colorset">댓글내용</th>
                        <th scope="col" className="colorset">작성일</th>
                        <th scope="col" className="colorset">비고</th>
                    </tr>
                </thead>
                <colgroup>
                    <col width="50px" />
                    <col width="100px" />
                    <col width="130px" />
                    <col width="70px" />
                    <col width="*" />
                    <col width="80px;" />
                    <col width="140px;" />
                </colgroup>
                <tbody>

                    <tr>
                        <td colSpan={10} height="40">내용이 없습니다.</td>
                    </tr>

                </tbody>
            </table>


            {/*
            <!-- 페이지네이트 --> */}
            <div className="list_paginate">
                <span className="lineup">
                    <span className="nextprev">
                        <span className="btn">
                            <span className="no">
                                <span className="icon ic_first"></span>
                            </span>
                            <a href=" ?&amp;listpg=1" className="ok" title="처음">
                                <span className="icon ic_first"></span>
                            </a>
                        </span>
                        <span className="btn">
                            <span className="no">
                                <span className="icon ic_prev">
                                </span>
                            </span>
                            <a href=" ?&amp;listpg=0" className="ok" title="이전">
                                <span className="icon ic_prev"></span>
                            </a>
                        </span>
                    </span>
                    <span className="number">
                        <a href="#none" onClick={() => {return false}} className="hit">1</a>
                    </span>
                    <span className="nextprev">
                        <span className="btn">
                            <span className="no">
                                <span className="icon ic_next"></span>
                            </span>
                            <a href=" ?&amp;listpg=2" className="ok" title="다음">
                                <span className="icon ic_next"></span>
                            </a>
                        </span>
                        <span className="btn"><span className="no">
                                <span className="icon ic_last"></span>
                            </span>
                            <a href=" ?&amp;listpg=0" className="ok" title="끝">
                                <span className="icon ic_last"></span>
                            </a>
                        </span>
                    </span>
                </span>
            </div>
            {/*
            <!-- // 페이지네이트 --> */}

        </div>
        <div style={{height:'30px'}}></div>
    </div>
    </div>

    )
    }
    export default ProductManagement;