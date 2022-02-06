import React, {useState, useContext} from "react";
import styles from "./styles.css";
import {MyContext} from "../../context";
import Error from "../../pages/404/404";
import axios from "axios";
import {SearchIcon} from "@chakra-ui/icons";
import {
  InputGroup,
  FormControl,
  Input,
  IconButton,
  background,
} from "@chakra-ui/react";
import image from "../../images/jumbotron.jpg";
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
      .then(({data}) => {
        setPosts(data.meals);
        if (!found) setFound(true);
        if (data.meals === null) {
          setFound(false);
        }
      });
  }

  if (!found) {
    return (
      <>
        <div
          className="jumbotron"
          style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}
        >
          <h1 style={{fontSize: "4rem"}}>Recipe Bae</h1>
          <h6 style={{fontSize: "1rem"}}>Search your favorite meals</h6>
          <div className="button-input">
            <FormControl>
              <InputGroup size="sm">
                <Input
                  placeholder="Search for cuisine or a dish"
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  id={searchInput}
                  type="search-input"
                />
                <IconButton
                  colorScheme="red"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  onClick={handleSearch}
                />
              </InputGroup>
            </FormControl>
          </div>
        </div>
        <div className="error">
          <Error />
        </div>
      </>
    );
  } else {
    return (
      <div
        className="jumbotron"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <h1 style={{fontSize: "4rem"}}>RecipeBae</h1>
        <h6 style={{fontSize: "2rem"}}>Search your favorite cuisines</h6>
        <div className="button-input">
          <FormControl>
            <InputGroup size="sm">
              <Input
                placeholder="Search for cuisine or a dish"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                id={searchInput}
                type="search-input"
              />
              <IconButton
                colorScheme="red"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </InputGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
