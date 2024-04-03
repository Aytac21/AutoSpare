import React, { useState } from "react";
import styled from "./details.module.scss";
import main from "../../assets//detailsIMG/View.svg";
import detail1 from "../../assets//detailsIMG/detail2.png";
import detail2 from "../../assets//detailsIMG/detail1.png";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import car from "../../assets/detailsIMG/Car.svg";
import { MdPeopleAlt } from "react-icons/md";
import wheel from "../../assets/detailsIMG/Car.png"
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Details = () => {
  const imgs = [
    { id: 0, value: main },
    { id: 1, value: detail1 },
    { id: 2, value: detail2 },
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <Link to="/detailsMashinTap">
    <section className={styled.details}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-8 col-sm-12">
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
          <div className="col-lg-8">
            <div className={styled.info}>
              <div className={styled.name}>
                <div className={styled.head}>
                  <h3>Nissan GT - R</h3>
                  <div className={styled.rate}>
                    <div className={styled.star}>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                    </div>
                    <div className={styled.comment}>
                      <span>3+ şərh</span>
                    </div>
                  </div>
                </div>
                <div className={styled.fav}>
                  <span>
                    <FaHeart />
                  </span>
                </div>
              </div>
              <div className={styled.about}>
                <p>
                  Ən bağışlanmaz sınaq meydançasından, yarış trekindən
                  ilhamlanaraq Nissan-ın görkəmli performansının təcəssümü oldu.
                </p>
              </div>
              <div className={styled.type}>
                <div className={styled.leftSide}>
                  <div className={styled.list}>
                    <span>Avtomobil Tipi</span>
                    <p>Sport</p>
                  </div>
                  <div className={styled.list}>
                    <span>İdarə mexanizmi </span>
                    <p>Mexanika</p>
                  </div>
                </div>
                <div className={styled.rightSide}>
                  <div className={styled.list}>
                    <span>Oturacaq</span>
                    <p>2</p>
                  </div>
                  <div className={styled.list}>
                    <span>Yanacaq çəni</span>
                    <p>70L</p>
                  </div>
                </div>
              </div>
              <div className={styled.buy}>
                <div className={styled.price}>
                  <p>
                    <span className={styled.azn}>AZN</span> 80.00/
                    <span className={styled.day}>gün</span>
                  </p>
                  <del>AZN 100</del>
                </div>
                <div className={styled.button}>
                  <button>Bron Et</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.review}>
              <p>Review</p>
              <div className={styled.comments}>
                <div className={styled.comment}>
                  <div className={styled.icon}>
                    <span>
                      <FaCircleUser />
                    </span>
                  </div>
                  <div className={styled.user}>
                    <p>Tural Hamidzadə</p>
                    <span>
                      İdarə mexanizmi — sükanın fırlanma hərəkətini dartcının
                      yerdəyişməsinə çevirn, sükanla idarənin bir hissəsidir.
                      Əslində bu mexaniki reduktorun bir növüdür. Ən geniş
                      yayılmış aşağıdakı idarə mexanzimləri mövcuddur.
                    </span>
                  </div>
                  <div className={styled.dateANDrate}>
                    <p>21 mart 2023</p>
                    <div className={styled.star}>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styled.comment}>
                  <div className={styled.icon}>
                    <span>
                      <FaCircleUser />
                    </span>
                  </div>
                  <div className={styled.user}>
                    <p>Orxan Qarayev</p>
                    <span>
                      Valın vidələri və oymaq arasında sürüşmə sürtünməsini
                      diyirlənmə sürtünməsinə çevirən kürələr yerləşir. Bu
                      mexanizmlərdən adətən yük avtomobillərində istifadə
                      edilir.
                    </span>
                  </div>
                  <div className={styled.dateANDrate}>
                    <p>21 mart 2023</p>
                    <div className={styled.star}>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.show}>
                <a href="">
                  Show All{" "}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
              <div className={styled.cardHead}>
                <h3>Önərilən Maşınlar</h3>
                <h5>Hamısına bax</h5>
              </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3">
            <div className={styled.card}>
              <div className={styled.header}>
               <div className={styled.name}>
                <h3>MG ZX Excite</h3>
                <p>Hatchback</p>
               </div>
               <div className={styled.fav}>
                <span><FaRegHeart /></span>
               </div>
              </div>
              <div className={styled.image}>
                <img src={car} alt="" />
              </div>
              <div className={styled.props}>
                <div className={styled.wheel}>
                <img src={wheel} alt="" />
                <span className={styled.text}>Avtomat</span>
                </div>
                <div className={styled.seat}>
                <span><MdPeopleAlt /></span>
                <span className={styled.text}>4 oturacaq</span>
                </div>
              </div>
              <div className={styled.buy}>
                <div className={styled.price}>
                  <p>
                    <span><span className={styled.azn}>AZN</span> 80.00/</span>
                    <span className={styled.day}>gün</span>
                  </p>
                </div>
                <div className={styled.button}>
                  <button>Bron Et</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styled.card}>
              <div className={styled.header}>
               <div className={styled.name}>
                <h3>MG ZX Excite</h3>
                <p>Hatchback</p>
               </div>
               <div className={styled.fav}>
                <span><FaRegHeart /></span>
               </div>
              </div>
              <div className={styled.image}>
                <img src={car} alt="" />
              </div>
              <div className={styled.props}>
                <div className={styled.wheel}>
                <img src={wheel} alt="" />
                <span className={styled.text}>Avtomat</span>
                </div>
                <div className={styled.seat}>
                <span><MdPeopleAlt /></span>
                <span className={styled.text}>4 oturacaq</span>
                </div>
              </div>
              <div className={styled.buy}>
                <div className={styled.price}>
                  <p>
                    <span><span className={styled.azn}>AZN</span> 80.00/</span>
                    <span className={styled.day}>gün</span>
                  </p>
                </div>
                <div className={styled.button}>
                  <button>Bron Et</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styled.card}>
              <div className={styled.header}>
               <div className={styled.name}>
                <h3>MG ZX Excite</h3>
                <p>Hatchback</p>
               </div>
               <div className={styled.fav}>
                <span><FaRegHeart /></span>
               </div>
              </div>
              <div className={styled.image}>
                <img src={car} alt="" />
              </div>
              <div className={styled.props}>
                <div className={styled.wheel}>
                <img src={wheel} alt="" />
                <span className={styled.text}>Avtomat</span>
                </div>
                <div className={styled.seat}>
                <span><MdPeopleAlt /></span>
                <span className={styled.text}>4 oturacaq</span>
                </div>
              </div>
              <div className={styled.buy}>
                <div className={styled.price}>
                  <p>
                    <span><span className={styled.azn}>AZN</span> 80.00/</span>
                    <span className={styled.day}>gün</span>
                  </p>
                </div>
                <div className={styled.button}>
                  <button>Bron Et</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styled.card}>
              <div className={styled.header}>
               <div className={styled.name}>
                <h3>MG ZX Excite</h3>
                <p>Hatchback</p>
               </div>
               <div className={styled.fav}>
                <span><FaRegHeart /></span>
               </div>
              </div>
              <div className={styled.image}>
                <img src={car} alt="" />
              </div>
              <div className={styled.props}>
                <div className={styled.wheel}>
                <img src={wheel} alt="" />
                <span className={styled.text}>Avtomat</span>
                </div>
                <div className={styled.seat}>
                <span><MdPeopleAlt /></span>
                <span className={styled.text}>4 oturacaq</span>
                </div>
              </div>
              <div className={styled.buy}>
                <div className={styled.price}>
                  <p>
                    <span><span className={styled.azn}>AZN</span> 80.00/</span>
                    <span className={styled.day}>gün</span>
                  </p>
                </div>
                <div className={styled.button}>
                  <button>Bron Et</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Link>
  );
};

export default Details;