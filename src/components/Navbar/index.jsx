import React from "react";
import styled from "./navbar.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className={styled.navbar}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-9">
              <div className={styled.search}>
                <div className="container">
                  <div
                    className="row g-3"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                        <div className={styled.head}>
                          <h4>Marka</h4>
                        </div>
                        <div className={styled.subHead}>
                          <span className={styled.text}>Markanı seçin</span>
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                        <div className={styled.head}>
                          <h4>Model</h4>
                        </div>
                        <div className={styled.subHead}>
                          <span className={styled.text}>
                            Modeli seçin
                          </span>
                          <span>
                              <MdKeyboardArrowDown />
                            </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-2 col-md-2 col-sm-6">
                      <div className={styled.searchBlock}>
                      <div className={styled.head}>
                      <h4>İl</h4>
                        </div>
                        <div className={styled.subHead}>
                        <span className={styled.text}>
                          İli seçin
                        </span>
                        <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                      <div className={styled.searchBlock}>
                      <div className={styled.head}>
                      <h4>Modifikasiya</h4>
                        </div>
                        <div className={styled.subHead}>
                        <span className={styled.text}>
                          Modifikasiyanı seçin
                        </span>
                        <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-1 col-md-1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div className={styled.searchIcon}>
                        <span className={styled.icon}>
                          <IoSearchOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </nav>
      <section>
        <hr />
      </section>
    </>
  );
};

export default Navbar;
