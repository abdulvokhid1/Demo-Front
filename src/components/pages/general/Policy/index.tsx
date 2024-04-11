'use client'
import Slider from '@/components/layouts/Slider/general';
import button from 'antd/es/button';
import { useEffect, useState } from 'react';
const Policy = () => {
const [sliderVisible, setSliderVisible] = useState(true)
useEffect(() => {
console.log('sliderVisible: ', sliderVisible)
}, [sliderVisible]);
const sliderToggle = () => {
setSliderVisible(!sliderVisible);
}
return(
    <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
    style={{background: "#f0f0f0"}}>
   <Slider/>
<div className="content_section">
    <div className="content_section_fix" style={{background:'#fff'}}>
        <div className="open_close">
            <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
            style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
            <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
            style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
        </div>

        {/*
        <!-- 페이지타이틀 --> */}
        <div className="title_area">
            <span className="icon"></span>
            <span className="title">
                약관 및 정책설정
            </span>
            <span className="location">홈 &gt; 기본관리 &gt; 약관 및 정책설정</span>
        </div>
        {/*
        <!-- // 페이지타이틀 --> */}

        <iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{display:'none'}}></iframe>

        {/*
        <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}


        <div className="common_ajax_proc"></div>


        <form name="frm" method="post" action="_config.agree.pro.php" encType={'multipart:form-data'}>

            {/*
            <!-- 내부 서브타이틀 --> */}
            <div className="sub_title">
                <span className="icon"></span>
                <span className="title">약관 및 정책 설정</span>
            </div>
            {/*
            <!-- // 내부 서브타이틀 --> */}

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
                            <td className="article">이용약관</td>
                            <td className="conts">
                                <textarea name="guideinfo" className="input_text" style={{width:'99%',height:'200px'}}>
                                    제1조(목적)
이 약관은 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」
제2조(정의)
① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.
제3조 (약관의 명시와 개정)
① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
제4조(서비스의 제공 및 변경)
① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화·용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화·용역의 내용 및 제공일자를 명시하여 현재의 재화·용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.
제5조(서비스의 중단)
① "몰"은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.
제6조(회원가입)
① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.
제7조(회원 탈퇴 및 자격 상실 등)
① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화·용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한·정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.
제8조(회원에 대한 통지)
① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.
제9조(구매신청)
"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)
제10조 (계약의 성립)
① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
제11조(지급방법)
몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금
제12조(수신확인통지·구매신청 변경 및 취소)
① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.
제13조(배송)
① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의·과실이 없음을 입증한 경우에는 그러하지 아니합니다.
제14조(환급, 반품 및 교환)
① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우
제15조(개인정보보호)
① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.
제16조("몰"의 의무)
① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시·광고의공정화에관한법률」 제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.
제17조( 회원의 ID 및 비밀번호에 대한 의무)
① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.
제18조(이용자의 의무)
이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지·화상·음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위
제19조(연결"몰"과 피연결"몰" 간의 관계)
① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화·용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.
제20조(저작권의 귀속 및 이용제한)
① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
제21조(분쟁해결)
① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
제22조(재판권 및 준거법)
① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.
</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">회원가입
                                        등에 표시될 이용약관을 입력하세요.</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(회원가입)</td>
                            <td className="conts">
                                <textarea name="privacyinfo" className="input_text"
                                    style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
이름/상호명, 연락처, 이메일 주소

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
개인정보는 동의 철회 시점까지 보관 됩니다.</textarea>
                            </td>
                        </tr>


                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(비회원 주문)</td>
                            <td className="conts">
                                <textarea name="guestinfo" className="input_text" style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
이름/상호명, 연락처, 이메일 주소

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
개인정보는 동의 철회 시점까지 보관 됩니다.
</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">비회원 주문시 표시될 비회원주문 개인정보수집 및 이용 동의를 입력하세요.</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(비회원 글쓰기)</td>
                            <td className="conts">
                                <textarea name="privacyinfo2" className="input_text"
                                    style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
이름, 휴대폰, 이메일

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
개인정보는 동의 철회 시점까지 보관 됩니다.</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">비회원 글쓰기 등에 표시될 개인정보수집 및 이용 동의를 입력하세요.</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(광고/제휴문의)</td>
                            <td className="conts">
                                <textarea name="partner_agree" className="input_text"
                                    style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
이름/상호명, 연락처, 이메일 주소

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
개인정보는 동의 철회 시점까지 보관 됩니다.</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">광고/제휴문의 등록시 표시될 개인정보수집 및 이용 동의를 입력하세요.</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(상품메일)</td>
                            <td className="conts">
                                <textarea name="sendmail_agree" className="input_text"
                                    style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
받는사람 이름, 받는사람 이메일, 보내는이 이름, 보내는이 이메일

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
입력한 개인정보는 상품홍보 메일발송에 이용되며 메일발송 즉시 파기되며 별도로 저장되지 않습니다.</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">상품홍보메일에 표시될 개인정보수집 및 이용 동의를 입력하세요.</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="article">[필수] 개인정보수집 및 이용 동의<br />(구독하기)</td>
                            <td className="conts">
                                <textarea name="subscrip_agree" className="input_text"
                                    style={{width:'99%',height:'200px'}}>개인정보 수집 및 이용에 관한 안내

1. 수집하는 개인정보의 항목
이메일

2. 개인정보의 수집 및 이용 목적
'회사'가 사용자들의 개인정보를 수집하는 목적은 이용자들의 신분을 확인하고 '서비스'를 이용하고자 하는 의사확인을 위한 것이며, 이용자들에게 최적의 서비스를 제공하고자 하는 것입니다. '회사'는 아래와 같이 수집목적에 따라 개인정보를 이용하고 있습니다. 다만, 이용목적은 수집목적을 벗어나지 않는 범위에서 추가 서비스제공을 위해 확장될 수 있으며, 이 경우에는 미리 공지하여 그 사실을 알려 반드시 고객님께 사전 동의를 구할 것입니다.

3. 개인정보의 보유 및 이용기간
개인정보는 수집 및 이용목적 외의 용도로 이용되지 않으며, 관련 담당자를 제외하고는 함부로 열람할 수 없습니다.
개인정보는 동의 철회 시점까지 보관 됩니다.</textarea>
                                <div className="guide_text">
                                    <span className="ic_blue"></span>
                                    <span className="blue">구독하기에 표시될 개인정보수집 및 이용 동의를 입력하세요.</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/*
            <!-- 검색영역 --> */}

            <div className="sub_title">
                <span className="icon"></span>
                <span className="title">약관 및 정책 설정 (페이지)</span>
            </div>
            {/*
            <!-- // 내부 서브타이틀 --> */}

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
                            <td className="article">이용약관 페이지 (PC)</td>
                            <td className="conts">
                                
                                <div id="tinymce-23" className="mce-tinymce mce-container mce-panel" tabIndex={-1}
                                    role="application" style={{visibility: 'hidden', borderWidth:' 1px'}}>
                                    <div id="tinymce-23-body" className="mce-container-body mce-stack-layout">
                                        <div id="tinymce-24"
                                            className="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
                                            tabIndex={-1} role="group">
                                            <div id="tinymce-24-body" className="mce-container-body mce-stack-layout">
                                                <div id="tinymce-25"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-first"
                                                    role="toolbar">
                                                    <div id="tinymce-25-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-26"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-26-body">
                                                                <div id="tinymce-0"
                                                                    className="mce-widget mce-btn mce-first mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-0"
                                                                    role="button" aria-label="Undo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-undo"></i></button>
                                                                </div>
                                                                <div id="tinymce-1"
                                                                    className="mce-widget mce-btn mce-last mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-1"
                                                                    role="button" aria-label="Redo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-redo"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-27"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-27-body">
                                                                <div id="tinymce-2"
                                                                    className="mce-widget mce-btn mce-menubtn mce-fixed-width mce-listbox mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-2"
                                                                    role="button" aria-label="Font Sizes"
                                                                    aria-haspopup="true"><button id="tinymce-2-open"
                                                                        role="presentation" type={'button'}
                                                                        tabIndex={-1}>글자크기 <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-28"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-28-body">
                                                                <div id="tinymce-3"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-3"
                                                                    role="button" aria-label="Bold"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bold"></i></button>
                                                                </div>
                                                                <div id="tinymce-4" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-4"
                                                                    role="button" aria-label="Italic">
                                                                    <button role="presentation" type="button"
                                                                        tabIndex={-1}>
                                                                        <i className="mce-ico mce-i-italic"></i>
                                                                    </button>
                                                                </div>
                                                                <div id="tinymce-5"
                                                                    className="mce-widget mce-btn mce-colorbutton"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Text color"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-forecolor"></i><span
                                                                            id="tinymce-5-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-6"
                                                                    className="mce-widget mce-btn mce-colorbutton mce-last"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Background color"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-backcolor"></i><span
                                                                            id="tinymce-6-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-29"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-29-body">
                                                                <div id="tinymce-7"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-7"
                                                                    role="button" aria-label="Special character"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-charmap"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-30"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-30-body">
                                                                <div id="tinymce-8"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-8"
                                                                    role="button" aria-label="Horizontal line"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-hr"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-31"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-31-body">
                                                                <div id="tinymce-9"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-9"
                                                                    role="button" aria-label="이미지 업로드"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-image"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-32"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-32-body">
                                                                <div id="tinymce-10"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-10"
                                                                    role="button" aria-label="Insert/edit link">
                                                                    <button role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-link"></i></button>
                                                                </div>
                                                                <div id="tinymce-11"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-11"
                                                                    role="button" aria-label="Insert/edit video"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-media"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-33"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-33-body">
                                                                <div id="tinymce-12"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-12"
                                                                    role="button" aria-label="Preview"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-preview"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-34"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-34-body">
                                                                <div id="tinymce-13"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-13"
                                                                    role="button" aria-label="Source code"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-code"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tinymce-35"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-last"
                                                    role="toolbar">
                                                    <div id="tinymce-35-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-36"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-36-body">
                                                                <div id="tinymce-14"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn mce-first"
                                                                    role="button" tabIndex={-1} aria-label="Bullet list"
                                                                    aria-haspopup="true"><button type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bullist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-15"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn"
                                                                    role="button" tabIndex={-1}
                                                                    aria-label="Numbered list" aria-haspopup="true">
                                                                    <button type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-numlist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-16" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-16"
                                                                    role="button" aria-label="Decrease indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-outdent"></i></button>
                                                                </div>
                                                                <div id="tinymce-17"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-17"
                                                                    role="button" aria-label="Increase indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-indent"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-37"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-37-body">
                                                                <div id="tinymce-18"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-18"
                                                                    role="button" aria-label="Align left"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignleft"></i></button>
                                                                </div>
                                                                <div id="tinymce-19" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-19"
                                                                    role="button" aria-label="Align center"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-aligncenter"></i></button>
                                                                </div>
                                                                <div id="tinymce-20" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-20"
                                                                    role="button" aria-label="Align right"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignright"></i></button>
                                                                </div>
                                                                <div id="tinymce-21"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-21"
                                                                    role="button" aria-label="Justify"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignjustify"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-38"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-38-body">
                                                                <div id="tinymce-22"
                                                                    className="mce-widget mce-btn mce-menubtn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-22"
                                                                    role="button" aria-label="Table"
                                                                    aria-haspopup="true"><button id="tinymce-22-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-table"></i> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tinymce-39"
                                            className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px 0px 0px'}}>
                                            <iframe id="guideinfo_html_ifr" frameBorder={0} allowTransparency={true}
                                                title="서식 있는 텍스트 편집기 입니다. ALT-F9를 누르면 메뉴, ALT-F10를 누르면 툴바, ALT-0을 누르면 도움말을 볼 수 있습니다."
                                                src="javascript:&quot;&quot;"
                                                style={{width: '100%', height: '370px', display: 'block'}}>
                                            </iframe></div>
                                        <div id="tinymce-40"
                                            className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px, 0px, 0px'}}>
                                            <div id="tinymce-40-body" className="mce-container-body mce-flow-layout">
                                                <div id="tinymce-41"
                                                    className="mce-path mce-flow-layout-item mce-first">
                                                    <div role="button" className="mce-path-item mce-last" tabIndex={-1}
                                                        id="tinymce-41-0" aria-level={0}>
                                                    </div>
                                                </div>
                                                <div id="tinymce-42"
                                                    className="mce-flow-layout-item mce-last mce-resizehandle">
                                                    <i className="mce-ico mce-i-resize"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><textarea name="guideinfo_html" className="input_text"
                                    style={{width: '99%', height: '200px', display:'none'}} id="guideinfo_html"
                                    aria-hidden="true">&lt;p&gt;제1조(목적)&lt;br /&gt;이 약관은 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」&lt;br /&gt;제2조(정의)&lt;br /&gt;① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.&lt;br /&gt;제3조 (약관의 명시와 개정)&lt;br /&gt;① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.&lt;br /&gt;제4조(서비스의 제공 및 변경)&lt;br /&gt;① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화·용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화·용역의 내용 및 제공일자를 명시하여 현재의 재화·용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.&lt;br /&gt;제5조(서비스의 중단)&lt;br /&gt;① "몰"은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.&lt;br /&gt;제6조(회원가입)&lt;br /&gt;① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.&lt;br /&gt;제7조(회원 탈퇴 및 자격 상실 등)&lt;br /&gt;① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화·용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한·정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.&lt;br /&gt;제8조(회원에 대한 통지)&lt;br /&gt;① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.&lt;br /&gt;제9조(구매신청)&lt;br /&gt;"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)&lt;br /&gt;제10조 (계약의 성립)&lt;br /&gt;① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.&lt;br /&gt;제11조(지급방법)&lt;br /&gt;몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금&lt;br /&gt;제12조(수신확인통지·구매신청 변경 및 취소)&lt;br /&gt;① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.&lt;br /&gt;제13조(배송)&lt;br /&gt;① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의·과실이 없음을 입증한 경우에는 그러하지 아니합니다.&lt;br /&gt;제14조(환급, 반품 및 교환)&lt;br /&gt;① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우&lt;br /&gt;제15조(개인정보보호)&lt;br /&gt;① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.&lt;br /&gt;제16조("몰"의 의무)&lt;br /&gt;① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시·광고의공정화에관한법률」 제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.&lt;br /&gt;제17조( 회원의 ID 및 비밀번호에 대한 의무)&lt;br /&gt;① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.&lt;br /&gt;제18조(이용자의 의무)&lt;br /&gt;이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지·화상·음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위&lt;br /&gt;제19조(연결"몰"과 피연결"몰" 간의 관계)&lt;br /&gt;① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화·용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.&lt;br /&gt;제20조(저작권의 귀속 및 이용제한)&lt;br /&gt;① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.&lt;br /&gt;제21조(분쟁해결)&lt;br /&gt;① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.&lt;br /&gt;제22조(재판권 및 준거법)&lt;br /&gt;① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.&lt;/p&gt;</textarea>
                                <div className="guide_text"><span className="ic_blue"></span><span className="blue">이용약관
                                        페이지 (PC) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>
                            </td>
                        </tr>



                        <tr>
                            <td className="article">이용약관 페이지 (모바일)</td>
                            <td className="conts">
                                <div id="tinymce-66" className="mce-tinymce mce-container mce-panel" tabIndex={-1}
                                    role="application" style={{visibility: 'hidden', borderWidth:' 1px'}}>
                                    <div id="tinymce-66-body" className="mce-container-body mce-stack-layout">
                                        <div id="tinymce-67"
                                            className="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
                                            tabIndex={-1} role="group">
                                            <div id="tinymce-67-body" className="mce-container-body mce-stack-layout">
                                                <div id="tinymce-68"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-first"
                                                    role="toolbar">
                                                    <div id="tinymce-68-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-69"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-69-body">
                                                                <div id="tinymce-43"
                                                                    className="mce-widget mce-btn mce-first mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-43"
                                                                    role="button" aria-label="Undo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-undo"></i></button>
                                                                </div>
                                                                <div id="tinymce-44"
                                                                    className="mce-widget mce-btn mce-last mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-44"
                                                                    role="button" aria-label="Redo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-redo"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-70"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-70-body">
                                                                <div id="tinymce-45"
                                                                    className="mce-widget mce-btn mce-menubtn mce-fixed-width mce-listbox mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-45"
                                                                    role="button" aria-label="Font Sizes"
                                                                    aria-haspopup="true"><button id="tinymce-45-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}>글자크기 <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-71"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-71-body">
                                                                <div id="tinymce-46"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-46"
                                                                    role="button" aria-label="Bold"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bold"></i></button>
                                                                </div>
                                                                <div id="tinymce-47" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-47"
                                                                    role="button" aria-label="Italic"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-italic"></i></button>
                                                                </div>
                                                                <div id="tinymce-48"
                                                                    className="mce-widget mce-btn mce-colorbutton"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Text color"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-forecolor"></i><span
                                                                            id="tinymce-48-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-49"
                                                                    className="mce-widget mce-btn mce-colorbutton mce-last"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Background color"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-backcolor"></i><span
                                                                            id="tinymce-49-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-72"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-72-body">
                                                                <div id="tinymce-50"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-50"
                                                                    role="button" aria-label="Special character"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-charmap"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-73"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-73-body">
                                                                <div id="tinymce-51"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-51"
                                                                    role="button" aria-label="Horizontal line"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-hr"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-74"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-74-body">
                                                                <div id="tinymce-52"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-52"
                                                                    role="button" aria-label="이미지 업로드"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-image"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-75"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-75-body">
                                                                <div id="tinymce-53"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-53"
                                                                    role="button" aria-label="Insert/edit link"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-link"></i></button>
                                                                </div>
                                                                <div id="tinymce-54"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-54"
                                                                    role="button" aria-label="Insert/edit video"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-media"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-76"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-76-body">
                                                                <div id="tinymce-55"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-55"
                                                                    role="button" aria-label="Preview"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-preview"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-77"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-77-body">
                                                                <div id="tinymce-56"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-56"
                                                                    role="button" aria-label="Source code"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-code"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tinymce-78"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-last"
                                                    role="toolbar">
                                                    <div id="tinymce-78-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-79"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-79-body">
                                                                <div id="tinymce-57"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn mce-first"
                                                                    role="button" tabIndex={-1} aria-label="Bullet list"
                                                                    aria-haspopup="true"><button type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bullist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-58"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn"
                                                                    role="button" tabIndex={-1}
                                                                    aria-label="Numbered list" aria-haspopup="true">
                                                                    <button type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-numlist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-59" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-59"
                                                                    role="button" aria-label="Decrease indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-outdent"></i></button>
                                                                </div>
                                                                <div id="tinymce-60"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-60"
                                                                    role="button" aria-label="Increase indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-indent"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-80"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-80-body">
                                                                <div id="tinymce-61"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-61"
                                                                    role="button" aria-label="Align left"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignleft"></i></button>
                                                                </div>
                                                                <div id="tinymce-62" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-62"
                                                                    role="button" aria-label="Align center"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-aligncenter"></i></button>
                                                                </div>
                                                                <div id="tinymce-63" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-63"
                                                                    role="button" aria-label="Align right"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignright"></i></button>
                                                                </div>
                                                                <div id="tinymce-64"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-64"
                                                                    role="button" aria-label="Justify"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignjustify"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-81"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-81-body">
                                                                <div id="tinymce-65"
                                                                    className="mce-widget mce-btn mce-menubtn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-65"
                                                                    role="button" aria-label="Table"
                                                                    aria-haspopup="true"><button id="tinymce-65-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-table"></i> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tinymce-82"
                                            className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                                            tabIndex={-1} role="group" style={{borderWidth:'1px 0px 0px'}}>
                                            <iframe id="guideinfo_html_m_ifr" frameBorder="0" allowTransparency={true}
                                                title="서식 있는 텍스트 편집기 입니다. ALT-F9를 누르면 메뉴, ALT-F10를 누르면 툴바, ALT-0을 누르면 도움말을 볼 수 있습니다."
                                                src="javascript:&quot;&quot;"
                                                style={{width: '100%', height: '370px', display:'block'}}></iframe>
                                        </div>
                                        <div id="tinymce-83"
                                            className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                                            tabIndex={-1} role="group" style={{borderWidth:'1px 0px 0px'}}>
                                            <div id="tinymce-83-body" className="mce-container-body mce-flow-layout">
                                                <div id="tinymce-84"
                                                    className="mce-path mce-flow-layout-item mce-first">
                                                    <div role="button" className="mce-path-item mce-last" tabIndex={-1}
                                                        id="tinymce-84-0" aria-level={0}></div>
                                                </div>
                                                <div id="tinymce-85"
                                                    className="mce-flow-layout-item mce-last mce-resizehandle"><i
                                                        className="smce-ico mce-i-resize"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <textarea name="guideinfo_html_m" className="input_text"
                                    style={{width:'99%', height:'200px'}}>
                                    <div className="cm_fulltext">
