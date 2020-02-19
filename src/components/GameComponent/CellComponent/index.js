import React from "react";
import "./style.scss";
function CellComponent({cellID, handleClick}) {
    const cell_id = cellID;
    return (
        <div className="cell" id={cell_id} onClick={handleClick}></div>
    )
}
export default CellComponent;