import { all } from "@redux-saga/core/effects";
import { Reducer } from "react";
import { combineReducers } from "redux";
import { reducer as reducerCharacters } from "./reducers/reducers.characters";
import { AppReducers } from "./types/types.redux";
import sagasCharacters from "./sagas/sagas.characters";

const rootReducers = combineReducers({
  [AppReducers.characters]: reducerCharacters,
});

export const rootSagas = function* rootSagas(): Generator {
  return yield all([sagasCharacters()]);
};

interface AppRedux {
  saga: () => void;
  reducer: Reducer<any, any>;
}

const redux: AppRedux = {
  saga: rootSagas,
  reducer: rootReducers,
};

export default redux;
