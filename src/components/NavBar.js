import React from "react";

function NavBar({ color, title }) {
  const colors = {
    black: "navbar-inverse",
  };

  return (
    <nav className={`navbar ${colors[color]}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{title}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
