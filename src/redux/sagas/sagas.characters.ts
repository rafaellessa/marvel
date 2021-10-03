import {
  CharacterAction,
  CharacterTypes,
} from "./../reducers/reducers.characters";
import {
  Character,
  RequestGetAllCharacters,
} from "./../types/types.characters";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CharacterService from "../../data/services/characters";

function* getAllCharacters({ data }: RequestGetAllCharacters) {
  try {
    const offset = data.offset;

    if (offset) {
    }
    const response: Character[] = yield call(CharacterService.getCharacters);
    yield put(CharacterAction.successGetAllCharacters(response));
  } catch (error) {
    yield put(CharacterAction.failureGetAllCharacters(String(error.message)));
  }
}

export default function* root() {
  yield takeLatest(CharacterTypes.REQUEST_GET_ALL_CHARACTERS, getAllCharacters);
}
