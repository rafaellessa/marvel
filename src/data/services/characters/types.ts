import { ComicsCollectionReturnApi } from "./../comics/types";
export interface CharacterApiReturn {
  results: CharacterApi[];
}

interface CharacterApi {
  id: number;
  name: string;
  description: string;
  thumbnail: CharacterThumbnail;
  comics: ComicsCollectionReturnApi;
}

interface CharacterThumbnail {
  path: string;
  extension: string;
}
