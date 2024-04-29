'use client'
import Slider from '@/components/layouts/Slider/general/';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from "recoil";
import { generalSelectedKey } from "@/services/recoil/selectedKey";
// import './styles.css';
const PageManager = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const setSelectedKey = useSetRecoilState(generalSelectedKey)
    useEffect(() => {
        setSelectedKey(5)
    }, []);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>

            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>

                    <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                                                      style={{display: sliderVisible ? "block" : "none"}}
                                                      onClick={sliderToggle}></span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                    {/* <!-- 페이지타이틀 --> */}
                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">
					일반페이지 관리					
					</span>
                        <span className="location">홈 &gt; 기본관리 &gt; 일반페이지 관리</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}


                    {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

                    {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
                    <div className="common_ajax_proc"></div>

                    {/* <!-- 검색영역 --> */}
                    <div className="form_box_area">
                        <form name="searchfrm" method="post" action='/myAdmin/_normalpage.list.php' autoComplete='off'>
                            <input type="hidden" name="mode" value="search"/>
                            <table className="form_TB" summary="검색항목">
                                <tbody>
                                <tr>
                                    <td className="article">노출여부</td>
                                    <td className="conts">
                                        <select name='pass_view'>
                                            <option value=''>-선택-</option>
                                            <option value='Y'>노출</option>
                                            <option value='N'>숨김</option>
                                        </select></td>
                                    <td className="article">페이지명</td>
                                    <td className="conts"><input type="text" name="pass_title" className="input_text"
                                                                 value=""/></td>
                                </tr>
                                </tbody>
                            </table>

                            {/* <!-- 버튼영역 --> */}
                            <div className="top_btn_area">
                                <div className="btn_line_up_center">
                                    <span className="shop_btn_pack btn_input_blue"><input type="submit"
                                                                                          className="input_medium"
                                                                                          title="검색" value="검색"/></span>
                                    <span className="shop_btn_pack"><span className="blank_3"></span></span>
                                    <span className="shop_btn_pack"><a href="_normalpage.form.php?_mode=add"
                                                                       className="medium red"
                                                                       title="페이지등록">페이지등록</a></span>

                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!-- // 검색영역 --> */}

                    {/* <!-- 리스트영역 --> */}
                    <div className="content_section_inner">

                        <table className="list_TB" summary="리스트기본">
                            <thead>
                            <tr>
                                <th scope="col" className="colorset">NO</th>
                                <th scope="col" className="colorset">순서</th>
                                <th scope="col" className="colorset">노출</th>
                                <th scope="col" className="colorset">페이지명</th>
                                <th scope="col" className="colorset">등록일</th>
                                <th scope="col" className="colorset">관리</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>5</td>
                                <td>10</td>
                                <td>노출</td>
                                <td>회사소개</td>
                                <td>2014-04-28</td>
                                <td>
                                    <div className='btn_line_up_center'>
                                        <span className='shop_btn_pack'><a type="button" className='small white'
                                                                           href='/?pn=service.page.view&pageid=company'
                                                                           target='_blank'>바로가기</a></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'><input type="button" value='수정'
                                                                               className='input_small white'
                                                                               onClick={() => {
                                                                               }}/></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'><input type="button" value='삭제'
                                                                               className='input_small gray'
                                                                               onClick={() => {
                                                                               }}/></span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>40</td>
                                <td>노출안함</td>
                                <td>모바일쇼핑</td>
                                <td>2014-04-28</td>
                                <td>
                                    <div className='btn_line_up_center'>
                                        <span className='shop_btn_pack'><a type="button" className='small white'
                                                                           href='/?pn=service.page.view&pageid=mobile'
                                                                           target='_blank'>바로가기</a></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='수정' className='input_small white' onClick={() => {
                            }}/></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='삭제' className='input_small gray' onClick={() => {
                            }}/></span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>50</td>
                                <td>노출안함</td>
                                <td>이메일무단수집거부</td>
                                <td>2023-04-05</td>
                                <td>
                                    <div className='btn_line_up_center'>
                                        <span className='shop_btn_pack'><a type="button" className='small white'
                                                                           href='/?pn=service.page.view&pageid=email_agree'
                                                                           target='_blank'>바로가기</a></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='수정' className='input_small white' onClick={() => {
                            }}/></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='삭제' className='input_small gray' onClick={() => {
                            }}/></span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>60</td>
                                <td>노출안함</td>
                                <td>청약절차철회</td>
                                <td>2023-04-05</td>
                                <td>
                                    <div className='btn_line_up_center'>
                                        <span className='shop_btn_pack'><a type="button" className='small white'
                                                                           href='/?pn=service.page.view&pageid=subscription'
                                                                           target='_blank'>바로가기</a></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='수정' className='input_small white' onClick={() => {
                            }}/></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='삭제' className='input_small gray' onClick={() => {
                            }}/></span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>70</td>
                                <td>노출안함</td>
                                <td>개인정보처리방침</td>
                                <td>2023-04-05</td>
                                <td>
                                    <div className='btn_line_up_center'>
                                        <span className='shop_btn_pack'><a type="button" className='small white'
                                                                           href='/?pn=service.page.view&pageid=personal_low_001'
                                                                           target='_blank'>바로가기</a></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='수정' className='input_small white' onClick={() => {
                            }}/></span>
                                        <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                        <span className='shop_btn_pack'>
                            <input type="button" value='삭제' className='input_small gray' onClick={() => {
                            }}/></span>
                                    </div>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        {/* <!-- 페이지네이트 --> */}
                        <div className="list_paginate">
                            <span className='lineup'><span className='nextprev'><span className='btn'><span
                                className='no'><span className='icon ic_first'></span></span><a href=' ?&listpg=1'
                                                                                                className='ok'
                                                                                                title='처음'><span
                                className='icon ic_first'></span></a></span><span className='btn'><span
                                className='no'><span className='icon ic_prev'></span></span><a href=' ?&listpg=0'
                                                                                               className='ok'
                                                                                               title='이전'><span
                                className='icon ic_prev'></span></a></span></span><span className='number'><a
                                href='#none' onClick={() => {
                                return false
                            }} className='hit'>1</a></span><span className='nextprev'><span className='btn'><span
                                className='no'><span className='icon ic_next'></span></span><a href=' ?&listpg=2'
                                                                                               className='ok'
                                                                                               title='다음'><span
                                className='icon ic_next'></span></a></span><span className='btn'><span
                                className='no'><span className='icon ic_last'></span></span><a href=' ?&listpg=1'
                                                                                               className='ok' title='끝'><span
                                className='icon ic_last'></span></a></span></span></span></div>
                        {/* <!-- // 페이지네이트 --> */}
                    </div>
                    <div style={{height: '30px'}}></div>
                </div>
            </div>
        </div>
    )

}

export default PageManager;