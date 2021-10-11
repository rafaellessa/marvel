import { User } from "../types/types.auth";
import { AppReducers, AppState } from "./../types/types.redux";
export const getUser = (state: AppState): User => {
  return state[AppReducers.auth].user.asMutable({
    deep: true,
  });
};

export const getAuthMetadata = (
  state: AppState
): { loading: boolean; error: string | null } => {
  return {
    loading: state[AppReducers.auth].loading,
    error: state[AppReducers.auth].error,
  };
};
