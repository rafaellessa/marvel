import { BASE_URL, API_PRIVATE_KEY, API_PUBLIC_KEY } from "@env";
import MD5 from "crypto-js/md5";

const getBaseUrl = () => {
  return BASE_URL;
};

const getApiKey = () => API_PUBLIC_KEY;

const getHash = () => {
  return MD5(getMyPersonalHash() + API_PRIVATE_KEY + API_PUBLIC_KEY);
};

const getMyPersonalHash = () => new Date().getUTCDay();

const getFullPathUrl = () =>
  `?apikey=${getApiKey()}&hash=${getHash()}&ts=${getMyPersonalHash()}`;

export { getBaseUrl, getApiKey, getHash, getMyPersonalHash, getFullPathUrl };
