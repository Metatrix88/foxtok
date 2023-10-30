import React from 'react';

import { footerMenu } from './config';

import './Footer.css';

export const Footer = () => (
  <footer className="footer">
    <nav className="footer__menu">
      {footerMenu.map(({id, title, href}) => (
        <a
          key={id}
          href={href}
          className="footer__link"
        >
          {title}
        </a>
      ))}
    </nav>
    <p>&copy; FoxTok</p>
  </footer>
);
