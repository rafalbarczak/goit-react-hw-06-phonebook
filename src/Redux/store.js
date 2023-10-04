import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 0, name: 'Niunia', number: 521266126 },
    { id: 1, name: 'Sunia', number: 621266126 },
    { id: 2, name: 'Kunia', number: 721266126 },
    { id: 3, name: 'Dunia', number: 821266126 },
    { id: 4, name: 'Munia', number: 921266126 },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
