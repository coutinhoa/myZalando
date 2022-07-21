import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import { Header } from "../HomePage/Header/Header";
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

  const myRating = () => {
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <span className="star-padding">
            <i className={`bi bi-star`}></i>
          </span>
        ))}
      </>
    );
  };

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
      <div className="item-ratings-body">
        <div className="image-container">
          <img src={item.picture} className="item-photo" alt="item" />
        </div>
        <div className="body-container">
          <div className="item-infos-container">
            <div className="detailed-infos">
              {item.name} {item.type} - {item.color}
            </div>
            <div className="price-container">{item.price}$</div>
            <div className="plus">
              {item.premiumDelivery ? (
                <>
                  <span className="plus-logo">PLUS</span>
                  <span>Premium-Lieferung</span>
                </>
              ) : null}
            </div>
            <div className="my-rating" onmouseover={myRating()}>
              {myRating()}
            </div>
          </div>
          <div className="rating-container">
            <div className="rating-resume">
              <span className="heading">
                Kundenbewertungen ({item.reviews.length}){" "}
              </span>
              <div className="rating-and-stars">
                <div className="average-review">
                  {getAverageRating(item)}/5 Stars
                </div>
                <div className="stars-average">{renderStars()}</div>
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="rating-distribution">
              <div className="row">
                <div>
                  <div className="stars">
                    <div>5 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-5"
                        style={{
                          width: `${ratingWidth(5)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(5)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>4 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-4"
                        style={{ width: `${ratingWidth(4)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(4)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>3 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-3"
                        style={{ width: `${ratingWidth(3)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(3)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>2 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-2"
                        style={{ width: `${ratingWidth(2)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(2)}</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>1 Star</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div
                        className="bar-1"
                        style={{ width: `${ratingWidth(1)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>{value(1)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
