// "use client";
// // import './styles.css'

// import "./global.d";
// import Link from "next/link";
// import HeadElement from "@/components/layouts/Header";
// import FooterElement from "@/components/layouts/Footer";
// import Slider from "@/components/layouts/Slider/users";
// import Head from "next/head";
// import { Layout, message } from "antd";
// import Navbar from "@/components/layouts/Navbar";
// import { useEffect, useState, FormEvent, useRef } from "react";
// import Image from "next/image";
// import { useMutation } from "@tanstack/react-query";
// import AUTH_API from "@/services/api/auth";
// import PAGE_ROUTES from "@/utils/constants/routes";
// import CENTER_API from "@/services/api/centers";
// import { CenterTypeProps } from "@/services/api/centers/type";
// import { LevelTypeProps } from "@/services/api/levels/type";
// import LEVEL_API from "@/services/api/levels";
// import moment from "moment-timezone";
// import USER_API from "@/services/api/users";
// import { userListState } from "@/services/recoil/user";
// import DaumPostcodeData = globalThis.DaumPostcodeData;
// import { useSetRecoilState } from "recoil";
// import { userSelectedKey } from "@/services/recoil/selectedKey";
// import ReactPaginate from "react-paginate";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowAltCircleLeft,
//   faArrowAltCircleRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { UserInfo } from "../../SalesManagement/SalesRegistrationManager/types/type";
// import { useRouter, useSearchParams } from "next/navigation";

// const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
// const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

// const Member_SalesList = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [sliderVisible, setSliderVisible] = useState(true);
//   const [isSelectedHover, setIsSelectedHover] = useState(false);
//   const [isSelectedClicked, setIsSelectedClicked] = useState(false);
//   const [messageApi, contextHolder] = message.useMessage();
//   const [emailState, setEmailState] = useState("");
//   const [nameState, setNameState] = useState("");
//   const [userListState, setUserListState] = useState<UserInfo[]>([]);
//   const [formData, setFormData] = useState();
//   const [startDate, setStartDate] = useState<Date>();
//   const [endDate, setEndDate] = useState<Date>();
//   const [recomId, setRecomId] = useState<number>(0);
//   const [centers, setCenters] = useState<CenterTypeProps[]>([]);
//   const [levels, setLevels] = useState<LevelTypeProps[]>([]);
//   const [addressDetail, setAddressDetail] = useState<DaumPostcodeData>();
//   const setSelectedKey = useSetRecoilState(userSelectedKey);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalUsers, setTotalUsers] = useState<number>(0);
//   const [perPage, setPerPage] = useState<number>(10);
//   const [searchSelected, setSearchSelected] = useState<number>(0);
//   const [id, setId] = useState<String>();

//   const { mutate: mutateLevel } = useMutation({
//     mutationFn: LEVEL_API.getList,
//     onSuccess: async (values: any) => {
//       setLevels(values);
//       console.log(JSON.stringify(levels));
//     },
//     onError: (error: any) => {
//       if (error.response.status === 401) {
//         router.push(PAGE_ROUTES.AUTH.LOGIN);
//       }
//     },
//   });
//   const { isPending, mutate, isSuccess, isError } = useMutation({
//     mutationFn: USER_API.getList,
//     onSuccess: async (values: any) => {
//       setUserListState(values.users);
//       setTotalUsers(values.total);
//       console.log(JSON.stringify(userListState));
//     },

//     onError: (error: any) => {
//       // const errorType = error.response.data.errors[0]
//       console.log(error);
//       if (error.response.status === 401) {
//         router.push(PAGE_ROUTES.AUTH.LOGIN);
//       }
//       // messageApi.open({
//       //     type: 'error',
//       //     content: 't(`errorMessages.${errorType}`)',
//       // })
//     },
//   });
//   useEffect(() => {
//     const _id = searchParams.get("id") || undefined;
//     setId(_id);
//     console.log(_id);
//     mutate({ page: currentPage, limit: perPage });
//   }, []);
//   useEffect(() => {
//     mutateLevel();
//   }, []);

