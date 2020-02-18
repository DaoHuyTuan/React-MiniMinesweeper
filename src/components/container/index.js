import React from "react";
import "./style.scss";
function Container({ clssName, children }) {
  const classNames = clssName ? clssName : "";
  return <div className={"container " + classNames}>{children}</div>;
}
export default Container;
