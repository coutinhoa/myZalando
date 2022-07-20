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
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/clothes/${params.id}`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  }, []);

  /*const data = item.find((element) => element.id > 0).reviews;

  const quantityArray = data.map((element) => element.rating);

  const initialValue = 0;
  const totalQuantity = quantityArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  console.log(totalQuantity);*/

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
            <div className="infos-container">
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
          </div>
          <div className="rating-container">
            <div className="rating-resume">
              <span className="heading">User Rating</span>
              <span className="star-padding">
                <i className="bi bi-star"></i>
              </span>
              <span className="star-padding">
                <i className="bi bi-star"></i>
              </span>
              <span className="star-padding">
                <i className="bi bi-star"></i>
              </span>
              <span className="star-padding">
                <i className="bi bi-star"></i>
              </span>
              <span className="star-padding">
                <i className="bi bi-star"></i>
              </span>
              <p>y average based on x reviews.</p>
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
                      <div className="bar-5"></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>150</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>4 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div className="bar-4"></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>63</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>3 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div className="bar-3"></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>15</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>2 Stars</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div className="bar-2"></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>6</div>
                  </div>
                </div>
                <div>
                  <div className="stars">
                    <div>1 Star</div>
                  </div>
                  <div className="bar">
                    <div className="bar-container">
                      <div className="bar-1"></div>
                    </div>
                  </div>
                  <div className="reviewers">
                    <div>20</div>
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
