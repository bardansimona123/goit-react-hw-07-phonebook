import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact as apiAddContact, deleteContact as apiDeleteContact } from '../services/api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
    createContact(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { createContact, removeContact, setFilter } = contactsSlice.actions;

export const getContacts = () => async (dispatch) => {
  const contacts = await fetchContacts();
  dispatch(createContact(contacts));
};

export const addContact = (contact) => async (dispatch) => {
  const newContact = await apiAddContact(contact);
  dispatch(createContact(newContact));
};

export const deleteContact = (id) => async (dispatch) => {
  await apiDeleteContact(id);
  dispatch(removeContact(id));
};

export default contactsSlice.reducer;
