import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
  return (
    <div className={`${props.className} ${styles['button-primary']}`}>
      {props.children}
    </div>
  );
};

export default Button;
