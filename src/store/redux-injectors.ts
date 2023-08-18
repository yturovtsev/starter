import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from 'redux-injectors';
import { InjectReducerParams, InjectSagaParams } from './types';

const useInjectReducer = ({ key, reducer }: InjectReducerParams) =>
  useReducer({ key, reducer });

export { useInjectReducer };

const useInjectSaga = ({ key, saga }: InjectSagaParams) =>
  useSaga({ key, saga });

export { useInjectSaga };
