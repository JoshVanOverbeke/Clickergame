import React from "react";
// import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand pl-4" href="/"><h2>Clicky Game</h2></a>
        <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav navbar-nav">
                    <h3>{props.message}</h3>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav navbar-nav navbar-right">
                    <h4>Score: {props.score} | Top Score: {props.tScore}</h4>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
