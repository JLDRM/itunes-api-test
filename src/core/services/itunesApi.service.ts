import axios, { AxiosResponse } from 'axios';

import { ItuneSearchResponse } from '../models/itunesApi.models';

const ITUNES_SEARCH_URI = 'https://itunes.apple.com/search?';

export function getSongsBySearchTerm(term: string): Promise<AxiosResponse<ItuneSearchResponse>> {
  return axios.get(`${ITUNES_SEARCH_URI}entity=song&term=${term}`);
};