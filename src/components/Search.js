import React, { useState } from "react";
import "./style.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  //   const [result, setResult] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${searchValue}`
      );
      const data = await response.json();
      props.handleData(data, searchValue);
      console.log(data, "daataa");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          placeholder="search by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="search" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
//how to fetch api ?
