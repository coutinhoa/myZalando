import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import { Header } from "../HomePage/Header/Header";
import { useParams } from "react-router-dom";

export const ItemPage = ({
  shoppingCart,
  filterByIdentity,
  handleSearchSubmit,
  articlesQuantity,
}) => {
  //console.log(articlesQuantity);
  const params = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/clothes/${params.id}`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  }, []);
  //console.log(item.reviews["ratings"]);

  let itemRating = itemRev.ratings;
  console.log(itemRating);
  //use filter, reduce or other helper function to get the reviews and candulate averages and so on
  function iterateArray() {
    const itemReviews = item.reviews;
    result = [];
    for (let i = 0; i < itemReviews.length; i++) {}
    return result;
  }

  /*const averageRatingItem = (item) => {
    const itemRev = item.reviews["ratings"];
    const initialValue = 0;
    const average = itemRev.reduce(
      (previousValue, currentValue) =>
        (previousValue + currentValue) / itemRev.length,
      initialValue
    );
  };
  console.log(averageRatingItem(item));*/

  return (
    <div>
      <Header
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
        handleSearchSubmit={handleSearchSubmit}
        articlesQuantity={articlesQuantity}
      />
      <img src={item.picture} className="image" alt="item" />
      <div className="details">
        {item.name} {item.type} - {item.color}
      </div>
    </div>
  );
};

export default ItemPage;
