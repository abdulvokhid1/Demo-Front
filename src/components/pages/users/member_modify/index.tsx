"use client";
// import './styles.css'

import "./global.d";
import Link from "next/link";
import HeadElement from "@/components/layouts/Header";
import FooterElement from "@/components/layouts/Footer";
import Slider from "@/components/layouts/Slider/users";
import Head from "next/head";
import { Layout, message } from "antd";
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState, FormEvent, useRef } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import AUTH_API from "@/services/api/auth";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";

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
import { UserTypeProps } from "@/services/api/collection";
import { UserInfo } from "@/utils/types/type";
import { tr } from "date-fns/locale";
import { UserQueryType } from "@/services/api/users/type";

const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const MemberIncentiveList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // const {id} = useParams<{ id: string }>();
  const [sliderVisible, setSliderVisible] = useState(true);
  const [isSelectedHover, setIsSelectedHover] = useState(false);
  const [isSelectedClicked, setIsSelectedClicked] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [emailState, setEmailState] = useState("");
  const [nameState, setNameState] = useState("");
  const [formData, setFormData] = useState();
  const [recomId, setRecomId] = useState<number>(0);
  const [centers, setCenters] = useState<CenterTypeProps[]>([]);
  const [levels, setLevels] = useState<LevelTypeProps[]>([]);
  const [user, setUser] = useState<UserInfo>();
  const [levelSelected, setLevelSelected] = useState<number>();
  const [addressDetail, setAddressDetail] = useState<DaumPostcodeData>();
  const [id, setId] = useState<String>();
  const setSelectedKey = useSetRecoilState(userSelectedKey);
  const [memberId, setMemberId] = useState("");

  const { mutate: mutateUserInfo } = useMutation({
    mutationFn: USER_API.getUserInfo,
    onSuccess: async (values: any) => {
      setUser(values);
      setLevelSelected(values.levelId);
      console.log(JSON.stringify(values));
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });

  /*** Daum Address Popup search ***/
  const postcodeRef = useRef<HTMLDivElement | null>(null);

  const loadLayout = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          setAddressDetail(data);
          console.log(data);
        },
      });
      postcode.open();
    });
  };

  // useEffect(() => {
  //     const isAlready = document.getElementById(id);

  //     if (!isAlready) {
  //         const script = document.createElement("script");
  //         script.src = src;
  //         script.id = id;
  //         document.body.append(script);
  //     }
  // }, []);

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
  const { mutate: mutateCenter } = useMutation({
    mutationFn: CENTER_API.getList,
    onSuccess: async (values: any) => {
      setCenters(values.centers);
    },
    onError: async (error: any) => {
      const errorType = error.response.data.errors[0];
      messageApi.open({
        type: "error",
        content: "t(`errorMessages.${errorType}`)",
      });
    },
  });

  const {
    isPending,
    mutate: mutateUpdate,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: USER_API.updateUser,
    onSuccess: async (values: any) => {
      console.log("success");
      router.replace(PAGE_ROUTES.USERS.USER_MANAGEMENT);
    },

    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });

  useEffect(() => {
    setSelectedKey(0);
  }, []);
  useEffect(() => {
    mutateCenter({ page: 0, limit: 0 });
  }, []);
  useEffect(() => {
    mutateLevel();
  }, []);

  useEffect(() => {
    const _id = searchParams.get("id") || undefined;
    setId(_id);
    const param: UserQueryType = { id: _id };
    mutateUserInfo(param);
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

  // const handleInputChange = (
  //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //     setFormData({
  //         ...formData,
  //         [event.target.name]: event.target.value,
  //     });
  // };
  const onSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("passwd");
    // const role = formData.get('m2_code1');
    const member_id = formData.get("member_id");
    const income_option = formData.get("guja_entry_yn");
    const level = formData.get("m2_code1");
    const income_option_select = formData.get("mb_entry_option");
    const mobilephone_number = formData.get("htel");
    const name = formData.get("name");
    const phone_number = formData.get("tel");
    const zip1 = formData.get("zip1");
    const zip2 = formData.get("zip2");
    const address = formData.get("address");
    const address1 = formData.get("address1");
    const address_doro = formData.get("address_doro");
    // const zonecode = formData.get('zonecode');
    const option_center = formData.get("_option_center");
    const recomid = formData.get("recomid_hidden");
    const sponid = formData.get("sponid");
    const return_bank = formData.get("return_bank");
    const return_account = formData.get("return_account");
    const return_name = formData.get("return_name");

    const params = {
      id: user?.id || 0,
      name: name ? name.toString() : "",
      email: email ? email.toString() : "",
      password: password ? password.toString() : "",
      member_id: memberId ? memberId.toString() : "",
      // role: role ? role.toString() : 'user',
      income_option: income_option === "Y" ? 1 : 0,
      levelId: level ? level.toString() : "",
      income_option_select: Number(income_option_select) || 0,
      mobilephone_number: mobilephone_number?.toString() || "",
      phone_number: phone_number?.toString() || "",
      zip1: zip1?.toString() || "",
      zip2: zip2?.toString() || "",
      address: address?.toString() || "",
      address1: address1?.toString() || "",
      addressdoro: address_doro?.toString() || "",
      zonecode: (zip1?.toString() || "") + (zip2?.toString() || ""),
      centerId: Number(option_center) || 0,
      recomid: recomid?.toString() || "",
      sponid: sponid?.toString() || "",
      return_bank: return_bank?.toString() || "",
      return_account: return_account?.toString() || "",
      return_name: return_name?.toString() || "",
    };
    console.log(params);
    mutateUpdate(params);

    // Handle response if necessary
    // const data = await response.json()
    // ...
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
            <span className="title">회원 정보</span>
            <span className="location">
              홈 &gt; 회원관리 &gt; 회원 정보수정
            </span>
          </div>

          {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0}*/}
          {/*        style={{display: 'none'}}></iframe>*/}

          <div className="common_ajax_proc"></div>
          <div className="new_deny_tab">
            <div className="tab_box">
              <ul>
                <li className="hit">
                  <a className="tab">회원정보</a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_INCENTIVE_LIST + "?id=" + id}
                    className="tab"
                  >
                    수당내역
                  </a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_SALES_LIST + "?id=" + id}
                    className="tab"
                  >
                    매출내역
                  </a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_RECOMMENDED_LIST + "?id=" + id}
                    className="tab"
                  >
                    추천통계
                  </a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_SPONSOR_LIST + "?id=" + id}
                    className="tab"
                  >
                    후원통계
                  </a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_DIVIDENT_LIST + "?id=" + id}
                    className="tab"
                  >
                    배당한도
                  </a>
                </li>

                <li className="">
                  <a
                    href={PAGE_ROUTES.USERS.USER_PAYMENT_LIST + "?id=" + id}
                    className="tab"
                  >
                    정산지급
                  </a>
                </li>
              </ul>
            </div>

            {/* /*내부페이지 탭메뉴 시작*/}

            <div
              className="new_order_data_foot"
              style={{ width: "100%", height: "50px", marginTop: "5px" }}
            >
              <div className="inner_sum_box" style={{ float: "right" }}>
                <ul>
                  <li className="txt">
                    회원 PV <span className="value">10,000,000 </span>
                  </li>
                  <li className="txt">
                    회원매출<span className="value">12,000,000</span>
                  </li>
                </ul>
              </div>
              <div className="inner_sum_box" style={{ float: "left" }}>
                <ul>
                  <li className="txt">
                    ykj10<span className="value"></span>유금자
                  </li>
                  <li className="txt">
                    수당<span className="value">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /*내부페이지 탭메뉴 끝*/}

          <form
            name="frm"
            method="post"
            action={onSubmit}
            encType="multipart/form-data"
          >
            {/*<form onSubmit={onSubmit}>*/}
            <input type="hidden" name="_mode" value="add" />
            <input type="hidden" name="serialnum" />
            <input type="hidden" name="_PVSC" />
            <input
              type="hidden"
              name="csrf_token"
              value="af61f42c0ece9ea42ed3f6bbec3b9d28"
            />
            <input type="hidden" name="app_mode" />
            <div className="sub_title">
              <span className="icon"></span>
              <span className="title">회원정보 상세내역</span>
            </div>
            <div className="form_box_area">
              <table className="form_TB" summary="검색항목">
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="article">
                      등록일<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <input
                        type="text"
                        name="signdate"
                        className="input_text"
                        value={user?.createdAt?.substring(0, 10)}
                        readOnly={true}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="article">
                      회원등급<span className="ic_ess" title="필수"></span>
                    </td>

                    <td className="conts">
                      <select
                        name="m2_code1"
                        value={levelSelected}
                        onChange={(e) => {
                          setLevelSelected(Number(e.target.value));
                        }}
                        className="select"
                      >
                        <option key={0} value={-1}>
                          -레벨선택-
                        </option>
                        {/*<option value={0} selected>회원</option>*/}
                        {levels.length &&
                          levels.map((item) => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.title}
                              </option>
                            );
                          })}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="article">
                      아이디<span className="ic_ess" title="필수"></span>
                    </td>

                    {/* <td className="conts">
                      <span style={{ color: "red" }}>자동생성</span>
                    </td> */}
                    <input
                      style={{ marginLeft: "10px" }}
                      type="text"
                      name="member_id"
                      className="input_text"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      required
                    />
                  </tr>

                  {/*<tr>*/}
                  {/*    <td className="article">생성옵션</td>*/}
                  {/*    <td className="conts">*/}

                  {/*        <label><input type="checkbox" name="guja_entry_yn"*/}
                  {/*                      id="guja_entry_yn" value="Y" checked/> 매출 자동*/}
                  {/*            등록하기</label>*/}

                  {/*        <select name='mb_entry_option' id="mb_entry_option"*/}
                  {/*                onChange={() => {*/}
                  {/*                }}>*/}
                  {/*            <option value={0}>33,000</option>*/}
                  {/*            <option value={1}>330,000</option>*/}
                  {/*            <option value={2}>3,300,000</option>*/}
                  {/*        </select>*/}

                  {/*        <input type="hidden" name="gross_sale_price"*/}
                  {/*               id="gross_sale_price" value="33000"/> <br/>*/}

                  {/*        <label><input type="checkbox" name="prod_chk_free"*/}
                  {/*                      value="Y"/> 인정 매출시 체크</label>*/}

                  {/*        <br/>*/}

                  {/*    </td>*/}
                  {/*</tr>*/}

                  <tr>
                    <td className="article">
                      휴대폰번호<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <input
                        type="text"
                        name="htel"
                        size={20}
                        maxLength={11}
                        className="input_text"
                        defaultValue={user?.mobilephone_number}
                        onBlur={() => {}}
                      />
                      <span id="searchphoneidHTML"></span>
                      <div className="guide_text">
                        <span className="ic_orange"></span>
                        <span className="orange">
                          하이푼(-)을 빼고 입력하시기 바랍니다.
                        </span>
                      </div>
                    </td>
                  </tr>

                  {/*<tr>*/}
                  {/*    <td className="article">비밀번호<span className='ic_ess'*/}
                  {/*                                      title='필수'></span></td>*/}
                  {/*    <td className="conts">*/}

                  {/*        <input type="password" name="passwd" size={20}*/}
                  {/*               className="input_text"/>*/}

                  {/*        <div className='guide_text'><span*/}
                  {/*            className='ic_blue'></span><span*/}
                  {/*            className='blue'>비밀번호 변경할 경우에만 입력하세요.</span>*/}
                  {/*        </div>*/}
                  {/*    </td>*/}
                  {/*</tr>*/}

                  <tr>
                    <td className="article">이름(회원명)</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="name"
                        size={30}
                        className="input_text"
                        defaultValue={user?.name}
                      />
                      &nbsp;<span id="searchnameHTML"></span>
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
                        defaultValue={user?.email}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="article">전화번호</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="tel"
                        size={20}
                        className="input_text"
                        defaultValue={user?.phone_number}
                      />
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          하이푼(-)을 포함하시기 바랍니다.
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="article">우편번호</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="zip1"
                        id="_post1"
                        size={5}
                        className="input_text"
                        value={addressDetail?.zonecode
                          .toString()
                          .substring(0, 2)}
                        defaultValue={user?.zip1}
                      />
                      -
                      <input
                        type="text"
                        name="zip2"
                        id="_post2"
                        size={5}
                        className="input_text"
                        value={addressDetail?.zonecode.toString().substring(2)}
                        defaultValue={user?.zip2}
                      />
                      <span className="shop_btn_pack" style={{ float: "none" }}>
                        &nbsp;
                        <a
                          href="#none"
                          onClick={loadLayout}
                          className="small gray"
                        >
                          우편번호검색
                        </a>
                        <div ref={postcodeRef}></div>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="article">주소</td>
                    <td className="conts">
                      기본주소 :{" "}
                      <input
                        type="text"
                        name="address"
                        id="_addr1"
                        size={50}
                        className="input_text"
                        value={addressDetail?.address}
                        defaultValue={user?.address}
                      />
                      <br />
                      상세주소 :{" "}
                      <input
                        type="text"
                        name="address1"
                        id="_addr2"
                        size={50}
                        className="input_text"
                        value={addressDetail?.buildingName}
                        defaultValue={user?.address1}
                      />
                      <br />
                      도로명주소 :{" "}
                      <input
                        type="text"
                        name="address_doro"
                        id="_addr_doro"
                        size={70}
                        className="input_text"
                        value={addressDetail?.roadAddress}
                        defaultValue={user?.addressdoro}
                      />
                      {/*<br/>새 우편번호 : <input type="text" name="zonecode" id="_zonecode" size={10} className="input_text"/>*/}
                    </td>
                  </tr>
                  {/*<tr>*/}
                  {/*    <td className="article">소속센터</td>*/}
                  {/*    <td className="conts">*/}
                  {/*        <select name='_option_center' id="_option_center"*/}
                  {/*                className='add_option add_option_chk'*/}
                  {/*                style={{width: '200px'}}>*/}
                  {/*            <option key={0} value={0}>선택</option>*/}
                  {/*            {centers.length && (centers.map((item, index) => {*/}
                  {/*                    return (<option key={item.id} value={item.id}>{item.name}</option>)*/}
                  {/*                })*/}
                  {/*            )}*/}
                  {/*        </select>*/}

                  {/*        <div className='guide_text'><span*/}
                  {/*            className='ic_blue'></span><span className='blue'>선택이 없을시 상위 추천인 소속 센터로 자동 선택이됩니다.</span>*/}
                  {/*        </div>*/}

                  {/*    </td>*/}
                  {/*</tr>*/}

                  <tr>
                    <td className="article">추천인 아이디</td>
                    <td className="conts">
                      <input
                        type="hidden"
                        id="recomid_hidden"
                        name="recomid_hidden"
                        size={30}
                        className="input_text"
                        onChange={(e) => {
                          // setRecomId(Number(e.target.value))
                        }}
                      />
                      <input
                        type="text"
                        id="recomid_display"
                        name="recomid_display"
                        size={30}
                        className="input_text"
                        style={{ color: "#808080", backgroundColor: "#f0f0f0" }}
                        // value={recomId}
                        defaultValue={user?.recom?.name}
                        tabIndex={-1}
                        readOnly
                      />

                      <span className="shop_btn_pack" style={{ float: "none" }}>
                        &nbsp;
                        <a
                          onClick={() => {
                            window.open(
                              PAGE_ROUTES.USERS.USER_LOOKUP,
                              "천천인 검색 페이지",
                              "height=600px, width=900px"
                            );
                          }}
                          className="small blue"
                        >
                          추천인 검색
                        </a>
                      </span>
                    </td>
                  </tr>

                  {/*<tr>*/}
                  {/*    <td className="article">후원인 아이디</td>*/}
                  {/*    <td className="conts">*/}
                  {/*        <input type="text" name="sponid" value='superadmin' size={30}*/}
                  {/*               className="input_text"*/}
                  {/*               style={{color: '#808080', backgroundColor: '#f0f0f0'}}*/}
                  {/*               onFocus={() => {*/}
                  {/*               }} tabIndex={-1} readOnly/>*/}

                  {/*        <span className='shop_btn_pack' style={{float: 'none'}}>&nbsp;<a*/}
                  {/*            onClick={() => {*/}
                  {/*            }}*/}
                  {/*            className='small blue'>후원인 검색</a>*/}
                  {/*        </span>*/}

                  {/*    </td>*/}
                  {/*</tr>*/}
                </tbody>
              </table>
            </div>

            <div className="sub_title">
              <span className="icon"></span>
              <span className="title">환급(정산) 계좌정보</span>
            </div>
            <div className="form_box_area">
              <table className="form_TB" summary="검색항목">
                <colgroup>
                  <col width="200px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="article">은행명</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="return_bank"
                        size={20}
                        className="input_text"
                        defaultValue={user?.return_bank}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="article">계좌번호</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="return_account"
                        size={40}
                        className="input_text"
                        defaultValue={user?.return_account}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="article">예금주</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="return_name"
                        size={20}
                        className="input_text"
                        defaultValue={user?.return_name}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bottom_btn_area">
              <div className="btn_line_up_center">
                <span className="shop_btn_pack btn_input_red">
                  <input
                    type="submit"
                    name=""
                    className="input_large"
                    value="수정"
                  />
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>

                <span className="shop_btn_pack btn_input_gray">
                  <input
                    type="button"
                    name=""
                    className="input_large"
                    value="목록"
                    onClick={() => {
                      router.replace(PAGE_ROUTES.USERS.USER_MANAGEMENT);
                    }}
                  />
                </span>
              </div>
            </div>
          </form>

          <div style={{ height: "30px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default MemberIncentiveList;
