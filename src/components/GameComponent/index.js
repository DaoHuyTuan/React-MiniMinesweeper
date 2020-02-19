import React from "react";
import Container from "../container";
import CellComponent from "./CellComponent";
import { useDispatch } from "react-redux";
import { GET_MINES_ADVANTAGE_LEVEL } from "./constants/index"
import { reduxAction } from "../../stores/reduxAction";
function GameComponent({ mode }) {
  const dispatch = useDispatch();
  const clssContainer = mode > 9 ? "layout16x16" : "layout9x9";
  const onTest = () => {
    dispatch(reduxAction(GET_MINES_ADVANTAGE_LEVEL))
  }
  const renderCell = () => {
    const totalCell = mode * mode;
    const listRender = Array(totalCell).fill(<CellComponent className="cell" handleClick={onTest}/>)
    return listRender
  }
  return (
  <Container clssName="game-page">
    <div className={"cell-group " + clssContainer}>
      {renderCell()}
    </div>
    
  </Container>
  )
}
export default GameComponent;
