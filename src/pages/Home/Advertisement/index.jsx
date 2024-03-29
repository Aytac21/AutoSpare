import React from "react";
import styled from "./advertisement.module.scss";
import img2 from "../../../assets/thing.svg";
import img3 from "../../../assets/thing2.svg";

const Advertisement = () => {
  return (
    <section className={styled.advertisement}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row g-5" style={{ marginTop: 50 }}>
          <div className="col-lg-6">
            <div className={styled.discount}>
              <div className={styled.image}>
                <img src={img3} alt="" />
              </div>
              <div className={styled.text}>
                <h3>
                  Auto<span>Pro</span>
                </h3>
                <p>İlk sifarişinizdə 30 % endrimini qaçırmayın</p>
                <button>Keçid et</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styled.info}>
              <div className={styled.image2}>
                <img src={img2} alt="" />
              </div>
              <div className={styled.right_side}>
                <div className={styled.text}>
                  <h3>İllərin Keyfiyyəti</h3>
                  <h5>Rəsmi Distributor</h5>
                  <h4>
                    Auto<span>Pro</span>
                  </h4>
                  <button>Keçid et</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
