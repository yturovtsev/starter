import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/reducer';

const selectTestState = (state: RootState) => state.testReducer;

export const countSelector = createSelector(
  selectTestState,
  (testState) => testState?.count,
);
