import React from 'react';
import styles from './NavLink.module.css';
const NavLink = ({ children, className }) => {
  return <div className={`${className} ${styles.navlink}`}>{children}</div>;
};

export default NavLink;
