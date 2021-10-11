import { getBaseUrl, getFullPathUrl } from "../../helpers/api";

const action = {
  getCharacters: `${getBaseUrl()}/characters${getFullPathUrl()}`,
};

export default action;
