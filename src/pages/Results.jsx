import React from "react";
import Car from "./Car/index";
import image from "../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import filterimage from "../assets/Vector.svg";
import styled from "./Home/BestSelling/bestselling.module.scss";
import image1 from "../assets/car.svg";
import { Link } from "react-router-dom";

function Results() {
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
              <ul>
                <li>
                  <a href="">
                    Eni <i className="fa-solid fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    Hündürlük <i className="fa-solid fa-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    Radius <i className="fa-solid fa-chevron-down"></i>
                  </a>
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
          <section className={styled.bestSelling}>
            <div className="row g-5">
              <div className="col-lg-3 result-list">
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
