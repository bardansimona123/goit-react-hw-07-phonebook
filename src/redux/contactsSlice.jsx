import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact as apiAddContact, deleteContact as apiDeleteContact } from '../services/api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    // Modifică 'contacts' la 'items' pentru a se potrivi cu selecția din ContactList
    items: [], // Array-ul de contacte, schimbat de la 'contacts' la 'items'
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    removeContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload); // Folosește 'items' aici
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    createContact(state, action) {
      state.items.push(action.payload); // Folosește 'items' aici
    },
    setContacts(state, action) {
      state.items = action.payload; // Folosește 'items' aici
    },
    setLoading(state, action) {
      state.isLoading = action.payload; // Setează starea de încărcare
    },
    setError(state, action) {
      state.error = action.payload; // Setează mesajul de eroare
    },
  },
});

// Exportă acțiunile
export const { createContact, removeContact, setFilter, setContacts, setLoading, setError } = contactsSlice.actions;

// Funcția pentru a obține contactele
export const getContacts = () => async (dispatch) => {
  dispatch(setLoading(true)); 
  try {
    const contacts = await fetchContacts();
    dispatch(setContacts(contacts)); 
  } catch (error) {
    dispatch(setError(error.message)); 
  } finally {
    dispatch(setLoading(false)); 
  }
};

// Funcția pentru a adăuga un contact
export const addContact = (contact) => async (dispatch) => {
  try {
    const newContact = await apiAddContact(contact);
    dispatch(createContact(newContact));
  } catch (error) {
    dispatch(setError(error.message)); 
  }
};

// Funcția pentru a șterge un contact
export const deleteContact = (id) => async (dispatch) => {
  try {
    await apiDeleteContact(id);
    dispatch(removeContact(id));
  } catch (error) {
    dispatch(setError(error.message)); // Gestionează erorile pentru ștergerea contactelor
  }
};

// Exportă reducer-ul
export default contactsSlice.reducer;
