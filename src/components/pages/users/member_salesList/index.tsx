'use client';
// import './styles.css'

import './global.d'
import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/users'
import Head from 'next/head'
import { Layout, message } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState, FormEvent, useRef } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import AUTH_API from "@/services/api/auth";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import CENTER_API from "@/services/api/centers";
import { CenterTypeProps } from "@/services/api/centers/type";
import { LevelTypeProps } from "@/services/api/levels/type";
import LEVEL_API from "@/services/api/levels";
import moment from "moment-timezone";
import USER_API from "@/services/api/users";
import { userListState } from "@/services/recoil/user";
import DaumPostcodeData = globalThis.DaumPostcodeData;
import { useSetRecoilState } from "recoil";
import { userSelectedKey } from "@/services/recoil/selectedKey";
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from '../../SalesManagement/SalesRegistrationManager/types/type';
import { UserQueryType } from "@/services/api/users/type";
import SALEREGISTER_API from "@/services/api/saleregister";
import { DepositType } from "@/utils/types/type";
import { it } from "date-fns/locale";

const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const Member_SalesList = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    const [messageApi, contextHolder] = message.useMessage()
    const [emailState, setEmailState] = useState('');
    const [nameState, setNameState] = useState('');
    const [userListState, setUserListState] = useState<UserInfo[]>([]);
    const [formData, setFormData] = useState()
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [recomId, setRecomId] = useState<number>(0)
    const [centers, setCenters] = useState<CenterTypeProps[]>([])
    const [levels, setLevels] = useState<LevelTypeProps[]>([])
    const [addressDetail, setAddressDetail] = useState<DaumPostcodeData>()
    const setSelectedKey = useSetRecoilState(userSelectedKey)
    const [saleListState, setSaleListState] = useState<DepositType[]>([])
    const [selectedListState, setSelectedListState] = useState<number[]>([])
    const [totalSales, setTotalSales] = useState<number>(0)
    const [orderIdState, setOrderIdState] = useState<string>('')
    const [memoState, setMemoState] = useState<string>('')
    const [userNameState, setUserNameState] = useState<string>('')
    const [idState, setIdState] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(10)
    const [searchSelected, setSearchSelected] = useState<number>(0)

    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: SALEREGISTER_API.getListByUserId,
            onSuccess: async (values: any) => {
                setSaleListState(values.deposits);
                setTotalSales(values.total);
                setSelectedListState([])
                console.log(JSON.stringify(saleListState))
            },

            onError: (error: any) => {
                // const errorType = error.response.data.errors[0]
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
                // messageApi.open({
                //     type: 'error',
                //     content: 't(`errorMessages.${errorType}`)',
                // })
            },
        }
    )

    const paginationHandler = (selectedItem: { selected: number }) => {
        const page = selectedItem ? selectedItem.selected+1 : 0;
        mutate({
            id: Number(idState),
            page: page,
            limit: perPage})
    }

    useEffect(() => {
        const id = searchParams.get("id") || undefined;
        mutate({ id:Number(id), page: currentPage, limit: perPage });
    }, [searchParams]);

    const onSubmit = async (formData: FormData) => {
        const memberId = formData.get('pass_id');
        const name = formData.get('pass_name');
        const level = formData.get('sst');
        const minCash = formData.get('minCash');
        const maxCash = formData.get('maxCash');
        const id = formData.get('id');
        // const email = formData.get('email');
        // const account = formData.get('pass_account');
        // const phone = formData.get('pass_htel');
        const directInput = formData.get('stx')?.toString() || '';
        const page = formData.get('page');
        const limit = formData.get('limit');

        const params = {
            memberId: memberId?.toString() || '',
            name: name?.toString(),
            level: level ? Number(level.toString()) : 0,
            minCash: minCash ? Number(minCash.toString()) : 0,
            maxCash: maxCash ? Number(maxCash.toString()) : 0,
            id: id ? Number(id.toString()) : 0,
            startDate: startDate,
            endDate: endDate,
            email: searchSelected == 1 ? directInput : '',
            phone: searchSelected == 2 ? directInput : '',
            account: searchSelected == 3 ? directInput : '',
            page: currentPage,
            limit: perPage,
        }
        console.log(params)
        mutate(params);

        // Handle response if necessary
        // const data = await response.json()
        // ...
    }

    useEffect(() => {
        setSelectedKey(0)
    }, []);
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
            style={{ background: "#f0f0f0" }}>
            <Slider />
            <div className="content_section">
                <div className="content_section_fix" style={{ background: '#fff' }}>

                    <div className="open_close">
                        <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                            style={{ display: sliderVisible ? "block" : "none" }}
                            onClick={sliderToggleHandler}
                        >

                        </span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                            style={{ display: !sliderVisible ? "block" : "none" }}
                            onClick={sliderToggleHandler}
                        ></span>
                    </div>

                    <div className="common_ajax_proc"></div>

                    {/* /*내부페이지 탭메뉴 시작*/}
                    <div className="new_deny_tab">
                        <div className="tab_box">
                            <ul>

                            <li className="hit">
                                    <a href={PAGE_ROUTES.USERS.USER_MODIFY + '?id=' + id}
                                        className="tab">회원정보</a>
                                </li>
                                <li className="">
                                    <a href={PAGE_ROUTES.USERS.USER_INCENTIVE_LIST + '?id=' + id}
                                        className="tab">수당내역</a>
                                </li>
                                <li className="">
                                    <a className="tab">매출내역</a>
                                </li>
                                <li className="">
                                    <a href={PAGE_ROUTES.USERS.USER_RECOMMENDED_LIST + '?id=' + id}
                                        className="tab">추천통계</a>
                                </li>
                                <li className="">
                                    <a href={PAGE_ROUTES.USERS.USER_SPONSOR_LIST + '?id=' + id}
                                        className="tab">후원통계</a>
                                </li>
                                <li className="">
                                    <a href={PAGE_ROUTES.USERS.USER_DIVIDENT_LIST + '?id=' + id}
                                        className="tab">배당한도</a>
                                </li>

                                <li className="">
                                    <a href={PAGE_ROUTES.USERS.USER_PAYMENT_LIST + '?id=' + id}
                                        className="tab">정산지급</a>
                                </li>
                            </ul>
                        </div>

                        <div className="new_order_data_foot" style={{ width: '100%', height: '50px', marginTop: "5px" }}>
                            <div className="inner_sum_box" style={{ float: "right" }}>
                                <ul>
                                    <li className="txt">회원 PV <span className="value">10,000,000 </span></li>
                                    <li className="txt">회원매출<span className="value">12,000,000</span></li>
                                </ul>
                            </div>
                            <div className="inner_sum_box" style={{ float: "left" }}>
                                <ul>
                                    <li className="txt">ykj10<span className="value"></span>유금자</li>
                                    <li className="txt">수당<span className="value">0</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /*내부페이지 탭메뉴 끝*/}
                    <div className="form_box_area">