//   const onSubmit = async (formData: FormData) => {
//     const memberId = formData.get("pass_id");
//     const name = formData.get("pass_name");
//     const level = formData.get("sst");
//     const minCash = formData.get("minCash");
//     const maxCash = formData.get("maxCash");
//     const id = formData.get("id");
//     // const email = formData.get('email');
//     // const account = formData.get('pass_account');
//     // const phone = formData.get('pass_htel');
//     const directInput = formData.get("stx")?.toString() || "";
//     const page = formData.get("page");
//     const limit = formData.get("limit");

//     const params = {
//       memberId: memberId?.toString() || "",
//       name: name?.toString(),
//       level: level ? Number(level.toString()) : 0,
//       minCash: minCash ? Number(minCash.toString()) : 0,
//       maxCash: maxCash ? Number(maxCash.toString()) : 0,
//       id: id ? Number(id.toString()) : 0,
//       startDate: startDate,
//       endDate: endDate,
//       email: searchSelected == 1 ? directInput : "",
//       phone: searchSelected == 2 ? directInput : "",
//       account: searchSelected == 3 ? directInput : "",
//       page: currentPage,
//       limit: perPage,
//     };
//     console.log(params);
//     mutate(params);

//     // Handle response if necessary
//     // const data = await response.json()
//     // ...
//   };

//   useEffect(() => {
//     setSelectedKey(0);
//   }, []);
//   const sliderToggleHandler = () => {
//     setSliderVisible(!sliderVisible);
//   };
//   const selectionHoverHandler = (isHover: boolean) => {
//     setIsSelectedHover(isHover);
//   };
//   const selectionClickedHandler = (isClicked: boolean) => {
//     setIsSelectedClicked(isClicked);
//   };

//   const paginationHandler = (selectedItem: { selected: number }) => {
//     const page = selectedItem ? selectedItem.selected + 1 : 0;
//     mutate({ page: page, limit: perPage });
//   };

//   return (
//     // <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
//     //      style={{background: "#f0f0f0"}}>
//     <div
//       className={sliderVisible ? "container" : "container_hide"}
//       id="depth2_leftmenu"
//       style={{ background: "#f0f0f0" }}
//     >
//       <Slider />
//       <div className="content_section">
//         <div className="content_section_fix" style={{ background: "#fff" }}>
//           <div className="open_close">
//             <span
//               className="btn_close"
//               id="open_close_btn_close"
//               title="메뉴닫기"
//               style={{ display: sliderVisible ? "block" : "none" }}
//               onClick={sliderToggleHandler}
//             ></span>
//             <span
//               className="btn_open"
//               id="open_close_btn_open"
//               title="메뉴열기"
//               style={{ display: !sliderVisible ? "block" : "none" }}
//               onClick={sliderToggleHandler}
//             ></span>
//           </div>

//           <div className="common_ajax_proc"></div>

//           {/* /*내부페이지 탭메뉴 시작*/}
//           <div className="new_deny_tab">
//             <div className="tab_box">
//               <ul>
//                 <li className="hit">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_MODIFY + "?id=" + id}
//                     className="tab"
//                   >
//                     회원정보
//                   </a>
//                 </li>
//                 <li className="">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_INCENTIVE_LIST + "?id=" + id}
//                     className="tab"
//                   >
//                     수당내역
//                   </a>
//                 </li>

//                 <li className="">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_SALES_LIST + "?id=" + id}
//                     className="tab"
//                   >
//                     매출내역
//                   </a>
//                 </li>

//                 <li className="">
//                   <a className="tab">추천통계</a>
//                 </li>

//                 <li className="">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_SPONSOR_LIST + "?id=" + id}
//                     className="tab"
//                   >
//                     후원통계
//                   </a>
//                 </li>

//                 <li className="">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_DIVIDENT_LIST + "?id=" + id}
//                     className="tab"
//                   >
//                     배당한도
//                   </a>
//                 </li>

