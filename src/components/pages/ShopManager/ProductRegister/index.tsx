'use client'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import { useRouter } from 'next/navigation';

import Slider from '@/components/layouts/Slider/Shop';
import { SetStateAction, useEffect, useState } from 'react';
import { useSetRecoilState } from "recoil";
import { prodSelectedKey, userSelectedKey } from "@/services/recoil/selectedKey";
import { formatDate } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import CategoryAPI from "@/services/api/addcategory";
import PAGE_ROUTES from "@/utils/constants/routes";
import { CategoryType } from "@/utils/types/type";
import { hasSpecialCharacters, uploadImageFile } from "@/utils/helper";
import { API_ENDPOINTS } from "@/services/api/endPoint";
import Product_API from "@/services/api/productmd";
import ProductAPI from "@/services/api/productmd";

const ProductRegister = () => {
    const router = useRouter();
    const [sliderVisible, setSliderVisible] = useState(true)
    const setSelectedKey = useSetRecoilState(prodSelectedKey)
    const [value, setValue] = useState("")
    const [imageUserGuideId, setImageUserGuideId] = useState()
    const [imageProdGuideId, setImageProdGuideId] = useState()
    const [imageDescriptionId, setImageDescriptionId] = useState()
    const [imageMainId, setImageMainId] = useState()
    const [imageListId, setImageListId] = useState()
    const [imageExtraId1, setImageExtraId1] = useState()
    const [imageExtraId2, setImageExtraId2] = useState()
    const [imageExtraId3, setImageExtraId3] = useState()
    const [imageExtraId4, setImageExtraId4] = useState()
    const [imageExtraId5, setImageExtraId5] = useState()
    const [isActiveState, setIsActiveState] = useState(true)
    const [isMethodImageUpload, setIsMethodImageUpload] = useState(true)
    const [isProdImageUpload, setIsProdImageUpload] = useState(true)
    const [isDetailImageUpload, setIsDetailImageUpload] = useState(true)
    const [hasSpecial, setHasSpecial] = useState(false)
    const [limitedSale, setLimitedSale] = useState(false)
    const [methodInfo, setMethodInfo] = useState("")
    const [providerInfo, setProviderInfo] = useState("")
    const [productDetailInfo, setProductDetailInfo] = useState("")
    const [categoryList1, setCategoryList1] = useState<CategoryType[]>([]);
    const [categoryList2, setCategoryList2] = useState<CategoryType[]>([]);
    const [categoryList3, setCategoryList3] = useState<CategoryType[]>([]);
    const [catIdsState, setCatIdsState] = useState<number[]>([]);
    const [catIdNameState, setCatIdNameState] = useState<any[]>([])
    const [depth1State, setDepth1State] = useState(0)
    const [depth2State, setDepth2State] = useState(0)
    const [depth3State, setDepth3State] = useState(0)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote'],
            ['link', 'video', 'formula'],

            [{'header': 1}, {'header': 2}],               // custom button values
            [{'list': 'ordered'}, {'list': 'bullet'}, {'list': 'check'}],
            [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
            [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
            [{'direction': 'rtl'}],                         // text direction

            [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
            [{'header': [1, 2, 3, 4, 5, 6, false]}],

            [{'color': []}, {'background': []}],          // dropdown with defaults from theme
            [{'font': []}],
            [{'align': []}],

            ['clean']                                         // remove formatting button
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    }

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'color'
    ]

    const {mutate: mutateProductCreate} = useMutation(
        {
            mutationFn: ProductAPI.create,
            onSuccess: async (values: any) => {
                console.log('success')
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )

    const {isPending, mutate: mutateCategoryList1, isSuccess, isError} = useMutation(
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
    const {mutate: mutateCategoryList2} = useMutation(
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

    const {mutate: mutateCategoryList3} = useMutation(
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


    useEffect(() => {
        const params = {
            depth: 1,
            asc: true,
        }
        mutateCategoryList1(params);
    }, [router, mutateCategoryList1]);

    // useEffect(() => {
    //     mutateCategoryList2({
    //         depth: 2,
    //         parent: depth1State,
    //         asc: true,
    //     })
    //     setCategoryList3([])
    //
    // }, [depth1State]);

    // useEffect(() => {
    //     mutateCategoryList3({
    //         depth: 3,
    //         parent: depth2State,
    //         asc: true,
    //     })
    // }, [depth2State]);

    useEffect(() => {
        setSelectedKey(0)
    });
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }

    const handleDelCat = (id: number) => {
        const index = catIdsState.indexOf(id);
        if (index >= 0) {
            const catIds = catIdsState;
            catIds.splice(index, 1);
            setCatIdsState([...catIds]);
            const catIdNames = catIdNameState;
            catIdNames.splice(index, 1)
            setCatIdNameState([...catIdNames]);
            console.log(catIdNames)
        }
    }

    const handleAddCat = (e: any) => {
        if (depth3State) {
            if (!catIdsState.includes(depth3State)) {
                const cat = categoryList3.filter((item) => item.id == depth3State)[0]
                catIdsState.push(cat?.id ||0)
                setCatIdNameState([...catIdNameState,  {id: cat?.id ||0, name: cat?.name || ''}])

            }
        }
        else if (depth2State) {
            if (!catIdsState.includes(depth2State)) {
                const cat = categoryList2.filter((item) => item.id == depth2State)[0]
                setCatIdsState([...catIdsState, cat?.id || 0])
                setCatIdNameState([...catIdNameState,  {id: cat?.id ||0, name: cat?.name || ''}])

            }
        }
        else if (depth1State) {
            if (!catIdsState.includes(depth1State)) {
                const cat = categoryList1.filter((item) => item.id == depth1State)[0]
                catIdsState.push(cat?.id ||0)
                setCatIdNameState([...catIdNameState,  {id: cat?.id ||0, name: cat?.name || ''}])

            }
        }
    }

    const handleImageUserGuide = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageUserGuideId(id);
    }

    const handleImageProdGuide = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageProdGuideId(id);
    }

    const handleImageDescription = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageDescriptionId(id);
    }

    const handleImageMain = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageMainId(id);
    }

    const handleImageList = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageListId(id);
    }

    const handleImageExtra1 = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageExtraId1(id);
    }
    const handleImageExtra2 = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageExtraId2(id);
    }
    const handleImageExtra3 = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageExtraId3(id);
    }
    const handleImageExtra4 = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageExtraId4(id);
    }
    const handleImageExtra5 = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_PRODUCT_FILE)

        setImageExtraId5(id);
    }

    const handleProductRegistration = (formData: FormData) => {
        const isActive = isActiveState;
        const code = formData.get('code')?.toString();
        const name = formData.get('name')?.toString();
        const customercode = formData.get('customercode')?.toString();
        const price_origin = formData.get('price_org')?.toString()  || '0';
        const price_sell = formData.get('price')?.toString() || '0';
        const price_provider = formData.get('purPrice')?.toString() || '0';
        const vat = formData.get('charge_vat_per')?.toString() || '0';
        // const discount = formData.get('price_per')?.toString() || '0';
        const quantity = formData.get('stock')?.toString() || '0';
        const producer = formData.get('factName')?.toString() || '';
        const origin = formData.get('originName')?.toString() || '';
        const branch = formData.get('brandName')?.toString() || '';
        const shortDescription = formData.get('short_comment')?.toString() || '';
        const useGuideInfo = methodInfo;
        const prodGuideInfo = providerInfo;
        const description = productDetailInfo;
        
        const params = {
            isActive : isActive,
            code : code,
            name : name,
            customercode : customercode,
            price_origin : Number(price_origin),
            price_sell : Number(price_sell),
            price_provider : Number(price_provider),
            vat : Number(vat),
            quantity : Number(quantity),
            producer : producer,
            origin : origin,
            branch : branch,
            short_desc : shortDescription,
            is_guide_img: isMethodImageUpload,
            guide_img_id: imageUserGuideId,
            guide_info : useGuideInfo,
            is_prod_info_img: isProdImageUpload,
            prod_img_id: imageProdGuideId,
            prod_info : prodGuideInfo,
            is_description_img: isDetailImageUpload,
            description_img_id: imageDescriptionId,
            description : description,
            catIds: catIdsState,
            mainImg: imageMainId,
            listImgId: imageListId,
            extraImg1: imageExtraId1,
            extraImg2: imageExtraId2,
            extraImg3: imageExtraId3,
            extraImg4: imageExtraId4,
            extraImg5: imageExtraId5,
        }

        mutateProductCreate(params)


    }
    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>

            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>
                    <div className="open_close">
                        <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                              style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">상품등록</span>
                        <span className="location">홈 &gt; 상품관리 &gt; 상품등록</span>
                    </div>

                    <form name="frm" method="post" encType="multipart/form-data" action={handleProductRegistration}>
                        <input type="hidden" name="_mode" value="add"/>

                        <input type="hidden" name="_PVSC" />
                        <input type="hidden" name="save_chk" value="옵션정보저장"/>
                        {/* <!-- // save_chk가 0 초과면 no save 상태이므로 옵션저정해야 함 --> */}
                        <input type="hidden" name="v_color" />
                        <input type='hidden' name="pro_idx" value="999"/>
                        {/* <!-- 검색영역 --> */}
                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="120px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">상품노출</td>
                                    <td className="conts">
                                        <span className='multi'>
                                            <label htmlFor='p_viewN'>
                                                <input type='radio' id='p_viewN' name='p_view'
                                                       checked={!isActiveState}
                                                       onChange={(e) => {
                                                           setIsActiveState(false)
                                                       }}
                                                />
                                                숨김
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                        <span className='multi'>
                                            <label htmlFor='p_viewY'>
                                                <input type='radio' id='p_viewY' name='p_view'
                                                       checked={isActiveState}
                                                       onChange={(e) => {
                                                           setIsActiveState(true)
                                                       }}
                                                />
                                                노출
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td className="article">판매설정</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='sale_typeT'>*/}
                                {/*                <input type='radio' id='sale_typeT' name='sale_type'*/}
                                {/*                       className='sale_type_value' checked/>*/}
                                {/*                기간판매*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='sale_typeA'>*/}
                                {/*                <input type='radio' id='sale_typeA' name='sale_type'*/}
                                {/*                       className='sale_type_value'/>*/}
                                {/*                상시판매*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr className="sale_type">*/}
                                {/*    <td className="article">판매일<span className="ic_ess" title="필수"></span></td>*/}
                                {/*    <td className="conts">*/}
                                {/*        판매시작일 :*/}
                                {/*        <input type="text" name="sale_date" id="sale_date" value=''*/}
                                {/*               className="input_text" style={{width: '80px', cursor: 'pointer'}}*/}
                                {/*               readOnly/>*/}
                                {/*        <input type="hidden" name="sale_dateh" id="sale_dateh" value='00'*/}
                                {/*               className="input_text" style={{width: "20px"}}/>*/}
                                {/*        <input type="hidden" name="sale_datem" id="sale_datem" value='00'*/}
                                {/*               className="input_text" style={{width: "20px"}}/>*/}
                                {/*        ~*/}
                                {/*        판매종료일 :*/}
                                {/*        <input type="text" name="sale_enddate" id="sale_enddate" value=''*/}
                                {/*               className="input_text" style={{width: '80px', cursor: 'pointer'}}*/}
                                {/*               readOnly/>*/}
                                {/*        <input type="hidden" name="sale_enddateh" id="sale_enddateh" value='23'*/}
                                {/*               className="input_text" style={{width: "30px"}}/>*/}
                                {/*        <input type="hidden" name="sale_enddatem" id="sale_enddatem" value='59'*/}
                                {/*               className="input_text" style={{width: "30px"}}/>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>판매 시작일이 최근일수록 상품리스트에서 신규상품 정렬 시 상단에 위치합니다.</span>*/}
                                {/*        </div>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>판매 종료일이 최근일수록 상품리스트에서 마감임박 정렬 시 상단에 위치합니다.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td className="article">상품코드<span className="ic_ess" title="필수"></span></td>
                                    <td className="conts">
                                        <input type="text" name="code" className="proName" size={40}/>
                                        {/*            <span className='shop_btn_pack' style={{float: "none"}}>*/}
                                        {/*<input type="button" onClick={() => {*/}
                                        {/*}} className="input_small red" style={{cursor: 'pointer'}} value={"상품코드자동생성"}/></span>*/}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">상품분류<span className="ic_ess" title="필수"></span></td>
                                    <td className="conts">
                                        <div style={{float: 'left'}}>
                                            1차분류 :
                                            <select name='pass_cate01' id='pass_cate01'
                                                    onChange={(e) => {
                                                        setDepth1State(Number(e.target.value))
                                                        setDepth2State(0)
                                                        setDepth3State(0)
                                                        mutateCategoryList2({
                                                            depth: 2,
                                                            parent: Number(e.target.value),
                                                        })
                                                        setCategoryList3([])
                                                    }}>
                                                <option value={0}>-선택-</option>
                                                {categoryList1?.length && categoryList1.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))}
                                                {/*<option value='4'>Food</option>*/}
                                                {/*<option value='3'>Hair Care</option>*/}
                                                {/*<option value='1'>Skin Care & Body</option>*/}
                                            </select>&nbsp;&nbsp;&nbsp;
                                            2차분류 :
                                            <select name='pass_cate02' id='pass_cate02' onChange={(e) => {
                                                setDepth2State(Number(e.target.value))
                                                setDepth3State(0)
                                                mutateCategoryList3({
                                                    depth: 3,
                                                    parent: Number(e.target.value),
                                                })
                                            }}>
                                                <option value={0}>-선택-</option>
                                                {categoryList2?.length && categoryList2.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>&nbsp;&nbsp;&nbsp;
                                            3차분류 :
                                            <select name='pass_cate03'
                                                    onChange={(e) => {
                                                        setDepth3State(Number(e.target.value))
                                                    }}
                                            >
                                                <option value={0}>-선택-</option>
                                                {categoryList3?.length && categoryList3.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div style={{float: 'left', paddingLeft: '10px'}}>
                                        <span className="shop_btn_pack" style={{marginRight: '10px'}}>
                                            <a href="#" className="small blue" onClick={handleAddCat}>선택 카테고리추가</a>
                                        </span>
                                        </div>

                                        <div style={{clear: 'both', paddingTop: '10px'}}></div>
                                        <div id="_product_cateogry_list">
                                            {catIdNameState && catIdNameState.map((item, index) => (
                                                <div key={index} style={{clear: 'both', width: '428px'}}>
                                                    <div style={{float: 'left', padding: '6px'}}>
                                                        <b>{item.name}</b>
                                                    </div>
                                                    <div style={{float: 'right'}}>
                                                    <span className="shop_btn_pack" style={{marginRight: '10px'}}><a
                                                        href="#" className="small blue"
                                                        onClick={() => {
                                                            handleDelCat(item.id)
                                                        }}>삭제</a></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{clear: 'both', paddingBottom: '5px'}}></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">
                                        상품명<span className="ic_ess" title="필수"></span>
                                    </td>
                                    <td className="conts">
                                        <input type="text" name="name" className="proName" size={40}
                                               onChange={(e) => {
                                                   setHasSpecial(hasSpecialCharacters(e.target.value))
                                               }}
                                        />

                                        {hasSpecial ?
                                            (
                                                <div className='guide_text'>
                                                    <span className='ic_red'></span>
                                                    <span className='red'><b>특수문자 제외필요</b></span>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className='guide_text'>
                                                    <span className='ic_blue'></span>
                                                    <span className='blue'><b>특수문자 제외</b></span>
                                                </div>
                                            )}
                                    </td>
                                </tr>

                                {/*<tr>*/}
                                {/*    <td className="article">상품아이콘</td>*/}
                                {/*    <td className="conts">*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                <tr>
                                    <td className="article">공급업체ID<span className="ic_ess"></span></td>
                                    <td className="conts">
                                        <input type="text" name="customerCode" className="input_text" size={40}
                                        />
                                    </td>
                                </tr>

                                {/*<tr>*/}
                                {/*    <td className="article">배송기능</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <label>*/}
                                {/*            <input type="checkbox" name="setup_delivery" onClick={() => {*/}
                                {/*            }}/>*/}
                                {/*            배송기능적용*/}
                                {/*        </label>*/}
                                {/*        <br/>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_blue'></span>*/}
                                {/*            <span className='blue'>실물 상품을 판매하기 위해 배송기능을 적용하고자 할 경우 사용합니다.</span>*/}
                                {/*        </div>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_blue'></span>*/}
                                {/*            <span className='blue'>배송기능 적용 시 해당 상품의 주문정보는 쿠폰기능을 대체하여 택배송장번호와 배송정보로 변경됩니다.</span>*/}
                                {/*        </div>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'><b>주문이 있을 경우 수정할 수 없습니다.</b></span></div>*/}
                                {/*        <div id="setup_delivery_apply" style={{display: 'block'}}><br/>*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type" value="normal" checked/>*/}
                                {/*                일반(입점업체 배송정책을 따름)*/}
                                {/*            </label>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type" value="unit"/>*/}
                                {/*                개별배송*/}
                                {/*            </label>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type"*/}
                                {/*                       value="charge"/>유료배송*/}
                                {/*            </label>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type"*/}
                                {/*                       value="collect"/>*/}
                                {/*                유료배송(착불)*/}
                                {/*            </label>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type" value="condition"/>*/}
                                {/*                조건부무료배송*/}
                                {/*            </label>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <label>*/}
                                {/*                <input type="radio" name="del_type" value="free"/>*/}
                                {/*                무료배송*/}
                                {/*            </label>*/}
                                {/*            <div className='guide_text'>*/}
                                {/*                <span className='ic_blue'></span>*/}
                                {/*                <span className='blue'>개별배송일 경우 상품구매개수당 개별배송비용이 추가됩니다.</span>*/}
                                {/*            </div>*/}
                                {/*            <div className='guide_text'>*/}
                                {/*                <span className='ic_blue'></span>*/}
                                {/*                <span className='blue'>무료배송 선택시 상품에 무료배송 아이콘이 노출됩니다.</span>*/}
                                {/*            </div>*/}
                                {/*            <div id="del_type_unit" style={{display: 'none'}}>*/}
                                {/*                <br/>&nbsp;개별배송비 : &nbsp;*/}
                                {/*                <input type="text" className="input_text number_style"*/}
                                {/*                       name="del_price_cnt" size={10} style={{textAlign: 'right'}}*/}
                                {/*                       disabled*/}
                                {/*                       />개 수량마다*/}
                                {/*                <input type="text" className="input_text number_style" name="del_price"*/}
                                {/*                       size={10} style={{textAlign: 'right'}} disabled />원*/}
                                {/*            </div>*/}
                                {/*            <div id="del_type_charge" style={{display: 'none'}}>*/}
                                {/*                <br/>&nbsp;유료배송비 : &nbsp;<input type="text"*/}
                                {/*                                                className="input_text number_style"*/}
                                {/*                                                name="del_charge" size={10}*/}
                                {/*                                                style={{textAlign: 'right'}} disabled*/}
                                {/*                                                />원*/}
                                {/*            </div>*/}
                                {/*            <div id="del_type_collect" style={{display: 'none'}}>*/}
                                {/*                <br/>&nbsp;유료배송비(착불) : &nbsp;<input type="text"*/}
                                {/*                                                    className="input_text number_style"*/}
                                {/*                                                    name="del_collect" size={10}*/}
                                {/*                                                    style={{textAlign: 'right'}}*/}
                                {/*                                                    disabled />원*/}
                                {/*            </div>*/}
                                {/*            <div id="del_type_condition" style={{display: 'none'}}>*/}
                                {/*                <br/>&nbsp;배송비 : &nbsp;<input type="text"*/}
                                {/*                                              className="input_text number_style"*/}
                                {/*                                              name="del_condition" size={10}*/}
                                {/*                                              style={{textAlign: 'right'}} disabled*/}
                                {/*                                              />원 배송비를 부과하며 주문금액이*/}
                                {/*                <input type="text" className="input_text number_style"*/}
                                {/*                       name="del_condition_price" size={10} style={{textAlign: 'right'}}*/}
                                {/*                       disabled />원 이상이면 무료배송 처리됩니다*/}
                                {/*            </div>*/}
                                {/*            <div id="del_type_normal" style={{display: 'none'}}>*/}
                                {/*            </div>*/}
                                {/*            <input type="hidden" name="del_limit" value="0"/>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                <tr>
                                    <td className="article">정상가격</td>
                                    <td className="conts">
                                        <input type="text" name="price_org" className="input_text number_style"
                                               size={10} style={{textAlign: 'right'}} /> 원
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">
                                        판매가격<span className="ic_ess" title="필수"></span>
                                    </td>
                                    <td className="conts">
                                        <input type="text" name="price" className="input_text number_style zex"
                                               size={10} style={{textAlign: 'right'}} /> 원
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">공급가<span className="ic_ess" title="필수"></span></td>
                                    <td className="conts">
                                        <input type="text" name="purPrice" className="input_text number_style" size={10}
                                               style={{textAlign: 'right'}} /> 원
                                    </td>
                                </tr>

                                {/*<tr>*/}
                                {/*    <td className="article">카드수수료<span className="ic_ess" title="필수"></span></td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="charge_card_per" className="input_text" size={3}*/}
                                {/*               style={{textAlign: 'right'}} value={0}/> %*/}
                                {/*        <span className='shop_btn_pack' style={{float: 'none'}}>*/}
                                {/*            <input type="button"*/}
                                {/*                   id="charge_card_per_calc"*/}
                                {/*                   className="input_small gray"*/}
                                {/*                   style={{cursor: 'pointer'}}*/}
                                {/*                   value={'자동계산'}/>*/}
                                {/*        </span>&nbsp;*/}
                                {/*        <input type="text" name="charge_card_cur"*/}
                                {/*               className="input_text number_style zex_charge_card" size={10}*/}
                                {/*               style={{textAlign: 'right'}} value={"2000"}/> 원 (판매가격 * 3.5%)*/}
                                {/*        <span id='cur_text_charge_card'></span>*/}
                                {/*        <input type="hidden" name="charge_card" />*/}
                                {/*        <input type="hidden" name="charge_card_exchange_pv"/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">부가세<span className="ic_ess" title="필수"></span></td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="charge_vat_per" className="input_text" size={3}*/}
                                {/*               style={{textAlign: 'right'}} value={"10"}/> %*/}
                                {/*        <span className='shop_btn_pack' style={{float: 'none'}}>*/}
                                {/*            <input type="button"*/}
                                {/*                   id="charge_vat_per_calc"*/}
                                {/*                   className="input_small gray"*/}
                                {/*                   style={{cursor: 'pointer'}}*/}
                                {/*                   value="자동계산"/>*/}
                                {/*        </span>&nbsp;*/}
                                {/*        <input type="text" name="charge_vat_cur"*/}
                                {/*               className="input_text number_style zex_charge_vat" size={10}*/}
                                {/*               style={{textAlign: 'right'}} value={"2000"}/> 원 (판매가격 * 10%)*/}
                                {/*        <span id='cur_text_charge_vat'></span>*/}
                                {/*        <input type="hidden" name="charge_vat" />*/}
                                {/*        <input type="hidden" name="charge_vat_exchange_pv"/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">PV공제금액</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="charge_com" className="input_text number_style"*/}
                                {/*               size={10} style={{textAlign: 'right'}} /> 원*/}
                                {/*        /!* <!--<input type="text" name="pv_per_charge_com" className="input_text number_style" size={3}style={{textAlign:'right'}} > %--> *!/*/}
                                {/*        <span className='shop_btn_pack' style={{float: 'none'}}>*/}
                                {/*            <input type="button"*/}
                                {/*                   id="pv_per_charge_com_calc"*/}
                                {/*                   className="input_small red"*/}
                                {/*                   style={{cursor: 'pointer'}}*/}
                                {/*                   value="PV계산"/>*/}
                                {/*        </span> (카드수수료 + 부가세 + 공급가 합산 공제 금액)*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">PV가격</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="price_pv" className="input_text number_style" size={10}*/}
                                {/*               style={{textAlign: 'right'}} /> 원*/}
                                {/*        <input type="text" name="pv_per" className="input_text number_style" size={3}*/}
                                {/*               style={{textAlign: 'right'}} value="90"/> %*/}
                                {/*        <span className='shop_btn_pack' style={{float: 'none'}}><input type="button"*/}
                                {/*                                                                       id="pv_per_calc"*/}
                                {/*                                                                       className="input_small gray"*/}
                                {/*                                                                       style={{cursor: 'pointer'}}*/}
                                {/*                                                                       value="자동계산"/></span> (수동*/}
                                {/*        PV계산, 판매가 * %적용)*/}
                                {/*        <script>*/}
                                {/*            /!* // 할인율 자동계산 *!/*/}
                                {/*        </script>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">할인율<span className="ic_ess" title="필수"></span></td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="price_per" className="input_text number_style" size={3}*/}
                                {/*               style={{textAlign: 'right'}} /> %*/}
                                {/*        <span className='shop_btn_pack' style={{float: 'none'}}>*/}
                                {/*            <input type="button"*/}
                                {/*                   id="price_per_calc"*/}
                                {/*                   className="input_small gray"*/}
                                {/*                   style={{cursor: 'pointer'}}*/}
                                {/*                   value="자동계산"/>*/}
                                {/*        </span>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">옵션타이틀</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        1차 옵션 타이틀 : <input type="text" name="option1_title" className="input_text"*/}
                                {/*                           size={30} /><br/>*/}
                                {/*        2차 옵션 타이틀 : <input type="text" name="option2_title" className="input_text"*/}
                                {/*                           size={30} /><br/>*/}
                                {/*        3차 옵션 타이틀 : <input type="text" name="option3_title" className="input_text"*/}
                                {/*                           size={30} />*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">옵션설정</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='option_type_chknooption'>*/}
                                {/*                <input type='radio' id='option_type_chknooption' name='option_type_chk'*/}
                                {/*                       value={'nooption'}*/}
                                {/*                       className='option_type_chk' checked/> 옵션사용안함*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='option_type_chk1depth'>*/}
                                {/*                <input type='radio' id='option_type_chk1depth' name='option_type_chk' value='1depth'*/}
                                {/*                    className='option_type_chk'/> 1차옵션*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='option_type_chk2depth'>*/}
                                {/*                <input type='radio' id='option_type_chk2depth'*/}
                                {/*                       name='option_type_chk' value='2depth'*/}
                                {/*                       className='option_type_chk'/>  2차옵션*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        <span className='multi'>*/}
                                {/*            <label htmlFor='option_type_chk3depth'>*/}
                                {/*                <input type='radio' id='option_type_chk3depth' name='option_type_chk' value='3depth'*/}
                                {/*                       className='option_type_chk'/> 3차옵션*/}
                                {/*            </label>*/}
                                {/*        </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_orange'></span>*/}
                                {/*            <span className='orange'><b>옵션설정은 상품 최초 등록 시에만 설정 하시고 이후에는 수정을 가급적 피하시는게 좋습니다</b>.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">상품옵션</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <span className="shop_btn_pack" style={{marginRight: '10px'}}>*/}
                                {/*            <a href="#none" onClick={() => {}}*/}
                                {/*               className="small blue">옵션창 열기</a>*/}
                                {/*        </span>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_orange'></span>*/}
                                {/*            <span className='orange'>주문 내역이 있는 상품의 옵션은 변경하지 마시기 바랍니다.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">추가옵션</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <span className="shop_btn_pack" style={{marginRight: '10px'}}>*/}
                                {/*            <a href="#none" onClick={() => {}}className="small blue">추가옵션창 열기</a>*/}
                                {/*        </span>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_orange'></span>*/}
                                {/*            <span className='orange'>주문 내역이 있는 추가옵션은 변경하지 마시기 바랍니다.</span>*/}
                                {/*        </div>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_orange'></span>*/}
                                {/*            <span className='orange'>추가옵션은 배송상품에만 적용됩니다.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">정보제공고시</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <span className="shop_btn_pack" style={{marginRight: '10px'}}>*/}
                                {/*            <a href="javascript:reqinfo_popup();" className="small blue">정보제공고시 관리창 열기</a>*/}
                                {/*        </span>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_orange'></span>*/}
                                {/*            <span className='orange'>상품에 필요한 정보제공고시 항목: 내용으로 등록하며, 등록된 내용은 상품 상세페이지에 노출됩니다.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">중복구매</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <label><input type="hidden" name="guestDisabled" value={"1"}/><input*/}
                                {/*            type="checkbox" name="ipDistinct" value="1"/> 중복구매불가</label>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">포인트 적립</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="point" className="input_text"*/}
                                {/*               size={3} style={{textAlign: 'right'}} value="0"/> %*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">이벤트명 설정</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="p_eventName" className="proName" size={40} />*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td className="article">재고량</td>
                                    <td className="conts">
                                        <input type="text" name="stock"
                                               className="input_text number_style"
                                               size={6} style={{textAlign: 'right'}}/> 개
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td className="article">1회 최대 구매량</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="buy_limit"*/}
                                {/*               className="input_text number_style" value='5' size={3}/>개*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">현 판매량</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input type="text" name="saleCnt"*/}
                                {/*               className="input_text number_style" value="0" size={5}*/}
                                {/*               style={{textAlign: 'right'}}/> 개*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="article">관련상품 지정</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <div style={{marginBottom: '10px'}}>*/}
                                {/*            <span className='multi'>*/}
                                {/*                <label htmlFor='relation_autoN'>*/}
                                {/*                    <input type='radio'*/}
                                {/*                           id='relation_autoN'*/}
                                {/*                           name='relation_auto'*/}
                                {/*                           value='N'*/}
                                {/*                           className='relation_auto_mode'*/}
                                {/*                           checked/> 수동지정*/}
                                {/*                </label>*/}
                                {/*            </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*            <span className='multi'>*/}
                                {/*                <label htmlFor='relation_autoY'>*/}
                                {/*                    <input type='radio'*/}
                                {/*                           id='relation_autoY'*/}
                                {/*                           name='relation_auto'*/}
                                {/*                           value='Y'*/}
                                {/*                           className='relation_auto_mode'/> 자동지정*/}
                                {/*                </label>*/}
                                {/*            </span>&nbsp;&nbsp;&nbsp;*/}
                                {/*        </div>*/}
                                {/*        <div className="relation_use">*/}
                                {/*            <div className='btn_line_up_center' style={{marginBottom: '5px'}}>*/}
                                {/*                <span className='shop_btn_pack'>*/}
                                {/*                    <input type='button' value='관련상품정보삭제'*/}
                                {/*                           className='input_small gray'*/}
                                {/*                           onClick={() => {*/}
                                {/*                           }}/>*/}
                                {/*                </span>*/}
                                {/*                <span className='shop_btn_pack'>*/}
                                {/*                    <span className='blank_3'></span>*/}
                                {/*                </span>*/}
                                {/*                <span className='shop_btn_pack'>*/}
                                {/*                    <input type='button' value='관련상품등록/수정'*/}
                                {/*                           className='input_small blue'*/}
                                {/*                           onClick={() => {*/}
                                {/*                           }}/>*/}
                                {/*                </span>*/}
                                {/*            </div>*/}
                                {/*            <textarea name="p_relation" className="input_text"*/}
                                {/*                      style={{width: '100%', height: '50px'}} readOnly onClick={() => {*/}
                                {/*            }}></textarea>*/}
                                {/*            <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*                className='blue'>* 입력예: 상품코드1/상품코드2/상품코드3 (상품코드의 구분을 / 로 하시기 바랍니다.)</span>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>* <b>수동지정:</b> 관리자가 지정한 상품을 출력 합니다.</span></div>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>* <b>자동지정:</b> 동일 카테고리의 상품 10개를 랜덤하게 출력 합니다.</span></div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                <tr>
                                    <td className="article">제조사</td>
                                    <td className="conts">
                                        <input type="text" name="factName" className="proName" size={40}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">원산지</td>
                                    <td className="conts">
                                        <input type="text" name="originName" className="proName" size={40}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="article">브랜드</td>
                                    <td className="conts">
                                        <input type="text" name="brandName" className="proName" size={40}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">간략 상세정보</td>
                                    <td className="conts">
                                        <textarea name="short_comment" className="input_text"
                                                  style={{width: '100%', height: '60px'}}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">상품 사용 정보</td>
                                    <td className="conts">
                                        {/*<textarea name="comment_proinfo" className="input_text"*/}
                                        {/*          style={{width: '100%', height: '150px'}}></textarea>*/}
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={!isMethodImageUpload}
                                                       onChange={(e) => {
                                                           setIsMethodImageUpload(false);
                                                       }}
                                                />
                                                문장 작성
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={isMethodImageUpload}
                                                       onChange={(e) => {
                                                           setIsMethodImageUpload(true);
                                                       }}
                                                />
                                                이미지 업로드
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;<br/><br/>
                                        {isMethodImageUpload? (
                                            <div className="conts" style={{paddingBottom:'10px'}} >
                                                <div><img src='' id='img_main_img' style={{
                                                    maxWidth: '300px',
                                                    marginBottom: '5px',
                                                    display: 'none'
                                                }}/></div>
                                                <div>
                                                    <input type='file' name='main_img' size={20} style={{height:'30px'}}
                                                           className='input_text'
                                                           onChange={handleImageUserGuide}
                                                    />
                                                </div>
                                            </div>
                                        )
                                            :
                                            (
                                            <ReactQuill
                                            theme="snow"
                                            // placeholder={}
                                            // defaultValue={value}
                                            // value={value}
                                            onChange={(value) => setMethodInfo(value)}
                                        modules={modules}
                                        formats={formats}
                                    />
                                    )}


                                </td>
                                </tr>
                                <tr>
                                    <td className="article">업체 이용 정보</td>
                                    <td className="conts">
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={!isProdImageUpload}
                                                       onChange={(e) => {
                                                           setIsProdImageUpload(false);
                                                       }}
                                                />
                                                문장 작성
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={isProdImageUpload}
                                                       onChange={(e) => {
                                                           setIsProdImageUpload(true);
                                                       }}
                                                />
                                                이미지 업로드
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;<br/><br/>
                                        {/*<textarea name="comment_useinfo" className="input_text"*/}
                                        {/*          style={{width: '100%', height: '150px'}}></textarea>*/}
                                        {isProdImageUpload? (
                                                <div className="conts" style={{paddingBottom:'10px'}} >
                                                    <div><img src='' id='img_main_img' style={{
                                                        maxWidth: '300px',
                                                        marginBottom: '5px',
                                                        display: 'none'
                                                    }}/></div>
                                                    <div>
                                                        <input type='file' name='main_img' size={20} style={{height:'30px'}}
                                                               className='input_text'
                                                               onChange={handleImageProdGuide}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <ReactQuill
                                                    theme="snow"
                                                    // placeholder={}
                                                    // defaultValue={value}
                                                    // value={value}
                                                    onChange={(value) => setProviderInfo(value)}
                                                    modules={modules}
                                                    formats={formats}
                                                />
                                            )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">상품 상세설명<span className="ic_ess" title="필수"></span><br/>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'>크기 : 822 x -</span></div>
                                    </td>
                                    <td className="conts">
                                        {/*<textarea name="comment2" className="input_text"*/}
                                        {/*          style={{width: '100%', height: '400px'}}></textarea>*/}
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={!isDetailImageUpload}
                                                       onChange={(e) => {
                                                           setIsDetailImageUpload(false);
                                                       }}
                                                />
                                                문장 작성
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;
                                        <span className='multi'>
                                            <label htmlFor='sale_typeT'>
                                                <input type='radio'
                                                       checked={isDetailImageUpload}
                                                       onChange={(e) => {
                                                           setIsDetailImageUpload(true);
                                                       }}
                                                />
                                                이미지 업로드
                                            </label>
                                        </span>&nbsp;&nbsp;&nbsp;<br/><br/>
                                        {/*<textarea name="comment_useinfo" className="input_text"*/}
                                        {/*          style={{width: '100%', height: '150px'}}></textarea>*/}
                                        {isDetailImageUpload? (
                                                <div className="conts" style={{paddingBottom:'10px'}} >
                                                    <div><img src='' id='img_main_img' style={{
                                                        maxWidth: '300px',
                                                        marginBottom: '5px',
                                                        display: 'none'
                                                    }}/></div>
                                                    <div>
                                                        <input type='file' name='main_img' size={20} style={{height:'30px'}}
                                                               className='input_text'
                                                               onChange={handleImageDescription}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <ReactQuill
                                                    theme="snow"
                                                    // placeholder={}
                                                    // defaultValue={value}
                                                    // value={value}
                                                    onChange={(value) => setProductDetailInfo(value)}
                                                    modules={modules}
                                                    formats={formats}
                                                />
                                            )}
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td className="article">상품 상세설명<br/>(모바일)</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <textarea name="comment2_m" className="input_text"*/}
                                {/*                  style={{width: '100%', height: '400px'}}></textarea>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr style={{display: 'none'}}>*/}
                                {/*    <td className="article">rss 추가 정보</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        지역명 : <input type="text" name="rssarea1" size={10} className="input_text"*/}
                                {/*                     /> /*/}
                                {/*        위치 : <input type="text" name="rssarea2" size={10} className="input_text"*/}
                                {/*                    />*/}
                                {/*        <br/>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>예) 서울  /  홍대</span></div>*/}
                                {/*        <br/>*/}
                                {/*        카테고리 : <input type="text" name="rsscate" size={10} className="input_text"*/}
                                {/*                      /><br/>*/}
                                {/*        <div className='guide_text'><span className='ic_blue'></span><span*/}
                                {/*            className='blue'>예) 맛집 , 공연 , LIFE , 여행 , 미분류 : 카테고리는 1개만 적어주시기 바랍니다.</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">쿠폰사용만료일*/}
                                {/*        /!* <!--<span className="ic_ess" title="필수"></span>--> *!/*/}
                                {/*    </td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <input id="id_expire" type="text" name="expire" size={10} className="input_text"*/}
                                {/*               readOnly style={{cursor: 'pointer'}} value="2024-04-12"/>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td className="article">상품상세메인<span className="ic_ess" title="필수"></span><br/>
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'>크기 : 500 x 500</span></div>
                                    </td>
                                    <td className="conts">
                                        <div><img src='' id='img_main_img' style={{
                                            maxWidth: '300px',
                                            marginBottom: '5px',
                                            display: 'none'
                                        }}/></div>
                                        <div>
                                            <input type='file' name='main_img' size={20}
                                                   className='input_text'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageMain}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>상품상세메인에 노출되는 대표 이미지 입니다.</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">
                                        목록이미지<span className="ic_ess" title="필수"></span>
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>크기 : 300 x 300</span>
                                        </div>
                                    </td>
                                    <td className="conts">
                                        <div>
                                            <img src='' id='img_prolist_img'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='prolist_img' size={20}
                                                   className='input_text'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageList}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='checkbox'/>*/}
                                        {/*        외부이미지 사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}

                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>일반목록 이미지 및 기타 썸네일 이미지에 적용됩니다.</span>
                                        </div>
                                    </td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td className="article">직사각형목록<br/>최근본상품<br/>주문확인<br/>기타<br/>와이드이미지*/}
                                {/*        <span className="ic_ess" title="필수"></span>*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_blue'></span>*/}
                                {/*            <span className='blue'>크기 : 489 x 330</span>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <div><img src='' id='img_prolist_img2'*/}
                                {/*                  style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <input type='file' name='prolist_img2' size={20}*/}
                                {/*                   className='input_text n340deb960dc36d40e9cc4da7be03ded4_file'/>*/}
                                {/*        </div>*/}
                                {/*        <div style={{marginTop: '5px'}}>*/}
                                {/*            <label>*/}
                                {/*                <input type='checkbox'*/}
                                {/*                       className='n340deb960dc36d40e9cc4da7be03ded4_checkbox'/>*/}
                                {/*                외부이미지사용*/}
                                {/*            </label>*/}
                                {/*        </div>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                {/*<tr>*/}
                                {/*    <td className="article">썸네일 이미지</td>*/}
                                {/*    <td className="conts">*/}
                                {/*        <div className='guide_text'>*/}
                                {/*            <span className='ic_blue'></span>*/}
                                {/*            <span className='blue'>자동적용된 이미지를 노출합니다.</span>*/}
                                {/*        </div>*/}
                                {/*        <table width='700' border={1}>*/}
                                {/*            <tr>*/}
                                {/*                <th style={{width: '0.03'}}>장바구니</th>*/}
                                {/*                <th style={{width: '0.03'}}>최근본상품</th>*/}
                                {/*                <th style={{width: '0.03'}}>주문확인</th>*/}
                                {/*            </tr>*/}
                                {/*            <tr>*/}
                                {/*                <th>(미등록)</th>*/}
                                {/*                <th>(미등록)</th>*/}
                                {/*                <th>(미등록)</th>*/}
                                {/*            </tr>*/}
                                {/*        </table>*/}
                                {/*    </td>*/}
                                {/*</tr>*/}

                                <tr>
                                    <td className="article">
                                        이미지 목록 추가<span className="ic_ess" title="필수"></span><br/>
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>크기 : 500 x 500</span>
                                        </div>
                                    </td>
                                    <td className="conts">
                                        <div style={{}}>
                                            <img src='' id='img_main_img_sub1'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='main_img_sub1' size={20}
                                                   className='input_text file'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageExtra1}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='n744cc5c7084e8eac3f55e9ba2a2ad6a6_checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>상세페이지 상품정보에 노출되는 이미지1 입니다.</span>
                                        </div>
                                        <div>
                                            <img src='' id='img_main_img_sub2'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='main_img_sub2' size={20}
                                                   className='input_text file'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageExtra2}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='n9aaa08aa3c893648c6838cf13dcc3ef0_checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>상세페이지 상품정보에 노출되는 이미지2 입니다.</span>
                                        </div>
                                        <div style={{}}>
                                            <img src='' id='img_main_img_sub3'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='main_img_sub3' size={20}
                                                   className='input_text file'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageExtra3}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='n9235cebe04b2923f00430bf44b08d21e_checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>상세페이지 상품정보에 노출되는 이미지3 입니다.</span>
                                        </div>
                                        <div>
                                            <img src='' id='img_main_img_sub4'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='main_img_sub4' size={20}
                                                   className='input_text file'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageExtra4}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label><input type='checkbox'*/}
                                        {/*                  className='ncf7292b3e8d393265e7455dc6f3bd32a_checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'>
                                            <span className='ic_blue'></span>
                                            <span className='blue'>상세페이지 상품정보에 노출되는 이미지4 입니다.</span>
                                        </div>
                                        <div>
                                            <img src='' id='img_main_img_sub5'
                                                 style={{maxWidth: '300px', marginBottom: '5px', display: 'none'}}/>
                                        </div>
                                        <div>
                                            <input type='file' name='main_img_sub5' size={20}
                                                   className='input_text file'
                                                   style={{height:'30px'}}
                                                   onChange={handleImageExtra5}
                                            />
                                        </div>
                                        {/*<div style={{marginTop: '5px'}}>*/}
                                        {/*    <label>*/}
                                        {/*        <input type='checkbox'*/}
                                        {/*               className='n1e4376938a911fe9223ddc293910082d_checkbox'/>*/}
                                        {/*        외부이미지사용*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className='guide_text'><span className='ic_blue'></span><span
                                            className='blue'>상세페이지 상품정보에 노출되는 이미지5 입니다.</span></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bottom_btn_area">
                            <div className="btn_line_up_center">
                                <span className="shop_btn_pack">
                                    <input type="submit" name="" className="input_large red" value="등록하기"/>  &nbsp;
                                    <input type="button" name="" className="input_large gray"
                                           value="목록보기" onClick={() => {router.push(PAGE_ROUTES.SHOP.SHOP_PRODUCT_MANAGEMENT)}}/>
                                </span>
                            </div>
                        </div>
                        <div style={{height: '30px'}}></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductRegister;