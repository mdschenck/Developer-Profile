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

const Header = () => {
  return (
  <ThemeProvider theme={theme}>
    <Container className="hero">
        <CssBaseline />
            <span
              className="background-image"
              role="img"
              aria-label="Computer graphics on a screen"
            ></span>
            <img id="headshot"
            src="./assets/Images/ms-headshot.jpg"
            alt="Michael Schenck headshot"
          />
            <h2>Development Portfolio</h2>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
