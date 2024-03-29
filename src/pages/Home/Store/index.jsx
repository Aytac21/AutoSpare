import React from 'react'
import styled from "./store.module.scss"
import img1 from "../../../assets/auto.svg"
import { FaStar } from "react-icons/fa";

const Store = () => {
  return (
    <section className={styled.store}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className={styled.head}>
                   <h2>Populyar Mağazalar</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <div className={styled.block}>
                    <div className={styled.items}>
                    <div className={styled.image}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={styled.text}>
                        <div className={styled.header}>
                            <div className={styled.name}>
                            <p>Auto<span>Pro</span></p>
                            </div>
                            <div className={styled.rate}>
                            <span><FaStar /></span>
                            <span>4.9</span>
                            </div>
                        </div>
                        <div className={styled.info}>
                         <p>Axtardığınız hər bir hissə bizdə</p>
                        </div>
                        <div className={styled.button}>
                           <button>Keçid et</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Store