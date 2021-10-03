import Api from "../../datasource/api";
import action from "./action";

const CharacterService = {
  async getCharacters() {
    const instance = Api.getApiInstance(action.getCharacters);
    const response = await instance.request({
      method: "GET",
    });

    return response.data.data.results;
  },
};

export default CharacterService;
