import React from 'react';

const featuredProject = ({ }) => {
return (
    <div class="row">
    <div class="col s2 left " id="work"><h2 class="leftSideH2">Work</h2>
    </div>
    <div class="col s10 right featured-content-block featuredProjectContainer">
      <a
        href="https://infinite-coast-94356.herokuapp.com/"
        target="top"
      >
        <img
          src="./assets/Images/Prioritizer.JPG"
          class="float-center"
          alt="Image of Prioritizer Web Application"
      /></a>
      <h2>
        <a
          href="https://infinite-coast-94356.herokuapp.com/"
          target="top"
          ><span>The Prioritizer</span></a
        >
      </h2>
      <p>
        <span>
          Heroku deployed MySQL / JAWS.DB based application that helps distributed teams vote on project proposals and priorities. Uses MVC and ORM methodology with Node.JS, Express.JS, Sequelize, Handlebars, and Bcrypt. 
          </span>
      </p>
    </div>
  </div>
);
};

export default featuredProject;