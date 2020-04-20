import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footerText}>
      Disclaimer: This website is not associated with any Bank in any way. No
      user information is stored.
    </p>
    <p className={styles.footerText}>
      Created by{' '}
      <a href="https://thoaif.com" target="_blank" rel="noopener noreferrer">
        Thoaif
      </a>
    </p>
  </footer>
);

export default Footer;
