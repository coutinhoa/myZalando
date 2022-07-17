import React from "react";
import "./ItemInfo.css";

export const ItemInfo = ({ element, addItemToCart, shoppingCart }) => {
  const isItemInTheCart = (item) => {
    return shoppingCart.includes(item);
  };

  return (
    <div className="item-info" key={element.id} item={element}>
      <img src={element.picture} className="item-image" alt="item-image" />
      <div className="infos-container">
        <div>
          <div className="infos">
            {element.name} {element.type} - {element.color}
          </div>
          <div className="infos">{element.price.toFixed(2)}$</div>
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
