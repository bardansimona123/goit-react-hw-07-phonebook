import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './App.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector((state) => state.contacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;

