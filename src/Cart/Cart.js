import React from "react";
import "./Cart.css";
import { amountArticles } from "./utils/amountArticles";
import { CartItem } from "./CartItem/CartItem";
import mastercardLogo from "./../images/Mastercard_logo.svg";
import visaLogo from "./../images/Visa_logo.svg";

export const Cart = ({ items, updateItemQuantity, removeSelectedItem }) => {
  const articlesQuantity = amountArticles(items);

  const getDeliveryTime = () => {
    var initDate = new Date();
    initDate.setDate(initDate.getDate() + 5);

    var finDate = new Date();
    finDate.setDate(finDate.getDate() + 7);

    return initDate.toDateString() + " - " + finDate.toDateString();
  };

  return (
    <div className="cart">
      <div className="articles">
        <h2>Warenkorb ({articlesQuantity} Artikel)</h2>
        <h5>Versandt durch ZALANDO</h5>
        <ul>
          {items.map((item) => {
            return (
              <CartItem
                key={item.name}
                item={item}
                updateQuantity={updateItemQuantity}
                removeItemFromList={removeSelectedItem}
              />
            );
          })}
          <button className="new-item">Add new Item</button>
        </ul>

        <p className="article-infos">
          Artikel im Warenkorb werden nicht reserviert.
        </p>
      </div>
      <div className="border-three">
        <h2>Voraussichtliche Lieferung</h2>
        {getDeliveryTime()}
      </div>
      <div className="border-three">
        <h2>Wir akzeptieren</h2>
        <img src={mastercardLogo} className="payment-logo" alt="logo" />
        <img src={visaLogo} className="payment-logo" alt="logo" />
      </div>
    </div>
  );
};
