import React from 'react';
import PropTypes from 'prop-types'; // Adăugăm validarea PropTypes
import styles from './App.module.css'; // Asigură-te că importul este corect

const ContactListItem = ({ contact }) => (
  <li className={styles.contactListItem}> {/* Verifică dacă această clasă există în CSS */}
    {contact.name}: {contact.number}
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};

export default ContactListItem;

