import { all } from "@redux-saga/core/effects";
import { Reducer } from "react";
import { combineReducers } from "redux";
import { reducer as reducerCharacters } from "./reducers/reducers.characters";
import { reducer as reducerAuth } from "./reducers/reducers.auth";
import { AppReducers } from "./types/types.redux";
import sagasCharacters from "./sagas/sagas.characters";
import sagasAuth from "./sagas/sagas.auth";

const rootReducers = combineReducers({
  [AppReducers.characters]: reducerCharacters,
  [AppReducers.auth]: reducerAuth,
});

export const rootSagas = function* rootSagas(): Generator {
  return yield all([sagasCharacters(), sagasAuth()]);
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
