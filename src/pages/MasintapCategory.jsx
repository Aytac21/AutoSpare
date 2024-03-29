import React, { useState } from "react";
import heart from "../assets/heart.svg";
import car from "../assets/Car (3).svg";
import avto from "../assets/Car (2).svg";
import profileuser from "../assets/profile-2user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MasintapCategory() {
  const [value, setValue] = useState(100);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const [selectedCityFirst, setSelectedCityFirst] = useState("");
  const [selectedCitySecond, setSelectedCitySecond] = useState("");

  const handleCityChangeFirst = (e) => {
    const selectedValueFirst = e.target.value;

    if (selectedValueFirst !== "") {
      setSelectedCityFirst(selectedValueFirst);
    }
  };

  const handleCityChangeSecond = (e) => {
    const selectedValueSecond = e.target.value;

    if (selectedValueSecond !== "") {
      setSelectedCitySecond(selectedValueSecond);
    }
  };

  const [isOpenFirst, setIsOpenFirst] = useState(false);

  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [selectedTimeFirst, setSelectedTimeFirst] = useState("");
  const [selectedTimeSecond, setSelectedTimeSecond] = useState("");

  const [displayTextFirst, setDisplayTextFirst] = useState("Saatı seçin");
  const [displayTextSecond, setDisplayTextSecond] = useState("Saatı seçin");

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleTimeChangeFirst = (event) => {
    const { value } = event.target;
    setSelectedTimeFirst(value);
    const formattedTime = formatTime(value);
    setDisplayTextFirst(formattedTime);
  };

  const toggleDropdownFirst = () => {
    setIsOpenFirst(!isOpenFirst);
    setIsOpenSecond(false);
  };

  const handleTimeChangeSecond = (event) => {
    const { value } = event.target;
    setSelectedTimeSecond(value);
    const formattedTime = formatTime(value);
    setDisplayTextSecond(formattedTime);
  };

  const toggleDropdownSecond = () => {
    setIsOpenSecond(!isOpenSecond);
    setIsOpenFirst(false);
  };

  const [selectedDateFirst, setSelectedDateFirst] = useState(null);
  const [selectedDateSecond, setSelectedDateSecond] = useState(null);
  const [isOpenFirstDate, setIsOpenFirstDate] = useState(false);
  const [isOpenSecondDate, setIsOpenSecondDate] = useState(false);

  const handleDateChangeFirst = (date) => {
    setSelectedDateFirst(date);
    setIsOpenFirstDate(false);
  };

  const handleDateChangeSecond = (date) => {
    setSelectedDateSecond(date);
    setIsOpenSecondDate(false);
  };

  const toggleDropdownFirstDate = () => {
    setIsOpenFirstDate(!isOpenFirstDate);
    setIsOpenSecondDate(false);
  };

  const toggleDropdownSecondDate = () => {
    setIsOpenSecondDate(!isOpenSecondDate);
    setIsOpenFirstDate(false);
  };

  return (
    <div className="container masintap-category">
      <div className="category-filter">
        <div className="typeofban">
          <p>Avtomobil ban növü</p>
          <div className="">
            <div>
              <input
                type="checkbox"
                id="sport"
                name="vehicle_type"
                value="Sport"
              />
              <label htmlFor="sport">Sport</label>
            </div>
            <div>
              <input type="checkbox" id="suv" name="vehicle_type" value="SUV" />
              <label htmlFor="suv">SUV</label>
            </div>
            <div>
              <input type="checkbox" id="mpv" name="vehicle_type" value="MPV" />
              <label htmlFor="mpv">MPV</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sedan"
                name="vehicle_type"
                value="Sedan"
              />
              <label htmlFor="sedan">Sedan</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="coupe"
                name="vehicle_type"
                value="Coupe"
              />
              <label htmlFor="coupe">Coupe</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hatchback"
                name="vehicle_type"
                value="Hatchback"
              />
              <label htmlFor="hatchback">Hatchback</label>
            </div>
          </div>
        </div>
        <div className="numberofseats">
          <p>Oturacaq Sayı</p>
          <div>
            <div>
              <input
                type="checkbox"
                id="2oturacaq"
                name="vehicle_type"
                value="Sport"
              />
              <label htmlFor="2oturacaq">
                2 oturacaq <span>(10)</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="4oturacaq"
                name="vehicle_type"
                value="SUV"
              />
              <label htmlFor="4oturacaq">
                4 oturacaq <span>(14)</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="6oturacaq"
                name="vehicle_type"
                value="MPV"
              />
              <label htmlFor="6oturacaq">
                6 oturacaq <span>(12)</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="8oturacaq"
                name="vehicle_type"
                value="Sedan"
              />
              <label htmlFor="8oturacaq">
                8 və çox <span>(16)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="pricerange">
          <p>Qiymət aralığı</p>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
          />
          <p>
            Max. <span>AZN</span> {value.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="masintap-category-section">
        <div className="masintap-category-main">
          <div className="category-makereservation">
            <div>
              <i className="fa-regular fa-circle"></i>
              <p>Bron etmək</p>
            </div>
            <div>
              <div>
                <p>Məkan</p>
                <div>
                  <select
                    id="citySelect"
                    value={selectedCityFirst}
                    onChange={handleCityChangeFirst}
                  >
                    <option value="">Şəhər seçin</option>
                    <option value="Bakı">Bakı</option>
                    <option value="Gəncə">Gəncə</option>
                    <option value="Lənkəran">Lənkəran</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Tarix</p>
                <div>
                  <div
                    className="date-dropdown"
                    onClick={toggleDropdownFirstDate}
                  >
                    <p>
                      {selectedDateFirst
                        ? selectedDateFirst.toLocaleDateString()
                        : "Tarixi seçin"}
                    </p>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={isOpenFirstDate ? "rotate-icon" : ""}
                    />
                  </div>
                  {isOpenFirstDate && (
                    <div className="calendar">
                      <DatePicker
                        selected={selectedDateFirst}
                        onChange={handleDateChangeFirst}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Tarih seçin"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p>Vaxt</p>
                <div>
                  <div className="dropdown">
                    <div
                      className="dropdown-header category-time"
                      onClick={toggleDropdownFirst}
                    >
                      <p>{displayTextFirst}</p>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={isOpenFirst ? "rotate-icon" : ""}
                      />
                    </div>
                    {isOpenFirst && (
                      <div className="dropdown-content">
                        <input
                          type="time"
                          id="selectedTime"
                          value={selectedTimeFirst}
                          onChange={handleTimeChangeFirst}
                          placeholder="Saatı seçin"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="category-returndelivery">
            <div>
              <i className="fa-regular fa-circle"></i>
              <p>Geri təslim</p>
            </div>
            <div>
              <div>
                <p>Məkan</p>
                <div>
                  <select
                    id="citySelect"
                    value={selectedCitySecond}
                    onChange={handleCityChangeSecond}
                  >
                    <option value="">Şəhər seçin</option>
                    <option value="Bakı">Bakı</option>
                    <option value="Gəncə">Gəncə</option>
                    <option value="Lənkəran">Lənkəran</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Tarix</p>
                <div>
                  <div
                    className="date-dropdown"
                    onClick={toggleDropdownSecondDate}
                  >
                    <p>
                      {selectedDateSecond
                        ? selectedDateSecond.toLocaleDateString()
                        : "Tarixi seçin"}
                    </p>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={isOpenSecondDate ? "rotate-icon" : ""}
                    />
                  </div>
                  {isOpenSecondDate && (
                    <div className="calendar">
                      <DatePicker
                        selected={selectedDateSecond}
                        onChange={handleDateChangeSecond}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Tarih seçin"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p>Vaxt</p>
                <div>
                  <div className="dropdown">
                    <div
                      className="dropdown-header category-time"
                      onClick={toggleDropdownSecond}
                    >
                      <p>{displayTextSecond}</p>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={isOpenSecond ? "rotate-icon" : ""}
                      />
                    </div>
                    {isOpenSecond && (
                      <div className="dropdown-content">
                        <input
                          type="time"
                          id="selectedTime"
                          value={selectedTimeSecond}
                          onChange={handleTimeChangeSecond}
                          placeholder="Saatı seçin"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="masintap-category-cars">
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
          <div className="masintap-category-car">
            <div className="masintap-category-car-name">
              <div>
                <p>Koenigsegg</p>
                <p>Sport</p>
              </div>
              <img src={heart} alt="" />
            </div>
            <div className="masintap-category-car-image">
              <img src={car} alt="" />
            </div>
            <div>
              <div className="category-car-text">
                <div className="category-car-description">
                  <img src={avto} alt="" />
                  <p>Avtomat</p>
                </div>
                <div className="category-car-user">
                  <img src={profileuser} alt="" />
                  <p>2 oturacaq</p>
                </div>
              </div>
              <div className="category-car-price">
                <p>
                  <span>AZN</span>
                  <span>99.00/ gün</span>
                </p>
                <p>Bron et</p>
              </div>
            </div>
          </div>
        </div>
        <div className="category-more-data">
          <p>Daha çox</p>
        </div>
      </div>
    </div>
  );
}

export default MasintapCategory;