<dl>
<dt>
<p>제1조(목적)<br />이 약관은 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리&middot;의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」<br />제2조(정의)<br />① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.<br />제3조 (약관의 명시와 개정)<br />① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.<br />제4조(서비스의 제공 및 변경)<br />① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화&middot;용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화&middot;용역의 내용 및 제공일자를 명시하여 현재의 재화&middot;용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.<br />제5조(서비스의 중단)<br />① "몰"은 컴퓨터 등 정보통신설비의 보수점검&middot;교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.<br />제6조(회원가입)<br />① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.<br />제7조(회원 탈퇴 및 자격 상실 등)<br />① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화&middot;용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한&middot;정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.<br />제8조(회원에 대한 통지)<br />① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.<br />제9조(구매신청)<br />"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)<br />제10조 (계약의 성립)<br />① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.<br />제11조(지급방법)<br />몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금<br />제12조(수신확인통지&middot;구매신청 변경 및 취소)<br />① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.<br />제13조(배송)<br />① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의&middot;과실이 없음을 입증한 경우에는 그러하지 아니합니다.<br />제14조(환급, 반품 및 교환)<br />① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우<br />제15조(개인정보보호)<br />① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.<br />제16조("몰"의 의무)<br />① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화&middot;용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시&middot;광고의공정화에관한법률」 제3조 소정의 부당한 표시&middot;광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.<br />제17조( 회원의 ID 및 비밀번호에 대한 의무)<br />① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.<br />제18조(이용자의 의무)<br />이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지&middot;화상&middot;음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위<br />제19조(연결"몰"과 피연결"몰" 간의 관계)<br />① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화&middot;용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.<br />제20조(저작권의 귀속 및 이용제한)<br />① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.<br />제21조(분쟁해결)<br />① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치&middot;운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.<br />제22조(재판권 및 준거법)<br />① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</p>
</dt>
</dl>
</div></textarea>
                                <div className="guide_text"><span className="ic_blue"></span><span className="blue">이용약관
                                        페이지 (모바일) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">개인정보취급방침 페이지 (PC)</td>
                            <td className="conts">
                                <textarea name="privacyinfo_html" className="input_text"
                                    style={{width:'99%', height:'200px'}}>
                            <div className="cm_fulltext">
