import React, {useState, useContext} from "react";
import styles from "./styles.css";
import {InputGroup, FormControl} from "react-bootstrap";
import {MyContext} from "../../context";
import axios from "axios";

function Jumbotron() {
  const {posts, setPosts} = useContext(MyContext);
  const [searchInput, setsearchInput] = useState("");

  function handleSearch() {
    console.log(searchInput);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({data}) => setPosts(data.meals));
  }
  return (
    <div className="jumbotron">
      <h1>Meals</h1>
      <h4>Search your favorite meals</h4>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Seach for a meal"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          ></FormControl>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSearch}
          >
            Search
          </button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Jumbotron;
