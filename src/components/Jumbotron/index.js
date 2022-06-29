import React, {useState, useContext, lazy} from "react";
import styles from "./styles.css";
import {MyContext} from "../../context";
import axios from "axios";
import {SearchIcon} from "@chakra-ui/icons";
import {InputGroup, FormControl, Input, IconButton,Alert,AlertIcon,AlertDescription,AlertTitle} from "@chakra-ui/react";
import Image from "../../images/jumbotron.webp";
import Img from "react-cloudinary-lazy-image";
import Error from "../../pages/404/404";

function Jumbotron() {
  const {setPosts} = useContext(MyContext);
  const [searchInput, setsearchInput] = useState("");
  const [found, setFound] = useState(true);

  // Handle the search Input
  function handleChange(e) {
    setsearchInput(e.target.value);
  }

  // Perform the search when "ENTER" key is pressed
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // function to handle the search
  
  async function handleSearch() {
    await axios
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

  // Searched meal is not found
  
  if (!found) {
    return (
      <>
        <div
          className="jumbotron"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(${Image})`,
            backgroundSize: "cover",
          }}
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
                  className="icon-button"
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
  } 
  
  // searched meal is found
  
  else {
    return (
      <div
        className="jumbotron"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(${Image})`,
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
                className="icon-button"
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
