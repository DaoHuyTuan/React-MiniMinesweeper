import { all } from "redux-saga/effects";
import { watchListMines } from "../components/GameComponent/saga";
export default function* rootSaga() {
  yield all([
    watchListMines()
  ]);
}
