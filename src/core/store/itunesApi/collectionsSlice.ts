import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItunesResult, ItuneSearchResponse } from '../../models/itunesApi.models';

interface ItunesCollectionsState {
  isLoadingCollections: boolean;
  collectionSearchTerm: string;
  searchResults: ItunesResult[];
  resultsLength: number;
  error: Error | null;
}

const initialState: ItunesCollectionsState = {
  isLoadingCollections: false,
  collectionSearchTerm: '',
  searchResults: [],
  resultsLength: 0,
  error: null,
};

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    requested: (state, action: PayloadAction<string>) => {
      state.collectionSearchTerm = action.payload;
      state.isLoadingCollections = true;
    },
    succeed: (state, action: PayloadAction<ItuneSearchResponse>) => {
      state.isLoadingCollections = false;
      state.searchResults = action.payload.results;
      state.resultsLength = action.payload.resultCount;
    },
    failed: (state, action: PayloadAction<Error>) => {
      state.isLoadingCollections = false;
      state.error = action.payload;
    },
  },
});

export const { requested, succeed, failed } = collectionsSlice.actions;

export default collectionsSlice.reducer;
