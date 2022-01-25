import React, {useState, useContext} from "react";
import styles from "./styles.css";
import {InputGroup, FormControl} from "react-bootstrap";
import {MyContext} from "../../context";
import Error from "../../pages/404/404";
import axios from "axios";

function Jumbotron() {
  const {setPosts} = useContext(MyContext);
  const [searchInput, setsearchInput] = useState("");
  const [found, setFound] = useState(true);

  function handleChange(e) {
    setsearchInput(e.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  function handleSearch() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
      .then(({data}) => setPosts(data.meals))
      .catch((e) => {
        console.log("jwehfhejfhg");
        setFound(false);
      });
  }

  // if (!found) {
  //   return (
  //     <div>
  //       <Error />
  //     </div>
  //   );
  // } else {
  return (
    <div className="jumbotron">
      <h1 style={{fontSize: "4rem"}}>Meals</h1>
      <h6 style={{fontSize: "1.5rem"}}>Search your favorite meals</h6>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for cuisine or a dish"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-button"
            value={searchInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
  // }
}

export default Jumbotron;
