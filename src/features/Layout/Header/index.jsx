import React from 'react'
import styled from "./header.module.scss"
import { BsTelephone } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  return (
    <header className={styled.head}>
      <div className="container">
        <div className="row" style={{display:'flex',justifyContent:"space-between"}}>
          <div className="col-lg-6">
           <div className={styled.logo}>
            <h3>Auto<span className={styled.orange}>Spare</span>.<span className={styled.orange}>az</span></h3>
           </div>
          </div>
          <div className="col-lg-6">
            <div className={styled.info}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styled.tel}>
                    <span className={styled.icon}><BsTelephone /></span>
                    <span className={styled.text}>Əlaqə</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styled.delivery}>
                    <span className={styled.icon}><CiDeliveryTruck /></span>
                    <span className={styled.text}>Çatdırılma & Qaytarılma</span>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className={styled.card}>
                    <span><PiShoppingCart /></span>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className={styled.user}>
                    <span><LuMenu /></span>
                    <span className={styled.icon}><FaCircleUser /></span>
                    <div className={styled.list}>
                      <a href="">Qeydiyyat</a>
                      <a href="">Giriş</a>
                      <hr />
                      <a href="">Favorilər</a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header