import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import styles from './App.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Caută contacte după nume</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        className={styles.filterInput}
      />
    </div>
  );
};

export default Filter;
