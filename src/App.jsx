import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./App.css";
import Login from "./Login/Login";

//with this refractor the info is accessible to both siblings

export const App = () => {
  const [items, setItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setFilteredItems(response); //the filtered items are also the initial items
      });
  }, []);

  const updateQuantity = (item, quantity) => {
    const newQuantity = {
      ...item,
      quantity: quantity,
    };

    const updatedCart = shoppingCart.map((prevElement) => {
      return prevElement === item ? newQuantity : prevElement;
    });

    setShoppingCart(updatedCart);
  };

  const addToCart = (item) => {
    const hasItem = shoppingCart.find((i) => i.id === item.id);
    console.log(hasItem);
    if (hasItem) {
      //console.log("will update the item");
      //console.log("new quantity " + parseInt(item.quantity + 1));
      updateQuantity(item, parseInt(item.quantity) + 1);
    } else {
      //console.log("will add the item");
      let cart = [...shoppingCart];
      cart.push(item);
      setShoppingCart(cart);
    }
  };

  const filterByIdentity = (identity) => {
    const newItems = items.filter((element) => element.identity === identity);
    setFilteredItems(newItems);
  };

  const handleSearchSubmit = (specification) => {
    const searchedItems = items.filter(
      (element) =>
        element.color === specification || element.name === specification
    );
    setFilteredItems(searchedItems);
  };

  // set up cart so it has all the elements zou want, set Shopping Cart as the fullz readz cart, setState only updates when the next render is executed
  // if itemAdded starts at false, whats the value of added, setItemAdded(true); const added = itemAdded; //its false until the next render, so onlz after we leave the current function does the value get updated

  const removeItem = (item) => {
    const deleteItem = shoppingCart.filter((i) => i !== item);
    setShoppingCart(deleteItem);
  };

  return (
    <>
      <header className="header-one">
        <p>Hilfe und Kontakt</p> <p>KOSTENLOSER VERSAND UND RÜCKVERSAND</p>
        <p>100 TAGE RÜCKGABERECHT</p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addToCart={addToCart}
                shoppingCart={shoppingCart}
                filterByIdentity={filterByIdentity}
                handleSearchSubmit={handleSearchSubmit}
                filteredItems={filteredItems}
              />
            }
          />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                shoppingCart={shoppingCart}
                updateQuantity={updateQuantity}
                removeItemFromList={removeItem}
              />
            }
          />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
