import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import {
  CharacterActionTypes,
  CreatorTypes,
  ReducerTypes,
  CharacterState,
} from "../types/types.characters";
import { AppReducers } from "../types/types.redux";

const { Types, Creators } = createActions<CharacterActionTypes, CreatorTypes>(
  {
    requestGetAllCharacters: ["data"],
    successGetAllCharacters: ["characters"],
    failureGetAllCharacters: ["error"],
    reset: null,
  },
  {
    prefix: `${AppReducers.root}/${AppReducers.characters}`,
  }
);

const INITIAL_STATE: CharacterState = Immutable({
  characters: [],
  loading: false,
  error: null,
});

export const reducer = createReducer<CharacterState, ReducerTypes>(
  INITIAL_STATE,
  {
    [Types.REQUEST_GET_ALL_CHARACTERS]: (state) => {
      return state.merge({
        loading: true,
        error: null,
      });
    },
    [Types.SUCCESS_GET_ALL_CHARACTERS]: (state, action) => {
      return state.merge({
        loading: false,
        characters: action.characters,
        error: null,
      });
    },
    [Types.FAILURE_GET_ALL_CHARACTERS]: (state, action) => {
      return state.merge({
        loading: false,
        error: action.error,
      });
    },
    [Types.RESET]: () => INITIAL_STATE,
  }
);

export const CharacterAction = Creators;
export const CharacterTypes = Types;
