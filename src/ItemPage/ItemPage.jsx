import React, { useState, useEffect, useCallback } from "react";
import "./ItemPage.css";
import { Header } from "../HomePage/Header/Header";
import { Rating } from "../ItemPage/Rating/Rating";
import { useParams } from "react-router-dom";

export const ItemPage = ({
  shoppingCart,
  filterByIdentity,
  handleSearchSubmit,
  articlesQuantity,
  addToCart,
}) => {
  const params = useParams();
  const [item, setItem] = useState();

  //ratings is children of garment
  //if json: fetch(`http://localhost:3000/garments/${params.id}?_embed=reviews`)
  const fetchItem = useCallback(() => {
    fetch(`http://localhost:8000/api/garments/${params.id}`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  }, [params.id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  console.log(item);
  //console.log(item.name);

  return (
    <>
      <Header
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
        handleSearchSubmit={handleSearchSubmit}
        articlesQuantity={articlesQuantity}
      />
      <Rating
        item={item}
        fetchItem={fetchItem}
        addToCart={addToCart}
        shoppingCart={shoppingCart}
      />
    </>
  );
};

export default ItemPage;
