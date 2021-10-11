import { Character } from "../types/types.characters";
import { AppReducers, AppState } from "../types/types.redux";

export const getCharacters = (state: AppState): Character[] => {
  return state[AppReducers.characters].characters.asMutable({
    deep: true,
  });
};

export const getCharactersMetadata = (
  state: AppState
): {
  loading: boolean;
  error: null | string;
} => {
  return {
    loading: state[AppReducers.characters].loading,
    error: state[AppReducers.characters].error,
  };
};
