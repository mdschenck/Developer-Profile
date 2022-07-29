import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      {/* <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Tech Thoughts</h1>
        </Link>
        <p className="m-0">Get into the mind of a programmer.</p>
      </div> */}

<h1>Michael <span class="sch">Sch</span>enck</h1>
        <nav>
          <ul>
          <li>
            <a href="#aboutme" class="navLink">About Me</a>
          </li>
          <li>
            <a href="#work" class="navLink">Development</a>
          </li>
          <li>
            <a href="#contact" class="navLink">Contact</a>
          </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
