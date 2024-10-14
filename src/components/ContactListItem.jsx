import React from 'react';
import PropTypes from 'prop-types'; // Adăugăm validarea PropTypes
import styles from './App.module.css'; // Asigură-te că importul este corect

const ContactListItem = ({ contact }) => (
  <li className={styles.contactListItem}> {/* Verifică dacă această clasă există în CSS */}
    {contact.name}: {contact.phone} {/* Asigură-te că folosești 'phone' dacă așa este definit în API */}
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired, // Adaugă id-ul contactului
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired, // Asigură-te că folosești 'phone' în loc de 'number'
  }).isRequired
};

export default ContactListItem;

