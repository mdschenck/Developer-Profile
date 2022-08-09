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
export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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

// export default App;
