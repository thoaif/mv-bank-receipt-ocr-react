import React from 'react';
import styles from './Header.module.css';
import github from '../assets/github-icon.svg';

const Header = (props) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <span className={styles.red}>Mv Bank</span> Receipt OCR
    </h1>
    <div className={styles.icons}>
      <a
        href="https://github.com/thoaif/mv-bank-receipt-ocr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.img} src={github} alt="Github" />
      </a>
    </div>
  </header>
);

export default Header;
