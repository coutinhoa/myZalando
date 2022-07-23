import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import { Header } from "../HomePage/Header/Header";
import { Rating } from "../ItemPage/Rating/Rating";
import { useParams } from "react-router-dom";

export const ItemPage = ({
  shoppingCart,
  filterByIdentity,
  handleSearchSubmit,
  articlesQuantity,
}) => {
  //console.log(articlesQuantity);
  const params = useParams();
  const [item, setItem] = useState();

  //ratings is children of garment
  const fetchItem = () => {
    fetch(`http://localhost:3000/garments/${params.id}?_embed=reviews`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  };

  useEffect(() => {
    fetchItem();
  }, []);

  //console.log(item.reviews);

  return (
    <div>
      <div>
        <Header
          shoppingCart={shoppingCart}
          filterByIdentity={filterByIdentity}
          handleSearchSubmit={handleSearchSubmit}
          articlesQuantity={articlesQuantity}
        />
      </div>
      <div>
        <Rating item={item} fetchItem={fetchItem} />
      </div>
    </div>
  );
};

export default ItemPage;
