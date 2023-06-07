import React, { useState } from "react";
import styles from "./SearchBar.module.css";



const SearchBar = ({ searchRecipe }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    searchRecipe(term);
  };


  return (
    <div className={styles.SearchBar}>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Recipe" onChange={handleTermChange} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
