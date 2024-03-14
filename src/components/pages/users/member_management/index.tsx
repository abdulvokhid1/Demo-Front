'use client';
// import './styles.css'

import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/users'
import Head from 'next/head'
import { Layout } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import PAGE_ROUTES from "@/utils/constants/routes";

const UserManagement = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }
    return (
        // <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
        //      style={{background: "#f0f0f0"}}>
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>
            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>

                    <div className="open_close">
                    <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                          style={{display: sliderVisible ? "block" : "none"}}
                          onClick={sliderToggleHandler}
                    >

                    </span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}}
                              onClick={sliderToggleHandler}
                        ></span>
                    </div>
                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">회원 통합관리</span>
                        <span className="location">홈 &gt; 회원관리 &gt; 회원 통합관리</span>
                    </div>

                    <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display: 'none'}}>
                    </iframe>

                    <div className="common_ajax_proc"></div>

                    <form name='fsearch' method="post">
                        <input type='hidden' name='code' value=""/>


                        <input type="hidden" name="app_mode" value=""/>

                        <input type="hidden" name="pass_recomid" value=""/>
                        <input type="hidden" name="mb2_depscode" value=""/>
                        <input type="hidden" name="depslevel" value=""/>


                        <input type="hidden" name='mode' value="search"/>


                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="100px"/>
                                    <col width="200px"/>
                                    <col width="100px"/>
                                    <col width="200px"/>
                                    <col width="100px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">페이</td>
                                    <td className="conts">

                                        <input type="text" name='p_schsh' style={{width: '70px'}} value=""
                                               className="input_text"/>
                                        ~
                                        <input type="text" name="p_dchsh" style={{width: '69px'}}
                                               value="" className="input_text"/>

                                    </td>
                                    <td className="article">가입날짜</td>
                                    <td className="conts" colSpan={3}>
                                        <div className="btn_line_up_left">
                                            <input type="text" name="j_sdate"
                                                   style={{width: '75px', textAlign: 'center'}} value=""
                                                   className="input_text" id="time_start"/>
                                            ~
                                            <input type="text" name="j_ddate"
                                                   style={{width: '75px', textAlign: 'center'}} value=""
                                                   className="input_text"
                                                   id="time_end"/>
                                        </div>
                                        <div className="btn_line_up_left">
                                                <span className="shop_btn_pack"><button type="button"
                                                                                        className='input_small gray'
                                                                                        onClick={() => {
                                                                                        }}
                                                                                        style={{cursor: 'pointer'}}>어제</button>
                                                                </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>이번주</button>
                                                    </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>7일간</button>
                                                    </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>지난달</button>
                                                    </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>이번달</button>
                                                    </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>30일간</button>
                                                    </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>60일간</button>
                                                </span>
                                            <span className="shop_btn_pack"><button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>90일간</button></span>
                                        </div>
                                    </td>
                                    <td className="article">구좌보기선택</td>
                                    <td className="conts">
                                        <input type="radio" name='avatar_search_sel' id="avatar_search_sel" value=""
                                               checked={true}/>
                                        <label style={{height: '18px'}}>전체</label>
                                        <input type="radio" name='avatar_search_sel' id="avatar_search_sel"
                                               value="only"/>
                                        <label style={{height: '18px'}}>대표구좌</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">업체레벨</td>
                                    <td className="conts">
                                        <select name="sst" style={{width: '48%'}}>
                                            <option value=''>레벨</option>
                                            <option value='20'>일반회원</option>
                                            <option value='19'>정회원</option>
                                            <option value='18'>정회원</option>
                                            <option value='17'>정회원</option>
                                            <option value='16'>정회원</option>
                                            <option value='11'>팀장</option>
                                            <option value='10'>1스타</option>
                                            <option value='9'>2스타</option>
                                            <option value='8'>3스타</option>
                                            <option value='7'>4스타</option>
                                            <option value='6'>5스타</option>
                                        </select>
                                    </td>
                                    <td className="article">직접선택</td>
                                    <td className="conts">
                                        <select name="sfl" style={{width: '100%'}}>
                                            <option value=''>선택</option>
                                            <option value='email'>이메일</option>
                                            <option value='pass_htel'>휴대폰번호</option>
                                            <option value='pass_account'>계좌번호</option>
                                        </select>
                                    </td>
                                    <td className="article">검색</td>
                                    <td className="conts">
                                        <input type="text" name="stx" style={{width: '100%'}} value=""
                                               className="input_text"/>
                                    </td>
                                    <td className=""></td>
                                    <td className="conts"></td>
                                </tr>
                                <tr>
                                    <td className="article">아이디</td>
                                    <td className="conts">
                                        <input type="text" name="pass_id" style={{width: '90%'}} value=""
                                               className="input_text"/>
                                    </td>


                                    <td className="article">회원명</td>
                                    <td className="conts">
                                        <input type="text" name="pass_name" style={{width: '90%'}} value=""
                                               className="input_text"/>
                                    </td>


                                    <td className="article">센터선택</td>
                                    <td className="conts">
                                        <select name='pass_option_center' id="pass_option_center"
                                                className='add_option add_option_chk'>
                                            <option value="">선택</option>
                                            <option value="1">본사</option>
                                            <option value="2">봉천센타</option>
                                            <option value="3">강남센타</option>
                                        </select>
                                    </td>
                                    <td className=""></td>
                                    <td className="conts"></td>
                                </tr>
                                </tbody>
                            </table>

                            <div className="top_btn_area">
                                <div className="btn_line_up_center">
                                        <span className="shop_btn_pack btn_input_blue">
                                            <input type="submit" className="input_medium" title="검색" value="검색"/>
                                        </span>

                                    <span className="shop_btn_pack">
                                            <span className="blank_3"></span>
                                        </span>
                                    <span className="shop_btn_pack">
                                            <a href={PAGE_ROUTES.USERS.USER_REGISTRATION} className="medium red" title="회원등록">회원등록</a>
                                        </span>
                                </div>
                            </div>
                        </div>


                    </form>


                    <form action="_entershop.member_all.upload.php" method="post" encType="multipart/form-data">
                        <div className="form_box_area excel_upload_field" style={{display: 'none'}}>
                            <table className="form_TB">
                                <colgroup>
                                    <col width="120"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">일괄 업로드</td>
                                    <td className="conts">
                                        <input type="file" name="excel_file" className="input_text"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="conts" colSpan={2}>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'><b>업로드 파일</b>은 <b>최대 20M까지 업로드 가능</b> 합니다.</span>
                                        </div>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'><b>업로드 용량</b>에 따라 <b>다소시간이 걸릴 수 있습니다.</b></span>
                                        </div>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'>엑셀내용중 <b>엔터</b>는 <b>생략</b> 하시고 입력 바랍니다.</span>
                                        </div>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'>엑셀내용중 금액 또는 수수료의 <b>%</b>, <b>콤마(,)</b>, <b>원</b> 등을 <b>기호를 생략</b> 하세요.</span>
                                        </div>
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>일괄업로드는<b>파일업로드</b> - <b>업로드 수정/확인</b> - <b>등록처리</b> 단계를 거쳐 처리됩니다.</span>
                                        </div>
                                        <div className='guide_text'><span className='ic_orange'></span><span
                                            className='orange'><b>엑셀97~2003 버전 파일만 업로드가 가능합니다. 엑셀 2007이상 버전은(xlsx) 다른 이름저장을 통해 97~2003버전으로 저장하여 등록하세요.</b></span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div className="top_btn_area">
                                <div className="btn_line_up_center">
                                    <span className="shop_btn_pack btn_input_blue">
                                        <input type="submit" className="input_medium" title="일괄업로드" value="일괄업로드"/>
                                    </span>
                                    <span className="shop_btn_pack"><span className="blank_3"></span></span>
                                    <span className="shop_btn_pack">
                                        <a href="/upfiles/normal/member_all_sample1.xls"
                                           className="medium white"
                                           title="엑셀다운로드">엑셀다운로드
                                        </a>
                                    </span>


                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="form_box_area">


                        <table border={0} cellPadding={0} cellSpacing={0} width={'100%'}
                               style={{borderCollapse: 'collapse'}}>
                            <tr style={{height: '40px', alignItems: 'left'}}>
                                <td style={{padding: '5px'}}>


                                    {/*※ 페이 합계 : <b><font color="e16007">0&nbsp;BV</font></b>*/}
                                    {/*<font color='999999'>|</font>*/}
                                    {/*전체 : <b><font color="4C64AB">44</font></b> 건 조회*/}


                                </td>
                            </tr>


                        </table>


                    </div>


                    <form name="fboardlist" method="post">

                        <input type="hidden" name="_mode" value=""/>
                        <input type="hidden" name="_seachcnt" value='44'/>
                        <input type="hidden" name="_PVSC" value=""/>
                        <input type="hidden" name="_search_que" value="IHdoZXJlIG1lbWdyYWRlICE9ICcxJyAgIA=="/>

                        <input type="hidden" name="app_mode" value=""/>

                        <input type="hidden" name="pass_recomid" value=""/>
                        <input type="hidden" name="mb2_depscode" value=""/>
                        <input type="hidden" name="depslevel" value=""/>


                        <input type="hidden" name='q1' value="code="/>
                        <input type="hidden" name="page" value="1"/>
                        <div className="content_section_inner">
                            <div className="ctl_btn_area">
                            </div>
                            <table className="list_TB" summary="리스트기본">
                                <thead>
                                <tr>
                                    <th scope="col" className="colorset">
                                        <input type="checkbox" name="chkall" value="1"
                                               onClick={() => {
                                               }}/>
                                    </th>
                                    <th scope="col" className="colorset">NO</th>

                                    <th scope="col" className="colorset">
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=id&orderby=asc'><u>아이디</u>
                                        </a>
                                        <br/>
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=ceoName&orderby=asc'>
                                            <u>회원명</u>
                                        </a>
                                    </th>


                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=memgrade&orderby=asc'><u>레벨</u></a>
                                    </th>


                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>매출단위</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>확정매출</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc'><u>페이</u></a>
                                    </th>


                                    <th scope="col" className="colorset">소속센터</th>

                                    <th scope="col" className="colorset">직추천</th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc'><u>추천인</u></a>
                                    </th>


                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc'><u>후원인</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc'><u>가입일</u></a>
                                    </th>


                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc'><u>수당정지</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc'><u>회원등록</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc'><u>매출등록</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc'><u>재구매</u></a>
                                    </th>


                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.member_all.list.php?code=&page=&filed=buymethod&orderby=asc'><u>관리</u></a>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>


                                <input type="hidden" name="od_table[0]" value='55'/>


                                <tr>
                                    <td>
                                        <input type="checkbox" name="chk_id[]" value='2000044' className="class_id"/>
                                    </td>
                                    <td>44</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=55'
                                           onClick={() => {
                                           }}><b>2000044</b></a>

                                        <br/>라삼순
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV
                                        <span className="shop_btn_pack" style={{float: 'right'}}>
                                            <a href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000044&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003003&depslevel=20'
                                               onClick={() => {
                                               }} className="small white" title="매출">매출
                                            </a>
                                        </span>
                                    </td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명&nbsp;
                                        <span className="shop_btn_pack" style={{float: 'right'}}>
                                            <a href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000044'
                                               onClick={() => {
                                               }} className="small white" title="회원">회원
                                            </a>&nbsp;
                                        </span>
                                    </td>


                                    <td width="110px"><span>2000035</span>
                                        <a href="_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003003"
                                           onClick={() => {
                                           }} style={{float: 'right'}}>
                                            <img src="/images/icon/m_btn.gif"
                                                 style={{marginTop: '1px', marginLeft: '2px'}}/>
                                        </a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000044'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}>
                                            <img
                                                src="/images/icon/recomid_icon.png"/></a>

                                    </td>


                                    <td width="110px"><span>2000043</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002002001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}>
                                            <img
                                                src='/images/icon/m_btn.gif'
                                                style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000044'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000044'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000044&sponid=2000044'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000044&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>
                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_0').value='';</script>*/}
                                <input type="hidden" name="od_table[1]" value="54"/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000043'
                                        className="class_id"/>
                                    </td>
                                    <td>43</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=54'
                                           onClick={() => {
                                           }}><b>2000043</b></a>

                                        <br/>김옥진2
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000043&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002003001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span>
                                    </td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000043'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>

                                    <td width="110px"><span>2000042</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002003001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000043'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>
                                    <td width="110px"><span>2000042</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002002001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000043'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>
                                    <td>2023/06/20 12:00:00</td>
                                    <td><input type="checkbox" name="bonus_stop[]" value='2000043'
                                               onClick={() => {
                                               }}/>
                                    </td>
                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000043&sponid=2000043'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>
                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000043&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>
                                    <td>
                                    </td>
                                    <td>

                                        <div className="btn_line_up_left" style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack">
                                                <input type="button" value='삭제'
                                                       className='input_small gray'
                                                       onClick={() => {
                                                       }}/>
                                            </span>
                                        </div>
                                    </td>
                                </tr>

                                <input type="hidden" name="od_table[2]" value='53'/>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox" name="chk_id[]" value='2000042'
                                            className="class_id"/>
                                    </td>
                                    <td>42</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=53'
                                           onClick={() => {
                                           }}><b>2000042</b></a>

                                        <br/>전수경
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000042&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000042'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000038</span>
                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/>
                                        </a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000042'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/>
                                        </a>

                                    </td>


                                    <td width="110px"><span>2000041</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000042'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000042' onClick={() => {
                                    }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000042&sponid=2000042'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000042&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_2').value='';</script>*/}
                                <input type="hidden" name="od_table[3]" value='52'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000041'
                                        className="class_id"/>
                                    </td>
                                    <td>41</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=52'
                                           onClick={() => {
                                           }}><b>2000041</b></a>

                                        <br/>윤여자
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000041&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000041'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000040</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000041'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src="/images/icon/recomid_icon.png"/></a>

                                    </td>


                                    <td width="110px"><span>2000040</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000041'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000041'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000041&sponid=2000041'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000041&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>
                                                    <span className="shop_btn_pack">
                                                        <span className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_3').value='';</script>*/}
                                <input type="hidden" name="od_table[4]" value='51'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000040'
                                        className="class_id"/>
                                    </td>
                                    <td>40</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=51'
                                           onClick={() => {
                                           }}><b>2000040</b></a>

                                        <br/>윤귀분
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000040&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000040'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000038</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000040'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000038</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000040'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000040'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000040&sponid=2000040'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000040&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_4').value='';</script>*/}
                                <input type="hidden" name="od_table[5]" value='50'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000039'
                                        className="class_id"/>
                                    </td>
                                    <td>39</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=50'
                                           onClick={() => {
                                           }}><b>2000039</b></a>

                                        <br/>김옥진
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000039&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000039'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000038</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000039'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000038</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000039'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000039'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000039&sponid=2000039'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000039&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                <input type="hidden" name="od_table[6]" value='49'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000038'
                                        className="class_id"/>
                                    </td>
                                    <td>38</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=49'
                                           onClick={() => {
                                           }}><b>2000038</b></a>

                                        <br/>조윤순
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000038&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000038'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000035</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000038'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000035</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000038'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000038'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000038&sponid=2000038'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000038&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_6').value='';</script>*/}
                                <input type="hidden" name="od_table[7]" value='48'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000037'
                                        className="class_id"/>
                                    </td>
                                    <td>37</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=48'
                                           onClick={() => {
                                           }}><b>2000037</b></a>

                                        <br/>서문숙2
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000037&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000037'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000035</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000037'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000036</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000037'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000037'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000037&sponid=2000037'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000037&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_7').value='';</script>*/}
                                <input type="hidden" name="od_table[8]" value='47'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000036'
                                        className="class_id"/>
                                    </td>
                                    <td>36</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=47'
                                           onClick={() => {
                                           }}><b>2000036</b></a>

                                        <br/>김희숙3
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000036&app_mode=popup&mb2_depscode=001001001001001001001001001001001002004&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000036'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000014</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002004'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000036'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000035</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000036'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000036'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000036&sponid=2000036'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000036&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_8').value='';</script>*/}
                                <input type="hidden" name="od_table[9]" value='46'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000035'
                                        className="class_id"/>
                                    </td>
                                    <td>35</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=46'
                                           onClick={() => {
                                           }}><b>2000035</b></a>

                                        <br/>김은빈2
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000035&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000035'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000014</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000035'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000018</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000035'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000035'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000035&sponid=2000035'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000035&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_9').value='';</script>*/}
                                <input type="hidden" name="od_table[10]" value='45'/>
                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000034'
                                        className="class_id"/>
                                    </td>
                                    <td>34</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=45'
                                           onClick={() => {
                                           }}><b>2000034</b></a>

                                        <br/>김정자
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000034&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000034'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000022</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000034'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000033</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002002001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000034'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000034'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000034&sponid=2000034'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000034&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_10').value='';</script>*/}
                                <input type="hidden" name="od_table[11]" value='44'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000033'
                                        className="class_id"/>
                                    </td>
                                    <td>33</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=44'
                                           onClick={() => {
                                           }}><b>2000033</b></a>

                                        <br/>서문숙
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000033&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000033'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000021</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000033'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000032</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000033'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000033'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000033&sponid=2000033'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000033&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_11').value='';</script>*/}
                                <input type="hidden" name="od_table[12]" value='43'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000032'
                                        className="class_id"/>
                                    </td>
                                    <td>32</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=43'
                                           onClick={() => {
                                           }}><b>2000032</b></a>

                                        <br/>박지민
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000032&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000032'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000021</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000032'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000031</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000032'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000032'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000032&sponid=2000032'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000032&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_12').value='';</script>*/}
                                <input type="hidden" name="od_table[13]" value='42'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000031'
                                        className="class_id"/>
                                    </td>
                                    <td>31</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=42'
                                           onClick={() => {
                                           }}><b>2000031</b></a>

                                        <br/>김정혜
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000031&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000031'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000020</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000031'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000029</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000031'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000031'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000031&sponid=2000031'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000031&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_13').value='';</script>*/}
                                <input type="hidden" name="od_table[14]" value='41'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000030'
                                        className="class_id"/>
                                    </td>
                                    <td>30</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=41'
                                           onClick={() => {
                                           }}><b>2000030</b></a>

                                        <br/>김제남2
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000030&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000030'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000029</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000030'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000029</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000030'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000030'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000030&sponid=2000030'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000030&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_14').value='';</script>*/}
                                <input type="hidden" name="od_table[15]" value='40'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000029'
                                        className="class_id"/>
                                    </td>
                                    <td>29</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=40'
                                           onClick={() => {
                                           }}><b>2000029</b></a>

                                        <br/>김제남
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000029&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000029'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000020</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000029'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000020</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000029'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000029'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000029&sponid=2000029'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000029&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_15').value='';</script>*/}
                                <input type="hidden" name="od_table[16]" value='39'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000028'
                                        className="class_id"/>
                                    </td>
                                    <td>28</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=39'
                                           onClick={() => {
                                           }}><b>2000028</b></a>

                                        <br/>전경희
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000028&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000028'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000025</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000028'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000025</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001002001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000028'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000028'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000028&sponid=2000028'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000028&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_16').value='';</script>*/}
                                <input type="hidden" name="od_table[17]" value='38'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000027'
                                        className="class_id"/>
                                    </td>
                                    <td>27</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=38'
                                           onClick={() => {
                                           }}><b>2000027</b></a>

                                        <br/>이대순
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000027&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002003&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000027'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000024</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000027'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000025</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000027'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000027'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000027&sponid=2000027'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000027&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_17').value='';</script>*/}
                                <input type="hidden" name="od_table[18]" value='37'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000026'
                                        className="class_id"/>
                                    </td>
                                    <td>26</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=37'
                                           onClick={() => {
                                           }}><b>2000026</b></a>

                                        <br/>이재형
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000026&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000026'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000024</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000026'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000024</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000026'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000026'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000026&sponid=2000026'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000026&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_18').value='';</script>*/}
                                <input type="hidden" name="od_table[19]" value='36'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000025'
                                        className="class_id"/>
                                    </td>
                                    <td>25</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=36'
                                           onClick={() => {
                                           }}><b>2000025</b></a>

                                        <br/>김진수
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000025&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000025'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000024</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000025'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000024</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000025'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000025'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000025&sponid=2000025'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000025&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_19').value='';</script>*/}
                                <input type="hidden" name="od_table[20]" value='35'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000024'
                                        className="class_id"/>
                                    </td>
                                    <td>24</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=35'
                                           onClick={() => {
                                           }}><b>2000024</b></a>

                                        <br/>최난희
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000024&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000024'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000022</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000024'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000022</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000024'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000024'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000024&sponid=2000024'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000024&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_20').value='';</script>*/}
                                <input type="hidden" name="od_table[21]" value='34'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000023'
                                        className="class_id"/>
                                    </td>
                                    <td>23</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=34'
                                           onClick={() => {
                                           }}><b>2000023</b></a>

                                        <br/>김희숙2
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000023&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000023'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000022</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000023'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000022</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000023'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000023'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000023&sponid=2000023'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000023&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_21').value='';</script>*/}
                                <input type="hidden" name="od_table[22]" value='33'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000022'
                                        className="class_id"/>
                                    </td>
                                    <td>22</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=33'
                                           onClick={() => {
                                           }}><b>2000022</b></a>

                                        <br/>김병은
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000022&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000022'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000021</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000022'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000021</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000022'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000022'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000022&sponid=2000022'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000022&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_22').value='';</script>*/}
                                <input type="hidden" name="od_table[23]" value='32'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000021'
                                        className="class_id"/>
                                    </td>
                                    <td>21</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=32'
                                           onClick={() => {
                                           }}><b>2000021</b></a>

                                        <br/>김은빈
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000021&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000021'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000020</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000021'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000020</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000021'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000021'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000021&sponid=2000021'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000021&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_23').value='';</script>*/}
                                <input type="hidden" name="od_table[24]" value='31'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000020'
                                        className="class_id"/>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=31'
                                           onClick={() => {
                                           }}><b>2000020</b></a>

                                        <br/>김승완
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000020&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        3명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000020'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000014</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000020'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000014</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000020'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000020'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000020&sponid=2000020'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000020&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_24').value='';</script>*/}
                                <input type="hidden" name="od_table[25]" value='30'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000019'
                                        className="class_id"/>
                                    </td>
                                    <td>19</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=30'
                                           onClick={() => {
                                           }}><b>2000019</b></a>

                                        <br/>박양길2
                                    </td>


                                    <td>일반회원</td>
                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000019&app_mode=popup&mb2_depscode=001001001001001001001001001001001002001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000019'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000018</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000019'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000018</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000019'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000019'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000019&sponid=2000019'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000019&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_25').value='';</script>*/}
                                <input type="hidden" name="od_table[26]" value='29'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000018'
                                        className="class_id"/>
                                    </td>
                                    <td>18</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=29'
                                           onClick={() => {
                                           }}><b>2000018</b></a>

                                        <br/>박양길
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000018&app_mode=popup&mb2_depscode=001001001001001001001001001001001002001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000018'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000014</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000018'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000014</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000018'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000018'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000018&sponid=2000018'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000018&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_26').value='';</script>*/}
                                <input type="hidden" name="od_table[27]" value='27'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000017'
                                        className="class_id"/>
                                    </td>
                                    <td>17</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=27'
                                           onClick={() => {
                                           }}><b>2000017</b></a>

                                        <br/>최복순
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000017&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000017'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000016</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000017'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000016</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000017'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000017'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000017&sponid=2000017'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000017&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack"><input type="button"
                                                                                   value='삭제'
                                                                                   className='input_small gray'
                                                                                   onClick={() => {
                                                                                   }}/></span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_27').value='';</script>*/}
                                <input type="hidden" name="od_table[28]" value='26'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000016'
                                        className="class_id"/>
                                    </td>
                                    <td>16</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=26'
                                           onClick={() => {
                                           }}><b>2000016</b></a>

                                        <br/>김광분
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000016&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000016'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000015</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000016'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000015</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000016'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000016'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000016&sponid=2000016'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000016&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_28').value='';</script>*/}
                                <input type="hidden" name="od_table[29]" value='25'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000015'
                                        className="class_id"/>
                                    </td>
                                    <td>15</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=25'
                                           onClick={() => {
                                           }}><b>2000015</b></a>

                                        <br/>김정옥
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000015&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>강남센타</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000015'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000012</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000015'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000012</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000015'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000015'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000015&sponid=2000015'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000015&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_29').value='';</script>*/}
                                <input type="hidden" name="od_table[30]" value='24'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000014'
                                        className="class_id"/>
                                    </td>
                                    <td>14</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=24'
                                           onClick={() => {
                                           }}><b>2000014</b></a>

                                        <br/>김희숙
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000014&app_mode=popup&mb2_depscode=001001001001001001001001001001001002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        4명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000014'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000010</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000014'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000010</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000014'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000014'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000014&sponid=2000014'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000014&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_30').value='';</script>*/}
                                <input type="hidden" name="od_table[31]" value='23'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000013'
                                        className="class_id"/>
                                    </td>
                                    <td>13</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=23'
                                           onClick={() => {
                                           }}><b>2000013</b></a>

                                        <br/>유정희
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000013&app_mode=popup&mb2_depscode=001001001001001001001001001001002&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        0명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000013'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000009</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000013'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000009</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000013'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000013'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000013&sponid=2000013'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000013&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                                                    <span className="shop_btn_pack"><span
                                                                        className="blank_3"></span></span>
                                            <span className="shop_btn_pack">
                                                                    <input type="button"
                                                                           value='삭제'
                                                                           className='input_small gray'
                                                                           onClick={() => {
                                                                           }}/>
                                                                </span>

                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_31').value='';</script>*/}
                                <input type="hidden" name="od_table[32]" value='22'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000012'
                                        className="class_id"/>
                                    </td>
                                    <td>12</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=22'
                                           onClick={() => {
                                           }}><b>2000012</b>
                                        </a>

                                        <br/>안병해
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000012&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000012'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000011</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000012'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000011</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000012'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000012'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000012&sponid=2000012'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000012&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_32').value='';</script>*/}
                                <input type="hidden" name="od_table[33]" value='21'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000011'
                                        className="class_id"/>
                                    </td>
                                    <td>11</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=21'
                                           onClick={() => {
                                           }}><b>2000011</b></a>

                                        <br/>장기순
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000011&app_mode=popup&mb2_depscode=001001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000011'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000010</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000011'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000010</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000011'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]" value='2000011'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000011&sponid=2000011'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000011&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_33').value='';</script>*/}
                                <input type="hidden" name="od_table[34]" value='20'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000010'
                                        className="class_id"/>
                                    </td>
                                    <td>10</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=20'
                                           onClick={() => {
                                           }}><b>2000010</b></a>

                                        <br/>김상일
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000010&app_mode=popup&mb2_depscode=001001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>봉천센타</td>

                                    <td>
                                        2명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000010'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000009</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000010'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000009</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000010'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000010'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000010&sponid=2000010'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000010&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_34').value='';</script>*/}
                                <input type="hidden" name="od_table[35]" value='11'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000009'
                                        className="class_id"/>
                                    </td>
                                    <td>9</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=11'
                                           onClick={() => {
                                           }}><b>2000009</b></a>

                                        <br/>심광중
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000009&app_mode=popup&mb2_depscode=001001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        2명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000009'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000008</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000009'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000008</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000009'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000009'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000009&sponid=2000009'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000009&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_35').value='';</script>*/}
                                <input type="hidden" name="od_table[36]" value='10'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000008'
                                        className="class_id"/>
                                    </td>
                                    <td>8</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=10'
                                           onClick={() => {
                                           }}><b>2000008</b></a>

                                        <br/>조경순
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000008&app_mode=popup&mb2_depscode=001001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000008'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000007</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000008'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000007</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000008'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000008'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000008&sponid=2000008'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000008&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_36').value='';</script>*/}
                                <input type="hidden" name="od_table[37]" value='9'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000007'
                                        className="class_id"/>
                                    </td>
                                    <td>7</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=9'
                                           onClick={() => {
                                           }}><b>2000007</b></a>

                                        <br/>회사원6
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000007&app_mode=popup&mb2_depscode=001001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000007'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000006</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000007'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000006</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000007'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000007'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000007&sponid=2000007'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000007&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_37').value='';</script>*/}
                                <input type="hidden" name="od_table[38]" value='8'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000006'
                                        className="class_id"/>
                                    </td>
                                    <td>6</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=8'
                                           onClick={() => {
                                           }}><b>2000006</b></a>

                                        <br/>회사원5
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000006&app_mode=popup&mb2_depscode=001001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000006'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000005</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000006'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000005</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000006'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000006'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000006&sponid=2000006'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000006&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_38').value='';</script>*/}
                                <input type="hidden" name="od_table[39]" value='7'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000005'
                                        className="class_id"/>
                                    </td>
                                    <td>5</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=7'
                                           onClick={() => {
                                           }}><b>2000005</b></a>

                                        <br/>회사원4
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000005&app_mode=popup&mb2_depscode=001001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000005'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000004</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000005'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000004</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000005'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000005'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000005&sponid=2000005'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000005&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_39').value='';</script>*/}
                                <input type="hidden" name="od_table[40]" value='6'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000004'
                                        className="class_id"/>
                                    </td>
                                    <td>4</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=6'
                                           onClick={() => {
                                           }}><b>2000004</b></a>

                                        <br/>회사원3
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000004&app_mode=popup&mb2_depscode=001001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000004'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000003</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000004'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000003</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000004'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000004'
                                               onClick={() => {
                                               }}/>
                                    </td>


                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000004&sponid=2000004'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000004&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_40').value='';</script>*/}
                                <input type="hidden" name="od_table[41]" value='5'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000003'
                                        className="class_id"/>
                                    </td>
                                    <td>3</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=5'
                                           onClick={() => {
                                           }}><b>2000003</b></a>

                                        <br/>회사원2
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000003&app_mode=popup&mb2_depscode=001001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000003'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000002</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000002</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000003'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000003'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000003&sponid=2000003'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000003&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_41').value='';</script>*/}
                                <input type="hidden" name="od_table[42]" value='4'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000002'
                                        className="class_id"/>
                                    </td>
                                    <td>2</td>
                                    <td>
                                        <a href='_entershop.member.form.php?_mode=modify&app_mode=popup&serialnum=4'
                                           onClick={() => {
                                           }}><b>2000002</b></a>

                                        <br/>회사원1
                                    </td>


                                    <td>일반회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000002&app_mode=popup&mb2_depscode=001001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>본사</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000002'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>2000001</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>2000001</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000002'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000002&sponid=2000002'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000002&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_42').value='';</script>*/}
                                <input type="hidden" name="od_table[43]" value='3'/>


                                <tr>
                                    <td><input
                                        type="checkbox" name="chk_id[]" value='2000001'
                                        className="class_id"/>
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <a href='_entershop.company.form.php?_mode=modify&app_mode=popup&serialnum=3'
                                           onClick={() => {
                                           }}><b>2000001</b></a>

                                        <br/>운영자
                                    </td>


                                    <td>정회원</td>

                                    <td>
                                        0&nbsp;BV<span className="shop_btn_pack"
                                                       style={{float: 'right'}}><a
                                        href='_entershop.entry_revenues_list.php?pass_sdate=&pass_edate=&pass_pointID=2000001&app_mode=popup&mb2_depscode=001001&depslevel=20'
                                        onClick={() => {
                                        }}
                                        className="small white" title="매출">매출</a></span></td>

                                    <td>
                                        0&nbsp;BV
                                    </td>


                                    <td>0&nbsp;원</td>


                                    <td>무소속</td>

                                    <td>
                                        1명
                                        &nbsp;<span className="shop_btn_pack"
                                                    style={{float: 'right'}}><a
                                        href='_entershop.member_all.list.php?pass_sdate=&pass_edate=&pass_orderid=&app_mode=popup&pass_recomid=2000001'
                                        onClick={() => {
                                        }}
                                        className="small white" title="회원">회원</a>&nbsp;</span>
                                    </td>


                                    <td width="110px"><span>superadmin</span>


                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb2_depscode=001001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_chart.php?_mode=modify&app_mode=popup&tree_memid=2000001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/recomid_icon.png'/></a>

                                    </td>


                                    <td width="110px"><span>superadmin</span>

                                        <a href='_entershop.member_all.list.php?_mode=modify&app_mode=popup&mb3_depscode=001002'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/m_btn.gif'
                                            style={{marginTop: '1px', marginLeft: '2px'}}/></a>


                                        <a href='_cardsys.sub_tree_sponid.php?_mode=modify&app_mode=popup&tree_memid=2000001'
                                           onClick={() => {
                                           }}
                                           style={{float: 'right'}}><img
                                            src='/images/icon/sponid_icon.png'/></a>
                                    </td>


                                    <td>2023/06/20 12:00:00</td>


                                    <td><input type="checkbox" name="bonus_stop[]"
                                               value='2000001'
                                               onClick={() => {
                                               }}/>
                                    </td>

                                    <td style={{width: '70px'}}>
                                        <a href='_entershop.member_all.form.php?_mode=add&recomid=2000001&sponid=2000001'
                                           className="small red" title=""><img
                                            src="images/icon/plus_more_red.png"/></a>
                                    </td>


                                    <td>

                                        <a href='_entershop.entry_revenues_form.php?_loc=&_mode=add&app_id=2000001&signdate=1687186800&mc_idx=03%7C08%7C01'
                                           className="small red" title="매출"><img
                                            src="images/icon/plus_more_red.png"/></a>

                                    </td>


                                    <td>


                                    </td>


                                    <td>

                                        <div className="btn_line_up_left"
                                             style={{clear: 'both', paddingTop: '3px'}}>


                                        </div>

                                    </td>


                                </tr>


                                {/*<script>document.getElementById('dy_43').value='';</script>*/}


                                </tbody>
                            </table>


                        </div>


                        <div className="form_box_area" style={{border: '0px'}}>

                            <table width="100%" border={0} cellSpacing={0} cellPadding={0}>


                                <tr>
                                    <td align='left' style={{paddingTop: '3px'}}>
                                        <table border={0} cellSpacing={0} cellPadding={0}>
                                            <tr>

                                                <td style={{paddingTop: '2px'}}>&nbsp;
                                                    <div className="top_btn_area">
                                                    </div>

                                                </td>
                                            </tr>


                                        </table>
                                    </td>
                                </tr>
                            </table>


                        </div>

                        <div className="list_paginate">
                            <span className='lineup'>
                                <span className='nextprev'>
                                    <span
                                        className='btn'>
                                        <span className='no'>
                                            <span
                                                className='icon ic_first'>
                                            </span>
                                        </span>
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&app_mode=&pass_recomid=&mb2_depscode=&depslevel=&pass_option_center=&page=1'
                                           className='ok' title='처음'> <span className='icon ic_first'></span>
                                        </a>
                                    </span>
                                    <span className='btn'><span className='no'>
                                        <span className='icon ic_prev'></span>
                                    </span>
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&app_mode=&pass_recomid=&mb2_depscode=&depslevel=&pass_option_center=&page=0'
                                           className='ok' title='이전'>
                                            <span className='icon ic_prev'></span>
                                        </a>
                                    </span>
                                </span>
                                <span className="number">
                                    <a href='#none' onClick={() => {
                                    }} className='hit'>1</a>
                                </span>
                                <span className='nextprev'>
                                    <span className='btn'>
                                        <span className='no'>
                                            <span className='icon ic_next'></span>
                                        </span>
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&app_mode=&pass_recomid=&mb2_depscode=&depslevel=&pass_option_center=&page=2'
                                           className='ok' title='다음'>
                                            <span className='icon ic_next'></span>
                                        </a>
                                    </span>
                                    <span className='btn'><span className='no'>
                                        <span className='icon ic_last'></span>
                                    </span>
                                        <a href='/myAdmin/_entershop.member_all.list.php?code=&app_mode=&pass_recomid=&mb2_depscode=&depslevel=&pass_option_center=&page=1'
                                           className='ok' title='끝'>
                                            <span className='icon ic_last'></span>
                                        </a>
                                    </span>
                                </span>
                            </span>
                        </div>


                    </form>


                    <div style={{height: '30px'}}></div>

                </div>
            </div>
            {/*<!-- //내용 -->*/
            }

        </div>
    )
}

export default UserManagement