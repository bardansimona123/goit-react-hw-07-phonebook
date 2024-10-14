import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactListItem';
import styles from './App.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts) || []; // Asigură-te că este un array
  const filter = useSelector((state) => state.contacts.filter);

  console.log('Contacts:', contacts); // Afișează contactele pentru debug
  console.log('Contacts before filtering:', contacts);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <li>No contacts found.</li>
      )}
    </ul>
  );
};

export default ContactList;
