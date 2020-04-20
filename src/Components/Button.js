import React from 'react';
import './Button.css';

const Button = ({ variant, children, onclick }) => (
  <button onClick={onclick} className={'button ' + variant}>
    {children}
  </button>
);

export default Button;
