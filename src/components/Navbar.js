import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <nav className="px-2 navBar d-flex justify-content-between align-items-center flex-wrap">
    <h1 style={{ fontFamily: 'Rubik Vinyl', color: 'aliceblue', fontWeight: 'bold' }}>Math Magicians</h1>
    <ul className="d-flex ">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} exact="true">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
