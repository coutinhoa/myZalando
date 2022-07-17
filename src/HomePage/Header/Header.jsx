import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import zalandoLogo from "../../images/Zalando_logo.svg";
import { amountArticles } from "../../utils/amountArticles";

export const Header = ({
  shoppingCart,
  filterByIdentity,
  handleSearchSubmit,
}) => {
  const articlesQuantity = amountArticles(shoppingCart);

  //curly brackets need return if we want the function to return smth

  return (
    <div>
      <div className="header-two">
        <p>
          <button
            className="identity-buttons"
            onClick={() => filterByIdentity("Woman")}
          >
            DAMEN
          </button>
          <button
            className="identity-buttons"
            onClick={() => filterByIdentity("Man")}
          >
            HERREN
          </button>
          <button
            className="identity-buttons"
            onClick={() => filterByIdentity("Kid")}
          >
            KINDER
          </button>
        </p>
        <p>
          <img src={zalandoLogo} className="logo" alt="logo" />
        </p>
        <p className="icons-container">
          <span className="icons">
            De <i className="bi bi-globe"></i>
          </span>
          <Link
            className="icons"
            style={{ textDecoration: "none", color: "black" }}
            to={`/login`}
          >
            <i className="bi bi-person"></i>
          </Link>
          <Link
            to={`/login`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="icons">
              <i className="bi bi-heart"></i>
            </span>
          </Link>
          <Link
            className="cart-link"
            style={{ textDecoration: "none", color: "black" }}
            to={`/shopping-cart`}
          >
            <div className="al">
              <i className="bi bi-bag"></i>
              <span className="your-warenkorb">
                Warenkorb ({articlesQuantity}){" "}
              </span>
            </div>
            <div className="cart-hover">
              <div className="go-to-cart">
                <p>DEIN WARENKORB IST LEER</p>
                <p>
                  Leg los und fülle deinen Warenkorb mit den neuesten Fashion
                  Trends.
                </p>
              </div>
              <div className="go-shopping">
                DU WEISST NICHT, WO DU ANFANGEN SOLLST?
                <div>
                  <a href="#clothingList" className="go-shopping-button">
                    Zu den Neuheiten
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </p>
      </div>
      <div className="header-three">
        <input
          className="input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onSubmit={handleSearchSubmit}
        />
        <span>
          <button className="search-icon" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </span>
      </div>
    </div>
  );
};
