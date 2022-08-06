import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-light py-3 flex-row" alignItems="flex-start">

<h1 justifyContent="flex-start">Michael <span className="sch">Sch</span>enck</h1>
        <nav>
          <ul>
          <li>
            <a href="#contact" className="navLink"> Contact</a> 
          </li>

          <li>
            <a href="#work" className="navLink"> Work</a> -
          </li>
          <li>
            <a href="#aboutme" className="navLink">About</a> -
          </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
