import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice'; // Asigură-te că importi acțiunea corectă
import styles from './App.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); // Apelează acțiunea setFilter
  };

  return (
    <div className={styles.filter}>
      <label>
        Filter contacts by name:
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
