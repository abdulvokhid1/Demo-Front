"use client";
import Slider from "@/components/layouts/Slider/users";
import { useEffect, useState } from "react";
const PayManager = () => {
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
            <span className="title">관리자 적립</span>
            <span className="location">
              홈 &gt; 회원관리 &gt; 수익금 지급관리
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

          {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

          <div className="common_ajax_proc"></div>

          <form name="frm" method="post" encType="multipart/form-data">
            <input type="hidden" name="mode" value="add" />
            <input type="hidden" name="no" value="" />
            <input type="hidden" name="_PVSC" value="" />

            <div className="form_box_area">
              <table className="form_TB" summary="검색항목">
                <colgroup>
                  <col width="200px" />
                  {/* <!-- 마지막값은수정안함 --> */}
                  <col width="*" />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="article">
                      적립/변경 사유
                      <span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pointTitle"
                        size={30}
                        className="input_text"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="article">
                      캐시<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <input
                        type="text"
                        name="pointPoint"
                        size={30}
                        className="input_text"
                        value=""
                      />
                      <div className="guide_text">
                        <span className="ic_blue"></span>
                        <span className="blue">차감은 - 를 붙이세요</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="article">
                      지급항목<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <select name="po_type" style={{ fontSize: "9.4pt" }}>
                        <option value="">선택</option>

                        <option value="배당보너스">대리점 보너스</option>
                        {/* <option value="매칭보너스">매칭보너스</option> */}
                        {/* <option value="직급보너스">직급보너스</option> */}
                        {/* <option value="만기보너스">만기보너스</option> */}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td className="article">
                      처리구분<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <span className="multi">
                        <label htmlFor="po_update_chkY">
                          <input
                            type="radio"
                            id="po_update_chkY"
                            name="po_update_chk"
                            value="Y"
                            checked
                          />{" "}
                          전산(지급한도 반영)
                        </label>
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="multi">
                        <label htmlFor="po_update_chkN">
                          <input
                            type="radio"
                            id="po_update_chkN"
                            name="po_update_chk"
                            value="N"
                          />{" "}
                          일반(정산 반영안함)
                        </label>
                      </span>
                      &nbsp;&nbsp;&nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td className="article">
                      지급유저<span className="ic_ess" title="필수"></span>
                    </td>
                    <td className="conts">
                      <span className="shop_btn_pack">
                        <a
                          href="#none"
                          onClick={() => {}}
                          className="small blue"
                          title="유저검색"
                        >
                          유저검색
                        </a>
                      </span>
                      <textarea
                        name="pointIDArray"
                        id="pointIDArray"
                        className="input_text"
                        style={{ width: "100%", height: "100px" }}
                        readOnly
                      ></textarea>{" "}
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
                    value="확인"
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
                    onClick={() => {}}
                  />
                </span>
              </div>
            </div>
          </form>

          {/* <SCRIPT LANGUAGE="JavaScript">
	function member_search() {
		window.open('_entershop.point.member_search.php','new','width=800,height=700,scrollbars=yes');
	}
</SCRIPT> */}

          {/* <SCRIPT LANGUAGE="JavaScript">
    $(document).ready(function(){
		// -  validate --- 
        $("form[name=frm]").validate({
			ignore: "input[type='text']:hidden",
            rules: {
				pointTitle: { required: true },// 제목
				pointPoint: { required: true },// 포인트
				redRegidate: { required: true }// 포인트 적립일
				,pointIDArray: { required: true }// 지급유저
            },
            messages: {
				pointTitle: { required: "제목을 입력하시기 바랍니다." },// 제목
				pointPoint: { required: "포인트를 입력하시기 바랍니다." }// 포인트
				pointIDArray: { required: "지급유저를 선택하시기 바랍니다." }// 지급유저
            }
        });
		// - validate --- 
	});
</SCRIPT> */}

        

          <div style={{ height: "30px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PayManager;
