import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-light mb-4 py-3 flex-row align-center">
      {/* <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Tech Thoughts</h1>
        </Link>
        <p className="m-0">Get into the mind of a programmer.</p>
      </div> */}

<h1>Michael <span className="sch">Sch</span>enck</h1>
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
