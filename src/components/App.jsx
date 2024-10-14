import React from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter'; 
import styles from './App.module.css'; 

const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts); // Obține contactele din store

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
