export interface CharacterApiReturn {
  results: CharacterApi[];
}

interface CharacterApi {
  id: number;
  name: string;
  description: string;
  thumbnail: CharacterThumbnail;
}

interface CharacterThumbnail {
  path: string;
  extension: string;
}
