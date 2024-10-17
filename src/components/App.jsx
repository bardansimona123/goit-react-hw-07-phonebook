import React from 'react';
import { useSelector } from 'react-redux'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter'; 
import styles from './App.module.css'; 

const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts); 

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} /> 
    </div>
  );
};

export default App;
