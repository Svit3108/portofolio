import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projekte</Link></li>
        <li><Link to="/experience">Berufserfahrung</Link></li>
        <li><Link to="/education">Bildungsweg</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


