"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import ReactPaginate from "react-paginate";
import { CreatedAtType, UserInfo } from "@/utils/types/type";
import Slider from "@/components/layouts/Slider/users";
import Head from "next/head";
import { Layout, message } from "antd";
import Navbar from "@/components/layouts/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AUTH_API from "@/services/api/auth";
import USER_API from "@/services/api/users";
import { getFullTime } from "@/utils/helper";
import LEVEL_API from "@/services/api/levels";
import { LevelTypeProps } from "@/services/api/levels/type";
import { useRouter, useSearchParams } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { userSelectedKey } from "@/services/recoil/selectedKey";
import { Router } from "next/router";
import routes from "@/utils/constants/routes";
import { API_ENDPOINTS } from "@/services/api/endPoint";
import axios from "axios";

const UserManagement = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
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
  const [bankAccount, setBankAccount] = useState<string>();
  const [mobilephone, setMobilePhone] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const setSelectedKey = useSetRecoilState(userSelectedKey);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isDatePickerOpen1, setIsDatePickerOpen1] = useState(false);
  const [xColor1, setXColor1] = useState<number>(0);
  const [yColor1, setYColor1] = useState<number>(0);
  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false);
  const [xColor2, setXColor2] = useState<number>(0);
  const [yColor2, setYColor2] = useState<number>(0);
  const [searchSelected, setSearchSelected] = useState<number>(0);
  const queryClient = useQueryClient();
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
      ``;
    },
  });

  const handleDeleteUser = async (memberId: string | number | undefined) => {
    console.log(`Deleting user ID:${memberId}`);
    try {
      const response = await fetch("http://localhost:3003/api/v1/user/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: memberId }), // Use member_id here
      });

      if (response.ok) {
        setUserListState(
          (prevList) => prevList.filter((user) => user.member_id !== memberId) // Filter by member_id
        );
        messageApi.success("User deleted successfully");
      } else {
        messageApi.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
      messageApi.error("An error occurred while deleting the user");
    }
  };
  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationFn: USER_API.getList,

    onSuccess: async (values: any) => {
      console.log("getlistvalues", values);
      setUserListState(values.users);
      setTotalUsers(values.total);
      console.log(JSON.stringify(userListState));
    },

    onError: (error: any) => {
      console.log(error);
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
      // messageApi.open({
      //     type: 'error',
      //     content: 't(`errorMessages.${errorType}`)',
      // })
    },
  });

  useEffect(() => {
    mutate({ page: currentPage, limit: perPage });
  }, []);
  useEffect(() => {
    mutateLevel();
  }, []);

  const onDateChangeHandle1 = (e: any) => {
    setIsDatePickerOpen1(!isDatePickerOpen1);
    setIsDatePickerOpen2(false);
    setStartDate(e);
  };
  const onDateChangeHandle2 = (e: any) => {
    setIsDatePickerOpen2(!isDatePickerOpen2);
    setIsDatePickerOpen1(false);
    setEndDate(e);
  };

  const onSubmit = async (formData: FormData) => {
    const memberId = formData.get("pass_id");
    const name = formData.get("pass_name");
    const level = formData.get("sst");
    const minCash = formData.get("minCash");
    const maxCash = formData.get("maxCash");
    const id = formData.get("id");
    // const email = formData.get('email');
    // const account = formData.get('pass_account');
    // const phone = formData.get('pass_htel');
    const directInput = formData.get("stx")?.toString() || "";
    const page = formData.get("page");
    const limit = formData.get("limit");

    const params = {
      memberId: memberId?.toString() || "",
      name: name?.toString(),
      level: level ? Number(level.toString()) : 0,
      minCash: minCash ? Number(minCash.toString()) : 0,
      maxCash: maxCash ? Number(maxCash.toString()) : 0,
      id: id ? Number(id.toString()) : 0,
      startDate: startDate,
      endDate: endDate,
      email: searchSelected == 1 ? directInput : "",
      phone: searchSelected == 2 ? directInput : "",
      account: searchSelected == 3 ? directInput : "",
      page: currentPage,
      limit: perPage,
    };
    console.log(params);
    mutate(params);

    // Handle response if necessary
    // const data = await response.json()
    // ...
  };

  useEffect(() => {
    setSelectedKey(0);
  }, []);
  const sliderToggleHandler = () => {
    setSliderVisible(!sliderVisible);
  };
  const selectionHoverHandler = (isHover: boolean) => {
    setIsSelectedHover(isHover);
  };
  const selectionClickedHandler = (isClicked: boolean) => {
    setIsSelectedClicked(isClicked);
  };

  const paginationHandler = (selectedItem: { selected: number }) => {
    const page = selectedItem ? selectedItem.selected + 1 : 0;
    mutate({ page: page, limit: perPage });
  };
  return (
    // <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
    //      style={{background: "#f0f0f0"}}>
    <div
      className={sliderVisible ? "container" : "container_hide"}
      id="depth2_leftmenu"
      style={{ background: "#f0f0f0" }}
    >
      <Slider />
      <div className="content_section">
        <div className="content_section_fix" style={{ background: "#fff" }}>
          <div className="open_close">
            <span
              className="btn_close"
              id="open_close_btn_close"
              title="메뉴닫기"
              style={{ display: sliderVisible ? "block" : "none" }}
              onClick={sliderToggleHandler}
            ></span>
            <span
              className="btn_open"
              id="open_close_btn_open"
              title="메뉴열기"
              style={{ display: !sliderVisible ? "block" : "none" }}
              onClick={sliderToggleHandler}
            ></span>
          </div>
          <div className="title_area">
            <span className="icon"></span>
            <span className="title">회원 통합관리</span>
            <span className="location">
              홈 &gt; 회원관리 &gt; 회원 통합관리
            </span>
          </div>

          <div className="common_ajax_proc"></div>

          <form name="fsearch" method="post" action={onSubmit}>
            <input type="hidden" name="code" value="" />
            <input type="hidden" name="app_mode" value="" />
            <input type="hidden" name="pass_recomid" value="" />
            <input type="hidden" name="mb2_depscode" value="" />
            <input type="hidden" name="depslevel" value="" />
            <input type="hidden" name="mode" value="search" />
            <div className="form_box_area">
              <table className="form_TB" summary="검색항목">
                <colgroup>
                  <col width="100px" />
                  <col width="200px" />
                  <col width="100px" />
                  <col width="200px" />
                  <col width="100px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    {/* <td className="article">캐시</td>
                                    <td className="conts">

                                        <input type="number" name='p_schsh' style={{width: '70px'}}
                                               className="input_text"/>
                                        ~
                                        <input type="number" name="p_dchsh" style={{width: '69px'}}
                                                className="input_text"/>

                                    </td> */}
                    <td className="article">가입날짜</td>
                    <td className="conts" colSpan={3}>
                      <div className="btn_line_up_left">
                        <input
                          type="text"
                          name="j_sdate"
                          style={{ width: "100px", textAlign: "center" }}
                          className="input_text"
                          id="time_start"
                          value={
                            startDate ? format(startDate, "yyyy-MM-dd") : ""
                          }
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setXColor1(e.clientX);
                            setYColor1(e.clientY + 15);
                            setIsDatePickerOpen1(!isDatePickerOpen1);
                            setIsDatePickerOpen2(false);
                          }}
                        />
                        ~
                        <input
                          type="text"
                          name="j_ddate"
                          style={{ width: "100px", textAlign: "center" }}
                          className="input_text"
                          id="time_end"
                          value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setXColor2(e.clientX);
                            setYColor2(e.clientY + 15);
                            setIsDatePickerOpen2(!isDatePickerOpen2);
                            setIsDatePickerOpen1(false);
                          }}
                        />
                      </div>
                      {/* <div className="btn_line_up_left">
                                                <span className="shop_btn_pack"> &nbsp; <button type="button"
                                                                                        className='input_small gray'
                                                                                        onClick={() => {
                                                                                        }}
                                                                                        style={{cursor: 'pointer'}}>어제</button>
                                                                </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>이번주</button>
                                                    </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>7일간</button>
                                                    </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>지난달</button>
                                                    </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>이번달</button>
                                                    </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>30일간</button>
                                                    </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>60일간</button>
                                                </span>
                                            <span className="shop_btn_pack">&nbsp;<button type="button"
                                                                                    className='input_small gray'
                                                                                    onClick={() => {
                                                                                    }}
                                                                                    style={{cursor: 'pointer'}}>90일간</button></span>
                                        </div> */}
                    </td>
                    {/* <td className="article">구좌보기선택</td>
                                    <td className="conts">
                                        <input type="radio" name='avatar_search_sel' id="avatar_search_sel" value=""
                                               checked={true}/>
                                        <label style={{height: '18px'}}>전체</label>&nbsp;
                                        <input type="radio" name='avatar_search_sel' id="avatar_search_sel"
                                               value="only"/>
                                        <label style={{height: '18px'}}>대표구좌</label>
                                    </td> */}
                  </tr>
                  <tr>
                    <td className="article">레벨</td>
                    <td className="conts">
                      <select name="sst" style={{ width: "48%" }}>
                        <option value="">레벨</option>
                        {levels.length &&
                          levels.map((item: any) => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.title}
                              </option>
                            );
                          })}
                        {/*<option value='20'>일반회원</option>*/}
                        {/*<option value='19'>정회원</option>*/}
                        {/*<option value='18'>정회원</option>*/}
                        {/*<option value='17'>정회원</option>*/}
                        {/*<option value='16'>정회원</option>*/}
                        {/*<option value='11'>팀장</option>*/}
                        {/*<option value='10'>1스타</option>*/}
                        {/*<option value='9'>2스타</option>*/}
                        {/*<option value='8'>3스타</option>*/}
                        {/*<option value='7'>4스타</option>*/}
                        {/*<option value='6'>5스타</option>*/}
                      </select>
                    </td>
                    <td className="article">직접선택</td>
                    <td className="conts">
                      <select
                        name="sfl"
                        style={{ width: "100%" }}
                        onChange={(e) => {
                          setSearchSelected(
                            e.target.value == "email"
                              ? 1
                              : e.target.value == "pass_htel"
                              ? 2
                              : e.target.value == "pass_account"
                              ? 3
                              : 0
                          );
                        }}
                      >
                        <option value="">선택</option>
                        <option value="email">이메일</option>
                        <option value="pass_htel">휴대폰번호</option>
                        <option value="pass_account">계좌번호</option>
                      </select>
                    </td>
                    <td className="article">검색</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="stx"
                        style={{ width: "100%" }}
                        className="input_text"
                      />
                    </td>
                    <td className=""></td>
                    <td className="conts"></td>
                  </tr>
                  <tr>
                    <td className="article">아이디</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_id"
                        style={{ width: "90%" }}
                        className="input_text"
                      />
                    </td>

                    <td className="article">회원명</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_name"
                        style={{ width: "90%" }}
                        className="input_text"
                      />
                    </td>

                    <td className="article">센터선택</td>
                    <td className="conts">
                      <select
                        name="pass_option_center"
                        id="pass_option_center"
                        className="add_option add_option_chk"
                      >
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
                    <input
                      type="submit"
                      className="input_medium"
                      title="검색"
                      value="검색"
                    />
                  </span>

                  <span className="shop_btn_pack">
                    <span className="blank_3"></span>
                  </span>
                  <span className="shop_btn_pack">
                    <a
                      href={PAGE_ROUTES.USERS.USER_REGISTRATION}
                      className="medium red"
                      title="회원등록"
                    >
                      회원등록
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>

          <form
            action="_entershop.member_all.upload.php"
            method="post"
            encType="multipart/form-data"
          >
            <div
              className="form_box_area excel_upload_field"
              style={{ display: "none" }}
            >
              <table className="form_TB">
                <colgroup>
                  <col width="120" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="article">일괄 업로드</td>
                    <td className="conts">
                      <input
                        type="file"
                        name="excel_file"
                        className="input_text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="conts" colSpan={2}>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          <b>업로드 파일</b>은 <b>최대 20M까지 업로드 가능</b>{" "}
                          합니다.
                        </span>
                      </div>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          <b>업로드 용량</b>에 따라{" "}
                          <b>다소시간이 걸릴 수 있습니다.</b>
                        </span>
                      </div>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          엑셀내용중 <b>엔터</b>는 <b>생략</b> 하시고 입력
                          바랍니다.
                        </span>
                      </div>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          엑셀내용중 금액 또는 수수료의 <b>%</b>, <b>콤마(,)</b>
                          , <b>원</b> 등을 <b>기호를 생략</b> 하세요.
                        </span>
                      </div>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          일괄업로드는<b>파일업로드</b> -{" "}
                          <b>업로드 수정/확인</b> - <b>등록처리</b> 단계를 거쳐
                          처리됩니다.
                        </span>
                      </div>
                      <div className="guide_text">
                        <span className="ic_orange"></span>
                        <span className="orange">
                          <b>
                            엑셀97~2003 버전 파일만 업로드가 가능합니다. 엑셀
                            2007이상 버전은(xlsx) 다른 이름저장을 통해
                            97~2003버전으로 저장하여 등록하세요.
                          </b>
                        </span>
                      </div>
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
                      title="일괄업로드"
                      value="일괄업로드"
                    />
                  </span>
                  <span className="shop_btn_pack">
                    <span className="blank_3"></span>
                  </span>
                  <span className="shop_btn_pack">
                    <a
                      href="/upfiles/normal/member_all_sample1.xls"
                      className="medium white"
                      title="엑셀다운로드"
                    >
                      엑셀다운로드
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>

          <div className="form_box_area">
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              width={"100%"}
              style={{ borderCollapse: "collapse" }}
            >
              <tr style={{ height: "40px", alignItems: "left" }}>
                <td style={{ padding: "5px" }}>
                  ※ 캐시 합계 :{" "}
                  <span style={{ color: "#e16007", fontWeight: "bold" }}>
                    0&nbsp;CASH
                  </span>
                  <span style={{ color: "999999" }}>&nbsp;|&nbsp;</span>
                  전체 :{" "}
                  <span style={{ color: "#4C64AB", fontWeight: "bold" }}>
                    {totalUsers | 0}
                  </span>{" "}
                  건 조회
                </td>
              </tr>
            </table>
          </div>

          <form name="fboardlist" method="post">
            <input type="hidden" name="_mode" value="" />
            <input type="hidden" name="_seachcnt" value="44" />
            <input type="hidden" name="_PVSC" value="" />
            <input
              type="hidden"
              name="_search_que"
              value="IHdoZXJlIG1lbWdyYWRlICE9ICcxJyAgIA=="
            />

            <input type="hidden" name="app_mode" value="" />

            <input type="hidden" name="pass_recomid" value="" />
            <input type="hidden" name="mb2_depscode" value="" />
            <input type="hidden" name="depslevel" value="" />

            <input type="hidden" name="q1" value="code=" />
            <input type="hidden" name="page" value="1" />
            <div className="content_section_inner">
              <div className="ctl_btn_area">
                <span className="shop_btn_pack">
                  <a
                    href="javascript:select_send('excel_center');"
                    className="small white"
                    title="선택엑셀저장"
                  >
                    선택 엑셀저장
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="javascript:search_send('excel_center');"
                    className="small white"
                    title="검색엑셀저장"
                  >
                    검색 전체저장 (303)
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                {/* <span className="shop_btn_pack"><a href="javascript:select_send('sms');" className="small white" title="선택문자발송">선택문자발송</a></span> */}
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                {/* <span className="shop_btn_pack"><a href="javascript:search_send('sms');" className="small white" title="검색문자발송">검색문자발송 (303)</a></span> */}
                {/* <span className="shop_btn_pack"><span className="blank_3"></span></span> */}

                {/* <!--
<span className="shop_btn_pack"><span className="blank_3"></span></span>
<span className="shop_btn_pack"><a href="javascript:select_send('delete');" className="small white" title="선택회원삭제" >선택회원삭제</a></span>
--> */}
              </div>
              <div className="ctl_btn_area"></div>
              <table className="list_TB" summary="리스트기본">
                <thead>
                  <tr>
                    <th scope="col" className="colorset">
                      <input
                        type="checkbox"
                        name="chkall"
                        value="1"
                        onClick={() => {}}
                      />
                    </th>
                    <th scope="col" className="colorset">
                      NO
                    </th>

                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=id&orderby=asc">
                        <u>아이디</u>
                      </a>
                      <br />
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=ceoName&orderby=asc">
                        <u>회원명</u>
                      </a>
                    </th>

                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=memgrade&orderby=asc">
                        <u>회원구분</u>
                      </a>
                    </th>

                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc">
                        <u>매출단위</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc">
                        <u>확정매출</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=mb_card_point&orderby=asc">
                        <u>캐시</u>
                      </a>
                    </th>

                    <th scope="col" className="colorset">
                      소속센터
                    </th>

                    <th scope="col" className="colorset">
                      직추천
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc">
                        <u>추천인</u>
                      </a>
                    </th>

                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc">
                        <u>후원인</u>
                      </a>
                    </th>

                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc">
                        <u>가입일</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc">
                        <u>수당정지</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=signdate&orderby=asc">
                        <u>회원등록</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc">
                        <u>매출등록</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=partner_code&orderby=asc">
                        <u>재구매</u>
                      </a>
                    </th>
                    <th scope="col" className="colorset">
                      <a href="/myAdmin/_entershop.member_all.list.php?code=&page=&filed=buymethod&orderby=asc">
                        <u>관리</u>
                      </a>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {userListState?.filter((user) => !user.isDeleted).length >
                    0 &&
                    userListState
                      .filter((user) => !user.isDeleted)
                      .map((item, index) => {
                        return (
                          <>
                            <input
                              key={index}
                              type="hidden"
                              name={`od_table[${index}]`}
                              value={item.id}
                            />
                            <tr>
                              <td>
                                <input
                                  type="checkbox"
                                  name="chk_id[]"
                                  value="2000044"
                                  className="class_id"
                                />
                              </td>

                              <td>{index + 1}</td>
                              <td>
                                <a
                                  onClick={() => {
                                    const param = new URLSearchParams(
                                      searchParams
                                    );
                                    param.set("id", item?.id?.toString() || "");
                                    router.push(
                                      PAGE_ROUTES.USERS.USER_MODIFY +
                                        "?" +
                                        param.toString()
                                    );
                                  }}
                                >
                                  <b>{item.member_id}</b>
                                </a>

                                <br />
                                {item.name}
                              </td>
                              <td>
                                {item.Level?.title ? item.Level.title : ""}
                              </td>
                              <td>
                                0&nbsp;CASH
                                <span
                                  className="shop_btn_pack"
                                  style={{ float: "right" }}
                                >
                                  <a
                                    onClick={() => {
                                      const param = new URLSearchParams(
                                        searchParams
                                      );
                                      param.set(
                                        "id",
                                        item?.id?.toString() || ""
                                      );
                                      router.push(
                                        PAGE_ROUTES.USERS.USER_SALES_LIST +
                                          "?" +
                                          param.toString()
                                      );
                                    }}
                                    className="small white"
                                    title="매출"
                                  >
                                    매출
                                  </a>
                                </span>
                              </td>

                              <td>0&nbsp;원</td>
                              <td>0&nbsp;원</td>
                              <td>
                                {item.center?.name ? item.center?.name : ""}
                              </td>
                              <td>
                                {item.subs?.length}명&nbsp;
                                <span
                                  className="shop_btn_pack"
                                  style={{ float: "right" }}
                                >
                                  <a
                                    onClick={() => {
                                      const param = new URLSearchParams(
                                        searchParams
                                      );
                                      param.set(
                                        "id",
                                        item?.id?.toString() || ""
                                      );
                                      router.push(
                                        PAGE_ROUTES.USERS
                                          .USER_RECOMMENDED_LIST +
                                          "?" +
                                          param.toString()
                                      );
                                    }}
                                    className="small white"
                                    title="회원"
                                  >
                                    회원
                                  </a>
                                  &nbsp;
                                </span>
                              </td>
                              {/* //////////////// recom ////////// */}
                              <td width="110px">
                                <span>{item.recom?.member_id}</span>
                                <a
                                  onClick={() => {
                                    const param = new URLSearchParams(
                                      searchParams
                                    );
                                    param.set("id", item?.id?.toString() || "");
                                    router.push(
                                      PAGE_ROUTES.USERS.USER_SALES_LIST +
                                        "?" +
                                        param.toString()
                                    );
                                  }}
                                  style={{ float: "right", cursor: "point" }}
                                >
                                  <img
                                    src="/images/m_btn.gif"
                                    style={{
                                      marginTop: "1px",
                                      marginLeft: "2px",
                                    }}
                                  />
                                </a>
                                <a
                                  onClick={() => {
                                    const param = new URLSearchParams(
                                      searchParams
                                    );
                                    param.set(
                                      "memberId",
                                      item?.member_id?.toString() || ""
                                    );
                                    router.push(
                                      PAGE_ROUTES.ORGANIZATION_TREE.SPONSOR +
                                        "?" +
                                        param.toString()
                                    );
                                  }}
                                  style={{ float: "right", cursor: "pointer" }}
                                >
                                  <img src="/images/recomid_icon.png" />
                                </a>
                              </td>
                              {/* //////////////// spon ////////// */}

                              <td width="110px">
                                <span>{item.spon?.member_id}</span>
                                <a
                                  onClick={() => {
                                    const param = new URLSearchParams(
                                      searchParams
                                    );
                                    param.set("id", item?.id?.toString() || "");
                                    router.push(
                                      PAGE_ROUTES.USERS.USER_SPONSOR_LIST +
                                        "?" +
                                        param.toString()
                                    );
                                  }}
                                  style={{ float: "right", cursor: "point" }}
                                >
                                  <img
                                    src="/images/m_btn.gif"
                                    style={{
                                      marginTop: "1px",
                                      marginLeft: "2px",
                                    }}
                                  />
                                </a>

                                <a
                                  onClick={() => {
                                    const param = new URLSearchParams(
                                      searchParams
                                    );
                                    param.set(
                                      "memberId",
                                      item?.member_id?.toString() || ""
                                    );
                                    router.push(
                                      PAGE_ROUTES.ORGANIZATION_TREE
                                        .RECOMMENDATION +
                                        "?" +
                                        param.toString()
                                    );
                                  }}
                                  style={{ float: "right", cursor: "point" }}
                                >
                                  <img src="/images/sponid_icon.png" />
                                </a>
                              </td>
                              <td>
                                {getFullTime(item.createdAt || "").substring(
                                  0,
                                  10
                                )}
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  name="bonus_stop[]"
                                  value="2000044"
                                  onClick={() => {}}
                                />
                              </td>
                              <td style={{ width: "70px" }}>
                                <a
                                  href={
                                    PAGE_ROUTES.USERS.USER_REGISTRATION +
                                    "?recomid=" +
                                    item.id +
                                    "&name=" +
                                    item.name
                                  }
                                  className="small red"
                                  title=""
                                >
                                  <img src="/images/plus_more_red.png" />
                                </a>
                              </td>
                              <td>
                                <a
                                  href={
                                    PAGE_ROUTES.SALES_MANAGEMENT
                                      .SALES_REGISTRATION +
                                    "?id=" +
                                    item.id
                                  }
                                  className="small red"
                                  title="매출"
                                >
                                  <img src="/images/plus_more_red.png" />
                                </a>
                              </td>
                              <td>
                                <a
                                  onClick={() => {
                                    router.push(
                                      PAGE_ROUTES.SALES_MANAGEMENT
                                        .SALES_REGISTRATION +
                                        "?id=" +
                                        item.id +
                                        "&name=" +
                                        item.name
                                    );
                                  }}
                                  className="small red"
                                  title="재구매"
                                >
                                  <img src="/images/plus_more_red.png" />
                                </a>
                              </td>
                              {/* /////////////////////////////////////////////////////////////////////////////// */}
                              <td>
                                <div
                                  className="btn_line_up_left"
                                  style={{ clear: "both", paddingTop: "3px" }}
                                >
                                  <span className="shop_btn_pack">
                                    <span className="blank_3"></span>
                                  </span>
                                  <span className="shop_btn_pack">
                                    <input
                                      type="button"
                                      value="삭제"
                                      className="input_small gray"
                                      onClick={() =>
                                        handleDeleteUser(item.member_id)
                                      }
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                </tbody>
              </table>
            </div>

            <div className="form_box_area" style={{ border: "0px" }}>
              <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                <tr>
                  <td align="left" style={{ paddingTop: "1px" }}>
                    <table border={0} cellSpacing={0} cellPadding={0}>
                      <tr>
                        <td style={{ paddingTop: "2px" }}>
                          <div className="top_btn_area"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
                nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                activeClassName={"active"}
                containerClassName={"pagination"}
                // subContainerClassName={'pages pagination'}

                initialPage={currentPage - 1}
                pageCount={Math.ceil(totalUsers / perPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginationHandler}
              />
            </div>
          </form>
          <div style={{ height: "80px" }}></div>
        </div>

        <div
          style={{
            position: "absolute",
            left: xColor1.toString() + "px",
            top: yColor1.toString() + "px",
            display: isDatePickerOpen1 ? "block " : "none",
          }}
        >
          <DatePicker
            onChange={onDateChangeHandle1}
            selected={startDate}
            maxDate={endDate}
            isClearable={true}
            inline
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: xColor2.toString() + "px",
            top: yColor2.toString() + "px",
            display: isDatePickerOpen2 ? "block " : "none",
          }}
        >
          <DatePicker
            onChange={onDateChangeHandle2}
            selected={endDate}
            minDate={startDate}
            inline
          />
        </div>
      </div>
      {/*<!-- //내용 -->*/}
    </div>
  );
};

export default UserManagement;
function fetchUserList(arg0: { page: number; limit: number }) {
  throw new Error("Function not implemented.");
}
