import axios, { AxiosResponse } from 'axios';

import { ItuneSearchResponse } from '../models/itunesApi.models';

const ITUNES_BASE_URL = 'https://itunes.apple.com/';
const ITUNES_SEARCH_URI = 'search?';
const ITUNES_LOOKUP_URI = 'lookup?';

export function getSongsBySearchTerm(term: string): Promise<AxiosResponse<ItuneSearchResponse>> {
  return axios.get(`${ITUNES_BASE_URL}${ITUNES_SEARCH_URI}entity=song&term=${term}`);
};

export function getAlbumsByArtistId(artistId: number): Promise<AxiosResponse<ItuneSearchResponse>> {
  return axios.get(`${ITUNES_BASE_URL}${ITUNES_LOOKUP_URI}entity=album&id=${artistId}`);
};