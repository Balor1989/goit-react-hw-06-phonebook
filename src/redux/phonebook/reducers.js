import { createReducer, combineReducers } from '@reduxjs/toolkit';

const items = createReducer([], {
  item: (state, action) => state,
});

const filter = createReducer('', {
  filter: (state, action) => state,
});

export default combineReducers({
  items,
  filter,
});
