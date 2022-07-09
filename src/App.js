import zalandoLogo from "./images/Zalando_logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Cart } from "./Cart/Cart";
import { PriceInfo } from "./PriceInfo/PriceInfo";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  //GET
  const fetchClothes = () => {
    fetch("http://localhost:3000/clothes")
      .then((data) => data.json())
      .then((data) => setShoppingCart(data));
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  // PATCH
  const updatedQuantity = (item, quantity) => {
    const itemUpdated = {
      quantity: quantity,
    };

    fetch(`http://localhost:3000/clothes/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(itemUpdated),
    }).then(() => fetchClothes());
  };

  const removeItem = (item) => {
    fetch(`http://localhost:3000/clothes/${item.id}`, {
      method: "DELETE",
    }).then(fetchClothes);
  };

  return (
    <div className="App">
      <header>
        <img src={zalandoLogo} className="App-logo" alt="logo" />
      </header>
      <div className="separate-page">
        <Cart
          items={shoppingCart}
          updateItemQuantity={updatedQuantity}
          removeSelectedItem={removeItem}
        />
        <PriceInfo items={shoppingCart} />
      </div>
    </div>
  );
}

export default App;
