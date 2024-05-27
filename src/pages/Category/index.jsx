import React, { useState, useEffect } from "react";
import styled from "./category.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterSetter } from "../../helpers/Redux/aspareSlicer";
import { setSearchQuery } from "../../helpers/Redux/searchSlice";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(8); 
  const [categories, setCategories] = useState([]);
  const mainURL = useSelector(state => state.aspareSlice.mainURL);

  const getCategories = async () => {
    const response = await axios.get(`${mainURL}/categories`);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1203) {
        setVisibleCategories(9);
      } else if (width >= 1194) {
        setVisibleCategories(8);
      } else if (width >= 1188) {
        setVisibleCategories(7);
      } else if (width >= 1007) {
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
    setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setStartIndex(prevIndex =>
      Math.min(prevIndex + 1, categories.length - visibleCategories)
    );
  };

  const handleCategorySelect = categoryid => {
    dispatch(
      filterSetter({
        categoryId: categoryid
      })
    );
    navigate("/alldatas");
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  const renderCategories = () => {
    return categories
      .slice(startIndex, startIndex + visibleCategories)
      .map((category, index) => (
        <div
          onClick={() => handleCategorySelect(category.id)}
          className={styled.category}
          key={index}
        >
          <img
            style={{ width: "40px", height: "40px" }}
            src={`data:image/png;base64,${category.image}`}
            alt="Category Image"
          />
          <p>{category.name}</p>
        </div>
      ));
  };

  return (
    <section className={styled.searchPage}>
      <div className="container">
        <div
          className="row g-3"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
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
          <div className="col-lg-3 col-md-12 col-sm-12 col-6">
            <div className={styled.filterANDsearch}>
              <div className={styled.search}>
                <input 
                  type="text" 
                  placeholder="Detal kodu" 
                  onChange={handleSearchInputChange} 
                />
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

