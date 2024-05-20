import React, { useEffect, useState } from "react";
import styled from "./store.module.scss";
import store2 from "../../../assets/store/store2.svg";
import store1 from "../../../assets/store/store1.svg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Store = () => {
  const[store,setStore]=useState([]);

  useEffect(()=>{
   fetch("https://l377npwc-7186.euw.devtunnels.ms/Companies")
   .then(response=>response.json())
   .then(data=>{
    setStore(data.result.companies);
    console.log(data);
   })
   .catch(error=>{
    console.error("Error fetching store:",error);
   })
  },[]);

  const displayedStore=store.slice(0,2);

  return (
    <section className={styled.store}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.header}>
              <div className={styled.head}>
                <h2>Mağazalar</h2>
              </div>
              <div className={styled.all}>
                <Link to="/shops">
                  <button>Hamısına bax</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3" style={{ marginTop: 25 }}>
          {
            displayedStore.map(stores=>(
              <Link key={stores.id} to="/shoptype">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styled.block}>
                <div className={styled.leftSide}>
                  <div className={styled.image}>
                    <img src={store2} alt="" />
                  </div>
                  <div className={styled.nameANDlocation}>
                    <div className={styled.name}>
                      <h3>{stores.name}</h3>
                    </div>
                    <div className={styled.location}>
                      <span>
                        <FaLocationDot />
                      </span>
                      <p>Hüseyn Cavid 36</p>
                    </div>
                  </div>
                </div>
                <div className={styled.rightSide}>
                  <div className={styled.button}>
                    <button>Keçid et</button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Store;
