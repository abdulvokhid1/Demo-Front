// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>배송주문 관리 <span>〓</span></span>
            <a href="orders_of_today" className="menu" title="데일리 정산" style={{display: 'block'}}>오늘 접수된 주문</a>
            <a href="OrderConfirm" className="menu" title="판매 인센티브" style={{display: 'block'}}>1단계 주문확인</a>
            <a href="DirectPay" className="menu" title="판매 인센티브" style={{display: 'block'}}>1단계 주문확인(무통장)</a>
            <a href="ConfirmDeposit" className="menu" title="판매 인센티브" style={{display: 'block'}}>2단계 입금확인</a>
            <a href="WaitingForDelivery" className="menu" title="판매 인센티브" style={{display: 'block'}}>3단계 배송대기</a>
            <a href="OnDelivery" className="menu" title="데일리 정산" style={{display: 'block'}}>4단계 배송중</a>
            <a href="CompletedDelivery" className="menu" title="판매 인센티브" style={{display: 'block'}}>5단계 배송완료</a>
            <a href="OrderCancellation" className="menu" title="판매 인센티브" style={{display: 'block'}}>취소주문관리</a>
            <a href="ReqPartialCancellation" className="menu" title="판매 인센티브" style={{display: 'block'}}>부분취소용청관리</a>
            <a href="ReqExchange" className="menu" title="판매 인센티브" style={{display: 'block'}}>교환반품요청관리</a>
            <a href="AllOrderManagement" className="menu" title="판매 인센티브" style={{display: 'block'}}>전체주문관리</a>
            <a href="OrderProcessingStatus" className="menu" title="판매 인센티브" style={{display: 'block'}}>주문처리현황</a>

            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider