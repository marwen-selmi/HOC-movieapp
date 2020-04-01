import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { moviesData } from "./Components/data";

import SearchMovies from "./Components/SearchMovies";
import MovieList from "./Components/MovieList";
import Addmovie from "./Components/AddMovie";
// import LoadingSpinner from "./Components/LoadingSpinner";

class App extends React.Component {
  state = {
    search: "",
    minRating: 1,
    moviesList: moviesData,
    isLoading: false
  };

  handleSearch = valeur => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({ search: valeur, isLoading: true });
  };

  searchStar = x => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({
      minRating: x,
      isLoading: true
    });
  };
  addMovie = newmovie => {
    this.setState({
      moviesList: this.state.moviesList.concat(newmovie)
    });
  };

  render() {
    return (
      <div>
        <SearchMovies
          handleSearch={this.handleSearch}
          rate={this.state.minRating}
          searchStar={this.searchStar}
        />
        <MovieList
          moviesList={this.state.moviesList.filter(
            (movie, i) =>
              movie.title
                .toLocaleLowerCase()
                .includes(this.state.search.toLocaleLowerCase().trim()) &&
              movie.rate >= this.state.minRating
          )}
          isLoading={this.state.isLoading}
        />
        <Addmovie addMovie={this.addMovie} />
        {/* <LoadingSpinner /> */}
      </div>
    );
  }
}

export default App;
