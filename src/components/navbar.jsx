import React, { Component } from "react";

/* Stateless Functional Component: class with no state and no eventHandler, just a render()
 - shortcut: sfc
 - pass in props as argument as it's not a class so no this.
 - no lifecycle hooks in sfc
 
 - used object destructuring for props.totalCounters
 */

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
