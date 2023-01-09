import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <nav className={ styles.menu }>
      <a href="/">Home</a>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Header;
