import React from "react";
import "./Body.css";
import clothes from "../../images/Clothes.jpg";
import zalandoLogo from "../../images/Zalando_logo.svg";
import { ItemInfo } from "./ItemInfo/ItemInfo";

export const Body = ({ addItemToCart, shoppingCart, filteredItems }) => {
  //<img src={clothes} className="clothes" alt="clothes" />
  return (
    <div className="body">
      <div className="items-container">
        <div className="text-container">
          <div>
            <h1>Sommer-Sale</h1>
            <p className="sales-text">Bis zu 70% auf aktuelle Styles</p>
          </div>
          <div className="items-list">
            <a href="#clothingList" className="scroll-down">
              Available items
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div id="clothingList" className="clothing-list">
        <div className="clothing">
          <img src={zalandoLogo} className="z-logo" alt="logo" />
          <img src={zalandoLogo} className="z-logo" alt="logo" />
          <h1>{filteredItems.identity} Clothing</h1>
          <img src={zalandoLogo} className="z-logo" alt="logo" />
          <img src={zalandoLogo} className="z-logo" alt="logo" />
        </div>

        <div className="each-item">
          {filteredItems.map((element) => {
            //(element, index) we use index when we don't have an id and then key={index}
            return (
              <ItemInfo
                element={element}
                addItemToCart={addItemToCart}
                shoppingCart={shoppingCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
