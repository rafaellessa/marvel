import { call, put, takeLatest } from "redux-saga/effects";
import authService from "../../data/services/auth";
import { saveInSecureStore } from "../../utils/secureStorage";
import {
  AuthorizationResponse,
  UserInformationResponse,
} from "./../../data/services/auth/types";
import { AuthAction, AuthTypes } from "./../reducers/reducers.auth";
import {
  RequestLogin,
  RequestUpdateUserInformation,
} from "./../types/types.auth";

function* login({ option }: RequestLogin) {
  try {
    if (option === "google") {
      const authorization: AuthorizationResponse = yield call(
        authService.loginWithGoogle
      );

      if (authorization.type === "success") {
        yield call(
          saveInSecureStore,
          "accessToken",
          authorization.params.access_token
        );
        const userInformation: UserInformationResponse = yield call(
          authService.getUserInformationGoogle,
          authorization.params.access_token
        );

        yield put(
          AuthAction.requestSuccessLogin({
            id: userInformation.id,
            name: userInformation.name,
            email: userInformation.email,
            photo: userInformation.picture,
          })
        );
      }
    }
  } catch (error) {
    yield put(AuthAction.requestFailureLogin(error.message));
  }
}

function* updateUserInformation({ token }: RequestUpdateUserInformation) {
  try {
    const response: UserInformationResponse = yield call(
      authService.getUserInformationGoogle,
      token
    );

    yield put(
      AuthAction.requestSuccessUpdateUserInformation({
        id: response.id,
        name: response.name,
        email: response.email,
        photo: response.picture,
      })
    );
  } catch (error) {
    yield put(AuthAction.requestFailureUpdateUserInformation(error.message));
  }
}

export default function* root() {
  yield takeLatest(AuthTypes.REQUEST_LOGIN, login);
  yield takeLatest(
    AuthTypes.REQUEST_UPDATE_USER_INFORMATION,
    updateUserInformation
  );
}