<dl>
<dt>총칙<br />회사은 (이하 '회사'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 본 방침은 : 2012 년 12 월 24 일 부터 시행됩니다.<br />수집하는 개인정보 항목<br />회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다. - 수집항목 : 회원가입시 필수항목으로 지정된 정보, 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록 - 개인정보 수집방법 : 홈페이지(회원가입), 배송 요청, 제휴사로부터의 제공<br />개인정보의 수집 및 이용목적<br />회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스 - 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 가입 의사 확인, 연령확인, 불만처리 등 민원처리 - 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />개인정보의 보유 및 이용기간<br />회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.<br />개인정보의 파기절차 및 방법<br />회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. - 파기절차 : 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다. - 파기방법: 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br />개인정보 제공<br />회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. - 이용자들이 사전에 동의한 경우 - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br />수집한 개인정보의 위탁<br />회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다. - 위탁 대상자 : (주)한국사이버결제,(주)스마일서브, 로젠 택배, 서비스 및 제품 판매 제휴 업체 - 위탁업무 내용 : 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스, 회원관리 회원제 서비스 이용에 따른 본인확인, 웹사이트 및 시스템 관리<br />이용자 및 법정대리인의 권리와 그 행사방법<br />이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자 혹은 만 14세 미만 아동의 개인정보 조회,수정을 위해서는'개인정보변경'(또는 '회원정보수정' 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은, 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이이루어지도록 하겠습니다. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br />개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br />회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다. - 쿠키 등 사용 목적 - 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. - 쿠키 설정 거부 방법 예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로서, 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나 쿠키의 저장을 거부할 수 있습니다. 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.<br />개인정보에 관한 민원서비스<br />회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다. ▶ 고객서비스담당 부서 : 인터넷사업팀 ▶ 전화번호 : 063-642-7101 ▶ 이메일 : midmeal@naver.com 귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다. 1.개인정보침해신고센터 (www.1336.or.kr/국번없이 118) 2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4) 3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600) 4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)<br />비 회원 주문시 개인정보 취급방침<br />회사는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.<br />개인정보의 수집 및 이용목적<br />회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 콘텐츠 제공, 구매 및 요금 결제 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스 - 회원 관리 : 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인 불만처리 등 민원처리, 고지사항 전달 - 마케팅 및 광고에 활용 : 이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />개인정보의 보유 및 이용기간<br />원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 보존 항목 : 회원가입시 필수입력으로 지정된 항목에 한함. 보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률 보존 기간 : 5년 표시/광고에 관한 기록 : 6개월 (전자상거래등에서의 소비자보호에 관한 법률) 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률) 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률) 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)<br />개인정보의 파기절차 및 방법<br />회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. - 파기절차 : 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다. - 파기방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</dt>
</dl>
</div></textarea>
                                <div className='guide_text'><span className='ic_blue'></span><span
                                        className='blue'>개인정보취급방침 페이지 (PC) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">개인정보취급방침 페이지 (모바일)</td>
                            <td className="conts">
                                <textarea name="privacyinfo_html_m" className="input_text"
                                    style={{width:'99%', height:'200px'}}>
                                <div className="cm_fulltext">
