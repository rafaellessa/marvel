export interface ComicsCollectionReturnApi {
  collectionURI: string;
}

export interface ComicApi {
  id: number;
  digitalId: number;
  title: string;
  description?: string;
  thumbnail: ComicThumbnail;
}

interface ComicThumbnail {
  path: string;
  extension: string;
}
