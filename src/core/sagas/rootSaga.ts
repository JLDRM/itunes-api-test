import { all } from "redux-saga/effects";

import { songsRequested } from "./itunesApi/itunesApiSagas";

export default function* rootSaga() {
  yield all([
    // add here all sagas
    songsRequested()
  ]);
}

// more info about different implementations of rootSaga at https://redux-saga.js.org/docs/advanced/RootSaga.html