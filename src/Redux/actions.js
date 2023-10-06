import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContacts',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name: name,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
