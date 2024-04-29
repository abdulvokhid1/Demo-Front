'use client';
// import './styles.css'

import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/general'
import Head from 'next/head'
import {Layout} from 'antd'
import Navbar from "@/components/layouts/Navbar";
import {useEffect, useState} from "react";
import { useSetRecoilState } from "recoil";
import { generalSelectedKey } from "@/services/recoil/selectedKey";
const Dashboard = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const setSelectedKey = useSetRecoilState(generalSelectedKey)
    useEffect(() => {
       setSelectedKey(0)
    }, []);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }
    return (
        // <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
        //      style={{background: "#f0f0f0"}}>
            <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
                 style={{background: "#f0f0f0"}}>
                <Slider/>
                {/*<Navigation onClose={()=>{}} />*/}
                <div className="content_section">
                    <div className="content_section_fix" style={{background: '#fff'}}>

                        <div className="open_close">
                    <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                          style={{display: sliderVisible ? "block" : "none"}}
                          onClick={sliderToggle}
                    ></span>
                            <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                                  style={{display: !sliderVisible ? "block" : "none"}}
                                  onClick={sliderToggle}
                            ></span>
                        </div>


                        {/*<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0"*/}
                        {/*        style={{display: 'none'}}></iframe>*/}


                        <div className="common_ajax_proc"></div>


                        {/*<link href="css/dash/bootstrap.css?v=1709515099" id="bootstrap-style" rel="stylesheet"*/}
                        {/*      type="text/css"/>*/}


                        <div className="bar_num" style={{left: '1317px', top: '236px'}}>0</div>

                        <div className="content_section_inner">
                            <div className="main_box_area_wide">
                                <form name="searchfrm" method="post" action="/myAdmin/_main_bonus_dashboard.php">
                                    <input type="hidden" name="mode" value="search"/>

                                    <input type="hidden" name="app_mode" value=""/>

                                    <div className="form_box_area" style={{
                                        width: '100%',
                                        margin: '0 0 0px 0px',
                                        background: '#f2f2f2',
                                        border: '1px solid #999',
                                        marginTop: '5px'
                                    }}>
                                        <table className="form_TB" summary="검색항목" style={{border: '0px'}}>
                                            <colgroup>
                                                <col width="380px"/>
                                                <col width="*"/>
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <td className="conts" style={{border: '0px'}}>

                                                    <select name="pass_master" id="pass_master" onFocus={() => {
                                                        window.resizeTo(10, 10)
                                                    }}
                                                            onBlur={() => {
                                                                window.resizeTo(1, 1)
                                                            }} onChange={() => {
                                                        window.resizeTo(10, 10);
                                                        window.blur()
                                                    }}
                                                            style={{display: 'none'}}>
                                                        <option value="">-회원 선택-</option>
                                                        <option value="2000001">운영자 - 2000001</option>
                                                        <option value="2000002">회사원1 - 2000002</option>
                                                        <option value="2000003">회사원2 - 2000003</option>
                                                        <option value="2000004">회사원3 - 2000004</option>
                                                        <option value="2000005">회사원4 - 2000005</option>
                                                        <option value="2000006">회사원5 - 2000006</option>
                                                        <option value="2000007">회사원6 - 2000007</option>
                                                        <option value="2000008">조경순 - 2000008</option>
                                                        <option value="2000009">심광중 - 2000009</option>
                                                        <option value="2000010">김상일 - 2000010</option>
                                                        <option value="2000011">장기순 - 2000011</option>
                                                        <option value="2000012">안병해 - 2000012</option>
                                                        <option value="2000013">유정희 - 2000013</option>
                                                        <option value="2000014">김희숙 - 2000014</option>
                                                        <option value="2000015">김정옥 - 2000015</option>
                                                        <option value="2000016">김광분 - 2000016</option>
                                                        <option value="2000017">최복순 - 2000017</option>
                                                        <option value="2000018">박양길 - 2000018</option>
                                                        <option value="2000019">박양길2 - 2000019</option>
                                                        <option value="2000020">김승완 - 2000020</option>
                                                        <option value="2000021">김은빈 - 2000021</option>
                                                        <option value="2000022">김병은 - 2000022</option>
                                                        <option value="2000023">김희숙2 - 2000023</option>
                                                        <option value="2000024">최난희 - 2000024</option>
                                                        <option value="2000025">김진수 - 2000025</option>
                                                        <option value="2000026">이재형 - 2000026</option>
                                                        <option value="2000027">이대순 - 2000027</option>
                                                        <option value="2000028">전경희 - 2000028</option>
                                                        <option value="2000029">김제남 - 2000029</option>
                                                        <option value="2000030">김제남2 - 2000030</option>
                                                        <option value="2000031">김정혜 - 2000031</option>
                                                        <option value="2000032">박지민 - 2000032</option>
                                                        <option value="2000033">서문숙 - 2000033</option>
                                                        <option value="2000034">김정자 - 2000034</option>
                                                        <option value="2000035">김은빈2 - 2000035</option>
                                                        <option value="2000036">김희숙3 - 2000036</option>
                                                        <option value="2000037">서문숙2 - 2000037</option>
                                                        <option value="2000038">조윤순 - 2000038</option>
                                                        <option value="2000039">김옥진 - 2000039</option>
                                                        <option value="2000040">윤귀분 - 2000040</option>
                                                        <option value="2000041">윤여자 - 2000041</option>
                                                        <option value="2000042">전수경 - 2000042</option>
                                                        <option value="2000043">김옥진2 - 2000043</option>
                                                        <option value="2000044">라삼순 - 2000044</option>
                                                    </select>
                                                    <span className="custom-combobox">
                                                <input title=""
                                                       className="custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left ui-autocomplete-input"
                                                       autoComplete="off"/>
                                                <a tabIndex={-1} title="모두보기"
                                                   className="ui-button ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"
                                                   role="button">
                                                    <span
                                                        className="ui-button-icon-primary ui-icon ui-icon-triangle-1-s">
                                                    </span>
                                                    <span className="ui-button-text"></span>
                                                </a>
                                            </span>
                                                </td>
                                                <td className="conts" style={{border: '0px'}}>
                                            <span className="shop_btn_pack">
                                                <a id="search_btn_submit" className="medium red" title="목록">검색하기</a>
                                            </span>
                                                    <span className="shop_btn_pack">&nbsp;&nbsp;
                                                        <a href="_main_bonus_dashboard.php" className="medium gray"
                                                           title="취소">취소</a>
                                            </span>

                                                    <span className="shop_btn_pack" style={{float: 'right'}}>
                                                <a className="medium gray"
                                                    // onClick="javascript:MM_openBrWindow(&quot;/?sk=myoffice&amp;pn=dashboard&amp;guestid=superadmin&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=400,height=600&quot;)"
                                                   onClick={() => {
                                                   }}
                                                >
                                                모바일버전보기
                                                </a>
                                            </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </form>

                                <div className="row">
                                    <div className="new_order_data_foot"
                                         style={{width: '100%', height: '45px', background: '#fff'}}>
                                        <div className="inner_sum_box" style={{float: 'right'}}>
                                            <ul>
                                                {/*<!--<li className="txt">회원매출 BV<span className="value">0&nbsp;BV</span> </li>-->*/}
                                            </ul>
                                        </div>

                                        <div className="inner_sum_box" style={{float: 'left'}}>
                                            <ul>
                                            </ul>
                                        </div>
                                    </div>


                                    <div style={{clear: 'both', width: '100%', height: '5px'}}></div>

                                    <div className="col-md-3">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body" style={{}}>
                                                <div className="media">
                                                    {/*<!--<a style="width:100%; display:block" href='_entershop.entry_revenues_list.php?_mode=modify&app_mode=popup&topmn=y&serialnum=1' onClick="openwindow(this,'tree1','1000','600','yes');return false">-->*/}
                                                    <div className="row">
                                                        {/*<!--
                                                    <div className="col-4">
                                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-danger align-self-center mt-1">
                                                            <span className="avatar-title bg-danger ">
                                                            <i className="bx bx-copy-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    -->*/}

                                                        <div className="col-8">
                                                            <div className="media-body text-right">
                                                                <p className=" font-weight-medium"
                                                                   style={{color: '#f46a6a', fontWeight: 'bold'}}>당일 총
                                                                    매출</p>
                                                                <h4 className="mb-0"
                                                                    style={{width: '180px'}}>0&nbsp;원</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body" style={{}}>
                                                <div className="media">
                                                    {/*<!--<a style="width:100%; display:block" href='_entershop.entry_revenues_list.php?_mode=modify&app_mode=popup&topmn=y&serialnum=1' onClick="openwindow(this,'tree1','1000','600','yes');return false">-->*/}
                                                    <div className="row">

                                                        {/*<!--
                                                    <div className="col-4">
                                                        <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                            <span className="avatar-title bg-warning">
                                                            <i className="bx bx-archive-in font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    -->*/}

                                                        <div className="col-8">
                                                            <div className="media-body text-right">
                                                                <p className=" font-weight-medium"
                                                                   style={{color: '#f1b44c', fontWeight: 'bold'}}>
                                                                    보유 캐시
                                                                </p>
                                                                <h4 className="mb-0" style={{width: '180px'}}>
                                                                    0&nbsp;Cash
                                                                </h4>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    {/*<!--</a>-->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body" style={{}}>
                                                <div className="media">
                                                    {/*<!--<a style="width:100%; display:block">-->*/}
                                                    <div className="row">

                                                        {/*<!--
                                                    <div className="col-4">
                                                        <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                            <span className="avatar-title " style="background-color:#1ab723">
                                                            <i className="bx bx-purchase-tag-alt font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    -->*/}

                                                        <div className="col-8">
                                                            <div className="media-body text-right">
                                                                <p className=" font-weight-medium"
                                                                   style={{color: '#34c38f', fontWeight: 'bold'}}>
                                                                    총 누적 매출
                                                                </p>
                                                                <h4 className="mb-0"
                                                                    style={{width: '180px'}}>0&nbsp;원</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<!--</a>-->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="card mini-stats-wid">
                                            <div className="card-body" style={{}}>
                                                <div className="media">
                                                    {/*<!--<a style="width:100%; display:block" >-->*/}
                                                    <div className="row">

                                                        {/*<!--
                                                    <div className="col-4">
                                                        <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                                            <span className="avatar-title" style="background-color:#9a55e6">
                                                            <i className="bx bx-collection font-size-24"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    -->*/}

                                                        <div className="col-8">
                                                            <div className="media-body text-right">
                                                                <p className=" font-weight-medium"
                                                                   style={{color: '#9a55e6', fontWeight: 'bold'}}>
                                                                    총 출금 금액
                                                                </p>
                                                                <h4 className="mb-0"
                                                                    style={{width: '180px'}}>0&nbsp;원 </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<!--</a>-->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
<br/><br/>

                                <div className="">
                                    <div className="">


                                        <table className="last_TB" summary="마감작업" style={{border: '1px solid #ccc'}}>
                                            <colgroup>
                                                <col width="8%"/>
                                                <col width="8%"/>
                                                <col width="12%"/>
                                                <col width="12%"/>
                                                <col width="8%"/>
                                                <col width="12%"/>
                                                <col width="12%"/>
                                                <col width="12%"/>
                                                <col width="5%"/>
                                                <col width="5%"/>
                                                <col width="5%"/>
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>마감구분</th>
                                                <th>마감완료일</th>
                                                <th>마감건수</th>
                                                <th>마감합계</th>
                                                <th>정산완료일</th>
                                                <th>정산건수</th>
                                                <th>정산합계</th>

                                                <th>정산예정일</th>
                                                <th>마감정산</th>
                                                <th>정산내역</th>
                                                <th>방식</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>매출 일마감</td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td>
                                                    <b></b>
                                                </td>
                                                <td>
                                            <span style={{
                                                float: 'left',
                                                fontSize: '11px',
                                                fontWeight: 'bold'
                                            }}>(매출)</span>
                                                    <b>0</b>
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>

                                                <td><b></b></td>
                                                <td><span
                                                    style={{
                                                        float: 'left',
                                                        fontSize: '11px',
                                                        fontWeight: 'bold'
                                                    }}>(매출)</span>
                                                    <b>0</b>
                                                </td>

                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 마감전</span>
                                                    <span className="shop_btn_pack" style={{marginTop: '-2px'}}></span>
                                                </td>

                                                <td>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_grade_entry.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>대리점 일마감</td>
                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td><b></b></td>
                                                <td><b>0</b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td><b></b></td>
                                                <td><b>0</b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 마감전</span>
                                                </td>

                                                <td>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_grade_licence.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                                </span>
                                                </td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>

                                                <td style={{textAlign: 'center'}}>
                                                    -

                                                </td>
                                            </tr>

                                            {/* <tr>
                                                <td>배당보너스</td>
                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>


                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 미정산</span>
                                                </td>

                                                <td>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b1.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="정산내역" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b1_restore.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>매칭보너스</td>
                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>

                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>
                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 미정산</span>
                                                </td>

                                                <td>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b2.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>


                                                <td style={{textAlign: 'center'}}>

                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="정산내역" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b2_restore.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>


                                            </tr> */}


                                            <tr>
                                                <td>대리점 보너스</td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>


                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 미정산</span>


                                                </td>

                                                <td>


                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b3.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>


                                                </td>


                                                <td style={{textAlign: 'center'}}>

                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="정산내역" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b3_restore.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>


                                                </td>


                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                            </tr>

{/* 
                                            <tr>
                                                <td>만기보너스</td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                                <td><b>0</b></td>
                                                <td><b>0 </b></td>

                                                <td style={{textAlign: 'center'}}>
                                                    <span
                                                        style={{color: 'red', fontWeight: 'bold'}}>2024-03-04 미정산</span>
                                                </td>

                                                <td>
                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="바로가기" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b4.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>

                                                <td style={{textAlign: 'center'}}>

                                            <span className="shop_btn_pack" style={{marginTop: '-2px'}}>
                                                <input type="button" value="정산내역" className="input_small white"
                                                    // onClick="javascript:MM_openBrWindow(&quot;_entershop.bonus_no_b4_restore.php?mc_idx=05%7C19%7C03&amp;app_mode=popup&quot;,&quot;&quot;,&quot;fullscreen=no,scrollbars=yes,width=1250,height=800&quot;)"
                                                       onClick={() => {
                                                       }}
                                                />
                                            </span>
                                                </td>

                                                <td style={{textAlign: 'center'}}>
                                                    -
                                                </td>
                                            </tr> */}
                                            </tbody>
                                        </table>


                                        <div className="row mt-5"
                                             style={{
                                                 width: '50%',
                                                 float: 'left',
                                                 border: '1px solid #ccc',
                                                 margin: '0px',
                                                 padding: '15px',
                                                 fontWeight: 'bold',
                                                 marginBottom: '-49px'
                                             }}>
                                            <span className="title">당일(2024-03-04) 보너스</span></div>
                                        <div className="row mt-5"
                                             style={{
                                                 width: '50%',
                                                 float: 'left',
                                                 border: '1px solid #ccc',
                                                 margin: '0px',
                                                 padding: '15px',
                                                 borderLeft: '1px solid #fff',
                                                 fontWeight: 'bold',
                                                 marginBottom: '-49px'
                                             }}>
                                            <span className="title">전체 누적 보너스</span></div>


                                        <div className="row mt-5"
                                             style={{
                                                 width: '50%',
                                                 float: 'left',
                                                 border: '1px solid #ccc',
                                                 margin: '0px',
                                                 padding: '20px'
                                             }}>
                                            {/* <div className="col-12">
                                                <b>&nbsp;&nbsp;배당보너스</b>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-primary font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right ">

                                                        <h5 className="font-size-15 pr-2 mt-2 ">배당보너스 </h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div> */}


                                            {/* <div className="col-12">
                                                <b>&nbsp;&nbsp;매칭보너스</b>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">매칭보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div> */}


                                            <div className="col-12">
                                                <b>&nbsp;&nbsp;직급보너스</b>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">당일 대리점 보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <div className="col-12">
                                                <b>&nbsp;&nbsp;만기보너스</b>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">만기보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div>
 */}

                                        </div>


                                        <div className="row mt-5"
                                             style={{
                                                 width: '50%',
                                                 float: 'left',
                                                 border: '1px solid #ccc',
                                                 margin: '0px',
                                                 padding: '20px',
                                                 borderLeft: '1px solid #fff'
                                             }}>
                                            {/* <div className="col-12">
                                                <b>&nbsp;&nbsp;배당보너스</b>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-primary font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right ">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">배당보너스 </h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <b>&nbsp;&nbsp;매칭보너스</b>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">매칭보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div> */}


                                            <div className="col-12">
                                                <b>&nbsp;&nbsp;대리점 보너스</b>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">대리점 누적 보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <div className="col-12">
                                                <b>&nbsp;&nbsp;만기보너스</b>

                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="social-source text-left mt-3 pl-2">
                                                            <div className="avatar-xs mb-3">
                                                        <span
                                                            className="avatar-title rounded-circle bg-info font-size-16">
                                                            <i className="mdi mdi-arrow-top text-white"></i>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-8 text-right">
                                                        <h5 className="font-size-15 pr-2 mt-2 ">만기보너스</h5>
                                                        <p className="text-muted mb-0 pr-2">0</p>
                                                    </div>
                                                </div>
                                            </div> */}


                                        </div>


                                    </div>
                                </div>


                                <div className="card" style={{display: 'none'}}>
                                    <div className="card-body" style={{position: 'relative'}}>
                                        <h4 className="card-title mb-4">차트</h4>
                                        <div className="clearfix">
                                        </div>
                                        <div id="stacked-column-chart" className="apex-charts" dir="ltr"
                                             style={{minHeight: '313px'}}>
                                            <div id="apexcharts75t23y8d"
                                                 className="apexcharts-canvas apexcharts75t23y8d"
                                                 style={{width: '0px', height: '298px'}}>
                                                <svg id="SvgjsSvg1014" width="0" height="298"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     version="1.1" xmlnsXlink='http://www.w3.org/1999/xlink'
                                                    // xmlns:svgjs="http://svgjs.dev"
                                                     className="apexcharts-svg"
                                                    // xmlns:data="ApexChartsNS"
                                                     transform="translate(0, 0)"
                                                     style={{background: 'transparent'}}>
                                                    <g id="SvgjsG1017" className="apexcharts-annotations"></g>
                                                    <g id="SvgjsG1016"
                                                       className="apexcharts-inner apexcharts-graphical">
                                                        <defs id="SvgjsDefs1015"></defs>
                                                    </g>
                                                </svg>
                                                <div className="apexcharts-legend"></div>
                                            </div>
                                        </div>
                                        <div className="resize-triggers">
                                            <div className="expand-trigger">
                                                <div style={{width: '632px', height: '384px'}}>
                                                </div>
                                            </div>
                                            <div className="contract-trigger">
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*<!-- apexcharts -->*/}
                                {/*<script src="css/dash/apexcharts.min.js"></script>*/}
                                {/*<script type="text/javascript">*/}
                                {/*    $(document).ready(function () {*/}
                                {/*    var clipboard = new Clipboard('.clipboard');//*/}
                                {/*})*/}
                                {/*    ;*/}
                                {/*    var options = {*/}
                                {/*    chart: {*/}
                                {/*    height: 298,*/}
                                {/*    type: "bar",*/}
                                {/*    stacked: !0,*/}
                                {/*    toolbar: {*/}
                                {/*    show: !1*/}
                                {/*},*/}
                                {/*    zoom: {*/}
                                {/*    enabled: !0*/}
                                {/*}*/}
                                {/*},*/}
                                {/*    plotOptions: {*/}
                                {/*    bar: {*/}
                                {/*    horizontal: !1,*/}
                                {/*    columnWidth: "15%",*/}
                                {/*    endingShape: "rounded"*/}
                                {/*}*/}
                                {/*},*/}
                                {/*    dataLabels: {*/}
                                {/*    enabled: !1*/}
                                {/*},*/}
                                {/*    series: [{*/}
                                {/*    name: "배당",*/}
                                {/*    data: [5]*/}
                                {/*}, {*/}
                                {/*    name: "추천",*/}
                                {/*    data: [10]*/}
                                {/*}, {*/}
                                {/*    name: "후원",*/}
                                {/*    data: [20]*/}
                                {/*}, {*/}
                                {/*    name: "레벨",*/}
                                {/*    data: [15]*/}
                                {/*}],*/}
                                {/*    xaxis: {*/}
                                {/*    categories: [50]*/}
                                {/*},*/}
                                {/*    colors: ["#556ee6", "#f1b44c","#e83e8c", "#34c38f"],*/}
                                {/*    legend: {*/}
                                {/*    position: "bottom"*/}
                                {/*},*/}
                                {/*    fill: {*/}
                                {/*    opacity: 1*/}
                                {/*}*/}
                                {/*};*/}
                                {/*    (chart = new ApexCharts(document.querySelector("#stacked-column-chart"), options*/}
                                {/*    )).*/}
                                {/*    render();*/}
                                {/*    var chart;*/}
                                {/*    options = {*/}
                                {/*    chart: {*/}
                                {/*    height: 184,*/}
                                {/*    type: "donut",*/}
                                {/*    offsetY: -0*/}
                                {/*},*/}
                                {/*    plotOptions: {*/}
                                {/*    donut: {*/}
                                {/*    startAngle: 135,*/}
                                {/*    endAngle: 135,*/}
                                {/*    dataLabels: {*/}
                                {/*    enabled: false,*/}
                                {/*    enabledOnSeries: undefined,*/}
                                {/*    offsetX: 0,*/}
                                {/*    offsetY: 0,*/}
                                {/*}*/}
                                {/*}*/}
                                {/*},*/}
                                {/*    colors:*/}
                                {/*    ["#2E9AFE","#ffffff"],*/}
                                {/*    fill: {*/}
                                {/*    type: "gradient",*/}
                                {/*    gradient: {*/}
                                {/*    shade: "dark",*/}
                                {/*    shadeIntensity: .15,*/}
                                {/*    inverseColors: !1,*/}
                                {/*    opacityFrom: 1,*/}
                                {/*    opacityTo: 1,*/}
                                {/*    stops: [0, 50, 65, 91]*/}
                                {/*}*/}
                                {/*},*/}
                                {/*    stroke: {*/}
                                {/*    dashArray: 3*/}
                                {/*},*/}
                                {/*    series: [0, 250],*/}
                                {/*    labels: ["Payment rate<br><br><font color='blue'>0 %</font>",""],*/}
                                {/*    dataLabels: {*/}
                                {/*    enabled: false*/}
                                {/*}*/}
                                {/*};*/}
                                {/*    (chart = new ApexCharts(document.querySelector("#donut_chart"), options*/}
                                {/*    )).*/}
                                {/*    render();*/}
                                {/*</script>*/}

                                {/*<script src="css/dash/Chart.min.js"></script>*/}
                                {/*<script>*/}
                                {/*    var ctx = document.getElementById("chtPassFailO");*/}
                                {/*    var cht = new Chart(ctx, {*/}
                                {/*    type: 'doughnut',*/}
                                {/*    data: {*/}
                                {/*    labels: ["0% 지급" , "0% 남음"],*/}
                                {/*    datasets: [{*/}
                                {/*    label: '지급률',*/}
                                {/*    data: [0 , 0],*/}
                                {/*    backgroundColor: [*/}
                                {/*    'rgba(63, 72, 204, 0.9)','rgb(241, 180, 76)'*/}
                                {/*    ],*/}
                                {/*    borderWidth: 1*/}
                                {/*}]*/}
                                {/*},*/}
                                {/*    options:{*/}
                                {/*    maintainAspectRatio: false,*/}
                                {/*}*/}
                                {/*});*/}


                                {/*    var ctx2 = document.getElementById("chartBonusDayLimit");*/}
                                {/*    var cht2 = new Chart(ctx2, {*/}
                                {/*    type: 'doughnut',*/}
                                {/*    data: {*/}
                                {/*    labels: ["0 " , "1,000,000 "],*/}
                                {/*    datasets: [{*/}
                                {/*    label: '지급률',*/}
                                {/*    data: [0 , 1000000],*/}
                                {/*    backgroundColor: [*/}
                                {/*    'rgba(63, 72, 204, 0.9)','rgb(241, 180, 76)'*/}
                                {/*    ],*/}
                                {/*    borderWidth: 1*/}
                                {/*}]*/}
                                {/*},*/}
                                {/*    options:{*/}
                                {/*    maintainAspectRatio: false,*/}
                                {/*}*/}
                                {/*});*/}


                                {/*</script>*/}

                                {/*<script>*/}
                                {/*    (function() {*/}
                                {/*    var Chart = function($el) {*/}
                                {/*    this.$el = $el;*/}
                                {/*    this.init();*/}
                                {/*};*/}
                                {/*    Chart.prototype = {*/}
                                {/*    init: function() {*/}
                                {/*    if (this.$el.dataset.top) {*/}
                                {/*    this.$topBand = this.$el.dataset.top;*/}
                                {/*} else {*/}
                                {/*    this.$topBand = 100;*/}
                                {/*}*/}
                                {/*    this.$topValue = (this.$el.dataset.target/this.$topBand)*1;*/}
                                {/*    this.$target = this.$el.querySelector('.target');*/}
                                {/*    this.$target.style.left = this.$topBand + '%';*/}
                                {/*    this.$el.style.backgroundColor = this.$el.dataset.color;*/}
                                {/*    this.$bars = this.$el.querySelectorAll('.bar');*/}
                                {/*    this.$barCount = this.$bars.length;*/}
                                {/*    for (var i = 0; i < this.$barCount; i++) {*/}
                                {/*    this.$percentage = 1/(this.$topValue/this.$bars[i].dataset.value);*/}
                                {/*    if (this.$percentage > 100) {*/}
                                {/*    this.$percentage = 100;*/}
                                {/*}*/}
                                {/*    this.$bars[i].style.width = this.$percentage + '%';*/}
                                {/*    this.$bars[i].style.backgroundColor = this.$bars[i].dataset.color;*/}
                                {/*}*/}
                                {/*}*/}
                                {/*};*/}
                                {/*    var $chart = document.querySelectorAll('.progress-chart');*/}
                                {/*    for (var i = 0; i < $chart.length; i++) {*/}
                                {/*    new Chart($chart[i]);*/}
                                {/*}*/}
                                {/*})();*/}
                                {/*</script>*/}


                                {/*<!-- 메인추출 -->*/}
                                <div className="main_box_area" style={{display: 'none'}}>

                                    <table className="last_TB" summary="쇼핑몰현황">
                                        <colgroup>
                                            <col width="50%"/>
                                            <col width="50%"/>
                                        </colgroup>
                                        <thead>
                                        <tr>
                                            <th>지급율</th>
                                            <th>일일극점</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{background: '#fff'}}>

                                                <canvas id="js_couter_chart1" height="0"
                                                        className="chartjs-render-monitor"
                                                        style={{display: 'block', width: '0px', height: '0px'}}
                                                        width="0"></canvas>

                                                {/*<script src="/myAdmin/js/chart.js/Chart.bundle.min.js"></script>*/}
                                                {/*<script>*/}

                                                {/*    // ---------- 파이 - 그래프 ( bonus_limit ) ----------*/}
                                                {/*    var config1 = {*/}
                                                {/*    type: 'pie',*/}
                                                {/*    data: {*/}
                                                {/*    datasets: [{*/}
                                                {/*    data: [0 , 0],*/}
                                                {/*    backgroundColor: ["", ""],*/}
                                                {/*}],*/}
                                                {/*    labels: ["0% 지급" , "0% 남음"]*/}
                                                {/*},*/}
                                                {/*    options: {*/}
                                                {/*    responsive: true,*/}
                                                {/*    legend: {position: 'top',},*/}
                                                {/*    animation: {animateRotate: false,animateScale: true}*/}
                                                {/*}*/}
                                                {/*};*/}

                                                {/*    var ctx1 = document.getElementById("js_couter_chart1").getContext("2d");*/}
                                                {/*    window.myPie = new Chart(ctx1, config1);*/}
                                                {/*    // ---------- 파이 - 그래프 ( bonus_limit ) ----------*/}


                                                {/*</script>*/}


                                            </td>

                                            <td style={{background: '#fff'}}>

                                                <canvas id="js_couter_chart2" height="0"
                                                        className="chartjs-render-monitor"
                                                        style={{display: 'block', width: '0px', height: '0px'}}
                                                        width="0"></canvas>


                                                {/*<script src="/myAdmin/js/chart.js/Chart.bundle.min.js"></script>*/}
                                                {/*<script>*/}

                                                {/*    // ---------- 파이 - 그래프 ( bonus_day_limit ) ----------*/}
                                                {/*    var config2 = {*/}
                                                {/*    type: 'pie',*/}
                                                {/*    data: {*/}
                                                {/*    datasets: [{*/}
                                                {/*    data: [0 , 1000000],*/}
                                                {/*    backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(255, 0, 0, 0.5)"],*/}
                                                {/*}],*/}
                                                {/*    labels: ["0 " , "1,000,000 "]*/}
                                                {/*},*/}
                                                {/*    options: {*/}
                                                {/*    responsive: true,*/}
                                                {/*    legend: {position: 'top',},*/}
                                                {/*    animation: {animateRotate: false,animateScale: true}*/}
                                                {/*}*/}
                                                {/*};*/}

                                                {/*    var ctx2 = document.getElementById("js_couter_chart2").getContext("2d");*/}
                                                {/*    window.myPie = new Chart(ctx2, config2);*/}
                                                {/*    // ---------- 파이 - 그래프 ( bonus_day_limit ) ----------*/}


                                                {/*</script>*/}


                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>

                                </div>
                                {/*<!-- // 메인추출 -->*/}


                                <div className="main_box_area" style={{display: 'none'}}>


                                    <table className="last_TB" summary="">
                                        <colgroup>
                                            <col width="100%"/>
                                        </colgroup>
                                        <thead>
                                        <tr>
                                            <th>지급율</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style={{background: '#fff'}}>


                                                <canvas id="js_bonus_chart1" height="0"
                                                        className="chartjs-render-monitor"
                                                        style={{display: 'block', width: '0px', height: '0px'}}
                                                        width="0"></canvas>


                                                {/*<script>*/}
                                                {/*    // ---------- 기본 line-bar 그래프 (접속기기별 방문수) ----------*/}
                                                {/*    var background = 'rgba(255,99,132,1)';*/}
                                                {/*    var chartData1 = {*/}
                                                {/*    labels: ["1일", "2일", "3일", "4일"],*/}
                                                {/*    datasets: [*/}
                                                {/*    // 총 방문수*/}
                                                {/*{*/}
                                                {/*    type: 'line',*/}
                                                {/*    label: '총방문수',*/}
                                                {/*    data: [0 , 0 , 0 , 0],*/}
                                                {/*    borderColor : background,*/}
                                                {/*    pointBorderColor : ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"],*/}
                                                {/*    pointBackgroundColor : ["rgba(54, 162, 235, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(54, 162, 235, 0.2)"],*/}
                                                {/*    pointBorderWidth : 1,*/}
                                                {/*    borderWidth: 1,*/}
                                                {/*    fill:false*/}
                                                {/*},*/}
                                                {/*    // 접속기기  - PC 수*/}
                                                {/*{*/}
                                                {/*    type: 'bar',*/}
                                                {/*    label: 'PC',*/}
                                                {/*    data: [0 , 0 , 0 , 0],*/}
                                                {/*    borderColor : ["rgba(0, 128, 255, 1)", "rgba(0, 128, 255, 1)", "rgba(0, 128, 255, 1)", "rgba(0, 128, 255, 1)"],*/}
                                                {/*    backgroundColor: ["rgba(0, 128, 255, 0.2)", "rgba(0, 128, 255, 0.2)", "rgba(0, 128, 255, 0.2)", "rgba(0, 128, 255, 0.2)"],*/}
                                                {/*    borderWidth: 1,*/}
                                                {/*    fill:false*/}
                                                {/*},*/}
                                                {/*    // 접속기기  - MOBILE 수*/}
                                                {/*{*/}
                                                {/*    type: 'bar',*/}
                                                {/*    label: 'MOBILE',*/}
                                                {/*    data: [0 , 0 , 0 , 0],*/}
                                                {/*    borderColor : ["rgba(0, 128, 0, 1)", "rgba(0, 128, 0, 1)", "rgba(0, 128, 0, 1)", "rgba(0, 128, 0, 1)"],*/}
                                                {/*    backgroundColor: ["rgba(0, 128, 0, 0.2)", "rgba(0, 128, 0, 0.2)", "rgba(0, 128, 0, 0.2)", "rgba(0, 128, 0, 0.2)"],*/}
                                                {/*    borderWidth: 1,*/}
                                                {/*    fill:false*/}
                                                {/*}]*/}
                                                {/*};*/}
                                                {/*    // ---------- 기본 line-bar 그래프 (접속기기별 방문수) ----------*/}


                                                {/*    window.onload = function() {*/}

                                                {/*    // ---------- 기본 line-bar 그래프 (접속기기별 방문수) ----------*/}
                                                {/*    var ctx1 = document.getElementById("js_bonus_chart1").getContext("2d");*/}
                                                {/*    var myChart1 = new Chart(ctx1, {type: 'bar', data: chartData1, options: {scales: {yAxes: [{ticks: {beginAtZero:false}}]}}});*/}

                                                {/*};*/}


                                                {/*</script>*/}


                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>

                                </div>
                                {/*<!-- // 메인추출 -->*/}


                            </div>
                            {/*<!-- // 리스트및폼 -->*/}


                            <div style={{width: '50%', float: 'right', clear: 'both', marginBottom: '50px'}}>
                                {/*<!--
                            <div className="cm_shop_title">
                                <strong></strong> 내 고유 추천 링크
                                <div className="explain"></div>
                            </div>
                        -->*/}
                                <div className="token_tid">

                                    <div className="mid">
                                        <div className="area">

                                            <div className="txt">
                                                <p id="en_url_owner"
                                                   style={{
                                                       width: '75%',
                                                       float: 'left',
                                                       border: '1px solid #999'
                                                   }}>http://thesen.moinus.kr/?owner=00000001</p>

                                                <div className="btn_wrap_tid" style={{float: 'right'}}>
                                                    {/*<!--<a href="mypage.token_url_manage.html" className="add"><img src="/pages_unique03/images/main/menu_icon_add_blue.png" border="0" alt="" />추가</a>-->*/}
                                                    <a href="#none" className="copy copy_btn_owner"
                                                       data-clipboard-action="copy"
                                                       data-clipboard-target="#en_url_owner" style={{}}>
                                                        <img src="/images/main/menu_icon_copy_blue.jpg"
                                                             style={{border: 0}} alt=""/>추천가입 복사</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/*<script type="text/javascript">*/}
                                {/*    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {*/}
                                {/*    $('.copy_btn_owner').text('복사');*/}
                                {/*    $('.copy_btn_owner').on('click', function(e){*/}
                                {/*    select_all_and_copy(document.getElementById("en_url_owner"));*/}
                                {/*    //select_all_and_copy($("#en_url").html());*/}
                                {/*});*/}
                                {/*}*/}
                                {/*    else {*/}
                                {/*    var clipboard = new Clipboard('.copy_btn_owner');*/}
                                {/*    clipboard.on('success', function(e) {*/}

                                {/*    console.info('Action:', e.action);*/}
                                {/*    console.info('Text:', e.text);*/}
                                {/*    console.info('Trigger:', e.trigger);*/}


                                {/*    alert('복사 되었습니다.');*/}
                                {/*    e.clearSelection();*/}
                                {/*});*/}
                                {/*    clipboard.on('error', function(e) {*/}
                                {/*    alert('선택된 텍스트를 복사하세요.');*/}
                                {/*});*/}
                                {/*}*/}

                                {/*</script>*/}

                            </div>


                            <div style={{width: '50%'}}>

                                {/*<!--

                            <div className="cm_shop_title">
                                <strong></strong> 내 고유 추천 링크
                                <div className="explain"></div>
                            </div>
                        -->*/}


                                {/*<script type="text/javascript">*/}


                                {/*    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {*/}
                                {/*    $('.copy_btn_seller').text('복사');*/}
                                {/*    $('.copy_btn_seller').on('click', function(e){*/}
                                {/*    select_all_and_copy(document.getElementById("en_url_seller"));*/}
                                {/*    //select_all_and_copy($("#en_url").html());*/}
                                {/*});*/}
                                {/*}*/}
                                {/*    else {*/}
                                {/*    var clipboard = new Clipboard('.copy_btn_seller');*/}
                                {/*    clipboard.on('success', function(e) {*/}

                                {/*    console.info('Action:', e.action);*/}
                                {/*    console.info('Text:', e.text);*/}
                                {/*    console.info('Trigger:', e.trigger);*/}


                                {/*    alert('복사 되었습니다.');*/}
                                {/*    e.clearSelection();*/}
                                {/*});*/}
                                {/*    clipboard.on('error', function(e) {*/}
                                {/*    alert('선택된 텍스트를 복사하세요.');*/}
                                {/*});*/}
                                {/*}*/}

                                {/*</script>*/}

                            </div>


                            <div style={{height: '30px'}}></div>

                        </div>
                    </div>
                    {/*<!-- //내용 -->*/}

                </div>
            </div>
        // </div>
    )
}

export default Dashboard