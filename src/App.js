// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import FeaturedProject from './components/FeaturedProject';
import Project from './components/Project';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  // We declare a state variable that is an array called `darkMode` and a function to update it.
  const [darkMode, toggleDarkMode] = useState([]);

  // When the page loads, set the document title to something specific to this app.
  // This only runs once because of our empty dependency array.
  useEffect(() => {
    document.title = 'Michael Schenck Portfolio';
  }, []);

  return (
  <div className="App">
      <Header />
      <Hero />
      <About />
      <FeaturedProject />
      <Project />
      <Contact />
      <Footer />
  </div>
  );
}

export default App;
