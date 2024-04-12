'use client'
import './styles.css'
import { Center, UserInfo } from "@/utils/types/type";
import Slider from '@/components/layouts/Slider/Sales';
import CENTER_API from '@/services/api/center';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import centers from "@/services/api/centers";
import { getFullTime } from "@/utils/helper";
import USER_API from "@/services/api/users";
import noop  from "noop-ts";
import { useRouter } from "next/navigation";

const CenterRegistration = () => {
    const router = useRouter();
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    const [messageApi, contextHolder] = message.useMessage()
    const [centerListState, setCenterListState] = useState<Center[]>([])
    // const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalCenters, setTotalCenters] = useState<number>(0)
    // const [perPage, setPerPage] = useState<number>(0)
    const [userListState, setUserListState] = useState<UserInfo[]>([])
    const [subUser1State, setSubUser1State] = useState<string>('')
    const [subUser2State, setSubUser2State] = useState<string>('')
    const [totalUsers, setTotalUsers] = useState<number>(0)


    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: USER_API.getList,
            onSuccess: async (values: any) => {
                setUserListState(values.users);
                setTotalUsers(values.total);
                console.log(JSON.stringify(userListState))
            },

            onError: (error: any) => {
                // const errorType = error.response.data.errors[0]
                // messageApi.open({
                //     type: 'error',
                //     content: 't(`errorMessages.${errorType}`)',
                // })
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )

    const {mutate: mutateCenterRegistration} = useMutation(
        {
            mutationFn: CENTER_API.createCenter,
            onSuccess: async (values: any) => {
                console.log(JSON.stringify(values))
                router.push(PAGE_ROUTES.SALES_MANAGEMENT.CENTER_MANAGEMENT)
            },

            onError: (error: any) => {
                // const errorType = error.response.data.errors[0]
                // messageApi.open({
                //     type: 'error',
                //     content: 't(`errorMessages.${errorType}`)',
                // })
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )

    useEffect(() => {
        mutate({page: 0, limit: 0});
    }, []);

    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }


    useEffect(() => {
        mutate({page: 0, limit: 0});
    }, []);

    return (
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
                        <span className="title"> 대리점등록 관리 </span>
                        <span className="location">홈 &gt; 가맹점관리 &gt; 대리점등록 관리</span>
                    </div>

                    <form name="frm" method="post" action="_entershop.center.pro.php" encType="multipart/form-data">
                        <input type="hidden" name="_mode" value="add"/>
                        <input type="hidden" name="index_no" value=""/>
                        <input type="hidden" name="_PVSC" value=""/>

                        <input type="hidden" name="_uid" value=""/>
                        <input type="hidden" name="app_mode" value=""/>

                        <input type="hidden" name="listpg" value=""/>

                        <input type="hidden" name="_company" className="border" size={5} value=""/>

                        <div className="sub_title">
                            <span className="icon"></span>
                            <span className="title">입점업체정보</span>
                        </div>
                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="200px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">등록구분</td>
                                    <td className="conts">

                                        <span className="multi">
                                            <label htmlFor="usertype_modeY">
                                            <input type="radio" id="usertype_modeY" name="usertype_mode" value="Y"
                                                   className="usertype_mode" checked={true}/>
                                                대리점등록
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                    </td>
                                </tr>
                                <tr id="new_member_use5">
                                    <td className="article">대리점명</td>
                                    <td className="conts">
                                        <input type="text" name="in_compay" size={30} className="input_text"/>
                                    </td>
                                </tr>
                                <tr id="new_member_use1">
                                    <td className="article">연동아이디
                                        <span className="ic_ess" title="필수"></span>
                                    </td>
                                    <td className="conts">
                                        <span id="id_view"></span>
                                        <span id="id_form">
											<select name="id" onChange={(e) => {
                                                const recomUser = userListState.filter((item: any) => item.id == e.target.value)[0];
                                                recomUser.subs?.length? setSubUser1State(recomUser.subs[0].name || '') : setSubUser1State('');
                                                recomUser.subs?.length &&  recomUser.subs.length > 1 ? setSubUser2State(recomUser.subs[1].name || '') : setSubUser2State('')
                                            }}>
                                                <option value="">-선택-</option>
                                                {userListState?.length > 0 && (
                                                    userListState.map((item: any, index) => {
                                                        return (
                                                            <option key={index} value={item.id}>{item.name} - {item.member_id || ''}</option>
                                                        )
                                                    })
                                                )}
                                                {/*<option value="superadmin">[고유코드]00000001 , [업체명]더센2 , [휴대폰번호] 01000001111 , [아이디] superadmin</option>*/}
                                                {/*<option value="2000001">[휴대폰번호]  , [아이디] 2000001</option>*/}
                                                {/*<option value="2000002">[휴대폰번호]  , [아이디] 2000002</option>*/}
                                                {/*<option value="2000003">[휴대폰번호]  , [아이디] 2000003</option>*/}
                                                {/*<option value="2000004">[휴대폰번호]  , [아이디] 2000004</option>*/}
                                                {/*<option value="2000012">[휴대폰번호] 01043918300 , [아이디] 2000012</option>*/}
                                                {/*<option value="2000013">[휴대폰번호]  , [아이디] 2000013</option>*/}
                                                {/*<option value="2000014">[휴대폰번호]  , [아이디] 2000014</option>*/}
                                                {/*<option value="2000045">[휴대폰번호]  , [아이디] 2000045</option>*/}
                                            </select>
                                            {/*<span className="shop_btn_pack" style={{float: 'none'}}>&nbsp;*/}
                                            {/*    <a onClick={() => {*/}
                                            {/*    }} className="small blue">검색</a>*/}
                                            {/*</span>&nbsp;*/}
                                        </span>
                                    </td>
                                </tr>
                                <tr id="new_member_use5">
                                    <td className="article">하위추천회원</td>
                                    <td className="conts">
                                        <input type="text" name="in_compay" size={30} className="input_text"
                                               value={subUser1State}
                                        />
                                        &nbsp;&nbsp;
                                        <input type="text" name="in_compay" size={30} className="input_text"
                                               value={subUser2State}
                                        />
                                    </td>
                                </tr>
                                {/*<tr id="new_member_use5">*/}
                                {/*    <td className="article">대표자</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="in_name" value="" size={30} className="input_text"/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                </tbody>
                            </table>

                        </div>

                        <div className="bottom_btn_area">
                            <div className="btn_line_up_center">
                                <span className="shop_btn_pack btn_input_red">
                                    <input type="button" id="join_btn_submit" className="input_large" value="확인"/>
                                </span>
                                <span className="shop_btn_pack">
                                    <span className="blank_3"></span>
                                </span>
                                <span className="shop_btn_pack btn_input_gray">
                                    <input type="button" name="" className="input_large" value="목록"
                                           onClick={() => {
                                           }}/>
                                </span>
                            </div>
                        </div>
                    </form>


                    <div style={{height:'30px'}}></div>

                </div>
            </div>
        </div>
    )
}
export default CenterRegistration;