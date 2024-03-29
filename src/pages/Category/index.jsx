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
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  const location = useLocation();

  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-lg-9">
            <div className={styled.categories}>
              <div className={styled.category}>
                <img src={img7} alt="" />
                <Link
                  to="/"
                  className={location.pathname == "/" && styled.active}
                >
                  Ümumi
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img9} alt="" />
                <Link
                  to="/lorry"
                  className={location.pathname == "/lorry" && styled.active}
                >
                  Yük Maşını
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img5} alt="" />
                <Link
                  to="/elevator"
                  className={location.pathname == "/elevator" && styled.active}
                >
                  Ekskavator
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img4} alt="" />
                <Link
                  to="/motorfilter"
                  className={
                    location.pathname == "/motorfilter" && styled.active
                  }
                >
                  Motor Filtri
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img8} alt="" />
                <Link
                  to="/oilfilter"
                  className={location.pathname == "/oilfilter" && styled.active}
                >
                  Yağ Filtri
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img2} alt="" />
                <Link
                  to="/airfilter"
                  className={location.pathname == "/airfilter" && styled.active}
                >
                  Hava Filtri
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img1} alt="" />
                <Link
                  to="/accumulator"
                  className={
                    location.pathname == "/accumulator" && styled.active
                  }
                >
                  Akkumlyator
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img3} alt="" />
                <Link
                  to="/brakingsystem"
                  className={
                    location.pathname == "/brakingsystem" && styled.active
                  }
                >
                  Əyləc sistemi
                </Link>
              </div>
              <div className={styled.category}>
                <img src={img6} alt="" />
                <Link
                  to="/amortizator"
                  className={
                    location.pathname == "/amortizator" && styled.active
                  }
                >
                  Amortizator
                </Link>
              </div>
              <div className={styled.arrow}>
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
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
