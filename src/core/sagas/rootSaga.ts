import { all } from "redux-saga/effects";

import { songsRequested, collectionsRequested } from "./itunesApi/itunesApiSagas";

export default function* rootSaga() {
  yield all([
    // add here all sagas
    songsRequested(),
    collectionsRequested(),
  ]);
}
// with this approach, be sure you handle all exceptions
// more info about different implementations of rootSaga at https://redux-saga.js.org/docs/advanced/RootSaga.html