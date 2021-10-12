import { getBaseUrl, getFullPathUrl } from "../../helpers/api";

const action = {
  getCharacters: `${getBaseUrl()}/characters${getFullPathUrl()}`,
  getComics: (idCharacter) =>
    `${getBaseUrl()}characters/${idCharacter}/comics${getFullPathUrl()}`,
};

export default action;