//                 <li className="">
//                   <a
//                     href={PAGE_ROUTES.USERS.USER_PAYMENT_LIST + "?id=" + id}
//                     className="tab"
//                   >
//                     정산지급
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div
//               className="new_order_data_foot"
//               style={{ width: "100%", height: "50px", marginTop: "5px" }}
//             >
//               <div className="inner_sum_box" style={{ float: "right" }}>
//                 <ul>
//                   <li className="txt">
//                     회원 PV <span className="value">10,000,000 </span>
//                   </li>
//                   <li className="txt">
//                     회원매출<span className="value">12,000,000</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="inner_sum_box" style={{ float: "left" }}>
//                 <ul>
//                   <li className="txt">
//                     ykj10<span className="value"></span>유금자
//                   </li>
//                   <li className="txt">
//                     수당<span className="value">0</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* /*내부페이지 탭메뉴 끝*/}

//           <div className="form_box_area">
//             <table
//               border={0}
//               cellPadding={0}
//               cellSpacing="0"
//               width="100%"
//               style={{ borderCollapse: "collapse" }}
//             >
//               <tbody>
//                 <tr style={{ height: "40", alignItems: "left" }}>
//                   <td style={{ padding: "5px" }}>
//                     ※ 추천 합계 :{" "}
//                     <b style={{ color: "#e16007", fontWeight: "bold" }}></b>{" "}
//                     원&nbsp;&nbsp;&nbsp;&nbsp; 전체 :{" "}
//                     <b style={{ color: "#e16007", fontWeight: "bold" }}>1</b> 건
//                     조회
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <div className="ctl_btn_area">
//             <span className="shop_btn_pack">
//               <a
//                 href="javascript:select_send('excel_center');"
//                 className="small white"
//                 title="선택엑셀저장"
//               >
//                 선택 엑셀다운로드
//               </a>
//             </span>
//             <span className="shop_btn_pack">
//               <span className="blank_3"></span>
//             </span>
//             <span className="shop_btn_pack">
//               <a
//                 href="javascript:search_send('excel_center');"
//                 className="small white"
//                 title="검색엑셀저장"
//               >
//                 검색 전체다운로드 (303)
//               </a>
//             </span>
//             <span className="shop_btn_pack">
//               <span className="blank_3"></span>
//             </span>
//             <span className="shop_btn_pack">
//               <span className="blank_3"></span>
//             </span>
//           </div>

//           <table className="list_TB" summary="리스트기본">
//             <thead>
//               <tr>
//                 <th scope="col" className="colorset">
//                   <input
//                     type="checkbox"
//                     name="chkall"
//                     value="1"
//                     onClick={() => {}}
//                   />
//                 </th>
//                 <th scope="col" className="colorset">
//                   NO
//                 </th>

//                 <th scope="col" className="colorset">
//                   <a href="/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&amp;app_mode=popup&amp;page=&amp;filed=id&amp;orderby=asc">
//                     <u>아이디</u>
//                   </a>
//                 </th>

//                 <th scope="col" className="colorset">
//                   <a href="/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&amp;app_mode=popup&amp;page=&amp;filed=owner_code&amp;orderby=asc">
//                     <u>회원명</u>
//                   </a>
//                 </th>

//                 <th scope="col" className="colorset">
//                   <a href="/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&amp;app_mode=popup&amp;page=&amp;filed=memgrade&amp;orderby=asc">
//                     <u>레벨</u>
//                   </a>
//                 </th>
//                 {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&app_mode=popup&page=&filed=mb_card_point&orderby=asc'><u>수당</u></a></th>--> */}

//                 {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&app_mode=popup&page=&filed=total_price&orderby=asc'><u>매출금액</u></a></th>--> */}
//                 <th scope="col" className="colorset">
//                   <a href="/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&amp;app_mode=popup&amp;page=&amp;filed=total_pv&amp;orderby=asc">
//                     <u> 회원매출</u>
//                   </a>
//                 </th>
//                 {/* <!--<th scope="col" className="colorset"><u>배당자격 </u></th>--> */}

//                 <th scope="col" className="colorset">
//                   <u>직추천(명)</u>
//                 </th>

