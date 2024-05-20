import React, { useEffect, useState } from "react";
import Car from "../Car/index";
import styled from "./alldatas.module.scss";
import appcss from "../../App";
import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import basketimage from "../../assets/Cart1.svg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

function AllDatas() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
      fetch('https://kfx3lk98-7186.euw.devtunnels.ms/Parts')
        .then(response => response.json())
        .then(data => {
          console.log(typeof data); 
          setDatas(data.result.parts);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }, []);

  return (
    <div className="hr-add">
        <hr />
      <div className="container">
        <section className={styled.header}>
        <div className={styled.head}>
         <Link to="/"><span className={styled.home}>Home</span></Link>
         <span className={styled.arrow}><MdKeyboardArrowRight /></span>
         <span className={styled.datas}>All Datas</span>
        </div>
        </section>
        <section className={styled.favorite}>
            {
                datas.map((data)=>(
                    <a href=""><div className="row" key={data.modelId}>
                    <div className="result-list favoritepage">
                      <div className="favorite-block">
                        <div className={styled.block}>
                          <div className="favoriteimg">
                            <img src={data.image} alt="" />
                            <p className="favorite-img-text">{data.name}</p>
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
                                  <span>{data.price}</span>
                                </div>
                                <div className={styled.resultsCount}>
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
                ))
            }
        </section>
      </div>
    </div>
  );
}

export default AllDatas;