import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactListItem';
import styles from './App.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log('Contacts:', contacts);
  const filter = useSelector((state) => state.contacts.filter);
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
