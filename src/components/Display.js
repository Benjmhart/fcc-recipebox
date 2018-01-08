import React from "react";

const Display = ({ iterate, current }) => (
  <div className="display">
    <div className="recheader">
      <h3>{current.name || "blank"}</h3>
    </div>
    <div className="recbody">
      <p>Ingredients</p>
      <ul>{iterate(current.ingredients)}</ul>
      <button className="addbtn">+ Add Ingredient</button>

      <p>Steps</p>
      <ul>{iterate(current.steps)}</ul>
      <button className="addbtn">+ Add Step</button>
    </div>
    <button className="savebtn">Save</button>
    <button className="discardbtn">Discard</button>
  </div>
);

//proptypes

export default Display;
