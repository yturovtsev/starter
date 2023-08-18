import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { counterSliceReducer } from '@/components/CounterExampleWithInjectReducerAndSaga/reducer';
import { syncCounterSliceReducer } from '@/components/SyncCounterExample/reducer';

const initialState = {} as RootState;

export default function createReducer(injectedReducers = {}) {
  const combinedReducer = combineReducers({
    syncCounter: syncCounterSliceReducer,
    ...injectedReducers,
  });

  const reducer = (state = initialState, action: AnyAction) => {
    if (action.type === HYDRATE) {
      return { ...state, ...action.payload };
    }

    return combinedReducer(state, action);
  };

  return reducer;
}

export interface RootState {
  // example of injected reducer
  readonly testReducer?: ReturnType<typeof counterSliceReducer>;
  // sync reducer
  readonly syncCounter: ReturnType<typeof syncCounterSliceReducer>;
}