//                 {/* <!--
// 								<th scope="col" className="colorset"><u>좌(매출)</u></th>
// 								<th scope="col" className="colorset"><u>우(매출)</u></th>
// --> */}
//                 <th scope="col" className="colorset">
//                   <u>하위인원</u>
//                 </th>
//                 <th scope="col" className="colorset">
//                   <u>하위매출</u>
//                 </th>
//                 <th scope="col" className="colorset">
//                   <u>조직도</u>
//                 </th>
//                 {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&app_mode=popup&page=&filed=signdate&orderby=asc'><u>최근날짜</u></a></th>--> */}
//                 <th scope="col" className="colorset">
//                   <a href="/myAdmin/_entershop.bonus_no_assets_recomid.php?code=&amp;app_mode=popup&amp;page=&amp;filed=buymethod&amp;orderby=asc">
//                     <u>관리</u>
//                   </a>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td colSpan={12} height="40">
//                   내용이 없습니다.
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           {/* 페이지네이트 */}

//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               margin: "0 auto",
//             }}
//           >
//             <ReactPaginate
//               previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
//               nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
//               breakLabel={"..."}
//               breakClassName={"break-me"}
//               activeClassName={"active"}
//               containerClassName={"pagination"}
//               // subContainerClassName={'pages pagination'}

//               initialPage={currentPage - 1}
//               pageCount={Math.ceil(totalUsers / perPage)}
//               marginPagesDisplayed={2}
//               pageRangeDisplayed={5}
//               onPageChange={paginationHandler}
//             />
//           </div>

//           <div style={{ height: "30px" }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Member_SalesList;
"use client";
import { CreatedAtType, UserInfo } from "@/utils/types/type";
import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useMutation } from "@tanstack/react-query";
import USER_API from "@/services/api/users";
import LEVEL_API from "@/services/api/levels";
import { LevelTypeProps } from "@/services/api/levels/type";
import { useRouter } from "next/navigation";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useSetRecoilState } from "recoil";
import { userSelectedKey } from "@/services/recoil/selectedKey";

