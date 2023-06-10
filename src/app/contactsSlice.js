import { createSlice, nanoid } from '@reduxjs/toolkit';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const newContact = action.payload;
        state.push(newContact);
      },
      prepare({ id, name, number }) {
        return {
          payload: {
            id: id || nanoid(5),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      return state.filter(contact => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