<dl>
<dt><span>총칙</span><br /><span>회사은 (이하 '회사'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 본 방침은 : 2012 년 12 월 24 일 부터 시행됩니다.</span><br /><span>수집하는 개인정보 항목</span><br /><span>회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다. - 수집항목 : 회원가입시 필수항목으로 지정된 정보, 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록 - 개인정보 수집방법 : 홈페이지(회원가입), 배송 요청, 제휴사로부터의 제공</span><br /><span>개인정보의 수집 및 이용목적</span><br /><span>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스 - 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 가입 의사 확인, 연령확인, 불만처리 등 민원처리 - 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</span><br /><span>개인정보의 보유 및 이용기간</span><br /><span>회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.</span><br /><span>개인정보의 파기절차 및 방법</span><br /><span>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. - 파기절차 : 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다. - 파기방법: 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</span><br /><span>개인정보 제공</span><br /><span>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. - 이용자들이 사전에 동의한 경우 - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</span><br /><span>수집한 개인정보의 위탁</span><br /><span>회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다. - 위탁 대상자 : (주)한국사이버결제,(주)스마일서브, 로젠 택배, 서비스 및 제품 판매 제휴 업체 - 위탁업무 내용 : 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스, 회원관리 회원제 서비스 이용에 따른 본인확인, 웹사이트 및 시스템 관리</span><br /><span>이용자 및 법정대리인의 권리와 그 행사방법</span><br /><span>이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자 혹은 만 14세 미만 아동의 개인정보 조회,수정을 위해서는'개인정보변경'(또는 '회원정보수정' 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은, 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이이루어지도록 하겠습니다. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</span><br /><span>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</span><br /><span>회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다. - 쿠키 등 사용 목적 - 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. - 쿠키 설정 거부 방법 예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로서, 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나 쿠키의 저장을 거부할 수 있습니다. 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</span><br /><span>개인정보에 관한 민원서비스</span><br /><span>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다. ▶ 고객서비스담당 부서 : 인터넷사업팀 ▶ 전화번호 : 063-642-7101 ▶ 이메일 : midmeal@naver.com 귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다. 1.개인정보침해신고센터 (www.1336.or.kr/국번없이 118) 2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4) 3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600) 4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</span><br /><span>비 회원 주문시 개인정보 취급방침</span><br /><span>회사는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</span><br /><span>개인정보의 수집 및 이용목적</span><br /><span>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 콘텐츠 제공, 구매 및 요금 결제 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스 - 회원 관리 : 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인 불만처리 등 민원처리, 고지사항 전달 - 마케팅 및 광고에 활용 : 이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</span><br /><span>개인정보의 보유 및 이용기간</span><br /><span>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 보존 항목 : 회원가입시 필수입력으로 지정된 항목에 한함. 보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률 보존 기간 : 5년 표시/광고에 관한 기록 : 6개월 (전자상거래등에서의 소비자보호에 관한 법률) 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률) 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률) 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)</span><br /><span>개인정보의 파기절차 및 방법</span><br /><span>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. - 파기절차 : 회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다. - 파기방법 : 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</span></dt>
</dl>
</div></textarea>
                                <div className='guide_text'><span className='ic_blue'></span><span
                                        className='blue'>개인정보취급방침 페이지 (모바일) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="article">위치기반이용약관 페이지 (모바일)</td>
                            <td className="conts">
                                <textarea name="locationinfo_html_m" className="input_text"
                                    style={{width:'99%', height:'200px'}}>
                                <div className="cm_fulltext">
