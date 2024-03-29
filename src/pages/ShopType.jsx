import React from "react";
import Navbar from "../components/Navbar";
import Category from "./Category";
import avtodetal from "../assets/6zazG73XmCIVX596eIDD.png";

function ShopType() {
  return (
    <div className="shops-type-page">
      <div className="container">
        <section className="shops-navigation shops-type-navigation">
          <a href="">Ana Səhifə</a>
          <i className="fa-solid fa-angle-right"></i>
          <a href="">Mağazalar</a>
        </section>
      </div>
      <hr />
      <div className="container">
        <div className="shops-type-detail">
          <div>
            <h1>AvtoDetal</h1>
          </div>
          <div>
            <img src={avtodetal} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <Navbar />
      <Category />
      <hr />
      <div className="container"></div>
    </div>
  );
}

export default ShopType;
