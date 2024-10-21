// import './styles.css'
import Link from 'next/link'

const FooterElement = () => {
    return (
        <div className="footer" style={{
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }}>
            <div className="copyright">Copyright ©(주)***. All Rights Reserved.

                {/*<img src="../images/copyright.png" alt="카피라잇" title="" />*/}
            </div>


            <div style={{float: 'right', marginTop: '-20px', marginRight: '50px'}}>
            </div>
        </div>
    )
}

export default FooterElement