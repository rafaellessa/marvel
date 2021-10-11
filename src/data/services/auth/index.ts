import Api from "../../datasource/api";
import * as AuthSession from "expo-auth-session";
import { AuthorizationResponse } from "./types";

import {
  GOOGLE_OAUTH_REDIRECT_URL,
  GOOGLE_OAUTH_URL,
  ID_GOOGLE_OAUTH,
  GOOGLE_OAUTH_USER_INFORMATION_URL,
} from "@env";

const authService = {
  async getUserInformationGoogle(accessToken: string) {
    const instance = Api.getApiInstance(
      `${GOOGLE_OAUTH_USER_INFORMATION_URL}${accessToken}`
    );
    const response = await instance.request({
      method: "GET",
    });

    return response.data;
  },
  async loginWithGoogle() {
    try {
      const clientId = ID_GOOGLE_OAUTH;
      const redirectUri = GOOGLE_OAUTH_REDIRECT_URL;
      const responseType = "token";
      const scope = encodeURI("profile email");
      const authUrl = `${GOOGLE_OAUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      return {
        type,
        params,
      };
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default authService;
