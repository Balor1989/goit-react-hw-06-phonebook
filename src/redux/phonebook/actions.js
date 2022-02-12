import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const filterChangeAction = createAction('phonebook/filterChange');

const deleteContactAction = createAction('phonebook/deleteContact');

const addContactAction = createAction(
  'phonebook/addContact',
  (name, number) => {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  },
);

export default { deleteContactAction, filterChangeAction, addContactAction };
