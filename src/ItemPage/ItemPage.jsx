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
  isItemInTheCart,
  addItemToCart,
}) => {
  //console.log(articlesQuantity);
  const params = useParams();
  const [item, setItem] = useState();

  //ratings is children of garment
  useEffect(() => {
    fetch(`http://localhost:3000/garments/${params.id}?_embed=reviews`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  }, []);

  function getAverageRating(item) {
    let sum = 0;
    //console.log(item.reviews);
    for (let i = 0; i < item.reviews.length; i++) {
      sum += item.reviews[i].rating;
    }
    return (sum / item.reviews.length).toFixed(1);
  }
  //console.log(getAverageRating(item));

  if (item === undefined) {
    //or(!item) this one  also verifies for null
    return <div>Loading...</div>;
  }

  function occurencesArray(item) {
    const count = {};
    for (let i = 0; i < item.reviews.length; i++) {
      const element = item.reviews[i].rating;

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    return count;
  }
  //console.log(occurencesArray(item));

  function value(element) {
    let result = 0;
    for (let i = 0; i < item.reviews.length; i++) {
      result = occurencesArray(item)[element];
      if (result === undefined) {
        result = 0;
      } else {
        result = result;
      }
    }
    //console.log(occurencesArray(item)[element]);
    return result;
  }
  //console.log(value(item, 5));

  function ratingWidth(rating) {
    const selectedRatings = item.reviews.filter(
      (review) => review.rating === rating
    );
    //console.log(selectedRatings);
    //console.log((selectedRatings.length / item.reviews.length) * 100);
    return (selectedRatings.length / item.reviews.length) * 100;
  }

  const renderStars = () => {
    //checks if current star should be filled or not
    const average = Math.floor(getAverageRating(item));

    //this return creates and array with 5 items and it's gonna go to each element and return a new element with a star
    //string templates are used when we need to put conditions on strings
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <span className="star-padding">
            <i className={`bi bi-star${i <= average ? "-fill" : ""}`}></i>
          </span>
        ))}
      </>
    );

    /*this return creates a new array with average number of elements and it's gonna go to each element and return 
    a new element with a star. the problem with this return is that it only shows the stars equal to the average
    return (
      <>
        {[...Array(average)].map(() => (
          <span className="star-padding">
            <i className="bi bi-star-fill"></i>
          </span>
        ))}
      </>
    );*/
  };

  console.log(item.reviews[0]);
  function getRatings(item) {
    let rating = [];
    for (let i = 0; i < item.reviews.length; i++) {
      rating.push(item.reviews[i].rating);
    }
    return rating;
  }
  //console.log(getRatings(item));

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
        <Rating
          item={item}
          renderStars={renderStars}
          getAverageRating={getAverageRating}
          ratingWidth={ratingWidth}
          value={value}
        />
      </div>
    </div>
  );
};

export default ItemPage;
