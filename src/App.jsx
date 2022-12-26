import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./App.css";
import Login from "./Login/Login";
import ItemPage from "../src/ItemPage/ItemPage";

export const App = () => {
  const [items, setItems] = useState([]); //this is the original collection
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); //the filteredItems is the collection the undelying componenst are gonna see

  //Insomnia example: http://127.0.0.1:8000/api/garments/1/reviews

  //clothes.json is running on Resources  http://localhost:3000/reviews and http://localhost:3000/garments
  //fetch("http://localhost:3000/garments")
  //fastAPI it's running on http://127.0.0.1:8000/api/garments
  //alchemy is the orm that maps database stuff
  const fetchClothes = () => {
    //python: fetch("http://localhost:8000/api/garments")
    fetch("http://localhost:8000/api/garments")
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setFilteredItems(response); //the filtered items are also the initial items
      });
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  /**
   * Adds an item to the shopping cart.
   * If the item already exists, increments the quantity of the item by 1.
   * else adds to shopping cart.
   * @param item
   */
  const addItemToShoppingCart = (item) => {
    const cartItem = shoppingCart.find((i) => i.id === item.id);

    if (cartItem) {
      cartItem.quantity = cartItem.quantity + 1;
      const updatedCart = shoppingCart.map((i) =>
        i.id === cartItem.id ? cartItem : i
      );
      setShoppingCart(updatedCart);
    } else {
      const newShoppingCartItem = { ...item, quantity: 1 };
      setShoppingCart([...shoppingCart, newShoppingCartItem]);
    }
  };

  const updateItemQuantity = (item, event) => {
    //select a quantity and save it in the shopping cart

    item.quantity = parseInt(item.quantity + event.target.value);
    console.log(item);
    //setShoppingCart(cart);
  };

  const filterByIdentity = (identity) => {
    const newItems = items.filter((element) => element.identity === identity);
    setFilteredItems(newItems);
  };

  const handleSearchSubmit = (specification) => {
    if (specification === "") {
      console.log("i am empty");
      setFilteredItems(items);
    } else {
      const searchedItems = items.filter(
        (element) =>
          element.color.toLowerCase() === specification ||
          element.name.toLowerCase() === specification ||
          element.type.toLowerCase() === specification
      );

      setFilteredItems(searchedItems);
    }
  };

  //console.log(filteredItems);

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
                updateItemQuantity={updateItemQuantity}
                removeItemFromList={removeItem}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path={"item-details/:id"}
            element={
              <ItemPage
                shoppingCart={shoppingCart}
                filterByIdentity={filterByIdentity}
                handleSearchSubmit={handleSearchSubmit}
                addItemToShoppingCart={addItemToShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
