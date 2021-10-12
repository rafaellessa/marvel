import { Comics } from "../../../redux/types/types.comics";
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

export interface ComicsResponseApi {
  results: ComicsApi[];
}

interface ComicsApi {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ComicsFactoryResponse {
  status: "success" | "error";
  data: Comics[];
  error?: string | null;
}
