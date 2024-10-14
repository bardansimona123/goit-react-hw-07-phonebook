import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} este deja în agendă`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">Nume</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="number">Număr</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adaugă contact</button>
    </form>
  );
};

export default ContactForm;
