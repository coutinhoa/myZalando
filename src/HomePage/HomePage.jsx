import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Body } from "../HomePage/Body/Body";
import { Header } from "./Header/Header";
import { Link } from "react-router-dom";
import zalando from "../images/Zalando.png";
import { useSearchParams } from "react-router-dom";

const HomePage = ({ shoppingCart, filterByIdentity, handleSearchSubmit }) => {
  const [items, setItems] = useState([]); //this is the original collection
  const [counter, setCounter] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredItems, setFilteredItems] = useState([]); //the filteredItems is the collection the undelying componenst are gonna see

  //Insomnia example: http://127.0.0.1:8000/api/garments/1/reviews

  //clothes.json is running on Resources  http://localhost:3000/reviews and http://localhost:3000/garments
  //fetch("http://localhost:3000/garments")
  //fastAPI it's running on http://127.0.0.1:8000/api/garments
  //alchemy is the orm that maps database stuff
  const fetchClothes = (pageNumber = 0, pageSize = 9) => {
    //python: fetch("http://localhost:8000/api/garments")
    fetch(
      `http://localhost:5555/api/garments?page=${pageNumber}&pagesize=${pageSize}`
      //"http://localhost:5555/api/garments"
    )
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setFilteredItems(response); //the filtered items are also the initial items
      })
      .then(setSearchParams({ page: pageNumber, pagesize: pageSize }));
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  const movePreviousPage = () => {
    console.log("you clicked previous");
    const previousPage = counter - 1;
    fetchClothes(previousPage);
    setCounter(previousPage);
  };

  const moveNextPage = () => {
    console.log("you clicked next");
    const nextPage = counter + 1;
    fetchClothes(nextPage);
    setCounter(nextPage);
  };

  return (
    <div className="home-page" id="home">
      <Header
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Body
        filteredItems={filteredItems}
        shoppingCart={shoppingCart}
        filterByIdentity={filterByIdentity}
      />
      <div className="previous-next-page">
        {
          <button className="moving-pages" onClick={movePreviousPage}>
            <i className="bi bi-chevron-double-left">Previous Page</i>
          </button>
        }
        <button className="moving-pages" onClick={moveNextPage}>
          Next Page<i className="bi bi-chevron-double-right"></i>
        </button>
      </div>
      <footer className="footer-container">
        <ul className="footer">
          <li>Datenschutz</li>
          <li>Nutzungsbedingungen</li>
          <li>Impressum</li>
        </ul>
        <div className="logo-container">
          <Link to={`/`}>
            <img src={zalando} className="logo-triangle" alt="zal-logo" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
