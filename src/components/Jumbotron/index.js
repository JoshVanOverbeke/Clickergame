import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron bg-warning">
      <h1 className="display-4 pt-3 text-center">Clicker Game!</h1>
      <hr className="my-4"></hr>
      <h3 className="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
    </div>
  );
}

export default Jumbotron;
