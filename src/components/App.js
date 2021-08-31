import React, { useEffect, useState } from "react";
import { FEATURED_API, SEARCHED_API } from "../apis/movies";
import Movie from "./Movie";
import NavBar from "./NavBar";

import "./app.css";

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movieArr, setMovieArr] = useState([]);

  const searchMovie = (name) => {
    setSearchedMovie(name);
  };

  useEffect(() => {
    if (!searchedMovie)
      return fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setMovieArr(data.results);
        });

    fetch(`${SEARCHED_API}${searchedMovie}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovieArr(data.results);
      });
  }, [searchedMovie]);

  return (
    <div className="app">
      <NavBar searchMovie={searchMovie} />
      <div className="movie-list">
        <Movie movieArr={movieArr} />
      </div>
    </div>
  );
}

export default App;
