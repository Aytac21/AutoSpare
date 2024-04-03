import React from 'react'
import logo from './imgs/logo.svg'
import style from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <img className={style.footerLogo} src={logo} alt="logo" />
            <div className={style.footerMain}>

                <div className={style.context}>
                    <p className={style.title}>Haqqımızda</p>
                    <div className={style.content}>
                        <p>Biz Kimik?</p>
                        <p>Tez-tez verilən suallar</p>
                        <p>Gizlilik Siyasəti</p>
                    </div>
                </div>

                <div className={style.context}>
                    <p className={style.title}>Ünvan</p>
                    <div className={style.content}>
                        <p>Şeyx Şamil küçəsi ,34</p>
                        <p>+994 55 934 91 55</p>
                        <p>info@maşıntap.az</p>
                    </div>
                </div>

                <div className={style.context}>
                    <p className={style.title}>Sosial Şəbəkə</p>
                    <div className={style.content}>
                        <p>Biz Kimik?</p>
                        <p>Tez-tez verilən suallar</p>
                        <p>Gizlilik Siyasəti</p>
                    </div>
                </div>
            </div>
               <hr style={{marginTop:'2.5vw'}}/>
         <div className={style.footerBottom}>
             <p>©2024 RezervAll MMC. Bütün haqlar qorunur.</p>
             <p>Şərtlər və qaydalar</p>
         </div>

        </footer>
    )
}

export default Footer