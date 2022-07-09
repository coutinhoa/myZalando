import React from "react";
import "./CartItem.css";
import binLogo from "../../images/Bin_logo.png";

export const CartItem = ({ item, updateQuantity, removeItemFromList }) => {
  const availableOptions = [1, 2, 3, 4, 5];

  const handleChangeQuantity = (e) => {
    updateQuantity(item, e.target.value);
  };

  const handleRemoveItem = () => {
    removeItemFromList(item);
  };

  return (
    <li>
      <div className="info-container">
        <div className="lines">
          <img src={item.picture} alt="item" className="image" />
        </div>
        <div className="item-details">
          <div>Name: {item.name}</div>
          <div>Type: {item.type}</div>
          <div>Color: {item.color}</div>
          <div>
            <span className="plus-logo">PLUS</span>
            {item.premiumDelivery ? <span>Premium-Lieferung</span> : null}
            {/*or {item.premiumDelivery && <div>Premium-Lieferung</div>} */}
          </div>
          <button className="bin-button" onClick={handleRemoveItem}>
            <img src={binLogo} alt="remove item" className="bin-logo" />{" "}
            <span>Entfernen</span>
          </button>
        </div>
        <div className="item-quantity">
          <span className="quantity-label">Quantity:</span>
          <select
            value={item.quantity}
            onChange={handleChangeQuantity}
            className="dropdown"
          >
            {availableOptions.map((n) => (
              <option key={n}>{n}</option>
            ))}
            {/*we want the map to return the jsx with options*/}
          </select>
          <div className="price">Price: {item.price * item.quantity}$</div>
        </div>
      </div>
    </li>
  );
};
