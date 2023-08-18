import { testSaga } from '@/components/SyncCounterExample/saga';

export function* rootSaga() {
  // static sagas forks
  yield* testSaga();
}
