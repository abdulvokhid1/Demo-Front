'use client'
import { Center } from "@/utils/types/type";
import Slider from '@/components/layouts/Slider/Sales';
import CENTER_API from '@/services/api/center';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import Centers from "@/services/api/centers";
import centers from "@/services/api/centers";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getFullTime } from "@/utils/helper";
import { useRouter } from "next/navigation";

const CenterRegistration = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const [messageApi, contextHolder] = message.useMessage()
    const [centerListState, setCenterListState] = useState<Center[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalCenters, setTotalCenters] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
    const router = useRouter()
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: CENTER_API.getList,
            onSuccess: async (values: any) => {
                setCenterListState(values.centers);
                setTotalCenters(values.total);
                console.log(JSON.stringify(centerListState))
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )

    useEffect(() => {
        mutate({page: currentPage, limit: perPage});
    }, []);
    const pagginationHandler = (selectedItem: { selected: number }) => {
        const page = selectedItem ? selectedItem.selected + 1 : 0;
        mutate({page: page, limit: perPage})
    }

    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>
            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>
                    <div className="open_close">
						<span className="btn_close"
                              id="open_close_btn_close"
                              title="메뉴닫기"
                              style={{display: sliderVisible ? "block" : "none"}}
                              onClick={sliderToggle}>

						</span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                    </div>

                    {/* <!-- 페이지타이틀 --> */}
                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">
						센터등록 관리
					</span>
                        <span className="location">홈 &gt; 가맹점관리 &gt; 센터등록 관리</span>
                    </div>

                    <div className="top_btn_area">
                        <div className="btn_line_up_center">
                            <span className="shop_btn_pack">
                                <span className="blank_3"></span>
                            </span>
                            <span className="shop_btn_pack">
                                <a href={PAGE_ROUTES.SALES_MANAGEMENT.CENTER_REGISTRATION} className="medium red"
                                   title="업체등록">센터등록</a>
                            </span>
                        </div>
                    </div>
                    <form name="fboardlist" method="post">
                        <input type="hidden" name="_mode" value=""/>
                        <input type="hidden" name="_seachcnt" value=""/>
                        <input type="hidden" name="_PVSC" value=""/>
                        <input type="hidden" name="_search_que" value=""/>

                        <input type="hidden" name="q1" value="code="/>
                        <input type="hidden" name="page" value="1"/>

                        <div className="content_section_inner">

                            <table className="list_TB" summary="리스트기본">
                                <thead>
                                <tr>
                                    <th scope="col" className="colorset"><input type="checkbox" name="chkall" value="1"
                                                                                onClick={() => {
                                                                                }}/></th>
                                    <th scope="col" className="colorset">NO</th>

                                    <th scope="col" className="colorset"><a
                                        href="/myAdmin/_entershop.center_list.php?code=&amp;page=&amp;filed=in_compay&amp;orderby=asc"><u>센터명</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href="/myAdmin/_entershop.center_list.php?code=&amp;page=&amp;filed=in_name&amp;orderby=asc"><u>대표자</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><u>소속회원수</u></th>
                                    <th scope="col" className="colorset"><u>누적PV</u></th>
                                    <th scope="col" className="colorset"><u>전화번호</u></th>


                                    <th scope="col" className="colorset"><a
                                        href="/myAdmin/_entershop.center_list.php?code=&amp;page=&amp;filed=wdate&amp;orderby=asc"><u>등록일</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href="/myAdmin/_entershop.center_list.php?code=&amp;page=&amp;filed=mb_id&amp;orderby=asc"><u>연동아이디</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><a
                                        href="/myAdmin/_entershop.center_list.php?code=&amp;page=&amp;filed=state&amp;orderby=asc"><u>처리상태</u></a>
                                    </th>

                                    <th scope="col" className="colorset"><u>관리</u></th>


                                </tr>
                                </thead>
                                <tbody>


                                {/*<input type="hidden" name="od_table[0]" value="4"/>*/}

                                {centerListState?.length > 0 && (
                                    centerListState.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <input type="checkbox" name="chk_id[]" value="" className="class_id"/>
                                                </td>
                                                <td>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td></td>
                                                <td>{item.User?.length}</td>
                                                <td>0</td>
                                                <td></td>
                                                <td>{getFullTime(item.createdAt || '')}</td>
                                                <td><br/></td>
                                                <td>완료</td>
                                                <td>
                                                    <div className="btn_line_up_center" style={{clear: 'both', paddingTop: '3px'}}>
                                                        <span className="shop_btn_pack">
                                                            <span className="shop_btn_pack">
                                                                <input type="button" value="수정" className="input_small blue"
                                                                       onClick={() => {}}/>
                                                            </span>
                                                        </span>
                                                        <span className="shop_btn_pack">
                                                            <span className="blank_3"></span>
                                                        </span>
                                                        <span className="shop_btn_pack">
                                                            <span className="blank_3"></span>
                                                        </span>
                                                        <span className="shop_btn_pack">
                                                            <input type="button" value="삭제" className="input_small gray"
                                                                   onClick={() => {}}/>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                                }


                                </tbody>
                            </table>


                        </div>


                        <div className="form_box_area">

                            <table width="100%" border={0} cellSpacing={0} cellPadding={0}>

                                <tbody>
                                <tr>
                                    <td align="left" style={{paddingTop: '3px'}}>
                                        <table border={0} cellSpacing={0} cellPadding={0}>
                                            <tbody>
                                            <tr>

                                                <td style={{paddingTop: '2px'}}>&nbsp;
                                                    <div className="top_btn_area">


                                                    </div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>


                        </div>

                        <div
                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
                            <ReactPaginate
                                previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>}
                                nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                activeClassName={'active'}
                                containerClassName={'pagination'}
                                // subContainerClassName={'pages pagination'}

                                initialPage={currentPage - 1}
                                pageCount={Math.ceil(totalCenters / perPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={pagginationHandler}
                            />
                        </div>
                    </form>


                    <div style={{height: '30px'}}></div>
                </div>
            </div>
        </div>


    )
}
export default CenterRegistration;