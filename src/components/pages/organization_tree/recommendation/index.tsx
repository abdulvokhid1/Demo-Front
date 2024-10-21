"use client";
// import './styles.css'
import "@/app/globals.css";
import Link from "next/link";
import HeadElement from "@/components/layouts/Header";
import FooterElement from "@/components/layouts/Footer";
import Slider from "@/components/layouts/Slider/organization_tree";
import Head from "next/head";
import { Layout } from "antd";
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tree, TreeNode } from "@/components/pages/organization_tree/tree";
import {
  GetNodes,
  StyledNode,
} from "@/components/pages/organization_tree/tree/stories/Tree.stories";
import { NodeContent } from "@/components/pages/organization_tree/tree/components/nodeContent";
import { useSetRecoilState } from "recoil";
import {
  generalSelectedKey,
  orgSelectedKey,
} from "@/services/recoil/selectedKey";
import { tr } from "date-fns/locale";
import { useMutation } from "@tanstack/react-query";
import USER_API from "@/services/api/users";
import PAGE_ROUTES from "@/utils/constants/routes";
import { SponsorResponseType, UserQueryType } from "@/services/api/users/type";
import { useRouter, useSearchParams } from "next/navigation";
import { router } from "next/client";

const Sponsor = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sliderVisible, setSliderVisible] = useState(true);
  const [isSelectedHover, setIsSelectedHover] = useState(false);
  const [isSelectedClicked, setIsSelectedClicked] = useState(false);
  const [isUserSelected, setIsUserSelected] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [rootUser, setRootUser] = useState<SponsorResponseType>();
  const setSelectedKey = useSetRecoilState(orgSelectedKey);
  const [root, setRoot] = useState<SponsorResponseType>();
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  // const sliderRef = useHorizontalScroll();
  const { mutate: mutateSponsorList } = useMutation({
    mutationFn: USER_API.limitedSponsorList,
    onSuccess: async (values: any) => {
      setRootUser(values);
      console.info(values);
    },
    onError: async (error: any) => {},
  });

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      const onWheel = (e: any) => {
        if (e.shiftKey) {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 50,
            behavior: "smooth",
          });
        } else {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            top: el.scrollTop + e.deltaY * 50,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  useEffect(() => {
    setSelectedKey(0);
    const memberId = searchParams.get("memberId") || undefined;
    const param: UserQueryType = { memberId: memberId };
    mutateSponsorList(param);
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

  const handleClick = (id: number) => {
    router.push(PAGE_ROUTES.USERS.USER_MODIFY + "?id=" + id);
  };
  return (
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
            <span className="title">후원 조직도</span>
            <span className="location">홈 &gt; 조직도관리 &gt; 후원조직도</span>
          </div>
          <div
            id={"parent"}
            style={{
              display: "flex",
              overflow: "hidden",
              height: "100vh",
              marginTop: "-100px",
              paddingTop: "100px",
              position: "relative",
              width: "100%",
              backfaceVisibility: "hidden",
              willChange: "overflow",
            }}
          >
            <div
              className="content_section_inner"
              style={{
                position: "fixed",
                right: "0px",
                zIndex: 100,
                width: "330px",
              }}
            >
              <div className="main_box_area_wide">
                <form name="searchfrm_member" method="post" action="">
                  <input type="hidden" name="mode" value="search" />

                  <input type="hidden" name="app_mode" value="" />

                  <div
                    className="form_box_area"
                    style={{
                      background: "#f2f2f2",
                      border: "1px solid #ddd",
                      margin: "5px",
                      padding: "4px",
                    }}
                  >
                    <table
                      className="form_TB"
                      summary="검색항목"
                      style={{ border: "0px" }}
                    >
                      <colgroup>
                        <col width="230px" />
                        <col width="*" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td className="conts" style={{ border: "0px" }}>
                            {/*<select name="tree_memid" style={{width:'50px', display:'none'}}*/}
                            {/*        id="tree_memid" onFocus={()=> {}} onBlur={()=>{}}*/}
                            {/*        onChange={()=>{}}>*/}
                            {/*    <option value="">-회원 선택-</option>*/}

                            {/*</select>*/}
                            <span className="custom-combobox">
                              <input
                                title=""
                                className="custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left ui-autocomplete-input"
                                style={{ width: "80%" }}
                                autoComplete="off"
                                readOnly={true}
                                placeholder={"회원선택"}
                                value={selectedUser}
                              />
                              <a
                                tabIndex={-1}
                                title="모두보기"
                                className="ui-button ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"
                                role="button"
                              >
                                <span
                                  className="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"
                                  onClick={() => {
                                    setIsUserSelected(!isUserSelected);
                                  }}
                                ></span>
                                <span className="ui-button-text"></span>
                              </a>
                              <ul
                                className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
                                id="ui-id-1"
                                style={{
                                  position: "fixed",
                                  right: "160px",
                                  zIndex: 1000,
                                  display: isUserSelected ? "block" : "none",
                                  // top: '41px',
                                  // left: '2107px',
                                  width: "170px",
                                }}
                              >
                                <li
                                  className="ui-menu-item"
                                  id="ui-id-239"
                                  onClick={() =>
                                    setIsUserSelected(!isUserSelected)
                                  }
                                >
                                  회사1 -vip01
                                </li>
                                <li
                                  className="ui-menu-item"
                                  id="ui-id-240"
                                  onClick={() =>
                                    setIsUserSelected(!isUserSelected)
                                  }
                                >
                                  회사2 -vip02
                                </li>
                                <li
                                  className="ui-menu-item"
                                  id="ui-id-241"
                                  onClick={() =>
                                    setIsUserSelected(!isUserSelected)
                                  }
                                >
                                  박대환 -vip03
                                </li>
                                <li
                                  className="ui-menu-item"
                                  id="ui-id-242"
                                  onClick={() =>
                                    setIsUserSelected(!isUserSelected)
                                  }
                                >
                                  김용찬 -kyc7058
                                </li>
                                <li
                                  className="ui-menu-item"
                                  id="ui-id-243"
                                  onClick={() =>
                                    setIsUserSelected(!isUserSelected)
                                  }
                                >
                                  조성주 -csj7778
                                </li>
                              </ul>
                            </span>
                          </td>

                          <td className="conts" style={{ border: "0px" }}>
                            <select
                              name="tlv"
                              id="tlv"
                              className="select_design add_option add_option_chk"
                              style={{
                                height: "29px",
                                background: "#efefef",
                                border: "1px solid #ccc",
                                marginLeft: "-20px",
                              }}
                            >
                              <option value="">대수</option>
                              <option value="1">1대</option>
                            </select>
                          </td>
                        </tr>

                        <tr>
                          <td
                            className="conts"
                            style={{ border: "0px" }}
                            colSpan={10}
                          >
                            <div style={{ float: "right" }}>
                              <span className="shop_btn_pack">
                                <a
                                  id="search_btn_submit"
                                  className="medium red"
                                  title="검색"
                                >
                                  검색
                                </a>
                              </span>
                              <span className="shop_btn_pack">
                                &nbsp;&nbsp;
                                <a href="" className="medium gray" title="취소">
                                  취소
                                </a>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>

            <div style={{ position: "fixed", margin: "10px" }}>
              <span
                style={{
                  color: "#fff",
                  background: "white",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                일반회원
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "#ffe599",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                정회원
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "#9900ff",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                팀장
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "blue",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                1스타
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "cyan",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                2스타
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "lime",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                3스타
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "#cccccc",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                4스타
              </span>
              <span
                style={{
                  color: "#fff",
                  background: "#acccdc",
                  padding: "5px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  marginRight: "5px",
                }}
              >
                5스타
              </span>
            </div>

            <div
              ref={sliderRef}
              id="wrap_ctree"
              style={{
                overflow: "auto",
                height: "auto",
                padding: ".5rem",
                flex: 1,
              }}
            >
              <article className="container_ctree">
                <div className="inner">
                  <div className="orgchart ui-draggable ui-draggable-handle">
                    <Tree
                      {...{
                        // eslint-disable-next-line react/no-children-prop
                        label: (
                          <StyledNode
                            children={
                              <TreeNode
                                label={
                                  <NodeContent
                                    id={rootUser?.id || 1}
                                    name={rootUser?.name}
                                    level={rootUser?.level}
                                    memberId={rootUser?.member_id}
                                    createdAt={rootUser?.createdAt?.substring(
                                      0,
                                      10
                                    )}
                                    onClickHandle={handleClick}
                                  />
                                }
                              />
                            }
                          />
                        ),
                        lineWidth: "10px",
                        lineColor: "green",
                        lineBorderRadius: "10px",
                        lineHeight: "30px",
                        lineStyle: "dotted",
                      }}
                      /* eslint-disable-next-line react/no-children-prop */
                      children={
                        rootUser?.children?.length &&
                        rootUser.children?.length > 0
                          ? GetNodes(StyledNode, rootUser?.children)
                          : undefined
                      }
                      // children={GetNodes(StyledNode, rootUser?.children)}
                    />
                  </div>
                </div>
              </article>
              <div className="footer_ctree">
                <ul>
                  <li>
                    <a href="#">초기화</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => {}}>
                      대수(+)
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => {}}>
                      대수(-)
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => {}}>
                      확대
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => {}}>
                      축소
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => {}}>
                      다운
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#"></a>

            <ul
              className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content"
              id="ui-id-1"
              tabIndex={0}
              style={{ display: "none" }}
            ></ul>
            <span
              role="status"
              aria-live="assertive"
              aria-relevant="additions"
              className="ui-helper-hidden-accessible"
            ></span>
            <div
              role="log"
              aria-live="assertive"
              aria-relevant="additions"
              className="ui-helper-hidden-accessible"
            ></div>
            <div
              role="log"
              aria-live="assertive"
              aria-relevant="additions"
              className="ui-helper-hidden-accessible"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
