import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact as apiAddContact, deleteContact as apiDeleteContact } from '../services/api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    removeContact(state, action) {
      console.log('removeContact action:', action);
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
    createContact(state, action) {
      state.contacts.push(action.payload);
    },
    setContacts(state, action) {
      state.contacts = action.payload; // Setează lista de contacte
    },
    setLoading(state, action) {
      state.isLoading = action.payload; // Setează starea de încărcare
    },
    setError(state, action) {
      state.error = action.payload; // Setează mesajul de eroare
    },
  },
});

export const { createContact, removeContact, setFilter, setContacts, setLoading, setError } = contactsSlice.actions;

export const getContacts = () => async (dispatch) => {
  dispatch(setLoading(true)); // Setează încărcarea la true
  try {
    const contacts = await fetchContacts();
    dispatch(setContacts(contacts)); // Folosește setContacts pentru a adăuga lista de contacte
  } catch (error) {
    dispatch(setError(error.message)); // Setează eroarea în caz de eșec
  } finally {
    dispatch(setLoading(false)); // Indiferent de rezultat, setează încărcarea la false
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const newContact = await apiAddContact(contact);
    dispatch(createContact(newContact));
  } catch (error) {
    dispatch(setError(error.message)); // Gestionează erorile pentru adăugarea contactelor
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await apiDeleteContact(id);
    dispatch(removeContact(id));
  } catch (error) {
    dispatch(setError(error.message)); // Gestionează erorile pentru ștergerea contactelor
  }
};

export default contactsSlice.reducer;
