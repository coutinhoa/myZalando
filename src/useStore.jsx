//update size with Zustand
import { useState, useEffect } from "react";
import create from "zustand";
import { useParams } from "react-router-dom";

const fetchData = (set) => {
  const params = useParams();
  const cartItem = useStore((state) => state.cartItem);

  //ratings is children of garment
  const fetchCartItem = () => {
    fetch(`http://localhost:3000/garments/${params.id}?_embed=reviews`)
      .then((response) => response.json())
      .then((response) => setCartItem(response));
  };

  useEffect(() => {
    fetchCartItem();
  }, []);

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
};
