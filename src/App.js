// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import FeaturedProject from './components/FeaturedProject';
import Project from './components/Project';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // We declare a state variable that is an array called `issues` and a function to update it.
  const [issues, setIssues] = useState([]);

  // When the page loads, set the document title to something specific to this app.
  // This only runs once because of our empty dependency array.
  useEffect(() => {
    document.title = 'Michael Schenck Portfolio';
  }, []);

  // Helper function that performs an API request and sets the `issues` array to a list of issues from GitHub
  // const getRepoIssues = (repo) => {
  //   let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
  //   console.log('issuesURL', issuesURL);
  //   fetch(issuesURL)
  //     .then((res) => res.json())
  //     .then((response) => setIssues(response));
  // };

  return (
    <div className="ui container">
      {/* Here we pass our getRepoIssues function as a prop to SearchBar */}
      {/* <SearchBar onFormSubmit={getRepoIssues} /> */}
      <Header />
      <div class="row hero">
          <div class="s12">
            <span
              class="background-image"
              role="img"
              aria-label="Backround Image of computer graphics on a screen"
            ></span>
            <img id="headshot"
            src="./assets/Images/ms-headshot.jpg"
            alt="Image of Michael Schenck headshot"
          />
            <h2>Development Portfolio</h2>
          </div>
        </div>
      <About />
      <FeaturedProject />
      <Project />
      <Contact />
      <Footer />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* <IssueList issues={issues} /> */}
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
