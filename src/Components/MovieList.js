import React from "react";
import MovieCard from "./MovieCard";
import loader from "./WithLoading";

const MovieList = ({ moviesList }) => {
  return (
    <div className="MovieList">
      {moviesList.map((movie, i) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default loader(MovieList);
