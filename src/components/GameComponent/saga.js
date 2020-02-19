import { takeLatest, put } from "redux-saga/effects";
import { GET_MINES_ADVANTAGE_LEVEL, GET_MINES_BEGINER_LEVEL } from "./constants";

function* getMinesListSaga(action) {
    try {
        yield console.log("hello")
    } catch(err) {
        console.log(err)
    }
}
export function* watchListMines() {
    yield takeLatest(GET_MINES_BEGINER_LEVEL, getMinesListSaga);
    yield takeLatest(GET_MINES_ADVANTAGE_LEVEL, getMinesListSaga);
  }