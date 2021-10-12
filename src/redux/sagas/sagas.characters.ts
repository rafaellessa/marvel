import { call, put, select, takeLatest } from "redux-saga/effects";
import CharacterService from "../../data/services/characters";
import {
  CharacterAction,
  CharacterTypes,
} from "./../reducers/reducers.characters";
import { getCharacters } from "./../selectors/selectors.characters";
import {
  Character,
  RequestGetAllCharacters,
} from "./../types/types.characters";

function* getAllCharacters({ data }: RequestGetAllCharacters) {
  try {
    const offset = data.offset;
    const limit = data.limit;
    const name = data.name;

    const response: Character[] = yield call(CharacterService.getCharacters, {
      offset,
      limit,
      name,
    });

    if (offset) {
      const previousCharacters = yield select(getCharacters);
      const newCharacters = [...previousCharacters, ...response];
      yield put(CharacterAction.successGetAllCharacters(newCharacters));
    } else {
      yield put(CharacterAction.successGetAllCharacters(response));
    }
  } catch (error) {
    yield put(CharacterAction.failureGetAllCharacters(String(error.message)));
  }
}

export default function* root() {
  yield takeLatest(CharacterTypes.REQUEST_GET_ALL_CHARACTERS, getAllCharacters);
}
