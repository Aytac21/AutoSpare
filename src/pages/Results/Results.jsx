import React, { useState } from "react";
import Car from "../Car/index";
import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import filterimage from "../../assets/Vector.svg";
import styled from "./results.module.scss";
import image1 from "../../assets/car.svg";
import { Link } from "react-router-dom";

function Results() {
  const [showEniInput, setShowEniInput] = useState(false);
  const [showHundurlukInput, setShowHundurlukInput] = useState(false);
  const [showRadiusInput, setShowRadiusInput] = useState(false);

  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="result-navigation">
          <a href="">AvtoPro</a> <i className="fa-solid fa-greater-than"></i>{" "}
          <a href="">Təkərlər</a>
        </div>
        <div>
          <div className="results-filter">
            <div className="result-size">
              <ul className="dropdown-list">
                <li>
                  <a href="#" onClick={() => setShowEniInput(!showEniInput)}>
                    Eni <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showEniInput && (
                    <input className="dropdown-input" type="number" placeholder="Eni daxil edin" />
                  )}
                </li>
                <li>
                  <a href="#" onClick={() => setShowHundurlukInput(!showHundurlukInput)}>
                    Hündürlük <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showHundurlukInput && (
                    <input className="dropdown-input" type="number" placeholder="Hündürlüyü daxil edin" />
                  )}
                </li>
                <li>
                  <a href="#" onClick={() => setShowRadiusInput(!showRadiusInput)}>
                    Radius <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  {showRadiusInput && (
                    <input className="dropdown-input" type="number" placeholder="Radiusu daxil edin" />
                  )}
                </li>
              </ul>
            </div>
            <div className="result-filter-search">
              <div>
                <img src={filterimage} alt="image" />
                <button> Filter</button>
              </div>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <button>Search</button>
              </div>
            </div>
          </div>
          <section className={styled.results}>
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
            <div className="row">
              <div className="result-list favoritepage">
                <Link to="/itemDetails">
                  <div className={styled.block}>
                    <div className={styled.img}>
                      <img src={image1} alt="" />
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default Results;