<dl>
<dt>제1조(목적)</dt>
<dd>이 약관은 (회사명) 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리&middot;의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」</dd>
<dt>제2조(정의)</dt>
<dd>① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</dd>
<dt>제3조 (약관의 명시와 개정)</dt>
<dd>① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.</dd>
<dt>제4조(서비스의 제공 및 변경)</dt>
<dd>① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화&middot;용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화&middot;용역의 내용 및 제공일자를 명시하여 현재의 재화&middot;용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.</dd>
<dt>제5조(서비스의 중단)</dt>
<dd>① "몰"은 컴퓨터 등 정보통신설비의 보수점검&middot;교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.</dd>
<dt>제6조(회원가입)</dt>
<dd>① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.</dd>
<dt>제7조(회원 탈퇴 및 자격 상실 등)</dt>
<dd>① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화&middot;용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한&middot;정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.</dd>
<dt>제8조(회원에 대한 통지)</dt>
<dd>① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.</dd>
<dt>제9조(구매신청)</dt>
<dd>"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)</dd>
<dt>제10조 (계약의 성립)</dt>
<dd>① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.</dd>
<dt>제11조(지급방법)</dt>
<dd>몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금</dd>
<dt>제12조(수신확인통지&middot;구매신청 변경 및 취소)</dt>
<dd>① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.</dd>
<dt>제13조(배송)</dt>
<dd>① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의&middot;과실이 없음을 입증한 경우에는 그러하지 아니합니다.</dd>
<dt>제14조(환급, 반품 및 교환)</dt>
<dd>① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우</dd>
<dt>제15조(개인정보보호)</dt>
<dd>① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.</dd>
<dt>제16조("몰"의 의무)</dt>
<dd>① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화&middot;용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시&middot;광고의공정화에관한법률」 제3조 소정의 부당한 표시&middot;광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</dd>
<dt>제17조( 회원의 ID 및 비밀번호에 대한 의무)</dt>
<dd>① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.</dd>
<dt>제18조(이용자의 의무)</dt>
<dd>이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지&middot;화상&middot;음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</dd>
<dt>제19조(연결"몰"과 피연결"몰" 간의 관계)</dt>
<dd>① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화&middot;용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.</dd>
<dt>제20조(저작권의 귀속 및 이용제한)</dt>
<dd>① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</dd>
<dt>제21조(분쟁해결)</dt>
<dd>① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치&middot;운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.</dd>
<dt>제22조(재판권 및 준거법)</dt>
<dd>① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</dd>
</dl>
</div></textarea>
                                <div className='guide_text'><span className='ic_blue'></span>
                                    <span className='blue'>위치기반이용약관 페이지 (모바일) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>
                            </td>
                        </tr>
                        <tr>
						<td className="article">위치기반이용약관 페이지 (PC)</td>
						<td className="conts">
							<textarea name="locationinfo_html" className="input_text" style={{width:'99%', height:'200px'}} >
                                <div className="cm_fulltext">
<dl>
<dt>제1조(목적)</dt>
<dd>이 약관은 (회사명) 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리&middot;의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」</dd>
<dt>제2조(정의)</dt>
<dd>① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</dd>
<dt>제3조 (약관의 명시와 개정)</dt>
<dd>① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.</dd>
<dt>제4조(서비스의 제공 및 변경)</dt>
<dd>① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화&middot;용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화&middot;용역의 내용 및 제공일자를 명시하여 현재의 재화&middot;용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.</dd>
<dt>제5조(서비스의 중단)</dt>
<dd>① "몰"은 컴퓨터 등 정보통신설비의 보수점검&middot;교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.</dd>
<dt>제6조(회원가입)</dt>
<dd>① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.</dd>
<dt>제7조(회원 탈퇴 및 자격 상실 등)</dt>
<dd>① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화&middot;용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한&middot;정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.</dd>
<dt>제8조(회원에 대한 통지)</dt>
<dd>① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.</dd>
<dt>제9조(구매신청)</dt>
<dd>"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)</dd>
<dt>제10조 (계약의 성립)</dt>
<dd>① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.</dd>
<dt>제11조(지급방법)</dt>
<dd>몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금</dd>
<dt>제12조(수신확인통지&middot;구매신청 변경 및 취소)</dt>
<dd>① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.</dd>
<dt>제13조(배송)</dt>
<dd>① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의&middot;과실이 없음을 입증한 경우에는 그러하지 아니합니다.</dd>
<dt>제14조(환급, 반품 및 교환)</dt>
<dd>① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우</dd>
<dt>제15조(개인정보보호)</dt>
<dd>① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.</dd>
<dt>제16조("몰"의 의무)</dt>
<dd>① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화&middot;용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시&middot;광고의공정화에관한법률」 제3조 소정의 부당한 표시&middot;광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</dd>
<dt>제17조( 회원의 ID 및 비밀번호에 대한 의무)</dt>
<dd>① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.</dd>
<dt>제18조(이용자의 의무)</dt>
<dd>이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지&middot;화상&middot;음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</dd>
<dt>제19조(연결"몰"과 피연결"몰" 간의 관계)</dt>
<dd>① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화&middot;용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.</dd>
<dt>제20조(저작권의 귀속 및 이용제한)</dt>
<dd>① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</dd>
<dt>제21조(분쟁해결)</dt>
<dd>① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치&middot;운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.</dd>
<dt>제22조(재판권 및 준거법)</dt>
<dd>① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</dd>
</dl>
</div></textarea>
							<div className='guide_text'><span className='ic_blue'></span><span className='blue'>위치기반이용약관 페이지 (PC) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>						</td>
					</tr>
                    <tr>
						<td className="article">위치기반이용약관 페이지 (모바일)</td>
						<td className="conts">
							<textarea name="locationinfo_html_m" className="input_text" style={{width:'99%', height:'200px'}} ><div className="cm_fulltext">
