import React from "react";
import "./style.scss";

function Button({ clssName, handleClick, label }) {
  const classNames = clssName ? clssName : "";
  const labels = label ? label : "";
  return (
    <button
      className={"btn " + classNames}
      onClick={handleClick}
      data-testid="button"
    >
      {labels}
    </button>
  );
}
export default Button;
