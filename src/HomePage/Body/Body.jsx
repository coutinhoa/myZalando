import React, { useState } from "react";
import "./Body.css";
import clothes from "../../images/Clothes.jpg";
import zalandoLogo from "../../images/Zalando_logo.svg";
import { ItemInfo } from "./ItemInfo/ItemInfo";

export const Body = ({
  addItemToCart,
  shoppingCart,
  filteredItems,
  handleSearchSubmit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchSubmit(searchTerm);
    }
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    console.log(text);
    setSearchTerm(text);

    if (text === "") {
      handleSearchSubmit(text);
    }
  };

  return (
    <div className="body">
      <div className="items-container">
        <div className="search-container">
          <input
            className="input"
            id="keyEnter"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInputChange}
            onKeyDown={pressEnter}
            maxLength="10"
          />
          <button
            className="search-icon"
            onClick={() => handleSearchSubmit(searchTerm)}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="infos-container">
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
          <div>
            <img src={clothes} className="clothes" alt="clothes" />
          </div>
        </div>
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
