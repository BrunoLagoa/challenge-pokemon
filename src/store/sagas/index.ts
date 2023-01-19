import { all } from 'redux-saga/effects';

import pokemon from './pokemon';

export default function* rootSaga() {
  yield all([...pokemon]);
}
