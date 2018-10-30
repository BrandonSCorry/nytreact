import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      NYT React Search
    </a>
    <a     style={{ position: "absolute", color: "antiquewhite", right: "5rem" }}
           className="navbar-link" href="/saved">Saved Articles</a>
  </nav>
);

export default Nav;
