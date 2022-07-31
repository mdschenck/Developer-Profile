import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const featuredProject = () => {
return (
    <Row>

    <Col xs={2} className="left " id="work"><h2 className="leftSideH2">Work</h2>
    </Col>
    <Col xs={10} className="featured-content-block featuredProjectContainer"> 
      <a
        href="https://infinite-coast-94356.herokuapp.com/"
        target="top"
      >
        <img
          src="./assets/Images/Prioritizer.JPG"
          className="float-center"
          alt="Prioritizer Web Application"
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
    </Col>
  </Row>
);
};

export default featuredProject;