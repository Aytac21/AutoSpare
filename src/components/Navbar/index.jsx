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
                    className="row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="col-lg-2">
                      <div className={styled.searchBlock}>
                        <h4>Marka</h4>
                        <span>
                          Markanı seçin
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className={styled.searchBlock}>
                        <h4>Model</h4>
                        <span>
                          Modeli seçin
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className={styled.searchBlock}>
                        <h4>İl</h4>
                        <span>
                          İli seçin
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className={styled.searchBlock}>
                        <h4>Modifikasiya</h4>
                        <span>
                          Modifikasiyanı seçin
                          <span>
                            <MdKeyboardArrowDown />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-lg-1"
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
