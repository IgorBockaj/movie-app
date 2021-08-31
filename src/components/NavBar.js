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
    </form>
  );
}

export default NavBar;
