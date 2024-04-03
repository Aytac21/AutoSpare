import React from 'react'
import style from './Head.module.css'
import selectIcon from "./imgs/SelectIcon.svg"

import menu from './imgs/menu.svg'
import avatar from './imgs/Avatar Base.svg'
import cars from './imgs/carsonheading2.svg'

const Head = () => {
  return (
    <div className={style.main}>
      <header>
        <h1>MaşınTap<span>AZ</span></h1>
        <img className={style.icon} src={selectIcon} alt="icon" />


        <div className={style.route}>
          <p>İCARƏ SERVİSLƏRİ</p>
          <p>BİZ KİMİK?</p>
          <p>ƏLAQƏ</p>
        </div>

        <div className={style.favorites}>
          <svg width="1.74vw" height="1.74vw" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0993 5.85193L12.4997 6.38706L12.9 5.85193C13.8622 4.56589 15.4042 3.72949 17.1247 3.72949C20.0441 3.72949 22.4163 6.10746 22.4163 9.05241C22.4163 10.2376 22.2273 11.3316 21.8989 12.3464L21.8979 12.3497C21.1108 14.8405 19.4981 16.8474 17.7584 18.3425C16.0165 19.8395 14.1761 20.7986 12.9845 21.2041L12.9844 21.204L12.9791 21.2059C12.8722 21.2437 12.6983 21.2712 12.4997 21.2712C12.301 21.2712 12.1272 21.2437 12.0203 21.2059L12.0203 21.2059L12.0149 21.2041C10.8232 20.7986 8.9828 19.8395 7.24093 18.3425C5.50127 16.8474 3.88855 14.8405 3.10144 12.3497L3.10145 12.3497L3.1004 12.3464C2.77207 11.3316 2.58301 10.2376 2.58301 9.05241C2.58301 6.10746 4.95523 3.72949 7.87467 3.72949C9.59519 3.72949 11.1372 4.56589 12.0993 5.85193Z" fill="white" stroke="white" />
          </svg>
        </div>

        <div className={style.menu}>
          <img style={{ width: '1.67vw', height: '1.67vw' }} src={menu} alt="menu" />
          <img style={{ width: '2.22vw', height: '2.22vw' }} src={avatar} alt="avatar" />
        </div>
      </header>

      <div className={style.content}>
        <div className={style.texts}>
          <p className={style.first}>Azərbaycanda 100% etibarlı avtomobil icarəsi platforması</p>
          <h2>Avtomobil icarəyə götürməyin sürətli və asan yolu</h2>
          <p className={style.second}>Bizim avtomobil icarəsi onlayn sifariş sistemimiz avtomobil icarə etmək üçün hazırlanmışdır. Bu istifadəsi asan avtomobil icarəsi proqramı sizə idarə etməyə imkan verəcək.</p>

        </div>
        <img className={style.carimages} src={cars} alt="carimages" />
      </div>
     <div className={style.reserveButtons}>
     <button className={style.reserveButton}>İndi bron edin</button>
         <p className={style.showAllCars}>Bütün maşınlara baxın</p>
     </div>
    </div>
  )
}

export default Head