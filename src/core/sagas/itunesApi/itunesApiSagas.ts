import { call, put, debounce } from 'redux-saga/effects';

import { getSongsBySearchTerm, getcollectionsBySearchTerm, addCustomViewUrl } from '../../services/itunesApi.service';
import { ItuneSearchResponse } from '../../models/itunesApi.models';

// TODO: find how to handle action types 
function* fetchSongsData(action: { type: 'songs/requested', payload: string; }) {
  try {
    const term = action.payload.trim();
    if (!term) {
      return null;
    }
    const { data }: { data: ItuneSearchResponse; } = yield call(getSongsBySearchTerm, term);
    yield put({ type: "songs/succeed", payload: addCustomViewUrl(data) });
  } catch (error) {
    yield put({ type: "songs/failed", payload: error });
  }
}

export function* songsRequested() {
  yield debounce(600, 'songs/requested', fetchSongsData);
}

function* fetchCollectionsData(action: { type: 'collections/requested', payload: string; }) {
  try {
    const term = action.payload.trim();
    if (!term) {
      return null;
    }
    const { data }: { data: ItuneSearchResponse; } = yield call(getcollectionsBySearchTerm, term);
    yield put({ type: "collections/succeed", payload: addCustomViewUrl(data) });
  } catch (error) {
    yield put({ type: "collections/failed", payload: error });
  }
}

export function* collectionsRequested() {
  yield debounce(600, 'collections/requested', fetchCollectionsData);
}