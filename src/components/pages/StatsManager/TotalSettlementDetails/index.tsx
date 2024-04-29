'use client'
import Slider from '@/components/layouts/Slider/Stats';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from "recoil";
import { statSelectedKey } from "@/services/recoil/selectedKey";

const TotalSettlementDetails = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const setSelectedKey = useSetRecoilState(statSelectedKey)
    useEffect(() => {
        setSelectedKey(0)
    }, []);
    const sliderToggle = () => {
        setSliderVisible(!sliderVisible);
    }
    return (
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>

            {/* <!-- 내용 --> */}
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
						정산완료 전체내역					
					</span>
                        <span className="location">홈 &gt; 통계관리 &gt; 정산완료 전체내역</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}

                    {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

                    {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
                    <div className="common_ajax_proc"></div>


                    {/* <style>
.sub_total_price { background-color: #FFFBE6; }
.total_price { background-color: #FFEFEF; }
.price_title { background-color: #DFE8E8 }
</style> */}

                    {/* <!-- 검색영역 --> */}
                    <form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_total_exchange.php">
                        <input type='hidden' name='code' value=""/>
                        <input type='hidden' name='tab_menu_bname' value="전체통계"/>
                        <div className="form_box_area">
                            <table className="form_TB" summary="검색항목">
                                <colgroup>
                                    <col width="100px"/>
                                    <col width="300px"/>
                                    <col width="100px"/>
                                    <col width="300px"/>
                                    <col width="100px"/>
                                    <col width="300px"/>
                                    <col width="*"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td className="article">날짜기준</td>
                                    <td className="conts">
                                        <input type="radio" name='search_ptype' id="p_type2" value="year"
                                               onClick={() => {
                                               }} checked={true}/>
                                        <label htmlFor='p_type2' style={{height: '18px'}}>년도별</label>
                                        &nbsp;
                                        <input type="radio" name='search_ptype' id="p_type3" value="month"
                                               onClick={() => {
                                               }}/>
                                        <label htmlFor='p_type3' style={{height: '18px'}}>월별</label>
                                        &nbsp;

                                        {/* <!--
					  <input type="radio" name='search_ptype' id="p_type4" value="ju" onclick="makeptype('ju');"  />
					  <label for='p_type4' style={{height:'18px'}}>주별</label>
					  &nbsp;
					  --> */}
                                        <input type="radio" name='search_ptype' id="p_type5" value="day"
                                               onClick={() => {
                                               }}/>
                                        <label htmlFor='p_type5' style={{height: '18px'}}>일별</label>
                                        &nbsp;
                                        <input type="radio" name='search_ptype' id="p_type1" value="all"
                                               onClick={() => {
                                               }}/>
                                        <label htmlFor='p_type1' style={{height: '18px'}}>전체</label>
                                        &nbsp;

                                    </td>
                                    <td className="article">기간</td>
                                    <td className="conts">

                                        <select name="sh_year" id="sh_year" onChange={() => {
                                        }}>
                                            <option value='2021'>2021년</option>
                                            <option value='2022'>2022년</option>
                                            <option value='2023'>2023년</option>
                                            <option selected={true} value='2024'>2024년</option>
                                        </select>

                                        <select name="sh_month" id="sh_month" onChange={() => {
                                        }} style={{display: 'none'}}>
                                            <option value='01'>01월</option>
                                            <option value='02'>02월</option>
                                            <option selected={true} value='03'>03월</option>
                                            <option value='04'>04월</option>
                                            <option value='05'>05월</option>
                                            <option value='06'>06월</option>
                                            <option value='07'>07월</option>
                                            <option value='08'>08월</option>
                                            <option value='09'>09월</option>
                                            <option value='10'>10월</option>
                                            <option value='11'>11월</option>
                                            <option value='12'>12월</option>
                                        </select>
                                        <select name="sh_week" id="sh_week" disabled style={{display: 'none'}}>
                                            <option value=''>주별검색</option>
                                        </select>
                                        <select name="sh_day" id="sh_day" onChange={() => {
                                        }} style={{display: 'none'}}>
                                            <option value='01'>01일</option>
                                            <option value='02'>02일</option>
                                            <option value='03'>03일</option>
                                            <option value='04'>04일</option>
                                            <option value='05'>05일</option>
                                            <option value='06'>06일</option>
                                            <option value='07'>07일</option>
                                            <option value='08'>08일</option>
                                            <option value='09'>09일</option>
                                            <option value='10'>10일</option>
                                            <option value='11'>11일</option>
                                            <option value='12'>12일</option>
                                            <option value='13'>13일</option>
                                            <option selected={true} value='14'>14일</option>
                                            <option value='15'>15일</option>
                                            <option value='16'>16일</option>
                                            <option value='17'>17일</option>
                                            <option value='18'>18일</option>
                                            <option value='19'>19일</option>
                                            <option value='20'>20일</option>
                                            <option value='21'>21일</option>
                                            <option value='22'>22일</option>
                                            <option value='23'>23일</option>
                                            <option value='24'>24일</option>
                                            <option value='25'>25일</option>
                                            <option value='26'>26일</option>
                                            <option value='27'>27일</option>
                                            <option value='28'>28일</option>
                                            <option value='29'>29일</option>
                                            <option value='30'>30일</option>
                                            <option value='31'>31일</option>
                                        </select>

                                        <span id="sh_all" style={{display: 'none'}}>
						
							<div className='btn_line_up_left'>
										<input type='text' name='j_sdate' style={{width: '75px', textAlign: 'center'}}
                                               value="" className='input_text' id="time_start"/>
										~
										<input type='text' name='j_ddate' style={{width: '75px', textAlign: 'center'}}
                                               value="" className='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
							</div>
							<div className='btn_line_up_left'>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>어제</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>이번주</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>7일간</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>지난달</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>이번달</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>30일간</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>60일간</button>
                                &nbsp;&nbsp;</span>
							<span className='shop_btn_pack'><button type='button' className='input_small gray'
                                                                    onClick={() => {
                                                                    }} style={{cursor: 'pointer'}}>90일간</button></span>
							</div>
					</span>
                                    </td>
                                    <td className="article">정산내역</td>
                                    <td className="conts">
                                        <input type="radio" name='ragi' value="0" checked={true}/>
                                        <label htmlFor='ragi' style={{height: '18px'}}>정산내역</label>
                                        &nbsp;

                                        <input type="radio" name='ragi' value="system"/>
                                        <label htmlFor='ragi' style={{height: '18px'}}>기타내역</label>
                                        &nbsp;


                                        <input type="radio" name='ragi' value="cancel"/>
                                        <label htmlFor='ragi' style={{height: '18px'}}>기타공제</label>
                                        &nbsp;

                                    </td>
                                </tr>
                                <tr>
                                    <td className="article">상태</td>
                                    <td className="conts">
                                        <input type="radio" name='bonus_status' id="bonus_status" value=""
                                               checked={true}/>
                                        <label htmlFor='bonus_status' style={{height: '18px'}}>전체</label>
                                        &nbsp;
                                        <input type="radio" name='bonus_status' id="bonus_status" value="N"/>
                                        <label htmlFor='bonus_status' style={{height: '18px'}}>정상회원</label>
                                        &nbsp;

                                        <input type="radio" name='bonus_status' id="bonus_status" value="Y"/>
                                        <label htmlFor='bonus_status' style={{height: '18px'}}>수당정지</label>
                                        &nbsp;

                                    </td>
                                    <td className="article">통계구분</td>
                                    <td className="conts">
                                        <input type="radio" name='viewtype' id="sorttype1" value="1" checked={true}/>
                                        <label htmlFor='sorttype1' style={{height: '18px'}}>회원</label>
                                        &nbsp;
                                        <input type="radio" name='viewtype' id="sorttype2" value="2"/>
                                        <label htmlFor='sorttype2' style={{height: '18px'}}>날짜</label>
                                        &nbsp;

                                        <input type="radio" name='viewtype' id="sorttype3" value="3"/>
                                        <label htmlFor='sorttype3' style={{height: '18px'}}>상세</label>
                                        &nbsp;
                                    </td>
                                    <td className="article">아이디 검색</td>
                                    <td className="conts">
                                        <input type='hidden' name='sfl' value="member_id"/>
                                        <input type='text' name='stx' style={{width: '90%'}} value=""
                                               className='input_text'/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* <!-- 버튼영역 --> */}
                            <div className="top_btn_area">
                                <div className="btn_line_up_center">

                                    <span className="shop_btn_pack btn_input_blue"><input type="submit"
                                                                                          className="input_medium"
                                                                                          title="검색" value="검색"/></span>

                                    {/* <!--
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href='_entershop.bonus_stats_term.php?p_type=year&sh_year=2024&sh_month=03&pass_orderid=&app_mode=popup' onclick="openwindow(this,'stats','1200','600','yes');return false" className="medium gray">회원보기</a></span>
--> */}


                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- // 검색영역 --> */}


                    {/* <!--
	<div className="form_box_area">

	<table border=0 cellpadding=0 cellspacing=0 width='100%'style="border-collapse:collapse;">
	<tr height=40 align=left> 
		<td style='padding:5px'>
			전체 : <b><font color="4C64AB">0</font></b> 건  조회</a>

		</td>
	</tr>
	</table>

	</div>
 --> */}

                    <div className="content_section_inner">

                        <table className="list_TB" summary="리스트기본">

                            <thead>
                            <tr>
                                <td colSpan={10} className="new_order_data_sum">
                                    <div className="inner_sum_box">
                                        <ul>
                                            <li className="txt">2024 전체매출( BV)<span className="value">0</span></li>
                                        </ul>
                                    </div>


                                    {/* <!--
상품테이블 에서 매출 가져옴

					<div style="clear:both"></div>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">2024 전체매출 PV<span className="value">0 PV</span></li>
							<li className="txt">2024 전체매출(원)<span className="value">1,500,000 원</span></li>
						</ul>
					</div>
--> */}
                                </td>
                            </tr>
                            </thead>
                        </table>
                    </div>

                    {/* <!-- 내부페이지 탭메뉴 --> */}
                    <div className="new_deny_tab">


                        <div className="tab_box">
                            <ul>
                                <li className="hit">
                                    <a href="?p_type=year&sh_year=2024&sh_month=03&sh_day=14&viewtype=1&search_ptype=year&stx=&sfl=&bonus_status=&ragi=1"
                                       className="tab">전체</a>
                                </li>
                                {/* <li className="">
				<a href="?tab_menu_bname=배당보너스&p_type=year&sh_year=2024&sh_month=03&sh_day=14&search_ptype=year&viewtype=1&stx=&sfl=&bonus_status=&ragi=1" className="tab">배당보너스</a>
			</li> */}
                                {/* <li className="">
				<a href="?tab_menu_bname=매칭보너스&p_type=year&sh_year=2024&sh_month=03&sh_day=14&search_ptype=year&viewtype=1&stx=&sfl=&bonus_status=&ragi=1" className="tab">매칭보너스</a>
			</li> */}
                                <li className="">
                                    <a href="?tab_menu_bname=직급보너스&p_type=year&sh_year=2024&sh_month=03&sh_day=14&search_ptype=year&viewtype=1&stx=&sfl=&bonus_status=&ragi=1"
                                       className="tab">대리점 보너스</a>
                                </li>
                                {/* <li className="">
				<a href="?tab_menu_bname=만기보너스&p_type=year&sh_year=2024&sh_month=03&sh_day=14&search_ptype=year&viewtype=1&stx=&sfl=&bonus_status=&ragi=1" className="tab">만기보너스</a>
			</li> */}
                            </ul>

                        </div>
                        <div className="top_btn_area">
                            <span className="shop_btn_pack"><a href="javascript:select_send('excel_center');"
                                                               className="small white" title="선택엑셀저장">선택엑셀저장</a></span>
                            {/* <!--<span className="shop_btn_pack"><a onclick="btn_check('update')" className="small white" />정산완료</a></span>--> */}
                        </div>
                    </div>

                    <form name='fboardlist' method='post'>
                        <input type='hidden' name='q1' value="code="/>
                        <input type='hidden' name='page' value="1"/>

                        {/* <!--엑셀다운 추가 --> */}
                        <input type='hidden' name='mode' value=""/>
                        <input type='hidden' name='year' value="2024"/>
                        <input type='hidden' name='year_month' value="2024-03"/>
                        <input type='hidden' name='year_weekday' value=""/>
                        <input type='hidden' name='year_day' value="2024-03-14"/>
                        <input type='hidden' name='j_sdate' value=""/>
                        <input type='hidden' name='j_ddate' value=""/>

                        {/* <!--엑셀다운 추가 --> */}

                        <input type='hidden' name='tab_menu_bname' value="전체통계"/>
                        <input type='hidden' name='p_type' value="year"/>
                        <input type='hidden' name='viewtype' value="1"/>
                        <input type='hidden' name='bonus_status' value=""/>

                        {/* <!-- 리스트영역 --> */}
                        <div className="content_section_inner">
                            <table className="list_TB" summary="리스트기본">


                                <thead>
                                <tr style={{height: '50', textAlign: 'center'}}>
                                    <th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1"
                                                                                onClick={() => {
                                                                                }}/></th>
                                    <th scope="col" className="colorset">No</th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=member_id&orderby=asc'><u>아이디</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=b.memgrade&orderby=asc'><u>회원구분</u></a>
                                    </th>
                                    <th scope='col' className='colorset'><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'>
                                        {/* <u>배당보너스</u></a></th><th scope='col' className='colorset'> */}
                                        {/* <a href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'> */}
                                        {/* <u>매칭보너스</u></a></th><th scope='col' className='colorset'><a href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'> */}
                                        <u>대리점 보너스</u></a></th>
                                    <th scope='col' className='colorset'><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'>
                                    </a></th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>발생금액</u></a>
                                    </th>
                                    {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>입금계좌 은행</th>	--> */}
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>세금공제</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>적립공제</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>기타공제</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>실수령액</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=reg_date&orderby=asc'><u>기간</u></a>
                                    </th>
                                    <th scope="col" className="colorset"><a
                                        href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=total&orderby=asc'><u>상태</u></a>
                                    </th>
                                    {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=reg_date&orderby=asc'><u>수당이름</th>	--> */}
                                    {/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_total_exchange.php?code=&page=&filed=ragi&orderby=asc'><u>정산</u></a></th>--> */}
                                </tr>
                                </thead>


                                <tr>
                                    <td height={50} colSpan={20} align='center' style={{backgroundColor: '#ffffff'}}>내역이
                                        없습니다.
                                    </td>
                                </tr>

                                <tfoot>
                                <tr>
                                    <td colSpan={10} style={{height: '20px'}}>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={20} className="new_order_data_sum">
                                        <div className="inner_sum_box">
                                            <ul style={{fontSize: '12px'}}>
                                                {/* <!--<li className="txt" style="font-size:12px">정산 총 합계</li>--> */}

                                                {/*<!--
											 <li><span className="sum" style="font-size:12px">추천수당</span><span className="value" style="font-size:13px">0</span></li>
											<li><span className="sum" style="font-size:12px">데일리수당</span><span className="value" style="font-size:13px">0</span></li>
											<li><span className="sum" style="font-size:12px">지사수당</span><span className="value" style="font-size:13px">0</span></li>
											--> */}

                                                {/* <!--<li><span className="sum" style="font-size:12px">센터수당</span><span className="value" style="font-size:13px">0</span></li>--> */}
                                                {/* <!--<li><span className="sum" style="font-size:12px">센터소개수당</span><span className="value" style="font-size:13px">0</span></li>--> */}

                                                <li><span className="sum" style={{fontSize: '12px'}}>금액합계</span><span
                                                    className="value" style={{fontSize: '13px'}}>0</span></li>
                                                {/* <!--<li><span className="sum">배송비</span><span className="value">0</span></li>--> */}
                                                <li><span className="sum" style={{fontSize: '12px'}}>세금공제</span><span
                                                    className="value" style={{fontSize: '13px'}}>0</span></li>
                                                <li><span className="sum" style={{fontSize: '12px'}}>적립공제</span><span
                                                    className="value">0</span></li>
                                                <li><span className="sum" style={{fontSize: '12px'}}>기타공제</span><span
                                                    className="value" style={{fontSize: '13px'}}>0</span></li>
                                                <li><span className="sum" style={{fontSize: '12px'}}>실수령액</span><span
                                                    className="value" style={{fontSize: '13px'}}>0</span></li>
                                                <li><span className="sum" style={{
                                                    fontSize: '12px',
                                                    fontWeight: 'bold'
                                                }}>정산합계</span><span className="value">0</span></li>
                                                {/* <!--<li><span className="sum">수수료</span><span className="value">0</span></li>--> */}
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop: '10px'}}>
                            <tr>
                                <td width='50%' align='left'></td>
                                <td width='50%' align="right"></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default TotalSettlementDetails;