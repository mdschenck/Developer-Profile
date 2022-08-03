import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const allProjects = () => {
return (
<Row>
              <Col xs={2} className="left">
              </Col>


              <Col xs={10} className="content-block">
                <Row>
                <Col xs={12} md={6} className="projectContainer">
                  <a
                  href="https://mdschenck.github.io/Wildlife-Census"
                  target="top"
                >
                  <img
                    src="./assets/Images/WildlifeCensus1.JPG"
                    alt="Wildlife Census Web Application"
                  /></a>
                  <h2><span>Wildlife Census</span></h2>
                  <p><span>Population mapping tool using Mapbox and Wiki APIs </span></p>
                </Col>
                <Col xs={12} md={6} className="projectContainer">
                  <a
                  href="https://floating-escarpment-49352.herokuapp.com/"
                  target="top"
                >
                  <img
                    src="./assets/Images/Tech-Blog.jpg"
                    alt="Tech Blog"
                  /></a>
                  <h2><span>Tech Blog</span></h2>
                  <p><span>Heroku deployed MySQL DB based blog application</span></p>
                </Col>
                </Row>
              </Col>
            

              <Col xs={10} className="content-block">
                <Row>
                <Col xs={12} md={6} className="projectContainer">
                  <a
                  href="https://mdschenck.github.io/Weather-Dashboard/"
                  target="top"
                >
                  <img
                    src="./assets/Images/WeatherDashboard.jpg"
                    alt="Weather Dashboard"
                  /></a>
                  <h2><span>Weather Dashboard</span></h2>
                  <p><span>Location based weather application. API calls, Local Storage</span></p>
                </Col>
                <Col xs={12} md={6} className="projectContainer">
                  <a
                    href="https://mdschenck.github.io/Work-Day-Scheduler/"
                    target="top"
                  >
                    <img
                      src="./assets/Images/WorkdayCalendar.jpg"
                      alt="Workday Scheduler"
                  /></a>
                  <h2>
                    <a
                      href="https://mdschenck.github.io/Work-Day-Scheduler/"
                      target="top"
                      ><span>Workday Scheduler</span></a
                    >
                  </h2>
                  <p><span>A simple time tracking application</span></p>
                </Col>
                </Row>
              </Col>
            </Row>
);
};

export default allProjects;