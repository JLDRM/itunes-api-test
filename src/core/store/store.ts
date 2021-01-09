import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';
import songsReducer from './itunesApi/songsSlice';
import collectionsReducer from './itunesApi/collectionsSlice';
import favouritesReducer from './itunesApi/favouritesSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    collections: collectionsReducer,
    favourites: favouritesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
