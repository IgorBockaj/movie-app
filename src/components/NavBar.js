import React, { useState } from "react";
import "./navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavBar({ searchMovie }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;
    searchMovie(input);

    setInput("");
  };

  return (
    <form className="navbar">
      <div className="logo-box">
        <h3>Source:</h3>
        <img
          className="logo"
          alt="logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        />
      </div>

      <div className="input-field">
        <input
          className="navbar-form"
          type="text"
          placeholder="Enter movie name..."
          value={input}
          onChange={handleChange}
        />
        <button className="navbar-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}

export default NavBar;
