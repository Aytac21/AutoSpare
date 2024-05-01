import React from "react";
import styled from "./bestselling.module.scss";
import image from "../../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BestSelling = () => {
  return (
    <section className={styled.bestSelling}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.head}>
              <h2>Ən çox satılan detallar</h2>
              <button>Hamısına bax</button>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <Link to="/itemDetails">
              <div className={styled.block}>
                <div className={styled.img}>
                  <img src={image} alt="" />
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
                  </div>
                  <div className={styled.category}>
                    <p>Əyləc sistemi</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <Link to="/itemDetails">
              <div className={styled.block}>
                <div className={styled.img}>
                  <img src={image} alt="" />
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
                  </div>
                  <div className={styled.category}>
                    <p>Əyləc sistemi</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <Link to="/itemDetails">
              <div className={styled.block}>
                <div className={styled.img}>
                  <img src={image} alt="" />
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
                  </div>
                  <div className={styled.category}>
                    <p>Əyləc sistemi</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <Link to="/itemDetails">
              <div className={styled.block}>
                <div className={styled.img}>
                  <img src={image} alt="" />
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
                  </div>
                  <div className={styled.category}>
                    <p>Əyləc sistemi</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
