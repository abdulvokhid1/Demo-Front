"use client";
import Slider from "@/components/layouts/Slider/Order";
import { useEffect, useState } from "react";
import { Paginate } from "../paginate";

const CompletedDelivery = () => {
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
            <span className="title">5단계 배송완료</span>
            <span className="location">
              홈 &gt; 주문관리 &gt; 3단계 배송대기
            </span>
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
            action="/myAdmin/_order2.list.php?&odcode=3"
          >
            <input type="hidden" name="mode" value="search" />
            <input type="hidden" name="delivstatus" value="no" />
            <input type="hidden" name="ordertype" value="product" />

            {/* <!-- 배송상품 주문단계 5단계 변경 추가 --> */}
            <input type="hidden" name="odcode" value="3" />

            <div className="form_box_area">
              <table className="form_TB" summary="검색항목">
                <colgroup>
                  <col width="100px" />
                  <col width="230px" />
                  <col width="100px" />
                  <col width="230px" />
                  <col width="100px" />
                  <col width="200px" />
                  <col width="100px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="article">검색기간</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_sdate"
                        id="pass_sdate"
                        className="input_text"
                        value=""
                        readOnly
                        style={{ width: "80px" }}
                      />
                      ~
                      <input
                        type="text"
                        name="pass_edate"
                        id="pass_edate"
                        className="input_text"
                        value=""
                        readOnly
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td className="article">구매확정일</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_sdate"
                        id="pass_sdate"
                        className="input_text"
                        value=""
                        readOnly
                        style={{ width: "80px" }}
                      />
                      ~
                      <input
                        type="text"
                        name="pass_edate"
                        id="pass_edate"
                        className="input_text"
                        value=""
                        readOnly
                        style={{ width: "80px" }}
                      />
                    </td>

                    <td className="article">주문번호</td>
                    <td className="conts" colSpan={3}>
                      <input
                        type="text"
                        name="pass_ordernum"
                        className="input_text"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="article">주문자ID</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_orderid"
                        className="input_text"
                        value=""
                      />
                    </td>
                    <td className="article">주문자이름</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_ordername"
                        className="input_text"
                        value=""
                      />
                    </td>
                    <td className="article">주문자연락처</td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pass_orderhtel"
                        className="input_text"
                        value=""
                      />
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
          <div className="form_box_area">
            <table className="form_TB" summary="검색항목">
              <colgroup>
                <col width="100px" />
                <col width="400px" />
                <col width="100px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="article">상품판매가</td>
                  <td className="conts">
                    <b></b>원
                    <div className="guide_text">
                      <span className="ic_blue"></span>
                      <span className="blue">
                        {" "}
                        상품판매가 = (판매가 + 옵션가) x 판매수량{" "}
                      </span>
                    </div>{" "}
                  </td>
                  <td className="article">판매수량</td>
                  <td className="conts">
                    <b></b>개
                  </td>
                </tr>
                <tr>
                  <td className="article">결제가</td>
                  <td className="conts" colSpan={3}>
                    <b></b>원
                    <div className="guide_text">
                      <span className="ic_blue"></span>
                      <span className="blue">
                        {" "}
                        1.공급가방식 : 결제가 = ( 공급가 + 옵션공급가 ) x
                        판매수량 + 배송비{" "}
                      </span>
                    </div>{" "}
                    <div className="guide_text">
                      <span className="ic_blue"></span>
                      <span className="blue">
                        {" "}
                        2.수수료방식 : 결제가 = (1 - 수수료) x 상품판매가 x
                        판매수량 + 배송비{" "}
                      </span>
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="article">예약발송 요청</td>
                  <td className="conts" colSpan={3}>
                    <a href="_order2.reserve_list.php"> 건</a>
                    <div className="guide_text">
                      <span className="ic_blue"></span>
                      <span className="blue">
                        예약발송 요청 항목은 <b>(배송)예약발송대기관리</b>에서
                        확인 바랍니다.{" "}
                      </span>
                    </div>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <form name="OderAllDelete" method="post" action="_order2.pro.php">
            <input type="hidden" name="PageL" value="All" />
            <input type="hidden" name="_mode" value="" />
            <input type="hidden" name="_seachcnt" value="0" />
            <input
              type="hidden"
              name="_PVSC"
              value="JmRlbGl2c3RhdHVzPW5vJm9yZGVydHlwZT1wcm9kdWN0Jm9kY29kZT0z"
            />
            <input
              type="hidden"
              name="_search_que"
              value="IHdoZXJlIG8uY2FuY2VsZWQ9J04nIGFuZCAoby5vcmRlcl90eXBlID0gJ2NvdXBvbicgb3Igby5vcmRlcl90eXBlID0gJ3Byb2R1Y3QnIG9yIG8ub3JkZXJfdHlwZSA9ICdib3RoJykgQU5EIG9wLm9wX2RlbGl2c3RhdHVzPSdSJyAgYW5kIG8uZGVsaXZlcnlfZGF0ZSA9ICcwMDAwLTAwLTAwJyAgYW5kIG9wLm9wX2NhbmNlbCA9ICdOJyA="
            />
            <input type="hidden" name="delivstatus" value="no" />
            <input type="hidden" name="ordertype" value="product" />

            {/* <!-- 리스트영역 --> */}
            <div className="content_section_inner">
              {/* <!-- 리스트 제어버튼영역 //--> */}
              <div className="top_btn_area">
                {/* <!--
						<span className="shop_btn_pack"><a href="#none" onclick="mass_dan3();" className="small red" title="배송대기 일괄처리" >배송대기 일괄처리</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
--> */}
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "mass_dan4()";
                    }}
                    className="small red"
                    title="배송중처리"
                  >
                    배송중처리
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "mass_dan1()";
                    }}
                    className="small gray"
                    title="입금확인상태 일괄처리"
                  >
                    입금확인처리
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "createCpNum()";
                    }}
                    id="createnum"
                    className="small white"
                    title="쿠폰번호발급"
                  >
                    쿠폰번호발급
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "express()";
                    }}
                    id="batchexpress"
                    className="small white"
                    title="일괄발급처리"
                  >
                    일괄발급처리
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "excel_insert()";
                    }}
                    className="small white"
                    title="배송정보엑셀적용"
                  >
                    배송정보엑셀적용
                  </a>
                </span>
                <span className="shop_btn_pack">
                  <span className="blank_3"></span>
                </span>
                <span className="shop_btn_pack">
                  <a
                    href="#none"
                    onClick={() => {
                      "saveExcel(_order2.excel.php)";
                    }}
                    id="saveexcel"
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
                    href="#none"
                    onClick={() => {
                      "search_excel_send(_order2.excel.php)";
                    }}
                    className="small white"
                    title="검색엑셀다운로드"
                  >
                    검색엑셀다운로드(0)
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
                      상품유형
                    </th>
                    <th scope="col" className="colorset">
                      공급사
                    </th>
                    <th scope="col" className="colorset">
                      주문자
                      <br />
                      수령인
                    </th>
                    <th scope="col" className="colorset">
                      상품정보
                    </th>
                    <th scope="col" className="colorset">
                      연락처
                    </th>
                    {/* <th scope="col" className="colorset">PV</th> */}
                    <th scope="col" className="colorset">
                      주문일
                      <br />
                      결제일
                    </th>
                    <th scope="col" className="colorset">
                      배송상태
                    </th>
                    <th scope="col" className="colorset">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={15}
                      height="100"
                      style={{ textAlign: "center", color: "darkorange" }}
                    >
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
export default CompletedDelivery;
