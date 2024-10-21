"use client";
import Slider from "@/components/layouts/Slider/Order";
import { useEffect, useState } from "react";
import { Paginate } from "../paginate";

const OrderCancellation = () => {
  const [sliderVisible, setSliderVisible] = useState(true);
  useEffect(() => {
    console.log("sliderVisible: ", sliderVisible);
  }, [sliderVisible]);
  const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
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
              onClick={sliderToggle}
            ></span>
            <span
              className="btn_open"
              id="open_close_btn_open"
              title="메뉴열기"
              style={{ display: !sliderVisible ? "block" : "none" }}
              onClick={sliderToggle}
            ></span>
          </div>

          {/* <!-- 페이지타이틀 --> */}

          <div className="title_area">
            <span className="icon"></span>
            <span className="title">취소주문관리</span>
            <span className="location">홈 &gt; 주문관리 &gt; 취소주문관리</span>
          </div>
          {/* <!-- // 페이지타이틀 --> */}
          {/*<iframe*/}
          {/*  src="inc.bonus_auto.php"*/}
          {/*  width={0}*/}
          {/*  height={0}*/}
          {/*  frameBorder={0}*/}
          {/*  style={{ display: "none" }}*/}
          {/*></iframe>*/}
          <div className="common_ajax_proc"></div>

          {/* <!-- 검색영역 --> */}
          <form
            name="searchfrm"
            method="post"
            action="/myAdmin/_order.list.php"
          >
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
                    <td className="article">주문번호</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_ordernum"
                        className="input_text"
                        value=""
                      />
                    </td>
                    <td className="article">주문자명</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_ordername"
                        className="input_text"
                        value=""
                      />
                    </td>
                    <td className="article">수령인명</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_recname"
                        className="input_text"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="conts" colSpan={6}>
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">
                          <b>회원주문</b>인 경우에는{" "}
                          <b>주문번호가 볼드체(굵은글씨)로 표시</b> 됩니다.
                        </span>
                      </div>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* <!-- 버튼영역 --> */}
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
          {/* <!-- // 검색영역 --> */}

          <form
            name="frm"
            method="post"
            action="_order.pro.php"
            target="common_frame"
          >
            <input type="hidden" name="mode" value="" />
            <input type="hidden" name="_seachcnt" value="0" />
            <input type="hidden" name="_PVSC" value="Jm9kY29kZT10b2RheQ==" />
            <input
              type="hidden"
              name="search_que"
              value="IHdoZXJlIGNhbmNlbGVkPSdZJyBBTkQgb3JkZXJzdGF0dXM9J1kn"
            />

            {/* <!-- 리스트영역 --> */}
            <div className="content_section_inner">
              {/* <!-- 리스트 제어버튼영역 //--> */}
              <div className="top_btn_area">
                <span className="shop_btn_pack">
                  <a
                    href="javascript:select_excel_send();"
                    className="small white"
                    title="선택엑셀다운로드"
                  >
                    선택엑셀다운로드
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="javascript:search_excel_send();"
                    className="small white"
                    title="검색엑셀다운로드"
                  >
                    검색엑셀다운로드(0)
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="javascript:search_delete_send();"
                    className="small white"
                    title="선택삭제"
                  >
                    선택삭제
                  </a>
                </span>
              </div>
              {/* <!-- // 리스트 제어버튼영역 --> */}

              <table className="list_TB" summary="리스트기본">
                <thead>
                  <tr>
                    <th scope="col" className="colorset">
                      <input type="checkbox" name="allchk" />
                    </th>
                    <th scope="col" className="colorset">
                      NO
                    </th>
                    <th scope="col" className="colorset">
                      공급사
                    </th>
                    <th scope="col" className="colorset">
                      주문번호
                    </th>
                    <th scope="col" className="colorset">
                      주문자
                    </th>
                    <th scope="col" className="colorset">
                      수령인
                    </th>
                    <th scope="col" className="colorset">
                      결제방법
                    </th>
                    <th scope="col" className="colorset">
                      결제금액
                    </th>
                    <th scope="col" className="colorset">
                      주문취소일
                    </th>
                    <th scope="col" className="colorset">
                      주문일
                    </th>
                    <th scope="col" className="colorset">
                      기능
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={15} height="40">
                      주문 내역이 없습니다.
                    </td>
                  </tr>
                </tbody>
              </table>
              <Paginate />
            </div>
          </form>
          <div style={{ height: "30px" }}></div>
        </div>
      </div>
    </div>
  );
};
export default OrderCancellation;
