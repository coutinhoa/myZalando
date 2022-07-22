import React from "react";
import "./HomePage.css";
import { Body } from "../HomePage/Body/Body";
import { Header } from "./Header/Header";
import { Link } from "react-router-dom";
import zalando from "../images/Zalando.png";

function HomePage({
  addToCart,
  shoppingCart,
  filterByIdentity,
  filteredItems,
  handleSearchSubmit,
}) {
  return (
    <div className="home-page" id="home">
      <Header
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Body
        filteredItems={filteredItems}
        addItemToCart={addToCart}
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
      />
      <footer className="footer-container">
        <ul className="footer">
          <li>Datenschutz</li>
          <li>Nutzungsbedingungen</li>
          <li>Impressum</li>
        </ul>
        <div className="logo-container">
          <Link to={`/`}>
            <img src={zalando} className="logo-triangle" alt="zal-logo" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
