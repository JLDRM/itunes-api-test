export type Kind =
  'book' |
  'album' |
  'coached-audio' |
  'feature-movie' |
  'interactive-booklet' |
  'music-video' |
  'pdf' |
  'podcast' |
  'podcast-episode' |
  'software-package' |
  'song' |
  'tv-episode' |
  'artist';

export interface ItuneSearchResponse {
  resultCount: number;
  results: ItunesResults[];
}

export interface ItunesResults {
  /* The name of the object returned by the search request.
  track, collection, artist
  For example: track. */
  wrapperType: string;

  /* The kind of content returned by the search request.
  book, album, coached-audio, feature-movie, interactive-booklet, music-video, pdf podcast, podcast-episode, software-package, song, tv-episode, artist
  For example: song. */
  kind: Kind;
  artistId: number;
  collectionId: number;
  trackId: number;

  /* The name of the artist returned by the search request.
  For example: “Jack Johnson”. */
  artistName: string;

  /* The name of the album, TV season, audiobook, and so on returned by the search request.
  For example: “In Between Dreams”. */
  collectionName: string;

  /* The name of the track, song, video, TV episode, and so on returned by the search request.
  For example: “Banana Pancakes”. */
  trackName: string;

  /* The name of the album, TV season, audiobook, and so on returned by the search request, with objectionable words *’d out.
  Note: Artist names are never censored.
  For example: “S**t Happens”. */
  trackCensoredName: string;
  collectionCensoredName: string;

  /* A URL for the content associated with the returned media type. You can click the URL to view the content in the iTunes Store.
  For example: “http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=68615807&id=68615813&s=143462”. */
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;

  /* A URL referencing the 30-second preview file for the content associated with the returned media type. .
  Only when media type is track
  For example: “http:// a392.itunes.apple.com/jp/r10/ Music/y2005/m06/d03/h05/s05.zdzqlufu.p.m4p”. */
  previewUrl: string;

  /* A URL for the artwork associated with the returned media type, sized to 100×100 pixels or 60×60 pixels.
  Only when artwork is available
  For example: “http://a1.itunes.apple.com/jp/r10/Music/y2005/m06/d03/h05/s05.oazjtxkw.100×100-75.jpg”. */
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;

  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;

  /* The returned track’s time in milliseconds.
  Only when media type is track
  For example: 207679 */
  trackTimeMillis: number;

  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}