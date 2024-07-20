import React from 'react';
import styles from './Button.module.css'; // Adjust the path as needed

const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <span className={styles.spinner}></span>
        Start free trial
      </button>
    </div>
  );
};

export default Button;
