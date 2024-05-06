import React, { useState, useEffect } from "react";
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
import img10 from "../../assets/Truck.svg";
import img11 from "../../assets/Truck.svg";
import img12 from "../../assets/Truck.svg";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Category = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(8); // Başlangıçta 8 kategori görünecek.

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1203) {
        setVisibleCategories(9);
      }
      else if (width >= 1194) {
        setVisibleCategories(8);
      } else if (width >= 1188) {
        setVisibleCategories(7);
      }else if (width >= 1007) {
        setVisibleCategories(6);
      } else if (width >= 506) {
        setVisibleCategories(5);
      } else {
        setVisibleCategories(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 12 - visibleCategories));
  };

  const renderCategories = () => {
    const categoryImages = [
      img7,
      img9,
      img5,
      img4,
      img8,
      img2,
      img1,
      img3,
      img6,
      img10,
      img11,
      img12
    ];
    return categoryImages.slice(startIndex, startIndex + visibleCategories).map((image, index) => (
      <div className={styled.category} key={index}>
        <Link to="/results">
          <img src={image} alt="" />
          <p>Category {startIndex + index + 1}</p>
        </Link>
      </div>
    ));
  };

  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className={styled.categories}>
              <div className={styled.arrow} onClick={handleLeftArrowClick}>
                <span>
                  <MdKeyboardArrowLeft />
                </span>
              </div>
              {renderCategories()}
              <div className={styled.arrow} onClick={handleRightArrowClick}>
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
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
