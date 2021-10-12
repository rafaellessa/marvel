import { Comics } from "./../../../redux/types/types.comics";
import { Character } from "../../../redux/types/types.characters";
import { CharacterApiReturn, ComicsResponseApi } from "./types";
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

export const factoryComics = (data: ComicsResponseApi): Comics[] => {
  const parsedComics: Comics[] = data.results.map((comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description,
      thumbnail: comic.thumbnail.path + "." + comic.thumbnail.extension,
    };
  });

  return parsedComics;
};
