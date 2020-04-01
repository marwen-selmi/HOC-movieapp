import React from "react";
import Rating from "./Rating";

function SearchMovie({ handleSearch, rate, searchStar }) {
  return (
    <div className="Search-Movie">
      <input
        type="text"
        placeholder="Search"
        onChange={e => {
          handleSearch(e.target.value);
        }}
      />
      <Rating rate={rate} searchStar={searchStar} />
    </div>
  );
}

export default SearchMovie;
