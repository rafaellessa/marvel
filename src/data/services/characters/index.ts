import { RequestGetAllCharactersParams } from "./../../../redux/types/types.characters";
import { factoryCharacter, factoryComics } from "./factory";
import Api from "../../datasource/api";
import action from "./action";
import { ComicsFactoryResponse } from "./types";

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
  async getComics(idCharacter: number): Promise<ComicsFactoryResponse> {
    try {
      const url = action.getComics(idCharacter);
      console.tron.log("URL: ", url);
      const instance = Api.getApiInstance(action.getComics(idCharacter));
      const response = await instance.request({
        method: "GET",
      });

      const parsedComics = factoryComics(response.data.data);
      return {
        status: "success",
        data: parsedComics,
      };
    } catch (error) {
      console.tron.log("Erro no cara: ", error.message);
      return {
        status: "error",
        data: [],
        error: error.message,
      };
    }
  },
};

export default CharacterService;
