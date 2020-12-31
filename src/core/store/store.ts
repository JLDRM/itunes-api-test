import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';
import counterReducer from './counter/counterSlice';
import songsReducer from './itunesApi/songsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

/* Use this type as a return type on the thunks implementations */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


