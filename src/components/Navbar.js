import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
            <li className="navbar-brand">
                <a href="/">Clicky Game</a>
            </li>
            <li className="nav-item">
                {props.message}
            </li>
            <li className="nav-item">
                Score: {props.score} | Top Score: {props.tScore}
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
