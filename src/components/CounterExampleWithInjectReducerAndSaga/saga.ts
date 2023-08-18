import { put, takeLatest } from 'typed-redux-saga/macro';
import { action } from './actions';
import { increment } from './reducer';

function* exampleOfInjectableSaga() {
  yield* put(increment());
}

export function* testSaga() {
  yield* takeLatest(action, exampleOfInjectableSaga);
}
