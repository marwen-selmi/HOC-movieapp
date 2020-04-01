import React from "react";

function Rating({ rate, searchStar = () => {} }) {
  const stars = x => {
    const star = [];
    for (let i = 0; i <= 4; i++) {
      if (i < x) {
        star.push(
          <i
            className="fas fa-star gold"
            key={Math.random()}
            onClick={() => searchStar(i + 1)}
          ></i>
        );
      } else {
        star.push(
          <i
            className="fas fa-star "
            key={Math.random()}
            onClick={() => searchStar(i + 1)}
          ></i>
        );
      }
    }
    return star;
  };
  return <div>{stars(rate)}</div>;
}

export default Rating;

// <i className="fas fa-star gold"></i>
// <i className="fas fa-star "></i>
