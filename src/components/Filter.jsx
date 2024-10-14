import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice'; 
import styles from './App.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value)); 
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
