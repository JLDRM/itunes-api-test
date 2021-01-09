import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItunesFavouritesState {
  favouritesSongsIds: number[];
  favouritesSongsLength: number;
  favouritesCollectionsIds: number[];
  favouritesCollectionsLength: number;
  error: Error | null;
}

const initialState: ItunesFavouritesState = {
  favouritesSongsIds: [],
  favouritesSongsLength: 0,
  favouritesCollectionsIds: [],
  favouritesCollectionsLength: 0,
  error: null,
};

export const favouritesSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    favSong: (state, action: PayloadAction<number>) => {
      state.favouritesSongsIds = state.favouritesSongsIds.concat(action.payload);
      state.favouritesSongsLength = state.favouritesSongsIds.length;
    },
    unfavSong: (state, action: PayloadAction<number>) => {
      const unfavIndex = state.favouritesSongsIds.indexOf(action.payload);
      state.favouritesSongsIds.splice(unfavIndex, 1);
      state.favouritesSongsIds = [...state.favouritesSongsIds];
      state.favouritesSongsLength = state.favouritesSongsIds.length;
    },
    favCollection: (state, action: PayloadAction<number>) => {
      state.favouritesCollectionsIds = state.favouritesCollectionsIds.concat(action.payload);
      state.favouritesCollectionsLength = state.favouritesCollectionsIds.length;
    },
    unfavCollection: (state, action: PayloadAction<number>) => {
      const unfavIndex = state.favouritesCollectionsIds.indexOf(action.payload);
      state.favouritesCollectionsIds.splice(unfavIndex, 1);
      state.favouritesCollectionsIds = [...state.favouritesCollectionsIds];
      state.favouritesCollectionsLength = state.favouritesCollectionsIds.length;
    }
  },
});

export const { favSong, unfavSong, favCollection, unfavCollection } = favouritesSlice.actions;

export default favouritesSlice.reducer;
