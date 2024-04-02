'use client';
// import './styles.css'

import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/users'
import Head from 'next/head'
import { Layout, message } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import AUTH_API from "@/services/api/auth";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter } from "next/navigation";
import CENTER_API from "@/services/api/centers";
import { CenterTypeProps } from "@/services/api/centers/type";
import { LevelTypeProps } from "@/services/api/levels/type";
import LEVEL_API from "@/services/api/levels";
import moment from "moment-timezone";

const UserManagement = () => {
    const router = useRouter()
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    const [messageApi, contextHolder] = message.useMessage()
    const [emailState, setEmailState] = useState('');
    const [nameState, setNameState] = useState('');
    const [formData, setFormData] = useState()
    const [centers, setCenters] = useState<CenterTypeProps[]>([])
    const [levels, setLevels] = useState<LevelTypeProps[]>([])

    const {mutate: mutateLevel} = useMutation(
        {mutationFn: LEVEL_API.getList,
            onSuccess: async (values:any) =>{
                setLevels(values);
                console.log(JSON.stringify(levels))
            },
            onError: (error: any) => {
                const errorType = error.response.data.errors[0]
                messageApi.open({
                    type: 'error',
                    content: 't(`errorMessages.${errorType}`)',
                })
            }
        },
    )
    const {mutate: mutateCenter} = useMutation({
        mutationFn: CENTER_API.getList,
        onSuccess: async (values: any)=> {
            setCenters(values);
        },
        onError: async (error: any) => {
            const errorType = error.response.data.errors[0]
            messageApi.open({
                type: 'error',
                content: 't(`errorMessages.${errorType}`)',
            })
        }
    })
    const {isPending, mutate:mutateRegister, isSuccess, isError} = useMutation(
        {
            mutationFn: AUTH_API.register,
            onSuccess: async (values: any) => {
                console.log('success')
                router.replace(PAGE_ROUTES.USERS.USER_MANAGEMENT)
            },

            onError: (error: any) => {
                const errorType = error.response.data.errors[0]
                messageApi.open({
                    type: 'error',
                    content: 't(`errorMessages.${errorType}`)',
                })
            },
        }
    )
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    useEffect(() => {
        mutateCenter();
    }, [centers, mutateCenter]);
    useEffect(() => {
        mutateLevel();
    }, [levels, mutateLevel]);
    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }

    // const handleInputChange = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    const onSubmit = async (formData: FormData) => {


        const email = formData.get('email');
        const password = formData.get('passwd');
        const role = formData.get('m2_code1');
        const income_option = formData.get('guja_entry_yn')
        const level = formData.get('m2_code1')
        const income_option_select = formData.get('mb_entry_option');
        const mobilephone_number = formData.get('htel');
        const name = formData.get('name');
        const phone_number = formData.get('tel');
        const zip1 = formData.get('zip1');
        const zip2 = formData.get('zip2');
        const address = formData.get('address');
        const address1 = formData.get('address1');
        const address_doro = formData.get('address_doro')
        const zonecode = formData.get('zonecode');
        const option_center = formData.get('_option_center')
        const recomid = formData.get('recomid')
        const sponid = formData.get('sponid')
        const return_bank = formData.get('return_bank')
        const return_account = formData.get('return_account')
        const return_name = formData.get('return_name')


        const params = {
            name: name? name.toString() : '',
            email: email ? email.toString() : '',
            password: password ? password.toString() : '',
            role: role? role.toString(): 'user',
            income_option:income_option === 'Y'? 1 : 0,
            level:level,
            income_option_select: Number(income_option_select) || 0,
            mobilephone_number: mobilephone_number?.toString() || '',
            phone_number: phone_number?.toString() || '',
            zip1: zip1?.toString() || '',
            zip2: zip2?.toString() || '',
            address: address?.toString() || '',
            address1: address?.toString() || '',
            addressdoro: address_doro?.toString() || '',
            zonecode: zonecode?.toString() || '',
            centerId: Number(option_center) || 0,
            recomid: recomid?.toString() || '',
            sponid: sponid?.toString() || '',
            return_bank: return_bank?.toString() || '',
            return_account: return_account?.toString() || '',
            return_name: return_name?.toString() || ''
        }
        console.log(params)
        mutateRegister(params);

        // Handle response if necessary
        // const data = await response.json()
        // ...
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


                    {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0}*/}
                    {/*        style={{display: 'none'}}></iframe>*/}

                    <div className="common_ajax_proc"></div>


                    <form name="frm" method="post" action={onSubmit} encType='multipart/form-data'>
                    {/*<form onSubmit={onSubmit}>*/}
                        <input type="hidden" name="_mode" value='add'/>
                        <input type="hidden" name="serialnum" />
                        <input type="hidden" name="_PVSC" />

                        <input type="hidden" name="csrf_token" value="af61f42c0ece9ea42ed3f6bbec3b9d28"/>


                        <input type="hidden" name="app_mode" />

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
                                                                 value={moment(new Date()).format('YYYY-MM-DD')}
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
                                            <option key={0}>-레벨선택-</option>
                                            {/*<option value={0} selected>회원</option>*/}
                                            {levels.length && levels.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}>{item.title}</option>
                                                )
                                            })}
                                        </select>


                                        <span id="avatar_id" style={{display: 'none'}}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            [연결 아이디] : <input type="text" name="avatar_id" 
                                                              size={15} className="input_text"
                                                              style={{color: '#808080', backgroundColor: '#f0f0f0'}}
                                                              onFocus={() => {
                                                              }} tabIndex={-1} readOnly/>
	[성명] : <input type="text" name="avatar_name"  size={15} className="input_text"
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
                                            <option value={0}>33,000</option>
                                            <option value={1}>330,000</option>
                                            <option value={2}>3,300,000</option>
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
                                        <input type="text" name='htel'  size={20} maxLength={11}
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


                                        <input type="password" name="passwd"  size={20}
                                               className="input_text"/>


                                        <div className='guide_text'><span
                                            className='ic_blue'></span><span
                                            className='blue'>비밀번호 변경할 경우에만 입력하세요.</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">이름(회원명)</td>
                                    <td className="conts">
                                        <input
                                            type="text"
                                            name="name"
                                             size={30} className="input_text"
                                        />
                                        &nbsp;<span id='searchnameHTML'></span>
                                        <span id="msg_name" className="msg_name"></span>

                                    </td>
                                </tr>


                                <tr>
                                    <td className="article">E-mail</td>
                                    <td className="conts">
                                        <input
                                            className="input_text"
                                            type="text"
                                            name="email"
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">전화번호</td>
                                    <td className="conts">
                                        <input type="text" name="tel"  size={20} className="input_text"/>
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>하이푼(-)을 포함하시기 바랍니다.</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">우편번호</td>
                                    <td className="conts">
                                        <input type="text" name="zip1" id="_post1" 
                                               size={5} className="input_text"/>-
                                        <input type="text" name="zip2" id="_post2" 
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
                                        기본주소 : <input type="text" name="address" id="_addr1" 
                                                      size={50} className="input_text"/><br/>
                                        상세주소 : <input type="text" name="address1" id="_addr2" 
                                                      size={50} className="input_text"/><br/>
                                        도로명주소 : <input type="text" name="address_doro" id="_addr_doro"
                                                        size={70} className="input_text"/>
                                        <br/>새 우편번호 : <input type="text" name="zonecode" id="_zonecode"
                                                              size={10} className="input_text"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">소속센터</td>
                                    <td className="conts">
                                        <select name='_option_center' id="_option_center"
                                                className='add_option add_option_chk'
                                                style={{width: '200px'}}>
                                            <option key={0} value={0}>선택</option>
                                            {centers.length && (centers.map((item, index) => {
                                                return (<option key={item.id} value={item.id}>{item.name}</option>)
                                                })
                                            )}

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
                                                                  size={20}
                                                                 className="input_text"/></td>
                                </tr>
                                <tr>
                                    <td className="article">계좌번호</td>
                                    <td className="conts"><input type="text" name="return_account"
                                                                  size={40}
                                                                 className="input_text"/></td>
                                </tr>
                                <tr>
                                    <td className="article">예금주</td>
                                    <td className="conts"><input type="text" name="return_name"
                                                                  size={20}
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