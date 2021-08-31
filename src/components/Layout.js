import React from 'react';
import styles from './Layout.module.css';
// import { Link } from 'gatsby';


export default function Layout({ children }) {

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      {/* <header id={styles.header}>
        <div id={styles.inner}>
          <h1><Link to="/">Joe's Coffee Shop</Link></h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </header> */}
      <header className="header">
        <a href="#" className="logo">
          <i className="fas fa-heartbeat"></i> medcare. </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#doctors">doctors</a>
          <a href="#book">book</a>
          <a href="#review">review</a>
          <a href="#blogs">blogs</a>
        </nav>
        {/* <div id="menu-btn" className="fas fa-bars"></div> */}
        <button id="menu-btn" className="fas fa-bars" onClick={() => {
          let menu = document.querySelector('#menu-btn');
          let navbar = document.querySelector('.navbar');

          menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
          }
        }}/>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