<table border={0} cellPadding={0} cellSpacing="0" width="100%" style={{borderCollapse:"collapse"}}>
<tbody>
    <tr style={{height:"40", alignItems:"left"}} > 
    <td style={{padding:"5px"}}>
        ※ 보너스 합계 :  <b style={{color: '#e16007', fontWeight: 'bold'}}></b>원&nbsp;&nbsp;&nbsp;&nbsp;
       
        {/* <!-- 수정 및 추가 by mview
        쿠폰할인 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        적립금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        예치금결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        포인트결제 : <b><font color="4c64ab">0</font></b>원&nbsp;&nbsp;<font color='999999'>|</font>&nbsp;&nbsp;
        배송비결제 : <b><font color="4c64ab">0</font></b>원
        --> */}
전체 : <b style={{color: '#e16007', fontWeight: 'bold'}}>1</b> 건  조회

    </td>
</tr>
</tbody></table>
</div>

                    <div className="ctl_btn_area">
                        <span className="shop_btn_pack"><a href="javascript:select_send('excel_center');" className="small white" title="선택엑셀저장">선택 엑셀다운로드</a></span>
                        <span className="shop_btn_pack"><span className="blank_3"></span></span>
                        <span className="shop_btn_pack"><a href="javascript:search_send('excel_center');" className="small white" title="검색엑셀저장">검색 전체다운로드 (303)</a></span>
                        <span className="shop_btn_pack"><span className="blank_3"></span></span>
                        <span className="shop_btn_pack"><span className="blank_3"></span></span>
                    </div>

                    <table className="list_TB" summary="리스트기본">

                        <thead>
                            <tr>
                                <th scope="col" className="colorset">
                                    <input type="checkbox" name="allchk" /></th>
                                <th scope="col" className="colorset">NO</th>
                                <th scope="col" className="colorset">주문번호</th>
                                <th scope="col" className="colorset">아이디</th>
                                <th scope="col" className="colorset">성명</th>
                                <th scope="col" className="colorset">소속센터</th>
                                <th scope="col" className="colorset">내용</th>
                                <th scope="col" className="colorset">매출구분</th>

                                {/*<th scope="col" className="colorset">상품코드</th>*/}
                                {/*<th scope="col" className="colorset">상품명</th>*/}

                                <th scope="col" className="colorset">매출금액</th>
                                <th scope="col" className="colorset"> PV </th>
                                {/* <!--<th scope="col" className="colorset">확정매출</th>--> */}
                                <th scope="col" className="colorset">상태</th>
                                <th scope="col" className="colorset">등록일</th>
                                <th scope="col" className="colorset">수당</th>
                                <th scope="col" className="colorset">재구매</th>

                            </tr>
                        </thead>
                        <tbody>
                        {saleListState?.length <= 0? (<tr>
                            <td colSpan={14} height="40">내용이 없습니다.</td>
                        </tr>) : (
                            saleListState.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input type="checkbox" name="chk_id[]" value="66" className="class_id"/>
                                        </td>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>
                                            <a
                                               onClick={() => {
                                                   router.push(PAGE_ROUTES.USERS.USER_MODIFY + '?id=' + item.id);
                                               }}>
                                                <b>{item.user.member_id}</b>
                                            </a>
                                        </td>
                                        <td>{item.user.name}</td>
                                        <td>본사</td>
                                        <td>{item.memo}</td>
                                        <td>{item.method}</td>
                                        {/*<td style={{textAlign: 'center'}}></td>*/}
                                        {/*<td>*/}
                                        {/*    <span className="shop_state_pack"><span className="gray">신규</span></span>*/}
                                        {/*</td>*/}
                                        <td>{item.amount} 원</td>
                                        <td>{item.amount} PV</td>
                                        <td>
                                            <span style={item.status == 0? {background: 'orange', color: 'white'} : item.status == 1? {background: 'green', color: 'white'} : {background: 'gray', color: 'white'}} className="shop_state_pack">
                                                <span>{item.status == 0? '대기' : item.status == 1? '승인' : '거절'}</span>
                                            </span>
                                        </td>
                                        <td>{item.createdAt?.substring(0, 10)}</td>
                                        <td>
                                            <span className="shop_state_pack"><span className="blue">정상</span></span>
                                        </td>
                                        <td>
                                            <a onClick={() => {
                                                router.push(PAGE_ROUTES.SALES_MANAGEMENT.SALES_REGISTRATION + '?id=' + item.user.id + '&name=' + item.user.name);
                                            }}
                                               className="small red" title="재구매">
                                                <img src="/images/plus_more_red.png"/>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        )}

                        </tbody>
                    </table>

                    {/* 페이지네이트 */}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                        <ReactPaginate
                            previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
                            nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            activeClassName={'active'}
                            containerClassName={'pagination'}
                            // subContainerClassName={'pages pagination'}

                            initialPage={currentPage - 1}
                            pageCount={Math.ceil(totalUsers / perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={paginationHandler}
                        />
                    </div>




                    <div style={{ height: '30px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Member_SalesList;