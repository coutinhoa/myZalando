import React, { useState, useEffect } from "react";
import "./CartItem.css";
import binLogo from "../../images/Bin_logo.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CartItem = ({ item, updateQuantity, removeItemFromList }) => {
  const availableOptions = [1, 2, 3, 4, 5];

  const handleChangeQuantity = (e) => {
    updateQuantity(item, e.target.value);
  };

  const handleRemoveItem = () => {
    removeItemFromList(item);
  };

  //update size not working!!!! need to learn context API!!!!!!!!!
  const params = useParams();
  const [cartItem, setCartItem] = useState();

  //ratings is children of garment
  const fetchCartItem = () => {
    fetch(`http://localhost:3000/garments/${params.id}?_embed=reviews`)
      .then((response) => response.json())
      .then((response) => setCartItem(response));
  };

  useEffect(() => {
    fetchCartItem();
  }, []);
  const availableSizes = ["XS", "S", "M", "L", "XL"];

  const updatedItemSize = (item, size) => {
    const itemSizeUpdated = { size: size };

    fetch(`http://localhost:3000/garments/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(itemSizeUpdated),
    }).then(() => fetchCartItem());
  };

  const handleChangeSize = (event) => {
    updatedItemSize(cartItem, event.target.value);
  };

  return (
    <li>
      <div className="info-container">
        <div className="lines">
          <Link to={`/item-details/${item.id}`}>
            <img src={item.pictures[0]} alt="item" className="image" />
          </Link>
        </div>
        <div className="item-details">
          <div>Name: {item.name}</div>
          <div className="item-infos-in-cart">Type: {item.type}</div>
          <div className="item-infos-in-cart">Color: {item.color}</div>
          <div className="item-infos-in-cart">
            {item.premiumDelivery ? (
              <>
                <span className="plus-logo">PLUS</span>
                <span>Premium-Lieferung</span>
              </>
            ) : null}
            {/*or {item.premiumDelivery && <div>Premium-Lieferung</div>} */}
          </div>
          <div className="cart-size-container">
            <div>Size:</div>
            <select
              className="cart-size-select"
              onChange={handleChangeSize}
              value={item.size}
            >
              <option value="" disabled selected hidden>
                Bitte Größe wählen
              </option>
              {availableSizes.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
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
          <button className="bin-button" onClick={handleRemoveItem}>
            <img src={binLogo} alt="remove item" className="bin-logo" />{" "}
            <span>Entfernen</span>
          </button>
        </div>
      </div>
    </li>
  );
};
