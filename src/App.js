import React, { useState } from "react";
import "./App.scss";
import Container from "./components/container";
import Button from "./components/Button";
import { GAME_MODE_BEGIN, GAME_MODE_ADVANTAGE } from "./contants";
import GameComponent from "./components/GameComponent";

function App() {
  const [mode_game, setModeGame] = useState("");
  const onChoseMode = mode => {
    if (mode === GAME_MODE_BEGIN) {
      setModeGame(9);
    } else {
      setModeGame(16);
    }
  };

  return (
    <div className="App">
      {!mode_game ? (
        <Container clssName="home-page">
          <h1>Mini Minesweeper</h1>
          <h4>Please chose level to play!!!</h4>
          <div className="home-page__btn-group">
            <Button
              label="Beginner"
              clssName="btn-mode-game"
              handleClick={() => onChoseMode(GAME_MODE_BEGIN)}
            />
            <Button
              label="Advantage"
              clssName="btn-mode-game"
              handleClick={() => onChoseMode(GAME_MODE_ADVANTAGE)}
            />
          </div>
        </Container>
      ) : (
        <GameComponent mode={mode_game} />
      )}
    </div>
  );
}

export default App;
