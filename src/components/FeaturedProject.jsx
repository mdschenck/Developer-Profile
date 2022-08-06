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

const featuredProject = () => {
return (
<ThemeProvider theme={theme}>
  <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'left',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={2} className="left  leftSide" id="work">
            <h2  className="leftSideH2">Work</h2>
          </Grid>
          <Grid item xs={10} className="right featured-content-block featuredProjectContainer"> 
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
          ><span>The Prioritizer</span></a>
          </h2>
          <p>
          <span>
            Heroku deployed MySQL / JAWS.DB based prioritization application. MVC and ORM methodology with Node.JS, Express.JS, Sequelize, Handlebars, and Bcrypt. 
          </span>
          </p>
        </Grid>
      </Grid>
    </Box>
  </Container>
</ThemeProvider>
);
};

export default featuredProject;