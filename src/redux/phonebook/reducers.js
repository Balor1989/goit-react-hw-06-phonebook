import { createReducer, combineReducers } from '@reduxjs/toolkit';
import defaultContacts from '../../JSON/contacts.json';
import actions from './actions';

const items = createReducer(defaultContacts, {
  [actions.addContactAction]: (state, { payload }) => [payload, ...state],
  [actions.deleteContactAction]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filterChangeAction]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
