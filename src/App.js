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

  const moreItems = () => {
    const clothingAvailable = [
      {
        type: "pants",
        name: " Palazzo",
        picture:
          "https://img01.ztat.net/article/spp-media-p1/21b967f22eb244c3a74aeb637641e4f3/b349ab8211b942b0915f3a985626b7f3.jpg?imwidth=1800&filter=packshot",
        price: 19.63,
        color: "strips",
        quantity: 1,
        premiumDelivery: false,
      },
      {
        name: "Idalia",
        type: "Handbag",
        picture:
          "https://img01.ztat.net/article/spp-media-p1/d55d46c9880d401d9b865d9ef9def409/1fff129d7d404f468b87f94f869c9b1c.jpg?imwidth=1800&filter=packshot",
        price: 53.5,
        color: "camel",
        quantity: "1",
        premiumDelivery: true,
      },
      {
        name: "Dry",
        type: "t-shirt",
        picture:
          "https://img01.ztat.net/article/spp-media-p1/001b3f8d93374b0291e4c4317a241148/b74686b96aa04a0cbfe356dd9549bcbf.jpg?imwidth=1800&filter=packshot",
        price: 13.56,
        color: "white",
        quantity: 1,
        premiumDelivery: true,
      },
    ];

    const randomClothes =
      clothingAvailable[Math.floor(Math.random() * clothingAvailable.length)];

    fetch(`http://localhost:3000/clothes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(randomClothes),
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
          addNewItem={moreItems}
        />
        <PriceInfo items={shoppingCart} />
      </div>
    </div>
  );
}

export default App;
