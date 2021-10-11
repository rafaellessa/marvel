import { AuthState } from "./types.auth";
import { CharacterState } from "./types.characters";
import { ImmutableObject } from "seamless-immutable";

export enum AppReducers {
  root = "value",
  characters = "characters",
  auth = "auth",
}

export interface AppState {
  [AppReducers.characters]: CharacterState;
  [AppReducers.auth]: AuthState;
}

export interface AppStateRoot {
  [AppReducers.root]: ImmutableObject<AppState>;
}
