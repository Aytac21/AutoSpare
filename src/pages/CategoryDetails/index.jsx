import React from "react";
import styled from "./categorydetails.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryDetails = () => {
  return (
    <section className={styled.categoryDetails}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.head}>
              <h2>Kateqoriyalar</h2>
            </div>
          </div>
        </div>
        <div className="row g-3" style={{ marginTop: 30,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className={styled.block}>
              <div className={styled.texts}>
                <div className={styled.name}>
                <h3>Hava filtri</h3>
                </div>
                <Link to="/results">
                <div className={styled.link}>
                  <span>Keçid et</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
