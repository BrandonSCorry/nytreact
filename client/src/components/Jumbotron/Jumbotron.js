import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
