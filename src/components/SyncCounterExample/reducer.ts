import { createSlice } from '@reduxjs/toolkit';

const syncCounterSlice = createSlice({
  name: 'sync-counter',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementSync(state) {
      state.count += 1;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setCount, incrementSync } = syncCounterSlice.actions;
export const { reducer: syncCounterSliceReducer } = syncCounterSlice;
