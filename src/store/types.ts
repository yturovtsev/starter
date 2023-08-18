import { Reducer, Store } from 'redux';
import { SagaInjectionModes } from 'redux-injectors';
import { Saga } from 'redux-saga';

export interface InjectedStore extends Store {
  injectedReducers: unknown;
  injectedSagas: unknown;
  runSaga(saga: Saga | undefined, args: unknown | undefined): unknown;
}

export interface InjectReducerParams {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: string;
  saga: Saga;
  mode?: SagaInjectionModes;
}
