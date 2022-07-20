import React from "react";
import "./ItemInfo.css";
import { Link } from "react-router-dom";
//import { amountArticles } from "./../../../utils/amountArticles";

export const ItemInfo = ({ element, addItemToCart, shoppingCart }) => {
  // const articlesQuantity = amountArticles(shoppingCart);

  const isItemInTheCart = (item) => {
    return shoppingCart.includes(item);
  };

  return (
    <div className="item-info" key={element.id} item={element}>
      <Link className="item-image" to={`/item-details/${element.id}`}>
        <img src={element.picture} className="item-image" alt="item" />
      </Link>
      <div className="infos-container">
        <div>
          <div className="infos">
            <Link
              className="infos-link"
              to={`/item-details/${element.id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              {element.name} {element.type} - {element.color}
            </Link>
          </div>
          <div className="infos-price">{element.price.toFixed(2)}$</div>
          <div>
            {element.premiumDelivery ? (
              <>
                <span className="plus-logo">PLUS</span>
                <span>Premium-Lieferung</span>
              </>
            ) : null}
          </div>
        </div>
        <div>
          <button
            className={`cart-button ${
              isItemInTheCart(element) ? "green-background" : ""
            }`}
            onClick={() => addItemToCart(element)}
          >
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
