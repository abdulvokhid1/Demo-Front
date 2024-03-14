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
                        <span className="title">
											회원 통합관리					
					</span>
                        <span className="location">홈 &gt; 회원관리 &gt; 회원 통합관리</span>
                    </div>


                    <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0}
                            style={{display: 'none'}}></iframe>

                    <div className="common_ajax_proc"></div>


                    <form name="frm" method="post" action="_entershop.member_all.pro.php" encType='multipart/form-data'>
                        <input type="hidden" name="_mode" value='add'/>
                        <input type="hidden" name="serialnum" value=''/>
                        <input type="hidden" name="_PVSC" value=""/>

                        <input type="hidden" name="csrf_token" value="af61f42c0ece9ea42ed3f6bbec3b9d28"/>


                        <input type="hidden" name="app_mode" value=""/>

                        <div className="sub_title"><span className="icon"></span><span
                            className="title">회원정보 상세내역</span></div>

                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="200px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>

                                <tr>
                                    <td className="article">등록일<span className='ic_ess'
                                                                     title='필수'></span></td>
                                    <td className="conts"><input type="text" name="signdate"
                                                                 className="input_text"
                                                                 value="2024-03-14"
                                                                 onChange={() => {
                                                                 }}/></td>
                                </tr>

                                <tr>
                                    <td className="article">회원등급<span className="ic_ess"
                                                                      title="필수"></span></td>

                                    <td className="conts">


                                        <select name='m2_code1' onChange={() => {
                                        }}
                                                className='select'>
                                            <option value=''>-레벨선택-</option>
                                            <option value='20' selected>회원</option>
                                        </select>


                                        <span id="avatar_id" style={{display: 'none'}}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            [연결 아이디] : <input type="text" name="avatar_id" value=''
                                                              size={15} className="input_text"
                                                              style={{color: '#808080', backgroundColor: '#f0f0f0'}}
                                                              onFocus={() => {
                                                              }} tabIndex={-1} readOnly/>
	[성명] : <input type="text" name="avatar_name" value='' size={15} className="input_text"
                  style={{color: '#808080', backgroundColor: '#f0f0f0'}} onFocus={() => {
                                        }} tabIndex={-1} readOnly/>
                                        </span>

                                        <span className='shop_btn_pack' style={{float: 'none'}}>
        &nbsp;<a onClick={() => {
                                        }}
                 className='small gray'>아이디검색</a> &nbsp;<a
                                            onClick={() => {
                                            }} className='small darkgray'>선택취소</a>
	</span>


                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">아이디<span className='ic_ess'
                                                                     title='필수'></span></td>
                                    <td className="conts">

                                        <span style={{color: 'red'}}>자동생성</span>


                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">생성옵션</td>
                                    <td className="conts">


                                        <label><input type="checkbox" name="guja_entry_yn"
                                                      id="guja_entry_yn" value="Y" checked/> 매출 자동
                                            등록하기</label>


                                        <select name='mb_entry_option' id="mb_entry_option"
                                                onChange={() => {
                                                }}>
                                            <option value="33000^33000">33,000</option>
                                            <option value="330000^330000">330,000</option>
                                            <option value="3300000^3300000">3,300,000</option>
                                        </select>

                                        <input type="hidden" name="gross_sale_price"
                                               id="gross_sale_price" value="33000"/>


                                        <label><input type="checkbox" name="prod_chk_free"
                                                      value="Y"/> 인정 매출시 체크</label>


                                        <br/>

                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">휴대폰번호<span className='ic_ess'
                                                                       title='필수'></span></td>
                                    <td className="conts">
                                        <input type="text" name='htel' value='' size={20} maxLength={11}
                                               className='input_text' onBlur={() => {
                                        }}/>
                                        <span id='searchphoneidHTML'></span>
                                        <div className='guide_text'>
                                            <span className='ic_orange'></span>
                                            <span className='orange'>하이푼(-)을 빼고 입력하시기 바랍니다.</span>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">비밀번호<span className='ic_ess'
                                                                      title='필수'></span></td>
                                    <td className="conts">


                                        <input type="text" name="passwd" value='' size={20}
                                               className="input_text"/>


                                        <div className='guide_text'><span
                                            className='ic_blue'></span><span
                                            className='blue'>비밀번호 변경할 경우에만 입력하세요.</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">이름(회원명)</td>
                                    <td className="conts"><input type="text" name="name" value=''
                                                                 size={30} className="input_text"
                                                                 onKeyUp={() => {
                                                                 }}
                                                                 onBlur={() => {
                                                                 }}/>
                                        &nbsp;<span id='searchnameHTML'></span>
                                        <span id="msg_name" className="msg_name"></span>

                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">E-mail</td>
                                    <td className="conts"><input type="text" name="email" value=''
                                                                 size={30} className="input_text"/></td>
                                </tr>

                                <tr>
                                    <td className="article">전화번호</td>
                                    <td className="conts"><input type="text" name="tel" value=''
                                                                 size={20} className="input_text"/>
                                        <div className='guide_text'><span
                                            className='ic_blue'></span><span className='blue'>하이푼(-)을 포함하시기 바랍니다.</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">우편번호</td>
                                    <td className="conts">
                                        <input type="text" name="zip1" id="_post1" value=''
                                               size={5} className="input_text"/>-
                                        <input type="text" name="zip2" id="_post2" value=''
                                               size={5} className="input_text"/>

                                        <span className="shop_btn_pack" style={{float: 'none'}}>&nbsp;<a
                                            href="#none" onClick={() => {
                                        }}
                                            className='small gray'>우편번호검색</a></span>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">주소</td>
                                    <td className="conts">
                                        기본주소 : <input type="text" name="address" id="_addr1" value=''
                                                      size={50} className="input_text"/><br/>
                                        상세주소 : <input type="text" name="address1" id="_addr2" value=''
                                                      size={50} className="input_text"/><br/>
                                        도로명주소 : <input type="text" name="address_doro" id="_addr_doro"
                                                       value='' size={70} className="input_text"/>
                                        <br/>새 우편번호 : <input type="text" name="zonecode" id="_zonecode"
                                                             value="" size={10} className="input_text"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">소속센터</td>
                                    <td className="conts">
                                        <select name='_option_center' id="_option_center"
                                                className='add_option add_option_chk'
                                                style={{width: '200px'}}>
                                            <option value="">선택</option>
                                        </select>

                                        <div className='guide_text'><span
                                            className='ic_blue'></span><span className='blue'>선택이 없을시 상위 추천인 소속 센터로 자동 선택이됩니다.</span>
                                        </div>

                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">추천인 아이디</td>
                                    <td className="conts">
                                        <input type="text" name="recomid" value='superadmin' size={30}
                                               className="input_text"
                                               style={{color: '#808080', backgroundColor: '#f0f0f0'}}
                                               onFocus={() => {
                                               }} tabIndex={-1} readOnly/>

                                        <span className='shop_btn_pack' style={{float: 'none'}}>&nbsp;
                                            <a onClick={() => {
                                            }} className='small blue'>추천인 검색
                                            </a>
                                        </span>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">후원인 아이디</td>
                                    <td className="conts">
                                        <input type="text" name="sponid" value='superadmin' size={30}
                                               className="input_text"
                                               style={{color: '#808080', backgroundColor: '#f0f0f0'}}
                                               onFocus={() => {
                                               }} tabIndex={-1} readOnly/>

                                        <span className='shop_btn_pack' style={{float: 'none'}}>&nbsp;<a
                                            onClick={() => {
                                            }}
                                            className='small blue'>후원인 검색</a>
                                        </span>

                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="sub_title"><span className="icon"></span><span
                            className="title">환급(정산) 계좌정보</span></div>
                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="200px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">은행명</td>
                                    <td className="conts"><input type="text" name="return_bank"
                                                                 value='' size={20}
                                                                 className="input_text"/></td>
                                </tr>
                                <tr>
                                    <td className="article">계좌번호</td>
                                    <td className="conts"><input type="text" name="return_account"
                                                                 value='' size={40}
                                                                 className="input_text"/></td>
                                </tr>
                                <tr>
                                    <td className="article">예금주</td>
                                    <td className="conts"><input type="text" name="return_name"
                                                                 value='' size={20}
                                                                 className="input_text"/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className='bottom_btn_area'>
                            <div className='btn_line_up_center'>
                                                    <span className='shop_btn_pack btn_input_red'><input type='submit'
                                                                                                         name=''
                                                                                                         className='input_large'
                                                                                                         value='확인'/></span>
                                <span className='shop_btn_pack'><span
                                    className='blank_3'></span></span>


                                <span className='shop_btn_pack btn_input_gray'><input type='button'
                                                                                      name=''
                                                                                      className='input_large'
                                                                                      value='목록'
                                                                                      onClick={() => {
                                                                                      }}/>
  </span>


                            </div>
                        </div>


                    </form>


                    <div style={{height: '30px'}}></div>

                </div>
            </div>

        </div>
    )
}

export default UserManagement