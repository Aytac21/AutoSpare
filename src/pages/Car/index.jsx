import React, { useEffect, useState } from 'react';
import styled from "./car.module.scss";
// import image from "../../assets/car.svg";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Car = ({}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://k8dm08gl-7186.euw.devtunnels.ms/Parts')
      .then(response => response.json())
      .then(data => {
        setCars(data.result.parts);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const displayedCars = cars.slice(0, 4);

  return (
    <section className={styled.car}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.all}>
              <Link to="/alldatas"><p>Hamısına bax</p></Link>
              <span><MdOutlineKeyboardArrowRight /></span>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {displayedCars.map(car => (
            <div key={car.modelId} className="col-lg-3 col-md-6 col-sm-12 col-12">
              <Link to="/itemDetails">
                <div className={styled.block}>
                  <div className={styled.img}>
                    <img src={car.image} alt="" />
                  </div>
                  <div className={styled.text}>
                    <div className={styled.name}>
                      <p>Xırdalan, Bakı</p>
                      <h5><span><TiTick /></span>AvtoPro</h5>
                    </div>
                    <div className={styled.info}>
                      <span>2.5 km/40min</span>
                    </div>
                    <div className={styled.priceANDcount}>
                      <div className={styled.price}>
                        <span><FaManatSign /></span>
                        <span>{car.price}</span>
                      </div>
                    </div>
                    <div className={styled.category}>
                      <p>{car.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.button}>
              <Link to="/alldatas"><button>Bütün detalları göstər</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Car;
