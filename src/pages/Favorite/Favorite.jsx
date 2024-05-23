import React, { useEffect } from "react";
import styled from "./favorite.module.scss";
import { TiTick } from "react-icons/ti";
import { FaManatSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import basketimage from "../../assets/Cart1.svg";
import { useSelector, useDispatch } from "react-redux";
import { getBasket, reduceFromBasket, addToBasket, removeFromBasket } from "../../helpers/Redux/favoritesSlice";

function Favorite() {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Favoriler:", favorites); // Favori listesini konsola yazdır
  }, [favorites]);


  const handleRemoveFavorite = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div className="hr-add">
      <hr />
      <div className="container">
        <div className="favorite-page-text">
          <p>
            Favorilər <span>({favorites.length})</span>
          </p>
        </div>
        <section className={styled.favorite}>
          {favorites.length === 0 ? (
            <div className={styled.main}>
              <img src={basketimage} alt="Empty basket" />
              <h2>Sizin favori məhsulunuz yoxdur</h2>
            </div>
          ) : (
            favorites.map((favorite, index) => (
              <div key={index} className="row">
                <div className="result-list favoritepage">
                  <div className="favorite-block">
                    <div className={styled.block}>
                      <div className="favoriteimg">
                        <img src={`data:image/png;base64,${favorite.image1}`} alt={favorite.name} />
                        <p className="favorite-img-text">{favorite.name}</p>
                      </div>
                      <div className={styled.text}>
                        <div className={styled.name}>
                          <p>Xırdalan , Bakı</p>
                          <h5>
                            <span>
                              <TiTick />
                            </span>
                            AvtoPro
                          </h5>
                        </div>
                        <div className={styled.info}>
                          <span>2.5 km/40min</span>
                        </div>
                        <div className={styled.priceANDcount}>
                          <div className={styled.price}>
                            <div className={styled.priceNumber}>
                              <span>
                                <FaManatSign />
                              </span>
                              <span>{favorite.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basket-class" onClick={() => handleRemoveFavorite(favorite.id)}>
                      <img src={basketimage} alt="image" />
                      <p>Səbətə at</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Favorite;
