import React from "react";
import Rating from "./Rating";

function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <Rating rate={movie.rate} />
      <img src={movie.image} alt={movie.image} />
      <p>{movie.title} </p>
      <p> {movie.year} </p>
    </div>
  );
}

export default MovieCard;
