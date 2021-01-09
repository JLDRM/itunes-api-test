import axios, { AxiosResponse } from 'axios';

import { ItuneSearchResponse, ItunesResult } from '../models/itunesApi.models';

const ITUNES_BASE_URL = 'https://itunes.apple.com/';
const ITUNES_SEARCH_URI = 'search?';

export function getSongsBySearchTerm(term: string): Promise<AxiosResponse<ItuneSearchResponse>> {
  const queryParamTerm = term ? `&term=${term}` : '';
  return axios.get(`${ITUNES_BASE_URL}${ITUNES_SEARCH_URI}entity=song${queryParamTerm}`);
};

export function getcollectionsBySearchTerm(term: string): Promise<AxiosResponse<ItuneSearchResponse>> {
  const queryParamTerm = term ? `&term=${term}` : '';
  return axios.get(`${ITUNES_BASE_URL}${ITUNES_SEARCH_URI}entity=album&${queryParamTerm}`);
};

export function addCustomViewUrl(data: ItuneSearchResponse): ItuneSearchResponse {
  const { results } = data;
  results.map((result: ItunesResult) => {
    const { artworkUrl60 } = result;
    result.artworkUrl300 = artworkUrl60.replace(artworkUrl60.substring(artworkUrl60.indexOf('/60x60bb'), artworkUrl60.length), '/300x300bb.jpg');
    return result;
  });

  return data;
}