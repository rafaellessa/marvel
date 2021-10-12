import { Action } from "redux";
import { ImmutableObject } from "seamless-immutable";
import { Comics } from "./types.comics";

export interface Character {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  comicCollection: string;
  comics?: Comics[];
}

export interface CharacterActionTypes {
  REQUEST_GET_ALL_CHARACTERS: string;
  SUCCESS_GET_ALL_CHARACTERS: string;
  FAILURE_GET_ALL_CHARACTERS: string;
  RESET: string;
}

export interface State {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export type CharacterState = ImmutableObject<State>;

export interface RequestGetAllCharactersParams {
  offset?: number;
  limit?: number;
  name?: string;
}

export interface RequestGetAllCharacters extends Action<CharacterActionTypes> {
  data: RequestGetAllCharactersParams;
}

export interface SuccessGetAllCharacters extends Action<CharacterActionTypes> {
  characters: Character[];
}

export interface FailureGetAllCharacters extends Action<CharacterActionTypes> {
  error: string | null;
}

export interface CreatorTypes {
  requestGetAllCharacters(
    data?: RequestGetAllCharactersParams
  ): RequestGetAllCharacters;
  successGetAllCharacters(characters: Character[]): SuccessGetAllCharacters;
  failureGetAllCharacters(error?: string | null): FailureGetAllCharacters;
}

export type ReducerTypes = RequestGetAllCharacters &
  SuccessGetAllCharacters &
  FailureGetAllCharacters;
