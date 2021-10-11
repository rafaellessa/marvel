import { Action } from "redux";
import { ImmutableObject } from "seamless-immutable";

export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

export interface AuthActionTypes {
  REQUEST_LOGIN: string;
  REQUEST_SUCCESS_LOGIN: string;
  REQUEST_FAILURE_LOGIN: string;
  REQUEST_UPDATE_USER_INFORMATION: string;
  REQUEST_SUCCESS_UPDATE_USER_INFORMATION: string;
  REQUEST_FAILURE_UPDATE_USER_INFORMATION: string;

  RESET: string;
}

export interface State {
  user: User;
  loading: boolean;
  error: string | null;
}

export type AuthState = ImmutableObject<State>;

export interface RequestLogin extends Action<AuthActionTypes> {
  option: "google" | "facebook";
}

export interface RequestSuccessLogin extends Action<AuthActionTypes> {
  user: User;
}

export interface RequestFailureLogin extends Action<AuthActionTypes> {
  error: string | null;
}

export interface RequestUpdateUserInformation extends Action<AuthActionTypes> {
  token: string;
}

export interface RequestSuccessUpdateUserInformation
  extends Action<AuthActionTypes> {
  user: User;
}

export interface RequestFailureUpdateUserInformation
  extends Action<AuthActionTypes> {
  error: string | null;
}

export interface CreatorTypes {
  requestLogin(option: "google" | "facebook"): RequestLogin;
  requestSuccessLogin(user: User): RequestSuccessLogin;
  requestFailureLogin(error: string | null): RequestFailureLogin;
  requestUpdateUserInformation(token: string): RequestUpdateUserInformation;
  requestSuccessUpdateUserInformation(user: User): RequestUpdateUserInformation;
  requestFailureUpdateUserInformation(
    error: string | null
  ): RequestUpdateUserInformation;
}

export type ReducerTypes = RequestLogin &
  RequestSuccessLogin &
  RequestFailureLogin &
  RequestUpdateUserInformation &
  RequestSuccessUpdateUserInformation &
  RequestFailureUpdateUserInformation;
