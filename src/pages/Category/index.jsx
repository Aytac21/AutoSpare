import React, { useState, useEffect } from "react";
import styled from "./category.module.scss";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  useEffect(() => {
    fetch('https://k8dm08gl-7186.euw.devtunnels.ms/Categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleLeftArrowClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (endIndex < categories.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-lg-9 col-m-9">
            <div className={styled.categories}>
              <div className={styled.arrow} onClick={handleLeftArrowClick}>
                <span>
                  <MdKeyboardArrowLeft />
                </span>
              </div>
              <div className={styled.category}>
                {categories.slice(startIndex, endIndex + 1).map(category => (
                  <Link to="/results" key={category.id}>
                    <img src={category.image} alt="" />
                    <p>{category.name}</p>
                  </Link>
                ))}
              </div>
              <div className={styled.arrow} onClick={handleRightArrowClick}>
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

