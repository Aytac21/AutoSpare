import React, { useState } from "react";
import styled from "./accumulator.module.scss";
import item1 from "../../assets/accumulator.svg";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import SwiperPart from "./SwiperPart";

const Accumulator = () => {
  const [count, setCount] = useState(0);
  
  const price = 188;

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const totalPrice = count * price;

  return (
    <>
    <section className={styled.accumulator}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
           <div className={styled.pictures}>
           <div className="row">
              <div className="col-lg-12">
              <div className={styled.mainImage}>
                <img src={item1} alt="" />
              </div>
              </div>
            </div>
            <div className="row g-0" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:20}}>
            <div className="col-lg-4">
                <div className={styled.image}>
                  <img src={item1} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styled.image}>
                  <img src={item1} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styled.image}>
                  <img src={item1} alt="" />
                </div>
              </div>
            </div>
           </div>
          </div>
          <div className="col-lg-5">
            <div className={styled.info}>
               <div className={styled.name}>
                <h2>Bosch S5</h2>
               </div>
               <div className={styled.icon}>
                <span><IoStarSharp /></span>
                <span><IoStarSharp /></span>
                <span><IoStarSharp /></span>
                <span><IoStarSharp /></span>
                <span><IoStarSharp /></span>
               </div>
               <div className={styled.price}>
                <p>99<span>AZN</span></p>
               </div>
               <div className={styled.about}>
                <h3>Məhsul Xüsusiyətləri</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam adipisci aliquam quaerat odio culpa et facere cum quibusdam praesentium, neque doloribus repellat dicta omnis error consectetur, autem quidem? Voluptas laborum neque quam quidem maxime ab temporibus consectetur fugiat corporis non.</p>
               </div>
               <div className={styled.count}>
                 <div className={styled.name}>
                 <p>Miqdar</p>
                 </div>
                 <div className={styled.increaseANDdecrease}>
                  <button onClick={decreaseCount}><FaMinus /></button>
                  <span >{count}</span>
                  <button onClick={increaseCount} ><FaPlus /></button>
                 </div>
                 </div>
                 <div className={styled.sum}>
                  <span>Cəm</span>
                  <span>AZN <span>{totalPrice}</span></span>
                 </div>
                 <div className={styled.buttons}>
                  <div className={styled.button1}>
                  <button>Əlavə et</button>
                  <span><CiHeart /></span>
                  </div>
                  <div className={styled.button2}>
                  <button>Səbətə əlavə et</button>
                  <span><PiShoppingCart /></span>
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

export default Accumulator;
