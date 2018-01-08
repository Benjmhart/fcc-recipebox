import React from "react";

const Iterator = ({ prop }) => (
  <li>
    {prop.name} <button className="rembtn">-</button>
  </li>
);

//proptypes
export default Iterator;
