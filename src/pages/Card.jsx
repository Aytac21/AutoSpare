import React, { useState } from "react";
import img from "../assets/S5_Category-1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


function Card() {
  const inputs = document.querySelectorAll(
    '.delivery-sort input[type="radio"]'
  );

  inputs.forEach((input) => {
    input.addEventListener("change", function () {
      const label = this.closest("label");
      document.querySelectorAll(".delivery-sort label").forEach((l) => {
        l.classList.remove("active");
      });
      label.classList.add("active");
    });
  });
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="card-page container">
      <div>
        <div>
          <div className="order-header">
            <p>Məhsul</p>
            <ul>
              <li>Sayı</li>
              <li>Qiyməti</li>
              <li>Total</li>
            </ul>
          </div>
          <hr />
          <div>
            <div className="order-detail">
              <div>
                <img src={img} alt="image" />
                <div>
                  <p>Bosch</p>
                  <p>Tutum : 50000 W</p>
                  <p>
                    <i className="fa-solid fa-x"></i> Sil
                  </p>
                </div>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faMinus} onClick={decreaseCount} />
                  <p>{count}</p>
                  <FontAwesomeIcon icon={faPlus} onClick={increaseCount} />
                </li>
                <li>
                  <p>AZN 19.00</p>
                </li>
                <li>
                  <p>AZN 38.00</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="promokod">
          <p>Kuponunuz var ?</p>
          <p>Səbət endirimi üçün kodunuzu əlavə edin</p>
          <div>
            <div>
              <i className="fa-solid fa-percent"></i>
              <input type="text" placeholder="PROMOKOD" />
            </div>
            <button>Tətbiq et</button>
          </div>
        </div>
      </div>
      <div className="card-summary">
        <p>Səbətin xülasəsi</p>
        <div className="delivery-sort">
          <div>
            <label htmlFor="delivery1">
              <div>
                <input type="radio" name="delivery" id="delivery1" />
                Pulsuz çatdırılma(Şəhər daxili)
              </div>
              <p>0.00</p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery2">
              <div>
                <input type="radio" name="delivery" id="delivery2" />
                Poçtla göndəriş
              </div>
              <p>+ AZN 5.00</p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery3">
              <div>
                <input type="radio" name="delivery" id="delivery3" />
                Mağazadan götürmək
              </div>
              <p>0.00</p>
            </label>
          </div>
          <div className="total-salary">
            <p>Ümumi məbləğ</p>
            <p>AZN 38.00</p>
          </div>
          <p>Ödənişə keç</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
