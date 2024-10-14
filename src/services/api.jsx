// src/services/api.js
import axios from 'axios';

const API_URL = 'https://670d415d073307b4ee42e557.mockapi.io/contacts';

export const fetchContacts = async () => {
  
  const response = await axios.get(API_URL);
  return response.data;
};

export const addContact = async (contact) => {
  
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
