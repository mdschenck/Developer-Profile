import React from 'react';

const allProjects = ({ }) => {
return (
<div class="row">
              <div class="col s2 left">
                <h2></h2>
              </div>


              <div class="col s10 content-block right">
                <div class="col s12 l6 projectContainer">
                  <a
                  href="https://mdschenck.github.io/Wildlife-Census"
                  target="top"
                >
                  <img
                    src="./assets/Images/WildlifeCensus1.JPG"
                    alt="Image of Wildlife Census Web Application"
                  /></a>
                  <h2><span>Wildlife Census</span></h2>
                  <p><span>Population mapping tool using Mapbox and Wiki APIs </span></p>
                </div>
                <div class="col s12 l6 projectContainer">
                  <a
                  href="https://floating-escarpment-49352.herokuapp.com/"
                  target="top"
                >
                  <img
                    src="./assets/Images/Tech-Blog.JPG"
                    alt="Image Of Tech Blog"
                  /></a>
                  <h2><span>Tech Blog</span></h2>
                  <p><span>Heroku deployed MySQL DB based blog application</span></p>
                </div>
              </div>
            

              <div class="col s10 right content-block">
                <div class="col s12 l6 projectContainer">
                  <a
                  href="https://mdschenck.github.io/Weather-Dashboard/"
                  target="top"
                >
                  <img
                    src="./assets/Images/WeatherDashboard.jpg"
                    alt="Image of Weather Dashboard"
                  /></a>
                  <h2><span>Weather Dashboard</span></h2>
                  <p><span>Location based weather application. API calls, Local Storage</span></p>
                </div>
                <div class="col s12 l6 projectContainer">
                  <a
                    href="https://mdschenck.github.io/Work-Day-Scheduler/"
                    target="top"
                  >
                    <img
                      src="./assets/Images/WorkdayCalendar.jpg"
                      alt="Image of Workday Scheduler"
                  /></a>
                  <h2>
                    <a
                      href="https://mdschenck.github.io/Work-Day-Scheduler/"
                      target="top"
                      ><span>Workday Scheduler</span></a
                    >
                  </h2>
                  <p><span>A simple time tracking application</span></p>
                </div>
              </div>
            </div>
);
};

export default allProjects;