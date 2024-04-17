import React from "react";
import styled from "./category.module.scss";
import img1 from "../../assets/Car-Battery.svg";
import img2 from "../../assets/Air-Filter.svg";
import img3 from "../../assets/Group 1 (1).svg";
import img4 from "../../assets/Group (2).svg";
import img5 from "../../assets/Group 8.svg";
import img6 from "../../assets/Group 4.svg";
import img7 from "../../assets/Group.svg";
import img8 from "../../assets/Oil-Filter.svg";
import img9 from "../../assets/Truck.svg";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-lg-9 col-m-9">
            <div className={styled.categories}>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img7} alt="" />
                  <p className={styled.active}>Ümumi</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img9} alt="" />
                  <p>Yük Maşını</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img5} alt="" />
                  <p>Ekskavator</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img4} alt="" />
                  <p>Motor Filtri</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img8} alt="" />
                  <p>Yağ Filtri</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img2} alt="" />
                  <p>Hava Filtri</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img1} alt="" />
                  <p>Akkumlyator</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img3} alt="" />
                  <p>Əyləc sistemi</p>
                </Link>
              </div>
              <div className={styled.category}>
                <Link to="/results">
                  <img src={img6} alt="" />
                  <p>Amortizator</p>
                </Link>
              </div>
              <div className={styled.arrow}>
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className={styled.filterANDsearch}>
              <div className={styled.filter}>
                <span>
                  <MdOutlineSort />
                </span>
                <p>Filter</p>
              </div>
              <div className={styled.search}>
                <p>Detal kodu</p>
                <span>
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
