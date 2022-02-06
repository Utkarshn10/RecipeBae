import React, {useState, useContext, lazy} from "react";
import styles from "./styles.css";
import {MyContext} from "../../context";
import axios from "axios";
import {SearchIcon} from "@chakra-ui/icons";
import {InputGroup, FormControl, Input, IconButton} from "@chakra-ui/react";

const Image = lazy(() => import("../../images/jumbotron.webp"));
const Error = lazy(() => import("../../pages/404/404"));

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
