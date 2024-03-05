import { useEffect, useState } from "react";

const mdinfo = () => {
const [sliderVisible, setSliderVisible] = useState(true)
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
}
return(
<div className="content_section">
    <div className="content_section_fix" style={{background:'#fff'}}>

        <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span><span
                className="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>

        {/*
        <!-- 페이지타이틀 --> */}
        <div className="title_area">
            <span className="icon"></span>
            <span className="title">
                관리자 정보수정
            </span>
            <span className="location">홈 &gt; 기본관리 &gt; 관리자 정보수정</span>
        </div>
        {/*
        <!--  페이지타이틀 --> */}





        <iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{display:'none'}}></iframe>

        {/*
        <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

        <div className="common_ajax_proc"></div>

        {/*
        <!-- 리스트영역 --> */}
        <div className="content_section_inner">

            {/*
            <!-- 메인추출 --> */}
            <div className="sub_sys_company">

                {/*
                <!-- 내부 그룹타이틀 --> */}
                <div className="group_title">
                    {/*
                    <!--<span className="icon"></span><span className="title">관리자 정보 <b> 본사 </b></span>--> */}
                    {/*
                    <!--<span className="btn_area">
                            <span className="shop_btn_pack"><a href="_order.list.php?menu_idx=21" className="small gray" title="더보기" >주문관리 보기</a></span></span>-->
                    */}
                </div>
                {/*
                <!-- 내부 그룹타이틀 --> */}
            </div>
        </div>



        <form name="frm" method="post" action="_entershop.entershop.pro.php">
            <input type="hidden" name="_mode" value="modify" />
            <input type="hidden" name="serialnum" value="1" />
            <input type="hidden" name="_PVSC" value="" />

            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        {/*
                        <!-- 마지막값은수정안함 --> */}
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">관리자 아이디</td>
                            <td className="conts">
                                <b>superadmin</b>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">비밀번호</td>
                            <td className="conts">
                                <input type="password" name="passwd" value="" size={20} className="input_text"
                                    autocomplete="new-password" />
                                <div className="guide_text"><span className="ic_blue"></span><span className="blue">변경할
                                        경우에만 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">비번확인</td>
                            <td className="conts">
                                <input type="password" name="repasswd" value="" size={20}className="input_text"
                                    autoComplete="new-password" />
                                <div className="guide_text"><span className="ic_blue"></span><span className="blue">다시
                                        한번 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">밴더사명</td>
                            <td className="conts"><input type="text" name="bannder" value="" size={30}
                                    className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">업체명<span className="ic_ess" title="필수"></span></td>
                            <td className="conts"><input type="text" name="cName" value="더센2"
                                    size={30}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">사업자번호 (주민번호)</td>
                            <td className="conts"><input type="text" name="cNumber" value=""
                                    size={30}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">대표자</td>
                            <td className="conts"><input type="text" name="ceoName" value=""
                                    size={30}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">업태</td>
                            <td className="conts"><input type="text" name="cItem1" value=""
                                    size={50}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">업종</td>
                            <td className="conts"><input type="text" name="cItem2" value=""
                                    size={50}className="input_text" /></td>
                        </tr>


                        <tr>
                            <td className="article">통신판매번호</td>
                            <td className="conts"><input type="text" name="mail_order_sales" value=""
                                    size={50}className="input_text" /></td>
                        </tr>




                        {/* <script src="dmaps.daum.net/map_js_init/postcode.v2.js"></script>
                        <script charSet="UTF-8" type="text/javascript"
                            src="t1.daumcdn.net/postcode/api/core/221018/1666013742754/221018.js"></script>
                        <script>
                            도로명주소 우편번호 열기

                            function new_post_view() {
                                new daum.Postcode({
                                    oncomplete: function (data) {
                                        팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                                        도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                                        내려오는 변수가 값이 없는 경우엔 공백('') 값을 가지므로, 이를 참고하여 분기 한다.
                                        var fullRoadAddr = data.roadAddress;
                                        도로명 주소 변수
                                        var extraRoadAddr = '';
                                        도로명 조합형 주소 변수

                                        법정동명이 있을 경우 추가한다.
                                        if(data.bname !== '') {
                                            extraRoadAddr += data.bname;
                                        }
                                        건물명이 있을 경우 추가한다.
                                        if(data.buildingName !== '') {
                                            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data
                                                .buildingName : data.buildingName);
                                        }
                                        도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                                        if(extraRoadAddr !== '') {
                                            extraRoadAddr = ' (' + extraRoadAddr + ')';
                                        }
                                        도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                                        if(fullRoadAddr !== '') {
                                            fullRoadAddr += extraRoadAddr;
                                        }

                                        지번주소가 없을 경우 도로명주소로 대체한다.
                                        if(data.jibunAddress == '' && fullRoadAddr != '') {
                                            if (data.autoJibunAddress) data.jibunAddress = data
                                                .autoJibunAddress;
                                            else data.jibunAddress = fullRoadAddr;
                                        }

                                        우편번호와 주소 정보를 해당 필드에 넣는다.
                                        document.getElementById("_zonecode").value = data.zonecode;
                                        document.getElementById("_post1").value = data.postcode1;
                                        document.getElementById("_post2").value = data.postcode2;
                                        document.getElementById("_addr_doro").value = fullRoadAddr;
                                        document.getElementById("_addr1").value = data.jibunAddress;

                                        document.getElementById("_addr_map").value = fullRoadAddr;

                                        document.getElementById("_addr2").focus();


                                    }
                                }).open();
                            }
                        </script>*/}
                        <tr>
                            <td className="article">우편번호</td>
                            <td className="conts">
                                <input type="text" name="zip1" id="_post1" value="" size={5} className="input_text" />-
                                <input type="text" name="zip2" id="_post2" value="" size={5} className="input_text" />

                                <span className="shop_btn_pack" style={{float:'none'}}>&nbsp;<a href="#none"
                                        onClick={()=>{}} className="small gray">우편번호검색</a></span>

                            </td>
                        </tr>
                        <tr>
                            <td className="article">주소</td>
                            <td className="conts">
                                기본주소 : <input type="text" name="address" id="_addr1" value="" size={50}
                                    className="input_text" /><br />
                                상세주소 : <input type="text" name="address1" id="_addr2" value="" size={50}
                                    className="input_text" /><br />
                                도로명주소 : <input type="text" name="address_doro" id="_addr_doro" value="" size={70}
                                    className="input_text" />
                                <br />새 우편번호 : <input type="text" name="zonecode" id="_zonecode" value="" size={10}
                                    className="input_text" />
                            </td>
                        </tr>


                    </tbody>
                </table>

            </div>

            {/*
            <!--
					<div className="sub_title"><span className="icon"></span><span className="title">지도 및 주소 설정</span></div>

					<div className="form_box_area">
						<table className="form_TB" summary="검색항목">
							<colgroup>
								<col width="200px"/><col width="*"/>
							</colgroup>
							<tbody>

							<tr>
								<td className="article">지도 및 주소<span className="ic_ess" title="필수"></span></td>
								<td className="conts">
								
									주소 : <input type={'text'} name="address" id="_addr_map" value='' size={'85'} className={'input_text'}>
									<div style={{margin: '5px' '0'}}>
									X좌표 : <input type="text" name="com_mapx" id="com_mapx" className="input_text" size="25" value="">&nbsp;&nbsp;&nbsp;				
									Y좌표 : <input type="text" name="com_mapy" id="com_mapy" className="input_text" size="25" value="">
									</div>
									<div className='guide_text'><span className='ic_blue'></span>
                                    <span className='blue'>주소를 등록하시고 저장을 하시면 지도를 확인할 수 있습니다 (사용자페이지 업체정보 아래 표시됨).</span></div>									<div className='guide_text'><span className='ic_blue'></span><span className='blue'>주소 등록시 좌표는 자동으로 등록되며, 지도위치를 변경하시려면 X, Y 좌표를 삭제하신 후 주소 변경 후 수정하시면 됩니다.</span></div>									<div className='guide_text'><span className='ic_blue'></span><span className='blue'>주소 등록시 주변 경관을 설명하는 문구(OO주유소 근처, 교차로 부근 등)를 입력할 경우 좌표 검색이 되지 않을 수 있으니 주의하시기 바랍니다.</span></div>									<div className='guide_text'><span className='ic_blue'></span><span className='blue'>좌표를 입력하면 지도가 표시됩니다. 세밀한 조정을 원하시면 빨간 마커를 드래그하여 원하는 위치에 놓으시면 됩니다.</span></div>								</td>
							</tr>
							</tbody>
						</table>
					</div>

--> */}

            <div className="sub_title"><span className="icon"></span><span className="title">지갑주소</span></div>
            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>

                        <tr>
                            <td className="article">코드페이 월렛 아이디</td>
                            <td className="conts"><input type="text" name="codepay_wid" value=" "
                                    size={60}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">코드페이 api key</td>
                            <td className="conts"><input type="text" name="codepay_apikey" value=" "
                                    className="input_text" style={{width:'100%'}} /></td>
                        </tr>
                        <tr>
                            <td className="article">코드페이 송금키</td>
                            <td className="conts"><input type="text" name="codepay_remitkey" value=" "
                                    size={60}className={'input_text'} /></td>
                        </tr>

                        <tr>
                            <td className="article">지갑주소</td>
                            <td className="conts">
                                <div className="guide_text"><span className="ic_blue"></span>
                                    <span className="blue">입금받으실 지갑주소를 입력하세요.</span></div>

                                {/*
                                <!-- bxslide --> */}
                                <link rel="stylesheet" href="/include/js/jquery.bxslider/jquery.bxslider.css"
                                    type="text/css" />
                                <script src="/include/js/jquery.bxslider/jquery.bxslider.js"></script>
                                <link href="/myAdmin/css/dash/bootstrap.css?v=1668010764" id="bootstrap-style"
                                    rel="stylesheet" type="text/css" />
                                <script type="text/javascript" src="/pages_unique03/js/clipboard.min.js"></script>

                                <div className="token_tid">

                                    <input type="hidden" name="ip_way" value="1" />

                                    네트워크 선택 : <select name="token_name" id="token_name"
                                        className="select_design add_option add_option_chk"
                                        style={{width:'91%', height:'30px'}}>

                                        <option value="CODEPAY">코드페이 간편주소</option>

                                    </select>
                                    <br /><br />

                                    지갑주소 입력 : <input type="text" name="coin_token" className="input_text" value=""
                                        placeholder="지갑주소를 복사해서 붙여넣기하세요" style={{width:'90%', height:'30px'}} />
                                    <br /><br />

                                    태그그룹 입력 : <input type="text" name="tag_group_name" className="input_text" value=""
                                        placeholder="코드페이 태그 그룹명을 입력하세요" style={{width:'90%', height:'30px'}} />
                                    <br /><br />
                                    <a href="#none" className="btn_add_button" onClick={()=> {return false}}
                                        style={{cursor:'pointer'}}>
                                        <img src="/pages_unique03/images/main/menu_icon_add_blue.png" border={0}
                                            alt="" /><span>지갑주소 추가</span>
                                    </a>

                                    {/* <script type="text/javascript">
                                        submit 최종 폼체크

                                        function fbuyform_submit(f) {
                                            $("#join_btn_submit").click(function () {

                                                    f = document.fbuyform;

                                                    var token_name = $('input[name=token_name]').val();
                                                    var token_name = $('select[name=token_name]').val();

                                                    if (token_name == "") {
                                                        alert("지갑 계정을 선택하세요");
                                                        return false;
                                                    }


                                                    if (f.coin_token.value == "") {
                                                        alert("지갑 주소를 입력하세요");
                                                        f.coin_token.focus();
                                                        return false;
                                                    }


                                                    if (confirm(
                                                            "입력하신 사항들이 맞는지 확인하시기 바랍니다.\n\n다음 단계로 진행하시려면 '확인'버튼을 클릭하세요"
                                                        ) == false)
                                                        return false;
                                                    f.target = 'common_frame';
                                                    f.action = '/pages_unique03/mypage.wallet.info_update.php';
                                                    f.submit();
                                                    top.opener.location.href = '/';
                                                    location.reload();
                                                    return true;
                                                }

                                            });


                                        결제방법

                                        function chk_method(methodType) {
                                            var f = document.fbuyform;

                                            switch (methodType) {
                                                case 'online':
                                                    eval("pay1").style.display = '';
                                                    eval("pay2").style.display = '';
                                                    break;

                                                case 'card':
                                                    eval("pay1").style.display = 'none';
                                                    eval("pay2").style.display = 'none';
                                                    break;

                                                case 'direct':
                                                    eval("pay1").style.display = 'none';
                                                    eval("pay2").style.display = 'none';
                                                    break;
                                            }
                                        }

                                        숫자인지 체크

                                        function IsNumber(strvalue) {
                                            for (var i = 0; i < strvalue.length; i++) {
                                                var chr = strvalue.substr(i, 1);
                                                if (chr < '0' || chr > '9') {
                                                    return false;
                                                }
                                            }
                                            return true;
                                        }

                                        복사 붙여넣기

                                        function copy_clip() {
                                            if (window.clipboardData) {
                                                meintext = document.fbuyform["wr_bankinfo"].value;
                                                window.clipboardData.setData("Text", meintext);
                                            }

                                            alert("복사되었습니다.\n붙여넣기(Ctrl+v)를 이용하시면 됩니다.");
                                            return false;
                                        }

                                        숫자 3 자리수마다 콤마(, ) 찍기##################################################
                                        function commaStr(n) {
                                            var reg = /(^[+-]?\d+)(\d{3})/;
                                            n += "";

                                            while (reg.test(n))
                                                n = n.replace(reg, "$1" + "," + "$2");
                                            return n;
                                        }

                                        function deCommaStr(obj) {
                                            num = obj.value + "";
                                            if (obj.value != "") {
                                                obj.value = obj.value.replace(/,/g, "");
                                            }
                                        }
                                    </script>
                                    */}

                                    <div style={{clear:'both',height:'30px'}}></div>


                                    {/*
                                    <!--<div className="cm_mypage_tab">-->
                                    <!--<a onclick="list_tab('transfer');" className="tab_transfer hit"  style="width:100%;text-align:center">&nbsp;</a>-->
                                    <!--<a onclick="list_tab('return');" className="tab_return" style="width:50%;text-align:center">이체내역</a>-->
                                    <!--</div>--> */}


                                    {/*
                                    <!-- 마이리스트 --> */}
                                    <div className="cm_bonus_list3 list_transfer">
                                        {/*
                                        <!-- 내용없을경우 모두공통 --> */}
                                        <div className="cm_no_conts">
                                            <div className="no_icon"></div>
                                            <div className="gtxt">내역이 없습니다.</div>
                                        </div>
                                        {/*
                                        <!--  내용없을경우 모두공통 --> */}
                                    </div>
                                    {/*
                                    <!-- .cm_mypage_list --> */}

                                    <div className="cm_paginate" style={{display:'none'}}>
                                        <span className="lineup"><span className="nextprev"><span className="btn"><span
                                                        className="no"><span className="icon ic_first"></span></span><a
                                                        href=" ?&amp;listpg=1" className="ok" title="처음"><span
                                                            className="icon ic_first"></span></a></span><span
                                                    className="btn"><span className="no"><span
                                                            className="icon ic_prev"></span></span><a
                                                        href=" ?&amp;listpg=0" className="ok" title="이전"><span
                                                            className="icon ic_prev"></span></a></span></span><span
                                                className="number"><a href="#none" onClick={()=> {return false;}}
                                                    className="hit">1</a></span><span className="nextprev"><span
                                                    className="btn"><span className="no"><span
                                                            className="icon ic_next"></span></span><a
                                                        href=" ?&amp;listpg=2" className="ok" title="다음"><span
                                                            className="icon ic_next"></span></a></span><span
                                                    className="btn"><span className="no"><span
                                                            className="icon ic_last"></span></span><a
                                                        href=" ?&amp;listpg=0" className="ok" title="끝"><span
                                                            className="icon ic_last"></span></a></span></span></span>
                                    </div>

                                    {/*<script>
                                        function wallet_insert_submit() {

                                            var token_name = $('select[name=token_name]').val();
                                            var coin_token = $('input[name=coin_token]').val();
                                            var ip_way = $('input[name=ip_way]').val();
                                            var tag_group_name = $('input[name=tag_group_name]').val();

                                            if (token_name == "") {
                                                alert("지갑 계정을 선택하세요");
                                                return false;
                                            }


                                            if (coin_token == "") {
                                                alert("지갑 주소를 입력하세요");
                                                $('input[name=coin_token]').focus();
                                                return false;
                                            }


                                            $.ajax({
                                                data: {
                                                    mode: "cash_deposit_insert",
                                                    ip_way: ip_way,
                                                    token_name: token_name,
                                                    coin_token: coin_token,
                                                    tag_group_name: tag_group_name
                                                },
                                                type: 'POST',
                                                cache: false,
                                                url: '/pages_unique03/mypage.wallet.info_update.php',
                                                success: function (data) {
                                                    $('.common_ajax_proc').html(data);

                                                },
                                                error: function (request, status, error) {
                                                    alert("code:" + request.status + "\n" + "message:" +
                                                        request.responseText + "\n" + "error:" + error);
                                                }
                                            });

                                        }


                                        function wallet_delete_submit(idx) {

                                            $.ajax({
                                                data: {
                                                    mode: "delete",
                                                    _idx: idx
                                                },
                                                type: 'POST',
                                                cache: false,
                                                url: '/pages_unique03/mypage.wallet.info_update.php',
                                                success: function (data) {
                                                    $('.common_ajax_proc').html(data);

                                                },
                                                error: function (request, status, error) {
                                                    alert("code:" + request.status + "\n" + "message:" +
                                                        request.responseText + "\n" + "error:" + error);
                                                }
                                            });

                                        }

                                        function list_tab(type) {
                                            if (type == "return") {
                                                $(".list_return").css('display', '');
                                                $(".list_transfer").css('display', 'none');
                                                $(".tab_return").addclassName('hit');
                                                $(".tab_transfer").removeclassName('hit');
                                            } else {
                                                $(".list_return").css('display', 'none');
                                                $(".list_transfer").css('display', '');
                                                $(".tab_transfer").addclassName('hit');
                                                $(".tab_return").removeclassName('hit');


                                            }

                                        }
                                    </script> */}

                                    <div style={{clear:'both',height:'30px'}}></div>

                                    {/*<script type="text/javascript">
                                        var total_card = '0';
                                        var card_info = new Array(total_card);

                                        $(window).on('load', function () {

                                            $('.mid .area .js_main_visual').find('.visual_box').show();
                                            var main_visual = $('.mid .area .js_main_visual').bxSlider({
                                                mode: "fade",
                                                auto: false,
                                                stopAuto: true,
                                                autoHover: false,
                                                pagerCustom: '.js_main_visual_pager',
                                                controls: false,
                                                maxSlides: 1,
                                                moveSlides: 1,
                                                speed: 1,
                                                slideMargin: 0,
                                                onSliderLoad: function (currentIndex) {
                                                    alert(currentIndex);
                                                    $("#en_url").text(card_info[0]);

                                                },

                                                onSlideBefore: function () {
                                                    main_visual.stopAuto();
                                                },
                                                onSlideAfter: function () {
                                                    main_visual.startAuto();
                                                }
                                                onSlideAfter: function ($slideElement, oldIndex,
                                                    newIndex) {

                                                    $("#en_url").text(card_info[newIndex]);
                                                    main_visual.startAuto();

                                                },

                                            });

                                            $('.js_main_visual_prev').on('click', function (e) {
                                                e.preventDefault();
                                                main_visual.goToPrevSlide();
                                            });

                                            $('.js_main_visual_next').on('click', function (e) {
                                                e.preventDefault();
                                                main_visual.goToNextSlide();
                                            });
                                        });

                                        복사 붙여넣기
                                        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                                            $('.copy_btn').text('복사');
                                            $('.copy_btn').on('click', function (e) {
                                                select_all_and_copy(document.getElementById("en_url"));
                                                select_all_and_copy($("#en_url").html());
                                            });
                                        } else {
                                            var clipboard = new Clipboard('.copy_btn');
                                            clipboard.on('success', function (e) {

                                                console.info('Action:', e.action);
                                                console.info('Text:', e.text);
                                                console.info('Trigger:', e.trigger);


                                                alert('복사 되었습니다.');
                                                e.clearSelection();
                                            });
                                            clipboard.on('error', function (e) {
                                                alert('선택된 텍스트를 복사하세요.');
                                            });
                                        }
                                    </script> */}
                                </div>
                                <div style={{clear:'both', height:'30px'}}></div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/*
            <!-- 내부 서브타이틀 --> */}
            <div className="sub_title"><span className="icon"></span><span className="title">마이오피스 정보</span></div>
            {/*
            <!--  내부 서브타이틀 --> */}

            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        {/*
                        <!-- 마지막값은수정안함 --> */}
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">마이오피스 로고<br />
                            </td>
                            <td className="conts">
                                <div style={{}}><img src="" id="img_myoffice_img"
                                        style={{maxWidth:'300px',marginBottom:'5px',display:'none'}} />
                                </div>
                                <div><input type="file" name="myoffice_img"
                                        className="input_text n2b16548968afb5806f588912cbec7109_file" />
                                </div>
                                {/* <script>
                                    $(function () {

                                        file_input_change_2b16548968afb5806f588912cbec7109($(
                                            '.n2b16548968afb5806f588912cbec7109_checkbox'));
                                        $('.n2b16548968afb5806f588912cbec7109_checkbox').on('click',
                                            function () {

                                                file_input_change_2b16548968afb5806f588912cbec7109($(this));
                                            });

                                        function file_input_change_2b16548968afb5806f588912cbec7109(Target) {

                                            var checked = Target.is(':checked');
                                            if (checked === true) $('.n2b16548968afb5806f588912cbec7109_file')
                                                .attr('type', 'input').attr('placeholder',
                                                    'http:를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val(
                                                    '');
                                            else $('.n2b16548968afb5806f588912cbec7109_file').attr('type',
                                                'file').removeAttr('placeholder').removeAttr('size').val('');
                                        }
                                    });
                                </script> */}
                            </td>
                        </tr>
                        <tr>
                            <td className="article">마이오피스 상단바<br />
                            </td>
                            <td className="conts">


                                <link href="/include/js/colorpicker/spectrum.css" rel="stylesheet" type="text/css">
                                <script src="/include/js/colorpicker/spectrum.js"></script>


                                <input id="picker" type="text" name="chatColor" value="#000000"
                                    style={{display:'none'}}>
                                <div
                                    className="sp-container sp-light sp-flat sp-clear-enabled sp-palette-only sp-initial-disabled">
                                    <div className="sp-palette-container">
                                        <div className="sp-palette sp-thumb sp-cf">
                                            <div className="sp-cf sp-palette-row sp-palette-row-0"><span title="#000000"
                                                    data-color="rgb(0, 0, 0)"
                                                    className="sp-thumb-el sp-thumb-light sp-thumb-active"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(0, 0, 0)'}}></span></span><span
                                                    title="#444444" data-color="rgb(68, 68, 68)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(68, 68, 68)'}}></span></span><span
                                                    title="#666666" data-color="rgb(102, 102, 102)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(102, 102, 102)'}}></span></span><span
                                                    title="#999999" data-color="rgb(153, 153, 153)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(153, 153, 153)'}}></span></span><span
                                                    title="#cccccc" data-color="rgb(204, 204, 204)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(204, 204, 204)'}}></span></span><span
                                                    title="#eeeeee" data-color="rgb(238, 238, 238)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(238, 238, 238)'}}></span></span><span
                                                    title="#f3f3f3" data-color="rgb(243, 243, 243)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(243, 243, 243)'}}></span></span><span
                                                    title="#ffffff" data-color="rgb(255, 255, 255)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 255, 255)'}}></span></span>
                                            </div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-1"><span title="#ff0000"
                                                    data-color="rgb(255, 0, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 0, 0)'}}></span></span><span
                                                    title="#ff9900" data-color="rgb(255, 153, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 153, 0)'}}></span></span><span
                                                    title="#ffff00" data-color="rgb(255, 255, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 255, 0)'}}></span></span><span
                                                    title="#00ff00" data-color="rgb(0, 255, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(0, 255, 0)'}}></span></span><span
                                                    title="#00ffff" data-color="rgb(0, 255, 255)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(0, 255, 255)'}}></span></span><span
                                                    title="#0000ff" data-color="rgb(0, 0, 255)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(0, 0, 255)'}}></span></span><span
                                                    title="#9900ff" data-color="rgb(153, 0, 255)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(153, 0, 255)'}}></span></span><span
                                                    title="#ff00ff" data-color="rgb(255, 0, 255)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 0, 255)'}}></span></span></div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-2"><span title="#f4cccc"
                                                    data-color="rgb(244, 204, 204)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(244, 204, 204)'}}></span></span><span
                                                    title="#fce5cd" data-color="rgb(252, 229, 205)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(252, 229, 205)'}}></span></span><span
                                                    title="#fff2cc" data-color="rgb(255, 242, 204)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(255, 242, 204)'}}></span></span><span
                                                    title="#d9ead3" data-color="rgb(217, 234, 211)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(217, 234, 211)'}}></span></span><span
                                                    title="#d0e0e3" data-color="rgb(208, 224, 227)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(208, 224, 227)'}}></span></span><span
                                                    title="#cfe2f3" data-color="rgb(207, 226, 243)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(207, 226, 243)'}}></span></span><span
                                                    title="#d9d2e9" data-color="rgb(217, 210, 233)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(217, 210, 233)'}}></span></span><span
                                                    title="#ead1dc" data-color="rgb(234, 209, 220)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style={{backgroundColor:'rgb(234, 209, 220)'}}></span></span>
                                            </div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-3"><span title="#ea9999"
                                                    data-color="rgb(234, 153, 153)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(234, 153, 153);"></span></span><span
                                                    title="#f9cb9c" data-color="rgb(249, 203, 156)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(249, 203, 156);"></span></span><span
                                                    title="#ffe599" data-color="rgb(255, 229, 153)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(255, 229, 153);"></span></span><span
                                                    title="#b6d7a8" data-color="rgb(182, 215, 168)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(182, 215, 168);"></span></span><span
                                                    title="#a2c4c9" data-color="rgb(162, 196, 201)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(162, 196, 201);"></span></span><span
                                                    title="#9fc5e8" data-color="rgb(159, 197, 232)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(159, 197, 232);"></span></span><span
                                                    title="#b4a7d6" data-color="rgb(180, 167, 214)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(180, 167, 214);"></span></span><span
                                                    title="#d5a6bd" data-color="rgb(213, 166, 189)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(213, 166, 189);"></span></span>
                                            </div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-4"><span title="#e06666"
                                                    data-color="rgb(224, 102, 102)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(224, 102, 102);"></span></span><span
                                                    title="#f6b26b" data-color="rgb(246, 178, 107)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(246, 178, 107);"></span></span><span
                                                    title="#ffd966" data-color="rgb(255, 217, 102)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(255, 217, 102);"></span></span><span
                                                    title="#93c47d" data-color="rgb(147, 196, 125)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(147, 196, 125);"></span></span><span
                                                    title="#76a5af" data-color="rgb(118, 165, 175)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(118, 165, 175);"></span></span><span
                                                    title="#6fa8dc" data-color="rgb(111, 168, 220)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(111, 168, 220);"></span></span><span
                                                    title="#8e7cc3" data-color="rgb(142, 124, 195)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(142, 124, 195);"></span></span><span
                                                    title="#c27ba0" data-color="rgb(194, 123, 160)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(194, 123, 160);"></span></span>
                                            </div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-5"><span title="#cc0000"
                                                    data-color="rgb(204, 0, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(204, 0, 0);"></span></span><span
                                                    title="#e69138" data-color="rgb(230, 145, 56)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(230, 145, 56);"></span></span><span
                                                    title="#f1c232" data-color="rgb(241, 194, 50)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(241, 194, 50);"></span></span><span
                                                    title="#6aa84f" data-color="rgb(106, 168, 79)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(106, 168, 79);"></span></span><span
                                                    title="#45818e" data-color="rgb(69, 129, 142)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(69, 129, 142);"></span></span><span
                                                    title="#3d85c6" data-color="rgb(61, 133, 198)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(61, 133, 198);"></span></span><span
                                                    title="#674ea7" data-color="rgb(103, 78, 167)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(103, 78, 167);"></span></span><span
                                                    title="#a64d79" data-color="rgb(166, 77, 121)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(166, 77, 121);"></span></span></div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-6"><span title="#990000"
                                                    data-color="rgb(153, 0, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(153, 0, 0);"></span></span><span
                                                    title="#b45f06" data-color="rgb(180, 95, 6)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(180, 95, 6);"></span></span><span
                                                    title="#bf9000" data-color="rgb(191, 144, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(191, 144, 0);"></span></span><span
                                                    title="#38761d" data-color="rgb(56, 118, 29)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(56, 118, 29);"></span></span><span
                                                    title="#134f5c" data-color="rgb(19, 79, 92)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(19, 79, 92);"></span></span><span
                                                    title="#0b5394" data-color="rgb(11, 83, 148)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(11, 83, 148);"></span></span><span
                                                    title="#351c75" data-color="rgb(53, 28, 117)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(53, 28, 117);"></span></span><span
                                                    title="#741b47" data-color="rgb(116, 27, 71)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(116, 27, 71);"></span></span></div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-7"><span title="#660000"
                                                    data-color="rgb(102, 0, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(102, 0, 0);"></span></span><span
                                                    title="#783f04" data-color="rgb(120, 63, 4)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(120, 63, 4);"></span></span><span
                                                    title="#7f6000" data-color="rgb(127, 96, 0)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(127, 96, 0);"></span></span><span
                                                    title="#274e13" data-color="rgb(39, 78, 19)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(39, 78, 19);"></span></span><span
                                                    title="#0c343d" data-color="rgb(12, 52, 61)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(12, 52, 61);"></span></span><span
                                                    title="#073763" data-color="rgb(7, 55, 99)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(7, 55, 99);"></span></span><span
                                                    title="#20124d" data-color="rgb(32, 18, 77)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(32, 18, 77);"></span></span><span
                                                    title="#4c1130" data-color="rgb(76, 17, 48)"
                                                    className="sp-thumb-el sp-thumb-light"><span
                                                        className="sp-thumb-inner"
                                                        style="backgroundColor:rgb(76, 17, 48);"></span></span></div>
                                            <div className="sp-cf sp-palette-row sp-palette-row-selection"></div>
                                        </div>
                                        <div className="sp-palette-button-container sp-cf"><button type="button"
                                                className="sp-palette-toggle">더보기</button></div>
                                    </div>
                                    <div className="sp-picker-container">
                                        <div className="sp-top sp-cf">
                                            <div className="sp-fill"></div>
                                            <div className="sp-top-inner">
                                                <div className="sp-color" style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                                                    <div className="sp-sat">
                                                        <div className="sp-val">
                                                            <div className="sp-dragger"
                                                                style={{display: 'block', top: '-5px', left: '-5px'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sp-clear sp-clear-display" title="초기화"></div>
                                                <div className="sp-hue">
                                                    <div className="sp-slider" style={{display: 'block', top: '-3px'}}></div>
                                                </div>
                                            </div>
                                            <div className="sp-alpha" style={{}}>
                                                <div className="sp-alpha-inner">
                                                    <div className="sp-alpha-handle"
                                                        style={{display: 'block', top: '-3px'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sp-input-container sp-cf"><input className="sp-input"
                                                placeholder="색상을 입력하세요" type="text" spellCheck="false"/></div>
                                        <div className="sp-initial sp-thumb sp-cf"></div>
                                        <div className="sp-button-container sp-cf"><a className="sp-cancel"
                                                href="#">취소</a><button type="button" className="sp-choose">선택</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <script>
                                    $("#picker").spectrum({
                                        showPaletteOnly: true,
                                        togglePaletteOnly: true,
                                        preferredFormat: "hex",
                                        clickoutFiresChange: true,
                                        flat: true,
                                        showInput: true,
                                        allowEmpty: true,
                                        color: '#000000',
                                        palette: [
                                            ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3",
                                                "#fff"
                                            ],
                                            ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f",
                                                "#f0f"
                                            ],
                                            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3",
                                                "#cfe2f3", "#d9d2e9", "#ead1dc"
                                            ],
                                            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9",
                                                "#9fc5e8", "#b4a7d6", "#d5a6bd"
                                            ],
                                            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af",
                                                "#6fa8dc", "#8e7cc3", "#c27ba0"
                                            ],
                                            ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6",
                                                "#674ea7", "#a64d79"
                                            ],
                                            ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394",
                                                "#351c75", "#741b47"
                                            ],
                                            ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763",
                                                "#20124d", "#4c1130"
                                            ]
                                        ]
                                    });
                                </script> */}

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            {/*
            <!-- 내부 서브타이틀 --> */}
            <div className="sub_title"><span className="icon"></span><span className="title">상점관리정보</span></div>
            {/*
            <!--  내부 서브타이틀 --> */}

            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        {/*
                        <!-- 마지막값은수정안함 --> */}
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">Imagehosting</td>
                            <td className="conts"><input type="text" name="imagehosting" value=""
                                    size={50}className="input_text" /></td>
                        </tr>


                        <tr>
                            <td className="article">homepage</td>
                            <td className="conts"><input type="text" name="homepage" value=""
                                    size={50}className="input_text" /></td>
                        </tr>



                        <tr>
                            <td className="article">title</td>
                            <td className="conts"><input type="text" name="hometitle" value=""
                                    size={60}className="input_text" /></td>
                        </tr>



                        <tr>
                            <td className="article">sitename</td>
                            <td className="conts"><input type="text" name="homesitename" value="더센"
                                    size={60}className="input_text" /></td>
                        </tr>

                        <tr>
                            <td className="article">상점 로고 이미지<br />
                            </td>
                            <td className="conts">
                                <div style={{}}><img src="" id="img_owner_logo_img"
                                        style={{maxWidth:'300px', marginBottom:'5px', display:'none'}}/></div>
                                <div><input type="file" name="owner_logo_img"
                                        className="input_text nc12de107bcdd3695d8b4d1ab7cb97da0_file" /></div>
                                {/* <script>
                                    $(function () {

                                        file_input_change_c12de107bcdd3695d8b4d1ab7cb97da0($(
                                            '.nc12de107bcdd3695d8b4d1ab7cb97da0_checkbox'));
                                        $('.nc12de107bcdd3695d8b4d1ab7cb97da0_checkbox').on('click',
                                            function () {

                                                file_input_change_c12de107bcdd3695d8b4d1ab7cb97da0($(this));
                                            });

                                        function file_input_change_c12de107bcdd3695d8b4d1ab7cb97da0(Target) {

                                            var checked = Target.is(':checked');
                                            if (checked === true) $('.nc12de107bcdd3695d8b4d1ab7cb97da0_file')
                                                .attr('type', 'input').attr('placeholder',
                                                    'http:를 포함하여 외부 이미지 링크를 기입해주세요.').attr('size', '50').val(
                                                    '');
                                            else $('.nc12de107bcdd3695d8b4d1ab7cb97da0_file').attr('type',
                                                'file').removeAttr('placeholder').removeAttr('size').val('');
                                        }
                                    });
                                </script> */}
                            </td>
                        </tr>

                        <tr>
                            <td className="article">발신번호등록</td>
                            <td className="conts"><input type="text" name="company_table_tel" value=""
                                    size={20}className="input_text" /></td>
                        </tr>

                    </tbody>
                </table>

            </div>

            {/*
            <!-- 내부 서브타이틀 --> */}
            <div className="sub_title"><span className="icon"></span><span className="title">담당자정보</span></div>
            {/*
            <!--  내부 서브타이틀 --> */}

            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        {/*
                        <!-- 마지막값은수정안함 --> */}
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">담당자명</td>
                            <td className="conts"><input type="text" name="name" value="담당자"
                                    size={30}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">E-mail<span className="ic_ess" title="필수"></span></td>
                            <td className="conts"><input type="text" name="email" value="abc@abc.com"
                                    size={30}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">전화번호<span className="ic_ess" title="필수"></span></td>
                            <td className="conts"><input type="text" name="tel" value=""
                                    size={20}className="input_text" />
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">하이푼(-)을 포함하시기 바랍니다.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">휴대폰번호</td>
                            <td className="conts">
                                <input type="text" name="htel" value="010-*********" size={20}className="input_text" />
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">하이푼(-)을 포함하시기 바랍니다.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">팩스번호</td>
                            <td className="conts">
                                <input type="text" name="ofax" value="" size={20}className="input_text" />
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">하이푼(-)을 포함하시기 바랍니다.</span></div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <div className="sub_title"><span className="icon"></span><span className="title">공급사 배송설정</span></div>
            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">기본배송비</td>
                            <td className="conts"><input type="text" name="com_delprice"
                                    className="input_text number_style" style={{width:'60px'}} value="5000" />원
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">무료배송은 0을 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">무료배송비</td>
                            <td className="conts"><input type="text" name="com_delprice_free"
                                    className="input_text number_style" style={{width:'60px'}} value="600000" />원
                                <div className="guide_text"><span className="ic_blue"></span><span className="blue">0 입력
                                        시 무료배송비가 적용되지 않고, 항상 배송비가 적용됩니다.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">지정택배사</td>
                            <td className="conts">
                                <select name="com_del_company">
                                    <option value="">-선택-</option>
                                    <option value="CJ대한통운택배">CJ대한통운택배</option>
                                    <option value="드림택배">드림택배</option>
                                    <option value="우체국EMS">우체국EMS</option>
                                    <option value="우체국등기">우체국등기</option>
                                    <option value="우체국택배" selected={}>우체국택배</option>
                                    <option value="한진택배">한진택배</option>
                                    <option value="롯데택배">롯데택배</option>
                                    <option value="로젠택배">로젠택배</option>
                                    <option value="KG로지스">KG로지스</option>
                                    <option value="CVSnet">CVSnet</option>
                                    <option value="CU 편의점택배">CU 편의점택배</option>
                                    <option value="KGB택배">KGB택배</option>
                                    <option value="경동택배">경동택배</option>
                                    <option value="대신택배">대신택배</option>
                                    <option value="일양택배">일양택배</option>
                                    <option value="합동택배">합동택배</option>
                                    <option value="GTX로지스">GTX로지스</option>
                                    <option value="건영택배">건영택배</option>
                                    <option value="천일택배">천일택배</option>
                                    <option value="한의사랑택배">한의사랑택배</option>
                                    <option value="한덱스">한덱스</option>
                                    <option value="DHL">DHL</option>
                                    <option value="TNT Express">TNT Express</option>
                                    <option value="UPS">UPS</option>
                                    <option value="Fedex">Fedex</option>
                                    <option value="USPS">USPS</option>
                                    <option value="i-Parcel">i-Parcel</option>
                                    <option value="DHL Global Mail">DHL Global Mail</option>
                                    <option value="범한판토스">범한판토스</option>
                                    <option value="AirBoyExpress">AirBoyExpress</option>
                                    <option value="GSMNtoN">GSMNtoN</option>
                                    <option value="APEX(ECMS Express)">APEX(ECMS Express)</option>
                                    <option value="KGL네트웍스">KGL네트웍스</option>
                                    <option value="굿투럭">굿투럭</option>
                                    <option value="호남택배">호남택배</option>
                                    <option value="GSI Express">GSI Express</option>
                                    <option value="SLX로지스">SLX로지스</option>
                                    <option value="ACI Express">ACI Express</option>
                                    <option value="CGM 국제택배">CGM 국제택배</option>
                                    <option value="WIZWA">WIZWA</option>
                                    <option value="고려택배">고려택배</option>
                                    <option value="스피디익스프레스">스피디익스프레스</option>
                                    <option value="[자체배송]">[자체배송]</option>
                                    <option value="----- 미사용 택배사 -----">----- 미사용 택배사 -----</option>
                                    <option value="KG옐로우캡">KG옐로우캡</option>
                                    <option value="롯데(현대)택배">롯데(현대)택배</option>
                                    <option value="사가와 익스프레스">사가와 익스프레스</option>
                                    <option value="삼성택배HTH(구)">삼성택배HTH(구)</option>
                                    <option value="CJ GLS(HTH통합)">CJ GLS(HTH통합)</option>
                                    <option value="신세계(쎄덱스)">신세계(쎄덱스)</option>
                                    <option value="조이익스프레스">조이익스프레스</option>
                                    <option value="하나로택배">하나로택배</option>
                                    <option value="훼미리택배">훼미리택배</option>
                                    <option value="네덱스">네덱스</option>
                                    <option value="나이트맨">나이트맨</option>
                                    <option value="다젠">다젠</option>
                                    <option value="트라넷">트라넷</option>
                                    <option value="이노지스택배">이노지스택배</option>
                                </select> </td>
                        </tr>
                        <tr>
                            <td className="conts" colSpan={2}>
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">배송상품을 판매하는 업체에서만 입력하시면 됩니다.</span></div>
                                <div className="guide_text"><span className="ic_blue"></span><span
                                        className="blue">입점업체의 배송정책이 없을 경우 기본배송설정으로 적용됩니다.</span></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




            <div className="sub_title"><span className="icon"></span><span className="title">정산 계좌정보</span></div>
            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">은행명</td>
                            <td className="conts"><input type="text" name="account_bank" value=""
                                    size={20}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">계좌번호</td>
                            <td className="conts"><input type="text" name="account_deposit" value="" size={40}
                                    className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">예금주</td>
                            <td className="conts"><input type="text" name="account_name" value=""
                                    size={20}className="input_text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="sub_title"><span className="icon"></span><span className="title">환급(정산) 계좌정보</span></div>
            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">은행명</td>
                            <td className="conts"><input type="text" name="return_bank" value="국민은행 "
                                    size={20}className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">계좌번호</td>
                            <td className="conts"><input type="text" name="return_account" value="111111111111111111"
                                    size={40} className="input_text" /></td>
                        </tr>
                        <tr>
                            <td className="article">예금주</td>
                            <td className="conts"><input type="text" name="return_name" value=""
                                    size={20}className="input_text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="sub_title"><span className="icon"></span><span className="title">기타 보너스요율 설정</span></div>
            <div className="form_box_area">
                <table className="form_TB" summary="검색항목">
                    <colgroup>
                        <col width="200px" />
                        <col width="*" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td className="article">보너스 비율</td>
                            {/*
                            <!--<td className="conts"><input type=text name="daily_per_set" value='' size=30 className=input_text></td>-->
                            */}

                            <td className="conts">배당보너스<input type="text" name="bonus1_per_set" value="1"
                                    size={30}className="input_text" /></td>
                            <td className="conts">매칭보너스<input type="text" name="bonus2_per_set" value="100"
                                    size={30}className="input_text" /></td>
                            <td className="conts">직급보너스<input type="text" name="bonus3_per_set" value="10"
                                    size={30}className="input_text" /></td>
                            <td className="conts">만기보너스<input type="text" name="bonus4_per_set" value="0"
                                    size={30}className="input_text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>



        <div style={{height:'30px'}}></div>

    </div>
</div>
)