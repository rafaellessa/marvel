import { Character } from "../../../redux/types/types.characters";
import { CharacterApiReturn } from "./types";
export const factoryCharacter = (data: CharacterApiReturn): Character[] => {
  const parsedCharacter: Character[] = data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      comicCollection: character.comics.collectionURI,
      thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
    };
  });

  return parsedCharacter;
};
