// import './styles.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="aside_second">
                 <span style={{backgroundColor: '#eaf8f5 '}}>로그분석 통계 <span>〓</span></span>
            <a href="daily_connection" className="menu" title="데일리 정산" style={{display: 'block'}}>일별접속 </a>
            <a href="TimeConnection" className="menu" title="판매 인센티브" style={{display: 'block'}}>시간별 접속</a>
            <a href="MonthlyConnection" className="menu" title="판매 인센티브" style={{display: 'block'}}>월별 접속</a>
            <a href="YearConnection" className="menu" title="판매 인센티브" style={{display: 'block'}}>년별 접속</a>
            <a href="AccessPath" className="menu" title="판매 인센티브" style={{display: 'block'}}>경로별 접속</a>
            <a href="OperatingSystem" className="menu" title="판매 인센티브" style={{display: 'block'}}>운영체제별 접속</a>
            <a href="Browser" className="menu" title="판매 인센티브" style={{display: 'block'}}>브라우저별 접속</a>
            <a href="DetailedLog" className="menu" title="데일리 정산" style={{display: 'block'}}>상세로그 </a>
            
            <div className="favorite_menu">
                <a className="title" title="즐겨찾는메뉴설정" href="_favmenu.form.php"></a>
                <div className="box">
                </div>
            </div>
        </div>
    )
}
export default Slider