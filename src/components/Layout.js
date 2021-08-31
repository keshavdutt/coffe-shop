import React from 'react';
import styles from './Layout.module.css';
import { Link } from 'gatsby';


export default function Layout({ children }) {

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1><Link to="/">Joe's Coffee Shop</Link></h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
