import { CharacterState } from "./types.characters";
import { ImmutableObject } from "seamless-immutable";

export enum AppReducers {
  root = "value",
  characters = "characters",
}

export interface AppState {
  [AppReducers.characters]: CharacterState;
}

export interface AppStateRoot {
  [AppReducers.root]: ImmutableObject<AppState>;
}
