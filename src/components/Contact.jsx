import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const contact = () => {
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
            <Grid item xs={2} className="left  leftSide" id="contact">
              <h2  className="leftSideH2">Contact</h2>
            </Grid>
            <Grid item xs={10} className="right"> 
              <Grid item xs={12}>

                <h3 className="contactLinks">
                <a href="mailto:mdschenck@gmail.com"> mdschenck@gmail.com </a>
                <a
                href="https://www.linkedin.com/in/michaeldschenck"
                target="top"
                >
                Linkedin
                </a>
                <a href="https://www.github.com/mdschenck" target="top">
                GitHub
                </a>
                <a
                href="./assets/files/MIchaelSchenck-Resume2022.pdf"
                target="top"
                >
                Resume
                </a>
                </h3>
                </Grid>
                <Grid item xs={12}>

                <Box component="form" 
                // onSubmit={handleSubmit} 
                noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              variant="outlined"
              rows="3"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Message
            </Button>
                {/* <Form>
                <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>

                    <Form.Control type="email" required isInvalid/>
                    <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                    </Form.Control.Feedback>
                  </InputGroup>

                  <Button variant="primary" type="submit" className="right">
                  Submit
                  </Button>
              </Form> */}
              </Box>
          </Grid>
        </Grid>
        </Grid>
      </Box>
    </Container>
  </ThemeProvider>
);
};

export default contact;