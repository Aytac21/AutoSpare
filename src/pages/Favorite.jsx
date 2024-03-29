import React from "react";
import Car from "./Car/index";
import styled from "./Car/car.module.scss";
import appcss from "../App";
import image from "../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import basketimage from "../assets/Cart1.svg";

function Favorite() {
  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="favorite-page-text">
          <p>
            Favorilər <span>(34)</span>
          </p>
        </div>
        <section className={styled.car}>
          <div className="row">
            <div className="col-lg-3 favoritepage">
              <div className={styled.block}>
                <div className="favoriteimg">
                  <img src={image} alt="" />
                  <p className="favorite-img-text">Əyləc sistemi</p>
                </div>
                <div className={styled.text}>
                  <div className={styled.name}>
                    <p>Xırdalan , Bakı</p>
                    <h5>
                      <span>
                        <TiTick />
                      </span>
                      AvtoPro
                    </h5>
                  </div>
                  <div className={styled.info}>
                    <span>2.5 km/40min</span>
                  </div>
                  <div className={styled.priceANDcount}>
                    <div className={styled.price}>
                      <span>
                        <FaManatSign />
                      </span>
                      <span>6.99</span>
                    </div>
                    <div className={styled.count}>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basket-class">
                <img src={basketimage} alt="image" />
                <p>Səbətə at</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Favorite;
