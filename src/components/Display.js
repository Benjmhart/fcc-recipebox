import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";

const Display = ({
  iterate,
  current,
  makeEdit,
  changeHandle,
  addIngredStep,
  save,
  makeCurrent
}) => {
  const heading = (
    <h3 onClick={() => makeEdit(current.type)}>{current.name || "blank"}</h3>
  );
  const edit = (
    <input
      defaultValue={current.name}
      onBlur={e => changeHandle(e, current.type)}
    />
  );
  const show = current.editing === true ? edit : heading;
  return (
    <ReactCSSTransitionGroup
      component="div"
      className="display"
      transitionName="display"
      transitionEnterTimeout={1500}
      transitionLeaveTimeout={1500}
    >
      <div key={current.name}>
        <div className="recheader">{show}</div>
        <div className="recbody">
          <p>Ingredients</p>
          <ul>{iterate(current.ingredients)}</ul>
          <button className="addbtn" onClick={() => addIngredStep(2)}>
            + Add Ingredient
          </button>
          <p>Steps</p>
          <ul>{iterate(current.steps)}</ul>
          <button className="addbtn" onClick={() => addIngredStep(3)}>
            + Add Step
          </button>
        </div>
        <button className="savebtn" onClick={save}>
          Save
        </button>
        <button
          className="discardbtn"
          onClick={() => makeCurrent(-1, "recipes")}
        >
          Discard
        </button>
      </div>
    </ReactCSSTransitionGroup>
  );
};

// proptypes
Display.propTypes = {
  iterate: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  makeEdit: PropTypes.func.isRequired,
  changeHandle: PropTypes.func.isRequired,
  addIngredStep: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  makeCurrent: PropTypes.func.isRequired
};
export default Display;
