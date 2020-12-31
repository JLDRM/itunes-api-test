import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItunesResults } from '../../models/itunesApi.models';

interface ItunesSongsState {
  isLoadingSongs: boolean;
  term: string;
  searchResults: ItunesResults[];
  error: Error | null;
}

const initialState: ItunesSongsState = {
  isLoadingSongs: false,
  term: '',
  searchResults: [],
  error: null,
};

export const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    requested: state => {
      state.isLoadingSongs = true;
    },
    succeed: (state, action: PayloadAction<ItunesResults[]>) => {
      state.isLoadingSongs = false;
      state.searchResults = action.payload;
    },
    failed: (state, action: PayloadAction<Error>) => {
      state.isLoadingSongs = false;
      state.error = action.payload;
    },
  },
});

export const { requested, succeed, failed } = songsSlice.actions;
export type songsTypes = 'songs/requested' | 'songs/succeed' | 'songs/failed';

export default songsSlice.reducer;
