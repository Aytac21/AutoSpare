import React from 'react'
import style from './MRC.module.css'
import Audi from './imgs/Audi.svg'
import Jeep from './imgs/Jeep.svg'
import Opel from './imgs/Opel.svg'
import Dacia from './imgs/Dacia.svg'
import Renault from './imgs/Renault.svg'
import Citroen from './imgs/Citroen.svg'
import Mercedes from './imgs/MB.svg'
import Hyundai from './imgs/Hyundai.svg'
import heart from './imgs/heart.svg'
import karavan from './imgs/karavan.svg'

const rentService=( <div className={style.rentService}>
  <div className={style.nameAndFav}>
     <h3 className={style.name}>Karavan.az</h3>
     <svg className={style.fav} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.0993 5.85193L12.4997 6.38706L12.9 5.85193C13.8622 4.56589 15.4042 3.72949 17.1247 3.72949C20.0441 3.72949 22.4163 6.10746 22.4163 9.05241C22.4163 10.2376 22.2273 11.3316 21.8989 12.3464L21.8979 12.3497C21.1108 14.8405 19.4981 16.8474 17.7584 18.3425C16.0165 19.8395 14.1761 20.7986 12.9845 21.2041L12.9844 21.204L12.9791 21.2059C12.8722 21.2437 12.6983 21.2712 12.4997 21.2712C12.301 21.2712 12.1272 21.2437 12.0203 21.2059L12.0203 21.2059L12.0149 21.2041C10.8232 20.7986 8.9828 19.8395 7.24093 18.3425C5.50127 16.8474 3.88855 14.8405 3.10144 12.3497L3.10145 12.3497L3.1004 12.3464C2.77207 11.3316 2.58301 10.2376 2.58301 9.05241C2.58301 6.10746 4.95523 3.72949 7.87467 3.72949C9.59519 3.72949 11.1372 4.56589 12.0993 5.85193Z" />
     </svg>
 </div>
 <img className={style.rentServiceImg} src={karavan} alt="karavan"/>
  
  <button className={style.rentServiceCatalog}>Kataloq</button>
  </div>);
const MRC = () => {
  return (
    <div className={style.main}>
      <div className={style.makes}>
          <img src={Audi}       alt="Audi"></img>
          <img src={Jeep}       alt="Jeep"></img>
          <img src={Opel}       alt="Opel"></img>
          <img src={Dacia}      alt="Dacia"></img>
          <img src={Renault}    alt="Renault"></img>
          <img src={Citroen}    alt="Citroen"></img>
          <img src={Mercedes}   alt="Mercedes"></img>
          <img src={Hyundai}    alst="Hyundai"></img>
      </div>
        <h1 className={style.rentServicesTitle}>İCARƏ SERVİSLƏRİ</h1>
      <div className={style.rentServices}>
      {rentService}
      {rentService}
      {rentService}
      {rentService}
      {rentService}
      {rentService}
      {rentService}
      </div>
    </div>
  )
}

export default MRC