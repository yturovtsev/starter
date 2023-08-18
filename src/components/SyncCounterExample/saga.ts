import { put, takeLatest } from 'typed-redux-saga/macro';
import { actionSync } from './actions';
import { incrementSync } from './reducer';

function* exampleOfInjectableSaga() {
  yield* put(incrementSync());
}

export function* testSaga() {
  yield* takeLatest(actionSync, exampleOfInjectableSaga);
}
