import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import {PATH} from '../../constants/paths';
import './Footer.css';
const footerMenu = [
  {
    to: PATH.about,
    title: 'About',
  },
  {
    to: PATH.contact,
    title: 'Contact',
  },
  {
    to: PATH.careers,
    title: 'Careers',
  }
]

export const Footer = () => (
  <footer className="footer">
    <nav className="footer__menu">
      {footerMenu.map(({ to, title}) => (
        <NavLink
          key={to}
          to={to}
          className={({isActive}) => (
            classNames("footer__link", {["footer__link--active"]: isActive})
          )}
        >
          {title}
        </NavLink>
      ))}
    </nav>
    <p>&copy; FoxTok</p>
  </footer>
);
