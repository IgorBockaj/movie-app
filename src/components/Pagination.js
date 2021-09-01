import React from "react";

import "./pagination.css";

function Pagination({ newPage, page }) {
  return (
    <div className="pagination" onClick={(e) => newPage(e.target.value)}>
      <button value="1">1</button>
      <button value="2">2</button>
      <button value="3">3</button>
      <button value="4">4</button>
      <button value="5">5</button>
    </div>
  );
}

export default Pagination;
