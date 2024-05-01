import React from "react";
import styled from "./registration.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const RegistrationMark = () => {
  return (
    <section className={styled.registration}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.search}>
              <div className={styled.city}>
                <input type="search" placeholder="Bütün şəhərlər" />
                <div className={styled.arrow}>
                  <span className={styled.stick}></span>
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </div>
              </div>
              <div className={styled.letter}>
                <input type="search" placeholder="-" />
                <div className={styled.arrow}>
                  <span className={styled.stick}></span>
                  <span className={styled.down}>
                    <MdKeyboardArrowDown />
                  </span>
                </div>
              </div>
              <div className={styled.letter}>
                <input type="search" placeholder="-" />
                <div className={styled.arrow}>
                  <span className={styled.stick}></span>
                  <span className={styled.down}>
                    <MdKeyboardArrowDown />
                  </span>
                </div>
              </div>
              <div className={styled.number}>
                <input type="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.card}>
        <div className="row g-3">
          <div className="col-lg-12">
          <div className={styled.filter}>
              <div className={styled.result}>
              <p>
                <strong>0</strong> nəticə tapıldı
              </p>
              </div>
              <div className={styled.products}>
              <input type="search" placeholder="Çeşidləmək" />
                <div className={styled.arrow}>
                  <span className={styled.stick}></span>
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </div>
            </div>
          </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" >
            <Link to="/1">
            <div className={styled.block}>
              <div className={styled.number}>
                <div className={styled.logo}>
                  <svg
                    width="19"
                    height="11"
                    viewBox="0 0 19 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_3915_8889"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="19"
                      height="11"
                      style={{ marginRight: 10 }}
                    >
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_3915_8889)">
                      <path
                        d="M17.1905 0H1.80952C0.810151 0 0 0.656649 0 1.46667V9.53333C0 10.3434 0.810151 11 1.80952 11H17.1905C18.1898 11 19 10.3434 19 9.53333V1.46667C19 0.656649 18.1898 0 17.1905 0Z"
                        fill="#E3002E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7H19V11H0V7Z"
                        fill="#00AF62"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H19V4H0V0Z"
                        fill="#0097C5"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8594 5.1333H11.5737V5.86663H10.8594V5.1333Z"
                        fill="#FBDCE2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2143 6.59996C10.8886 7.04509 10.37 7.33329 9.78571 7.33329C8.8 7.33329 8 6.51196 8 5.49996C8 4.48796 8.8 3.66663 9.78571 3.66663C10.37 3.66663 10.8886 3.95483 11.2143 4.39996H10.1429C9.55143 4.39996 9.07143 4.89276 9.07143 5.49996C9.07143 6.10716 9.55143 6.59996 10.1429 6.59996H11.2143Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <span>AZ</span>
                </div>
                <div className={styled.num}>
                  <h3>10-CC-836</h3>
                </div>
              </div>
              <hr />
              <div className={styled.info}>
                <div className={styled.name}>
                  <p>Namiq</p>
                </div>
                <div className={styled.date}>
                  <span>28/03/2024,</span>
                  <span>14:59</span>
                </div>
              </div>
              <div className={styled.price}>
                <span>1800 ₼</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationMark;
