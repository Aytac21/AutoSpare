import React, { useState } from "react";
import styled from "./itemdetails.module.scss";
import item1 from "../../../assets/accumulator.svg";
import item2 from "../../../assets/accumulator.svg";
import item3 from "../../../assets/aft.png";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import SwiperPart from "./SwiperPart";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const [count, setCount] = useState(0);

  const price = 99;

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const totalPrice = count * price;

  const imgs = [
    { id: 0, value: item1 },
    { id: 1, value: item2 },
    { id: 2, value: item3 },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <>
      <section className={styled.itemDetails}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className={styled.app}>
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className={styled.main}>
                      <img src={sliderData.value} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={styled.otherIMG}>
                      {imgs.map((data, i) => (
                        <div className={styled.img} key={data.id}>
                          <img
                            className={sliderData.id == i ? "clicked" : ""}
                            key={data.id}
                            src={data.value}
                            onClick={() => handleClick(i)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className={styled.info}>
                <div className={styled.name}>
                  <h2>Bosch S5</h2>
                  <h5>
                    Məhsulun kodu: <span>1202563</span>
                  </h5>
                </div>
                <div className={styled.icon}>
                  <span>
                    <IoStarSharp />
                  </span>
                  <span>
                    <IoStarSharp />
                  </span>
                  <span>
                    <IoStarSharp />
                  </span>
                  <span>
                    <IoStarSharp />
                  </span>
                  <span>
                    <IoStarSharp />
                  </span>
                </div>
                <div className={styled.price}>
                  <p>
                    99<span>AZN</span>
                  </p>
                </div>
                <div className={styled.about}>
                  <h3>Məhsul Xüsusiyətləri</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam adipisci aliquam quaerat odio culpa et facere cum
                    quibusdam praesentium, neque doloribus repellat dicta omnis
                    error consectetur, autem quidem? Voluptas laborum neque quam
                    quidem maxime ab temporibus consectetur fugiat corporis non.
                  </p>
                </div>
                <div className={styled.count}>
                  <div className={styled.name}>
                    <p>Miqdar</p>
                  </div>
                  <div className={styled.increaseANDdecrease}>
                    <button onClick={decreaseCount}>
                      <FaMinus />
                    </button>
                    <span>{count}</span>
                    <button onClick={increaseCount}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className={styled.sum}>
                  <span>Cəm</span>
                  <span>
                    AZN <span>{totalPrice}</span>
                  </span>
                </div>
                <div className={styled.buttons}>
                  <div className="row g-3" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div className="col-lg-5 col-md-12 col-sm-6 col-12">
                      <div className={styled.button1}>
                        <Link to="/favorite">
                          <button>Əlavə et</button>
                          <span>
                            <CiHeart />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                      <div className={styled.button2}>
                        <Link to="/card">
                          <button>Səbətə əlavə et</button>
                          <span>
                            <PiShoppingCart />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiperPart />
    </>
  );
};

export default ItemDetails;
