import React from "react";

const Iterator = ({ prop, index, parent, makeCurrent, makeEdit, changeHandle, remover }) => {
  console.log(index, parent);
  let show;
  const recipe = <span name="ingredName" onClick={() => makeCurrent(index, parent)}>
    {prop.name}
  </span>
  const ingredStep = <span name="ingredName" onClick={() => makeEdit(prop.type, index)}>
    {prop.name}
  </span>
  const edit = <input
    defaultValue={prop.name}
    onBlur={e => changeHandle(e, prop.type, index)}
  ></input>
  if (parent === "recipes") {
    show = recipe;
  }
  else {
    show = prop.editing === true ? edit : ingredStep;
  }

  return (
    <li key={index}>
      {show}
      <button className="rembtn" onClick={() => remover(prop.type, index)}>-</button>
    </li>
  );
};

//proptypes
export default Iterator;
