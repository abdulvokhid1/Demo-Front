'use client'
import Slider from '@/components/layouts/Slider/Shop';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import noop from "noop-ts";
import { tr } from "date-fns/locale";
import { useMutation } from "@tanstack/react-query";
import CategoryAPI from "@/services/api/addcategory";
import { CategoryType } from "@/utils/types/type";


const CategoryManagement = () => {
    const router = useRouter();
    const [sliderVisible, setSliderVisible] = useState(true)
    const [categoryList1, setCategoryList1] = useState<CategoryType[]>([]);
    const [categoryList2, setCategoryList2] = useState<CategoryType[]>([]);
    const [categoryList3, setCategoryList3] = useState<CategoryType[]>([]);
    const [depth1State, setDepth1State] = useState(0)
    const [depth2State, setDepth2State] = useState(0)

    const {isPending, mutate:mutateCategoryList1, isSuccess, isError} = useMutation(
        {
            mutationFn: CategoryAPI.list,
            onSuccess: async (values: any) => {
                console.log('success')
                setCategoryList1(values);
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )
    const {mutate:mutateCategoryList2} = useMutation(
        {
            mutationFn: CategoryAPI.list,
            onSuccess: async (values: any) => {
                console.log('success')
                setCategoryList2(values);
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )

    const {mutate:mutateCategoryList3} = useMutation(
        {
            mutationFn: CategoryAPI.list,
            onSuccess: async (values: any) => {
                console.log('success')
                setCategoryList3(values);
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )


    const onFocus = () => {
        router.refresh()
    };
    useEffect(() => {

        window.addEventListener("focus", onFocus);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("focus", onFocus);
        };
    }, []);
    // useEffect(() => {
    //     const iframe2 = window.document.getElementById('list2') as HTMLElement
    //     iframe2?.focus()
    // }, [depth1State]);

    useEffect(() => {
        const params = {
            depth: 1,
            asc: true,
        }
        mutateCategoryList1(params);
    }, []);

    useEffect(() => {
        mutateCategoryList2({
            depth: 2,
            parent: depth1State,
            asc: true,
        })
        setCategoryList3([])

    }, [depth1State]);

    useEffect(() => {
        mutateCategoryList3({
            depth: 3,
            parent: depth2State,
            asc: true,
        })
    }, [depth2State]);

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
						카테고리 관리					
					</span>
                        <span className="location">홈 &gt; 상품관리 &gt; 카테고리 관리</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}

                    {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

                    {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

                    <div className="common_ajax_proc"></div>

                    {/* <script type='text/javascript' src='_category_shop.js'></script> */}

                    <form name='PUBLIC_FORM' method='post'>
                        <input type='hidden' name='chk_list2' value=''/>
                        <input type='hidden' name='chk_list3' value=''/>
                        <input type='hidden' name='chk_list4' value=''/>
                        {/* <!-- 검색영역 --> */}
                        <div className="form_box_area">

                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="33%"/>
                                    <col width="33%"/>
                                    <col width="33%"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col" className="colorset">
                                        <div className='btn_line_up_center'>
                                            <span className='shop_btn_pack'>1차 카테고리</span>
                                            <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                            <span className='shop_btn_pack'><input type='button' name=''
                                                                                   className='input_small blue'
                                                                                   value='추가' onClick={() => {
                                                window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION + '?depth=1&parent=0', '카테고리 추가', 'height=300px, width=800px')
                                            }}/></span>
                                        </div>
                                    </th>
                                    <th scope="col" className="colorset">
                                        <div className='btn_line_up_center'>
                                            <span className='shop_btn_pack'>2차 카테고리</span>
                                            <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                            <span className='shop_btn_pack'><input type='button' name=''
                                                                                   className='input_small blue'
                                                                                   value='추가' onClick={() => {
                                                window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION + '?depth=2&parent=' + depth1State, '카테고리 추가', 'height=300px, width=800px')
                                            }}/></span>
                                        </div>
                                    </th>
                                    <th scope="col" className="colorset">
                                        <div className='btn_line_up_center'>
                                            <span className='shop_btn_pack'>3차 카테고리</span>
                                            <span className='shop_btn_pack'><span className='blank_3'></span></span>
                                            <span className='shop_btn_pack'><input type='button' name=''
                                                                                   className='input_small blue'
                                                                                   value='추가' onClick={() => {
                                                window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION + '?depth=3&parent=' + depth2State, '카테고리 추가', 'height=300px, width=800px')
                                            }}/></span>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="conts" style={{verticalAlign: 'top'}}>
                                        {/*<iframe id='list1' name='list1' src={PAGE_ROUTES.SHOP.SHOP_CATEGORY_LIST + '?depth=1'}*/}
                                        {/*        width='100%' height='400'*/}
                                        {/*        style={{textAlign: 'center', border: '2px solid #c1c1c1'}}*/}
                                        {/*        onClick={(e) => {*/}
                                        {/*            const el = window.document.getElementById('selectedCatId1') as HTMLInputElement;*/}
                                        {/*            setDepth1State(Number(el?.value))*/}
                                        {/*        }}*/}
                                        {/*        onFocus={(e) => {*/}
                                        {/*            const el = e.target.contentWindow?.document.getElementById('selectedCatId1') as HTMLInputElement;*/}
                                        {/*            el? setDepth1State(Number(el.value)) : noop;*/}
                                        {/*            const iframe2 = window.document.getElementById('list2') as HTMLElement*/}
                                        {/*            iframe2?.focus()*/}
                                        {/*            console.log(depth1State)*/}
                                        {/*        }}*/}
                                        {/*></iframe>*/}
                                        <div className="content_section_inner" style={{marginTop: '0px'}}>
                                            <input type="hidden" id='' value=''/>
                                            <table className="list_TB" summary="리스트기본">
                                                <colgroup>
                                                    <col width={'*'}/>
                                                    <col width={'120px'}/>


                                                </colgroup>
                                                <tbody>
                                                {categoryList1?.length > 0 && (
                                                    categoryList1?.map((item: any, index) => (
                                                        <tr key={index}>
                                                            <td onClick={() => {
                                                                setDepth1State(item.id);
                                                                mutateCategoryList2({
                                                                    depth: 2,
                                                                    parent: item.id,
                                                                })
                                                                console.log(depth1State)
                                                            }}
                                                                    className="app_tr"
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    textAlign: "left"
                                                                }}>{item.name}
                                                            </td>
                                                            <td>
                                                                <div className="btn_line_up_center">
													<span className="shop_btn_pack">
														<input type="button" name=""
                                                               className="input_small gray f_vup"
                                                               value="△"
                                                               data-serialnum="1536"
                                                               data-framename="list1"
                                                               onClick={() => {
                                                               }}
                                                               alt="상위로 이동"
                                                        />
													</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small gray f_vdown"
                                                                   value="▽"
                                                                   data-serialnum="1536"
                                                                   data-framename="list1"
                                                                   onClick={() => {
                                                                   }}
                                                                   alt="하위로 이동"
                                                            />
														</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small blue"
                                                                   value="수정"
                                                                   onClick={() => {
                                                                       window.open(PAGE_ROUTES.SHOP.CATEGORY_UPDATE + '?depth=1&id=' + item.id + '&name=' + item.name + '&active=' + item.isActive, '카테고리 추가', 'height=300px, width=800px')
                                                                   }}
                                                            />
														</span>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    )))}

                                                </tbody>

                                            </table>
                                        </div>
                                    </td>
                                    <td className="conts" style={{verticalAlign: 'top'}}>
                                        {/*<iframe id='list2' name='list2'*/}
                                        {/*        src={PAGE_ROUTES.SHOP.SHOP_CATEGORY_LIST + '?depth=2&parent=' + depth1State}*/}
                                        {/*        width='100%' height='400'*/}
                                        {/*        style={{textAlign: 'center', border: '2px solid #c1c1c1'}}*/}
                                        {/*        onFocus={(e) => {*/}
                                        {/*            const el = e.target.contentWindow?.document.getElementById('selectedCatId2') as HTMLInputElement;*/}
                                        {/*            el ? setDepth2State(Number(el.value)) : noop;*/}
                                        {/*            const iframe3 = window.document.getElementById('list3') as HTMLElement*/}
                                        {/*            iframe3?.focus()*/}
                                        {/*            console.log(depth2State)*/}

                                        {/*        }}*/}
                                        {/*></iframe>*/}
                                        <div className="content_section_inner" style={{marginTop: '0px'}}>
                                            <input type="hidden" id='' value=''/>
                                            <table className="list_TB" summary="리스트기본">
                                                <colgroup>
                                                    <col width={'*'}/>
                                                    <col width={'120px'}/>


                                                </colgroup>
                                                <tbody>
                                                {categoryList2?.length > 0 && (
                                                    categoryList2?.map((item: any, index) => (
                                                        <tr key={index}>
                                                            <td onClick={() => {
                                                                setDepth2State(item.id);
                                                                mutateCategoryList3({
                                                                    depth: 3,
                                                                    parent: item.id,
                                                                })
                                                                console.log(depth2State)
                                                            }} className="app_tr"
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    textAlign: "left"
                                                                }}>{item.name}
                                                            </td>
                                                            <td>
                                                                <div className="btn_line_up_center">
													<span className="shop_btn_pack">
														<input type="button" name=""
                                                               className="input_small gray f_vup"
                                                               value="△"
                                                               data-serialnum="1536"
                                                               data-framename="list1"
                                                               onClick={() => {
                                                               }}
                                                               alt="상위로 이동"
                                                        />
													</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small gray f_vdown"
                                                                   value="▽"
                                                                   data-serialnum="1536"
                                                                   data-framename="list1"
                                                                   onClick={() => {
                                                                   }}
                                                                   alt="하위로 이동"
                                                            />
														</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small blue"
                                                                   value="수정"
                                                                   onClick={() => {
                                                                       window.open(PAGE_ROUTES.SHOP.CATEGORY_UPDATE + '?depth=2&id=' + item.id + '&name=' + item.name + '&active=' + item.isActive + '&parent=' + depth1State, '카테고리 추가', 'height=300px, width=800px')
                                                                   }}
                                                            />
														</span>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    )))}

                                                </tbody>

                                            </table>
                                        </div>
                                    </td>
                                    <td className="conts" style={{verticalAlign: 'top'}}>
                                        {/*<iframe id='list3' name='list3'*/}
                                        {/*        src={PAGE_ROUTES.SHOP.SHOP_CATEGORY_LIST + '?depth=3&parent=' + depth2State}*/}
                                        {/*        width='100%' height='400'*/}
                                        {/*        style={{textAlign: 'center', border: '2px solid #c1c1c1'}}*/}
                                        {/*    // onFocus={(e) => {*/}
                                        {/*    //     const el = e.target.contentWindow?.document.getElementById('selectedCatId') as HTMLInputElement;*/}
                                        {/*    //     el? setDepth3State(Number(el.value)) : noop;*/}
                                        {/*    // }}*/}
                                        {/*></iframe>*/}
                                        <div className="content_section_inner" style={{marginTop: '0px'}}>
                                            <input type="hidden" id='' value=''/>
                                            <table className="list_TB" summary="리스트기본">
                                                <colgroup>
                                                    <col width={'*'}/>
                                                    <col width={'120px'}/>


                                                </colgroup>
                                                <tbody>
                                                {categoryList3?.length > 0 && (
                                                    categoryList3?.map((item: any, index) => (
                                                        <tr key={index}>
                                                            <td onClick={() => {
                                                                // mutateCategoryList3({
                                                                //     depth: 3,
                                                                //     parent: item.id,
                                                                // })
                                                                // console.log(depth1State)
                                                            }} className="app_tr"
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    textAlign: "left"
                                                                }}>{item.name}
                                                            </td>
                                                            <td>
                                                                <div className="btn_line_up_center">
													<span className="shop_btn_pack">
														<input type="button" name=""
                                                               className="input_small gray f_vup"
                                                               value="△"
                                                               data-serialnum="1536"
                                                               data-framename="list1"
                                                               onClick={() => {
                                                               }}
                                                               alt="상위로 이동"
                                                        />
													</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small gray f_vdown"
                                                                   value="▽"
                                                                   data-serialnum="1536"
                                                                   data-framename="list1"
                                                                   onClick={() => {
                                                                   }}
                                                                   alt="하위로 이동"
                                                            />
														</span>
                                                                    <span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
                                                                    <span className="shop_btn_pack">
															<input type="button" name=""
                                                                   className="input_small blue"
                                                                   value="수정"
                                                                   onClick={() => {
                                                                       window.open(PAGE_ROUTES.SHOP.CATEGORY_UPDATE + '?depth=3&id=' + item.id + '&name=' + item.name + '&active=' + item.isActive + '&parent=' + depth2State, '카테고리 추가', 'height=300px, width=800px')
                                                                   }}
                                                            />
														</span>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    )))}

                                                </tbody>

                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        <iframe name='list4' src='' width='0' height='0' style={{textAlign: 'center'}} marginWidth={0}
                                marginHeight={0} scrolling='no' frameBorder='0'></iframe>
                        <iframe name='set' src='' width='0' height='0' style={{textAlign: 'center'}} marginWidth={0}
                                marginHeight={0} scrolling='no' frameBorder='0'></iframe>

                        <div style={{height: '30px'}}></div>
                    </form>
                </div>
            </div>

        </div>

    )
}
export default CategoryManagement;