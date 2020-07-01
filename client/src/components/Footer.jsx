//jshint esversion:6

import React from "react";
let date = new Date();
let year = date.getFullYear();
function footer() {
  return (<footer>
    <p>Copyrightⓒ Udayan Agrawal@{year}</p>
  </footer>);
}

export default footer;
