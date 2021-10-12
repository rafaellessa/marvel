import Immutable from "seamless-immutable";
import {
  AuthActionTypes,
  AuthState,
  CreatorTypes,
  ReducerTypes,
  User,
} from "./../types/types.auth";
import { createActions, createReducer } from "reduxsauce";
import { AppReducers } from "../types/types.redux";

const { Types, Creators } = createActions<AuthActionTypes, CreatorTypes>(
  {
    requestLogin: ["option"],
    requestSuccessLogin: ["user"],
    requestFailureLogin: ["error"],
    requestUpdateUserInformation: ["token"],
    requestSuccessUpdateUserInformation: ["user"],
    requestFailureUpdateUserInformation: ["error"],
    reset: [""],
  },
  {
    prefix: `${AppReducers.root}/${AppReducers.auth}/`,
  }
);

const INITIAL_STATE: AuthState = Immutable({
  user: {} as User,
  loading: false,
  error: null,
});

export const reducer = createReducer<AuthState, ReducerTypes>(INITIAL_STATE, {
  [Types.REQUEST_LOGIN]: (state) => {
    return state.merge({
      loading: true,
      error: null,
    });
  },
  [Types.REQUEST_SUCCESS_LOGIN]: (state, action) => {
    return state.merge({
      loading: false,
      user: action.user,
      error: null,
    });
  },
  [Types.REQUEST_FAILURE_LOGIN]: (state, action) => {
    return state.merge({
      loading: false,
      error: action.error,
    });
  },
  [Types.REQUEST_UPDATE_USER_INFORMATION]: (state) => {
    return state.merge({
      loading: true,
      error: null,
    });
  },
  [Types.REQUEST_SUCCESS_UPDATE_USER_INFORMATION]: (state, action) => {
    return state.merge({
      loading: false,
      user: action.user,
      error: null,
    });
  },
  [Types.REQUEST_FAILURE_UPDATE_USER_INFORMATION]: (state, action) => {
    return state.merge({
      loading: false,
      error: action.error,
    });
  },
  [Types.RESET]: () => INITIAL_STATE,
});

export const AuthAction = Creators;
export const AuthTypes = Types;
