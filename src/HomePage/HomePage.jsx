import React from "react";
import "./HomePage.css";
import { Body } from "../HomePage/Body/Body";
import { Header } from "./Header/Header";

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
      />
    </div>
  );
}

export default HomePage;
