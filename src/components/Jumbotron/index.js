import React from "react";
import styles from "./styles.css";
import {InputGroup, Button, FormControl} from "react-bootstrap";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>Meals</h1>
      <h4></h4>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Seach for a meal"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-button"
          ></FormControl>
          <button type="button" class="btn btn-danger">
            Search
          </button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Jumbotron;
