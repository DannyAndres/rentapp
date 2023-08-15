import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// create empty slice with empty reducer
const initialState = {
  // Define your initial state properties here
};

const emptyReducerSlice = createSlice({
  name: 'empty',
  initialState,
  reducers: {},
});

const mockStore = configureStore({
  reducer: emptyReducerSlice.reducer,
  middleware: [thunk],
});

const mockPersistor = {
  persist: async () => {
    await Promise.resolve();
  },
};

export { mockStore, mockPersistor };
