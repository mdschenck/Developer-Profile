import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const allProjects = () => {
return (
  
<ThemeProvider theme={theme}>
  <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={2} className="left leftSide">
          </Grid>
            <Grid item xs={10} className="right"> 
              <Grid item xs={12}>
                <Grid item xs={12} className="content-block project-container">
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
                </Grid>
                <Grid item xs={12} className="content-block project-container">
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
                </Grid>

                <Grid item xs={12} className="content-block project-container">
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
                </Grid>
                <Grid item xs={12} className="content-block project-container">
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
                </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
);
};

export default allProjects;