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

const about = () => {
return (

<ThemeProvider theme={theme}>
  <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 2,
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center',
        }}
      >
        <Grid container xs={12} spacing={1}>
          <Grid item xs={2} className="left  leftSide" id="about">
            <h2  className="leftSideH2">About</h2>
          </Grid>
          <Grid item xs={10}> 
            <p className="aboutMe">
            Web developer based in Atlanta, Georgia and working in Ecommerce / Digital Merchandising & Systems Integration.
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </ThemeProvider>
);
};

export default about;