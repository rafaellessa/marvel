import { RequestGetAllCharactersParams } from "./../../../redux/types/types.characters";
import { factoryCharacter } from "./factory";
import Api from "../../datasource/api";
import action from "./action";

const CharacterService = {
  async getCharacters({ limit, offset, name }: RequestGetAllCharactersParams) {
    const instance = Api.getApiInstance(action.getCharacters);
    const response = await instance.request({
      method: "GET",
      params: {
        offset,
        limit,
        name,
      },
    });

    return factoryCharacter(response.data.data);
  },
};

export default CharacterService;
