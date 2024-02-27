import styles from './styles.module.css'
import Link from 'next/link'

const Slider = () => {
    return (
        <div
             style={{
                 background:`#eaeaea`,
             }}>
            <Link href="http://thesen.moinus.kr/myAdmin/index.php" className={styles.headerLogo} style={{color:`#353c43`}}>
                <span className={styles.headerLogoName} style={{color:`#353c43`}}>더센2</span>
                <span className={styles.headerLogoEn} style={{color:`#353c43`}}>Admin</span>
            </Link>
            <div className={styles.headerToday}>
                <span className={styles.headerTodayYear}>2024</span>
                <span className={styles.headerTodayMonth}>02</span>
                <span className={styles.headerTodayDay}>26</span>

            </div>


            {/*<div style={{position:`absolute;margin-left:500px`, marginTop:`8px`}}>*/}
            {/*    */}

            {/*</div>*/}


            <div className={styles.headerBtn}>
                <Link href="http://thesen.moinus.kr/myAdmin/logout.php" className={styles.headerBtnLogout} title="로그아웃"></Link>

            </div>
        </div>
    )
}

export default Slider