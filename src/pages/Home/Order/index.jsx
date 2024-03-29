import React from "react";
import styled from "./order.module.scss";
// import img from "../../../assets/aft.png"

const Order = () => {
  return (
    <section className={styled.order}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.block}>
              <div className={styled.text}>
                <h2>
                  Avto<span>Pro</span>
                </h2>
                <h3>Fərqi özün hiss et</h3>
                <button>İndi sifariş et </button>
              </div>
              <div className={styled.image}>
                {/* <img src={img} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
