import React from "react";
import Car from "./Car/index";
import styled from "./Car/car.module.scss";
import image from "../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import filterimage from "../assets/Vector.svg";

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
          <section className={styled.car}>
            <div className="row">
              <div className="col-lg-3">
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
                      <div className={styled.count}>
                        <span>1</span>
                      </div>
                    </div>
                    <div className={styled.category}>
                      <p>Əyləc sistemi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Results;