const MemberLookup = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [sliderVisible, setSliderVisible] = useState(true);
  const [isSelectedHover, setIsSelectedHover] = useState(false);
  const [isSelectedClicked, setIsSelectedClicked] = useState(false);
  const [userListState, setUserListState] = useState<UserInfo[]>([]);
  const [createdAt, setCreatedAt] = useState<CreatedAtType>({});
  const [levels, setLevels] = useState<LevelTypeProps[]>([]);
  const [memberId, setMemberId] = useState<string>();
  const [centerId, setCenterId] = useState<number>(0);
  const [email, setEmail] = useState<string>();
  const [idState, setIdState] = useState<number>(0);
  const [nameState, setNameState] = useState<string>("");
  const [userName, setUserName] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(2);
  const setSelectedKey = useSetRecoilState(userSelectedKey);
  const { mutate: mutateLevel } = useMutation({
    mutationFn: LEVEL_API.getList,
    onSuccess: async (values: any) => {
      setLevels(values);
      console.log(JSON.stringify(levels));
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });
  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationFn: USER_API.getList,
    onSuccess: async (values: any) => {
      setUserListState(values.users);
      setTotalUsers(values.total);
      console.log(JSON.stringify(userListState));
    },

    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });
  useEffect(() => {
    setSelectedKey(0);
    mutateLevel();
  }, []);

  const onSubmit = async (formData: FormData) => {
    const memberId = formData.get("pass_id");
    const name = formData.get("pass_name");
    const level = formData.get("sst");

    const params = {
      memberId: memberId?.toString(),
      name: name?.toString(),
      level: level ? Number(level.toString()) : 0,
      page: 0,
      limit: 0,
    };
    console.log(params);
    mutate(params);

    // Handle response if necessary
    // const data = await response.json()
    // ...
  };

  const userListDisplay = () => {
    if (userListState?.length > 0) {
      return userListState.map((item, index) => {
        return (
          <tr
            key={item.id}
            className="selectToggle"
            style={{ cursor: "pointer" }}
          >
            <td>{index + 1}</td>
            <td>
              <input
                id="isRelation"
                type="radio"
                name="id"
                value={item.id}
                onChange={() => {
                  setIdState(item?.id || 0);
                  setNameState(item?.name || "");
                }}
              />
            </td>
            <td>{item.member_id}</td>
            <td>{item.sponid}</td>

            <td>{item.name}</td>
            <td>{item.center.name}</td>
            <td>{item.Level.title}</td>

            <td style={{ textAlign: "left" }}></td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan={10} height={40}>
          검색을 해주세요.
        </td>
      </tr>
    );
  };
  return (
    <html>
      <body>
        <div id="wrap" style={{ background: "#fff" }}>
          <div className="content_section">
            <div className="content_section_fix" style={{ background: "#fff" }}>
              <form name="relationForm" method="get" action={onSubmit}>
                <input type="hidden" name="formname" value="" />
                <input type="hidden" name="relation_procode" value="" />
                <input type="hidden" name="code" value="" />
                <input type="hidden" name="mode" value="search" />

                <input
                  type="hidden"
                  name="q1"
                  value="mode=&amp;app_mode=popup"
                />
                <input type="hidden" name="page" value="" />
                <div className="form_box_area">
                  <table className="form_TB" summary="검색항목">
                    <tbody>
                      <tr>
                        <td className="article">아이디</td>
                        <td className="conts">
                          <input
                            type="text"
                            name="pass_id"
                            className="input_text"
                          />
                        </td>

                        <td className="article">회원명</td>
                        <td className="conts">
                          <input
                            type="text"
                            name="pass_name"
                            className="input_text"
                          />
                        </td>
                        <td className="article">레벨</td>
                        <td className="conts">
                          <select name="sst">
                            <option value="">레벨</option>
                            {levels?.length > 0 &&
                              levels.map((item: any, index) => {
                                return (
                                  <option key={item.id} value={item.id}>
                                    {item.title}
                                  </option>
                                );
                              })}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="top_btn_area">
                    <div className="btn_line_up_center">
                      <span className="shop_btn_pack btn_input_blue">
                        <input
                          type="submit"
                          className="input_medium"
                          title="검색"
                          value="검색"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <div className="content_section_inner">
                <table className="list_TB" summary="리스트기본">
                  <colgroup>
                    <col width="60px" />
                    <col width="60px" />
                    <col width="220px" />
                    <col width="*" />
                    <col width="150px" />
                    <col width="150px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="colorset">
                        NO
                      </th>
                      <th scope="col" className="colorset">
                        선택
                      </th>
                      <th scope="col" className="colorset">
                        아이디
                      </th>
                      <th scope="col" className="colorset">
                        회원명(대표자)
                      </th>
                      <th scope="col" className="colorset">
                        상호명
                      </th>

                      <th scope="col" className="colorset">
                        등급
                      </th>
                      <th scope="col" className="colorset">
                        추천인
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*{!userListState?.length && (*/}
                    {/*    <tr>*/}
                    {/*        <td colSpan={10} height={40}>검색을 해주세요.</td>*/}
                    {/*    </tr>*/}
                    {/*)}*/}
                    {userListDisplay()}
                  </tbody>
                </table>
              </div>
              <div className="top_btn_area">
                <div className="btn_line_up_center">
                  <span className="shop_btn_pack btn_input_blue">
                    <input
                      type="button"
                      className="input_medium"
                      title="선택적용"
                      value="선택적용"
                      onClick={() => {
                        const recomid_hidden =
                          window.opener.document.getElementById(
                            "recomid_hidden"
                          );
                        recomid_hidden.value = idState;
                        const recomid_display =
                          window.opener.document.getElementById(
                            "recomid_display"
                          );
                        recomid_display.value = nameState;
                        console.log(recomid_hidden.value);
                        window.opener.focus();
                        window.close();
                      }}
                    />
                  </span>
                  <span className="shop_btn_pack">
                    <span className="blank_3"></span>
                  </span>
                  <span className="shop_btn_pack btn_input_blue">
                    <input
                      type="button"
                      className="input_medium"
                      title="창닫기"
                      value="창닫기"
                      onClick={() => {
                        window.opener.focus();
                        window.close();
                      }}
                    />
                  </span>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MemberLookup;
