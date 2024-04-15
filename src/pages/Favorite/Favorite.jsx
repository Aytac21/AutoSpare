import React, { useState } from "react";
import Car from "../Car/index";
import styled from "./favorite.module.scss";

import appcss from "../../App";
import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import basketimage from "../../assets/Cart1.svg";
import { Link } from "react-router-dom";

function Favorite() {
  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="favorite-page-text">
          <p>
            Favorilər <span>(34)</span>
          </p>
        </div>
        <section className={styled.favorite}>
          <a href=""><div className="row">
            <div className="result-list favoritepage">
              <div className="favorite-block">
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
                        <div className={styled.priceNumber}>
                          <span>
                            <FaManatSign />
                          </span>
                          <span>6.99</span>
                        </div>
                        <div className={styled.resultsCount}>
                          <i
                            onClick={decreaseCount}
                            className="fa-solid fa-chevron-down"
                          ></i>
                          {count}
                          <i
                            onClick={increaseCount}
                            className="fa-solid fa-chevron-up"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/card">
                  <div className="basket-class">
                    <img src={basketimage} alt="image" />
                    <p>Səbətə at</p>
                  </div>
                </Link>
              </div>
            </div>
          </div></a>
          <a href=""><div className="row">
            <div className="result-list favoritepage">
              <div className="favorite-block">
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
                        <div className={styled.priceNumber}>
                          <span>
                            <FaManatSign />
                          </span>
                          <span>6.99</span>
                        </div>
                        <div className={styled.resultsCount}>
                          <i
                            onClick={decreaseCount}
                            className="fa-solid fa-chevron-down"
                          ></i>
                          {count}
                          <i
                            onClick={increaseCount}
                            className="fa-solid fa-chevron-up"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/card">
                  <div className="basket-class">
                    <img src={basketimage} alt="image" />
                    <p>Səbətə at</p>
                  </div>
                </Link>
              </div>
            </div>
          </div></a>
          <a href=""><div className="row">
            <div className="result-list favoritepage">
              <div className="favorite-block">
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
                        <div className={styled.priceNumber}>
                          <span>
                            <FaManatSign />
                          </span>
                          <span>6.99</span>
                        </div>
                        <div className={styled.resultsCount}>
                          <i
                            onClick={decreaseCount}
                            className="fa-solid fa-chevron-down"
                          ></i>
                          {count}
                          <i
                            onClick={increaseCount}
                            className="fa-solid fa-chevron-up"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/card">
                  <div className="basket-class">
                    <img src={basketimage} alt="image" />
                    <p>Səbətə at</p>
                  </div>
                </Link>
              </div>
            </div>
          </div></a>
          <a href=""><div className="row">
            <div className="result-list favoritepage">
              <div className="favorite-block">
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
                        <div className={styled.priceNumber}>
                          <span>
                            <FaManatSign />
                          </span>
                          <span>6.99</span>
                        </div>
                        <div className={styled.resultsCount}>
                          <i
                            onClick={decreaseCount}
                            className="fa-solid fa-chevron-down"
                          ></i>
                          {count}
                          <i
                            onClick={increaseCount}
                            className="fa-solid fa-chevron-up"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/card">
                  <div className="basket-class">
                    <img src={basketimage} alt="image" />
                    <p>Səbətə at</p>
                  </div>
                </Link>
              </div>
            </div>
          </div></a>
          <a href=""><div className="row">
            <div className="result-list favoritepage">
              <div className="favorite-block">
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
                        <div className={styled.priceNumber}>
                          <span>
                            <FaManatSign />
                          </span>
                          <span>6.99</span>
                        </div>
                        <div className={styled.resultsCount}>
                          <i
                            onClick={decreaseCount}
                            className="fa-solid fa-chevron-down"
                          ></i>
                          {count}
                          <i
                            onClick={increaseCount}
                            className="fa-solid fa-chevron-up"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/card">
                  <div className="basket-class">
                    <img src={basketimage} alt="image" />
                    <p>Səbətə at</p>
                  </div>
                </Link>
              </div>
            </div>
          </div></a>
        </section>
      </div>
    </div>
  );
}

export default Favorite;
