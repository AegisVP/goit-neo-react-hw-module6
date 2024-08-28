import { createSlice } from "@reduxjs/toolkit"
import contacts from "../contacts.json"
import { nanoid } from "nanoid";

export const initialContacts = {
    items: contacts,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number
                    }
                }
            }
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;