import React, { useEffect, useState } from "react";
import { FEATURED_API, SEARCHED_API } from "../apis/movies";
import Movie from "./Movie";
import NavBar from "./NavBar";

import "./app.css";
import Pagination from "./Pagination";

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movieArr, setMovieArr] = useState([]);
  const [page, setPage] = useState(1);

  const searchMovie = (name) => {
    setSearchedMovie(name);
  };

  const newPage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (!searchedMovie)
      return fetch(`${FEATURED_API}${page}`)
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
  }, [searchedMovie, page]);

  return (
    <div className="app">
      <NavBar searchMovie={searchMovie} />

      <div className="movie-list">
        <Movie movieArr={movieArr} />
      </div>

      {searchedMovie !== "" ? null : (
        <Pagination page={page} newPage={newPage} />
      )}
    </div>
  );
}

export default App;
