import React from "react";

const Display = ({ iterate, current, makeEdit, changeHandle, addIngredStep, save, makeCurrent }) => {

  const heading = <h3 onClick={() => makeEdit(current.type)}>{current.name || "blank"}</h3>
  const edit = <input
    defaultValue={current.name}
    onBlur={e => changeHandle(e, current.type)}
  ></input>
  const show = current.editing === true ? edit : heading;
  return (
    <div className="display">
      <div className="recheader">
        {show}
      </div>
      <div className="recbody">
        <p>Ingredients</p>
        <ul>{iterate(current.ingredients)}</ul>
        <button className="addbtn" onClick={() => addIngredStep(2)} >+ Add Ingredient</button>

        <p>Steps</p>
        <ul>{iterate(current.steps)}</ul>
        <button className="addbtn" onClick={() => addIngredStep(3)}>+ Add Step</button>
      </div>
      <button className="savebtn" onClick={save}>Save</button>
      <button className="discardbtn" onClick={() => makeCurrent(-1, "recipes")}>Discard</button>
    </div>
  );
}

//proptypes

export default Display;
