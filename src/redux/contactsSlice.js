import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

export const initialContacts = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.items.find(contact => contact.name === action.payload.name)) {
          toast.error('Contact already exists!');
        } else {
          state.items.push(action.payload);
        }
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
