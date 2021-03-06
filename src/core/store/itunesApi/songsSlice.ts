import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItunesResult, ItuneSearchResponse } from '../../models/itunesApi.models';

interface ItunesSongsState {
  isLoadingSongs: boolean;
  songSearchTerm: string;
  searchResults: ItunesResult[];
  resultsLength: number;
  error: Error | null;
}

const initialState: ItunesSongsState = {
  isLoadingSongs: false,
  songSearchTerm: '',
  searchResults: [],
  resultsLength: 0,
  error: null,
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    requested: (state, action: PayloadAction<string>) => {
      state.songSearchTerm = action.payload;
      state.isLoadingSongs = true;
    },
    succeed: (state, action: PayloadAction<ItuneSearchResponse>) => {
      state.isLoadingSongs = false;
      state.searchResults = action.payload.results;
      state.resultsLength = action.payload.resultCount;
    },
    failed: (state, action: PayloadAction<Error>) => {
      state.isLoadingSongs = false;
      state.error = action.payload;
    },
  },
});

export const { requested, succeed, failed } = songsSlice.actions;

export default songsSlice.reducer;