<dl>
<dt>제1조(목적)</dt>
<dd>이 약관은 (회사명) 회사(전자거래 사업자)가 운영하는 쇼핑몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의 권리&middot;의무 및 책임사항을 규정함을 목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」</dd>
<dt>제2조(정의)</dt>
<dd>① "몰" 이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ 회원'이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④ 비회원'이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.</dd>
<dt>제3조 (약관의 명시와 개정)</dt>
<dd>① "몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이버몰의 초기 서비스화면(전면)에 게시합니다. ② "몰"은 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ③ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다. ④ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 '몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.</dd>
<dt>제4조(서비스의 제공 및 변경)</dt>
<dd>① "몰"은 다음과 같은 업무를 수행합니다. - 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결 - 구매계약이 체결된 재화 또는 용역의 배송 - 기타 "몰"이 정하는 업무 ② "몰"은 재화의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화&middot;용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화&middot;용역의 내용 및 제공일자를 명시하여 현재의 재화&middot;용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.</dd>
<dt>제5조(서비스의 중단)</dt>
<dd>① "몰"은 컴퓨터 등 정보통신설비의 보수점검&middot;교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "몰"은 제8조에 정한 방법으로 이용자에게 통지합니다.</dd>
<dt>제6조(회원가입)</dt>
<dd>① 이용자는 "몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다. - 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. - 등록 내용에 허위, 기재누락, 오기가 있는 경우 - 기타 회원으로 등록하는 것이 "몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는 "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은 제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편이나 기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.</dd>
<dt>제7조(회원 탈퇴 및 자격 상실 등)</dt>
<dd>① 회원은 "몰"에 언제든지 탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ② 회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을 제한 및 정지시킬 수 있습니다. - 가입 신청시에 허위 내용을 등록한 경우 - "몰"을 이용하여 구입한 재화&middot;용역 등의 대금, 기타 "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 - 다른 사람의 "몰" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 - "몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 ③ "몰"이 회원 자격을 제한&middot;정지 시킨후, 동일한 행위가 2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소전에 소명할 기회를 부여합니다.</dd>
<dt>제8조(회원에 대한 통지)</dt>
<dd>① "몰"이 회원에 대한 통지를 하는 경우, 회원이 "몰"에 제출한 전자우편 주소 또는 기타 방법으로 할 수 있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우 1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.</dd>
<dt>제9조(구매신청)</dt>
<dd>"몰"이용자는 "몰"상에서 이하의 방법에 의하여 구매를 신청합니다. - 구매를 위해 필요한 최소한의 정보 (성명, 주소, 전화번호 입력등) - 재화 또는 용역의 선택 - 결제방법의 선택 - 이 약관에 동의한다는 표시(예, 마우스 클릭)</dd>
<dt>제10조 (계약의 성립)</dt>
<dd>① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하지 않는 한 승낙합니다. - 신청 내용에 허위, 기재누락, 오기가 있는 경우 - 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 - 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이 있다고 판단하는 경우 - "몰"이 판단하여 판매가 부적합 하다고 판단되는 구매자의 경우 - "몰"이 준비한 수량이상으로 구매하여 재화 또는 용역을 제공하지 못한다고 판단하는 경우 ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.</dd>
<dt>제11조(지급방법)</dt>
<dd>몰"에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각호의 하나로 할 수 있습니다. - 신용카드결제 - 계좌이체 - 무통장입금</dd>
<dt>제12조(수신확인통지&middot;구매신청 변경 및 취소)</dt>
<dd>① "몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ "몰"은 배송전 이용자의 구매신청 변경 및 취소 요청이 있는 때에는 지체없이 그 요청에 따라 처리합니다.</dd>
<dt>제13조(배송)</dt>
<dd>① "몰"은 이용자와 재화등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, "몰"이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다. 이때 "몰"은 이용자가 재화등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다. ② "몰"은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 "몰"이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상 하여야 합니다. 다만 "몰"이 고의&middot;과실이 없음을 입증한 경우에는 그러하지 아니합니다.</dd>
<dt>제14조(환급, 반품 및 교환)</dt>
<dd>① "몰"은 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 대금을 받은 날부터 영업3일이내에, 그렇지 않은 경우에는 그 사유발생일로부터 영업3일이내에 계약해제 및 환급절차를 취합니다. ② 다음 각호의 경우에는 "몰"은 배송된 재화일지라도 재화를 반품받은 다음 영업3일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및 교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로 합니다. - 배송된 재화가 주문내용과 상이하거나 "몰"이 제공한 정보와 상이할 경우 - 배송된 재화가 파손, 손상되었거나 오염되었을 경우 - 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 - 방문판매등에관한법률 제18조에 의하여 광고에 표시하여야 할 사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우</dd>
<dt>제15조(개인정보보호)</dt>
<dd>① "몰"은 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 회원가입시 필수항목으로 지정된 정보 이외의 사항은 선택사항으로 합니다. ② "몰"이 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. - 배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우 - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 ④ "몰"이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. ⑤ 이용자는 언제든지 "몰"이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "몰"은 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "몰"은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑥ "몰"은 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "몰" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.</dd>
<dt>제16조("몰"의 의무)</dt>
<dd>① "몰은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화&middot;용역을 제공하는 데 최선을 다하여야 합니다. ② "몰"은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. ③ "몰"이 상품이나 용역에 대하여 「표시&middot;광고의공정화에관한법률」 제3조 소정의 부당한 표시&middot;광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다. ④ "몰"은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</dd>
<dt>제17조( 회원의 ID 및 비밀번호에 대한 의무)</dt>
<dd>① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "몰"에 통보하고 "몰"의 안내가 있는 경우에는 그에 따라야 합니다.</dd>
<dt>제18조(이용자의 의무)</dt>
<dd>이용자는 다음 행위를 하여서는 안됩니다. - 신청 또는 변경시 허위내용의 등록 - "몰"에 게시된 정보의 변경 - "몰"이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 - "몰" 기타 제3자의 저작권 등 지적재산권에 대한 침해 - "몰" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 - 외설 또는 폭력적인 메시지&middot;화상&middot;음성 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</dd>
<dt>제19조(연결"몰"과 피연결"몰" 간의 관계)</dt>
<dd>① 상위 "몰"과 하위 "몰"이 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 "몰"(웹 사이트)이라고 하고 후자를 피연결 "몰"(웹사이트)이라고 합니다. ② 연결 "몰"은 피연결 "몰"이 독자적으로 제공하는 재화&middot;용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을지지 않는다는 뜻을 연결 "몰"의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다.</dd>
<dt>제20조(저작권의 귀속 및 이용제한)</dt>
<dd>① "몰"이 작성한 저작물에 대한 저작권 기타 지적재산권은 "몰"에 귀속합니다. ② 이용자는 "몰"을 이용함으로써 얻은 정보를 "몰"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</dd>
<dt>제21조(분쟁해결)</dt>
<dd>① "몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치&middot;운영합니다. ② "몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. ③ "몰"과 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.</dd>
<dt>제22조(재판권 및 준거법)</dt>
<dd>① "몰"과 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ② "몰"과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</dd>
</dl>
</div></textarea>
							<div className='guide_text'><span className='ic_blue'></span><span className='blue'>위치기반이용약관 페이지 (모바일) 에 디자인이 적용되어 표시될 내용을 입력하세요.</span></div>						</td>
					</tr>
                    </tbody>
                </table>

            </div>


            {/* <!-- 검색영역 --> */}

            <div className="sub_title"><span className="icon"></span><span className="title">(추가)약관 및 정책 설정</span></div>


            {/* <!-- // 내부 서브타이틀 --> */}

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
                            <td className="article">수익 배분의 정의</td>
                            <td className="conts">
                                <div id="tinymce-281" className="mce-tinymce mce-container mce-panel" tabIndex={-1}
                                    role="application" style={{visibility: 'hidden', borderWidth: '1px'}}>
                                    <div id="tinymce-281-body" className="mce-container-body mce-stack-layout">
                                        <div id="tinymce-282"
                                            className="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
                                            tabIndex={-1} role="group">
                                            <div id="tinymce-282-body" className="mce-container-body mce-stack-layout">
                                                <div id="tinymce-283"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-first"
                                                    role="toolbar">
                                                    <div id="tinymce-283-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-284"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-284-body">
                                                                <div id="tinymce-258"
                                                                    className="mce-widget mce-btn mce-first mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-258"
                                                                    role="button" aria-label="Undo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-undo"></i></button>
                                                                </div>
                                                                <div id="tinymce-259"
                                                                    className="mce-widget mce-btn mce-last mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-259"
                                                                    role="button" aria-label="Redo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-redo"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-285"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-285-body">
                                                                <div id="tinymce-260"
                                                                    className="mce-widget mce-btn mce-menubtn mce-fixed-width mce-listbox mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-260"
                                                                    role="button" aria-label="Font Sizes"
                                                                    aria-haspopup="true"><button id="tinymce-260-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}>글자크기 <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-286"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-286-body">
                                                                <div id="tinymce-261"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-261"
                                                                    role="button" aria-label="Bold"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bold"></i></button>
                                                                </div>
                                                                <div id="tinymce-262" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-262"
                                                                    role="button" aria-label="Italic"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-italic"></i></button>
                                                                </div>
                                                                <div id="tinymce-263"
                                                                    className="mce-widget mce-btn mce-colorbutton"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Text color"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-forecolor"></i><span
                                                                            id="tinymce-263-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-264"
                                                                    className="mce-widget mce-btn mce-colorbutton mce-last"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Background color"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-backcolor"></i><span
                                                                            id="tinymce-264-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-287"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-287-body">
                                                                <div id="tinymce-265"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-265"
                                                                    role="button" aria-label="Special character"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-charmap"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-288"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-288-body">
                                                                <div id="tinymce-266"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-266"
                                                                    role="button" aria-label="Horizontal line"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-hr"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-289"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-289-body">
                                                                <div id="tinymce-267"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-267"
                                                                    role="button" aria-label="이미지 업로드"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-image"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-290"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-290-body">
                                                                <div id="tinymce-268"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-268"
                                                                    role="button" aria-label="Insert/edit link"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-link"></i></button>
                                                                </div>
                                                                <div id="tinymce-269"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-269"
                                                                    role="button" aria-label="Insert/edit video"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-media"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-291"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-291-body">
                                                                <div id="tinymce-270"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-270"
                                                                    role="button" aria-label="Preview"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-preview"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-292"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-292-body">
                                                                <div id="tinymce-271"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-271"
                                                                    role="button" aria-label="Source code"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-code"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tinymce-293"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-last"
                                                    role="toolbar">
                                                    <div id="tinymce-293-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-294"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-294-body">
                                                                <div id="tinymce-272"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn mce-first"
                                                                    role="button" tabIndex={-1} aria-label="Bullet list"
                                                                    aria-haspopup="true"><button type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bullist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-273"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn"
                                                                    role="button" tabIndex={-1}
                                                                    aria-label="Numbered list" aria-haspopup="true">
                                                                    <button type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-numlist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-274" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-274"
                                                                    role="button" aria-label="Decrease indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-outdent"></i></button>
                                                                </div>
                                                                <div id="tinymce-275"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-275"
                                                                    role="button" aria-label="Increase indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-indent"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-295"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-295-body">
                                                                <div id="tinymce-276"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-276"
                                                                    role="button" aria-label="Align left"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignleft"></i></button>
                                                                </div>
                                                                <div id="tinymce-277" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-277"
                                                                    role="button" aria-label="Align center"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-aligncenter"></i></button>
                                                                </div>
                                                                <div id="tinymce-278" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-278"
                                                                    role="button" aria-label="Align right"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignright"></i></button>
                                                                </div>
                                                                <div id="tinymce-279"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-279"
                                                                    role="button" aria-label="Justify"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignjustify"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-296"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-296-body">
                                                                <div id="tinymce-280"
                                                                    className="mce-widget mce-btn mce-menubtn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-280"
                                                                    role="button" aria-label="Table"
                                                                    aria-haspopup="true"><button id="tinymce-280-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-table"></i> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tinymce-297"
                                            className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px 0px 0px'}}>
                                            <iframe id="joinshare_ifr" frameBorder={0} allowTransparency={true}
                                                title="서식 있는 텍스트 편집기 입니다. ALT-F9를 누르면 메뉴, ALT-F10를 누르면 툴바, ALT-0을 누르면 도움말을 볼 수 있습니다."
                                                src="javascript:&quot;&quot;"
                                                style={{width: '100%', height: '370px', display:'block'}}></iframe>
                                        </div>
                                        <div id="tinymce-298"
                                            className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px 0px 0px'}}>
                                            <div id="tinymce-298-body" className="mce-container-body mce-flow-layout">
                                                <div id="tinymce-299"
                                                    className="mce-path mce-flow-layout-item mce-first">
                                                    <div role="button" className="mce-path-item mce-last" tabIndex={-1}
                                                        id="tinymce-299-0" aria-level={0}>p</div>
                                                </div>
                                                <div id="tinymce-300"
                                                    className="mce-flow-layout-item mce-last mce-resizehandle"><i
                                                        className="mce-ico mce-i-resize"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><textarea name="joinshare" className="input_text"
                                    style={{width: '99%', height: '200px', display: 'none'}} id="joinshare"
                                    aria-hidden="true"></textarea>
                            </td>
                        </tr>


                        <tr>
                            <td className="article">확약서 및 규정</td>
                            <td className="conts">
                                <div id="tinymce-324" className="mce-tinymce mce-container mce-panel" tabIndex={-1}
                                    role="application" style={{visibility: 'hidden', borderWidth: '1px'}}>
                                    <div id="tinymce-324-body" className="mce-container-body mce-stack-layout">
                                        <div id="tinymce-325"
                                            className="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
                                            tabIndex={-1} role="group">
                                            <div id="tinymce-325-body" className="mce-container-body mce-stack-layout">
                                                <div id="tinymce-326"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-first"
                                                    role="toolbar">
                                                    <div id="tinymce-326-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-327"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-327-body">
                                                                <div id="tinymce-301"
                                                                    className="mce-widget mce-btn mce-first mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-301"
                                                                    role="button" aria-label="Undo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-undo"></i></button>
                                                                </div>
                                                                <div id="tinymce-302"
                                                                    className="mce-widget mce-btn mce-last mce-disabled"
                                                                    tabIndex={-1} aria-labelledby="tinymce-302"
                                                                    role="button" aria-label="Redo"
                                                                    aria-disabled="true"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-redo"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-328"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-328-body">
                                                                <div id="tinymce-303"
                                                                    className="mce-widget mce-btn mce-menubtn mce-fixed-width mce-listbox mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-303"
                                                                    role="button" aria-label="Font Sizes"
                                                                    aria-haspopup="true"><button id="tinymce-303-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}>글자크기 <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-329"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-329-body">
                                                                <div id="tinymce-304"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-304"
                                                                    role="button" aria-label="Bold"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bold"></i></button>
                                                                </div>
                                                                <div id="tinymce-305" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-305"
                                                                    role="button" aria-label="Italic"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-italic"></i></button>
                                                                </div>
                                                                <div id="tinymce-306"
                                                                    className="mce-widget mce-btn mce-colorbutton"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Text color"><button role="presentation"
                                                                        type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-forecolor"></i><span
                                                                            id="tinymce-306-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-307"
                                                                    className="mce-widget mce-btn mce-colorbutton mce-last"
                                                                    role="button" tabIndex={-1} aria-haspopup="true"
                                                                    aria-label="Background color"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-backcolor"></i><span
                                                                            id="tinymce-307-preview"
                                                                            className="mce-preview"></span></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-330"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-330-body">
                                                                <div id="tinymce-308"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-308"
                                                                    role="button" aria-label="Special character"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-charmap"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-331"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-331-body">
                                                                <div id="tinymce-309"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-309"
                                                                    role="button" aria-label="Horizontal line"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-hr"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-332"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-332-body">
                                                                <div id="tinymce-310"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-310"
                                                                    role="button" aria-label="이미지 업로드"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-image"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-333"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-333-body">
                                                                <div id="tinymce-311"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-311"
                                                                    role="button" aria-label="Insert/edit link"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-link"></i></button>
                                                                </div>
                                                                <div id="tinymce-312"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-312"
                                                                    role="button" aria-label="Insert/edit video"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-media"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-334"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-334-body">
                                                                <div id="tinymce-313"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-313"
                                                                    role="button" aria-label="Preview"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-preview"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-335"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-335-body">
                                                                <div id="tinymce-314"
                                                                    className="mce-widget mce-btn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-314"
                                                                    role="button" aria-label="Source code"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-code"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="tinymce-336"
                                                    className="mce-container mce-toolbar mce-stack-layout-item mce-last"
                                                    role="toolbar">
                                                    <div id="tinymce-336-body"
                                                        className="mce-container-body mce-flow-layout">
                                                        <div id="tinymce-337"
                                                            className="mce-container mce-flow-layout-item mce-first mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-337-body">
                                                                <div id="tinymce-315"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn mce-first"
                                                                    role="button" tabIndex={-1} aria-label="Bullet list"
                                                                    aria-haspopup="true"><button type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-bullist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-316"
                                                                    className="mce-widget mce-btn mce-splitbtn mce-menubtn"
                                                                    role="button" tabIndex={-1}
                                                                    aria-label="Numbered list" aria-haspopup="true">
                                                                    <button type="button" tabIndex={-1}><i
                                                                            className="mce-ico mce-i-numlist"></i></button><button
                                                                        type="button" className="mce-open"
                                                                        tabIndex={-1}> <i
                                                                            className="mce-caret"></i></button></div>
                                                                <div id="tinymce-317" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-317"
                                                                    role="button" aria-label="Decrease indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-outdent"></i></button>
                                                                </div>
                                                                <div id="tinymce-318"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-318"
                                                                    role="button" aria-label="Increase indent"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-indent"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-338"
                                                            className="mce-container mce-flow-layout-item mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-338-body">
                                                                <div id="tinymce-319"
                                                                    className="mce-widget mce-btn mce-first"
                                                                    tabIndex={-1} aria-labelledby="tinymce-319"
                                                                    role="button" aria-label="Align left"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignleft"></i></button>
                                                                </div>
                                                                <div id="tinymce-320" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-320"
                                                                    role="button" aria-label="Align center"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-aligncenter"></i></button>
                                                                </div>
                                                                <div id="tinymce-321" className="mce-widget mce-btn"
                                                                    tabIndex={-1} aria-labelledby="tinymce-321"
                                                                    role="button" aria-label="Align right"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignright"></i></button>
                                                                </div>
                                                                <div id="tinymce-322"
                                                                    className="mce-widget mce-btn mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-322"
                                                                    role="button" aria-label="Justify"><button
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-alignjustify"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="tinymce-339"
                                                            className="mce-container mce-flow-layout-item mce-last mce-btn-group"
                                                            role="group">
                                                            <div id="tinymce-339-body">
                                                                <div id="tinymce-323"
                                                                    className="mce-widget mce-btn mce-menubtn mce-first mce-last"
                                                                    tabIndex={-1} aria-labelledby="tinymce-323"
                                                                    role="button" aria-label="Table"
                                                                    aria-haspopup="true"><button id="tinymce-323-open"
                                                                        role="presentation" type="button"
                                                                        tabIndex={-1}><i
                                                                            className="mce-ico mce-i-table"></i> <i
                                                                            className="mce-caret"></i></button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tinymce-340"
                                            className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px 0px 0px'}}>
                                            <iframe id="joinconfirm_ifr" frameBorder={0} allowTransparency={true}
                                                title="서식 있는 텍스트 편집기 입니다. ALT-F9를 누르면 메뉴, ALT-F10를 누르면 툴바, ALT-0을 누르면 도움말을 볼 수 있습니다."
                                                src="javascript:&quot;&quot;"
                                                style={{width: '100%', height: '370px', display:'block'}}></iframe>
                                        </div>
                                        <div id="tinymce-341"
                                            className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                                            tabIndex={-1} role="group" style={{borderWidth: '1px 0px 0px'}}>
                                            <div id="tinymce-341-body" className="mce-container-body mce-flow-layout">
                                                <div id="tinymce-342"
                                                    className="mce-path mce-flow-layout-item mce-first">
                                                    <div role="button" className="mce-path-item mce-last" tabIndex={-1}
                                                        id="tinymce-342-0" aria-level={0}>p</div>
                                                </div>
                                                <div id="tinymce-343"
                                                    className="mce-flow-layout-item mce-last mce-resizehandle"><i
                                                        className="mce-ico mce-i-resize"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><textarea name="joinconfirm" className="input_text"
                                    style={{width:' 99%', height: '200px', display:'none'}} id="joinconfirm"
                                    aria-hidden={true}></textarea>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            {/* <!-- 검색영역 --> */}

            <div className="bottom_btn_area">
                <div className="btn_line_up_center">
                    <span className="shop_btn_pack btn_input_red"><input type="submit" name="" className="input_large"
                            value="확인" /></span>
                </div>
            </div>

        </form>


        {/* // <script>
            //     // 약관설정 항목 추가 2017-09-13 SSJ
            //     function policy_add(obj, name){
            //         $this = $(obj).parent().parent().parent();
            //         var _html = '<div className="line">';
            //             _html += '<input type="hidden" name="'+name+'_uid[]" value="">';
            //             _html += '<input type="text" name="'+name+'_title[]" className="input_text" value="" style="margin-bottom:3px; width:70%">';
            //             _html += '<span className="shop_btn_pack" style="float:right;"><input type="button" className="input_small red" style="" onclick="policy_delete(this)" value="- 삭제"></span><br>';
            //             _html += '<textarea name="'+name+'_content[]" className="input_text" style="width:99%;height:200px;" ></textarea>';
            //             _html += '</div>';
            //         $this.append(_html);
            //     }
            //     // 약관설정 항목 삭제 2017-09-13 SSJ
            //     function policy_delete(obj){
            //         if(confirm('약관을 삭제하면 회원가입시 해당 약관에 동의한 내역도 모두 삭제됩니다.\n\n정말 삭제하시겠습니까?')){
            //             $this = $(obj).parent().parent();
            //             $this.remove();
            //         }
            //     }
            // 
        </script> */}


        <div style={{height:'30px'}}></div>

    </div>
</div>
</div>
)

}

export default Policy;