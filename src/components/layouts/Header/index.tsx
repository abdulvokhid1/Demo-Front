import './styles.css'
import Link from 'next/link'

const HeaderElement = () => {
    return (
        <div className="header" style={{background:'#eaeaea'}}>
            <a href="index.php" className="logo" style={{color:'#353c43'}}>
                <span className="name" style={{color:'#353c43'}}>더센2</span>
                <span className="en" style={{color:'#353c43'}}>Admin</span>
            </a>
            <div className="today">
                <span className="year">2024</span>
                <span className="month">02</span>
                <span className="day">29</span>

            </div>


            <div style={{position:'absolute', marginLeft:'500px', marginTop:'8px'}}>

            </div>


            <div className="btn">

                <a href="logout.php" className="btn_logout" title="로그아웃"></a>

            </div>
        </div>
    )
}

export default HeaderElement