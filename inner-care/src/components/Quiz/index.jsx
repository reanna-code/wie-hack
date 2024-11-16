'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const Quiz = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'white',
        padding: '100px 0',
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={4} sx = {{ background: "linear-gradient(to left, #7a60ff, #cd9ffa)", padding: "2em"}}>
          <Grid item md={8} sm={12}>
            <Box className="banner-text" sx={{ paddingRight: '80px', marginTop: '50px' }}>
              <Typography variant="h2" sx={{ color: 'white', marginBottom: '20px' }}>
                Wellness Test
              </Typography>
              <Typography variant="h6" sx={{ color: 'white', marginBottom: '20px' }}>
                Anonymously assess your mental well-being using this quick 5-minute quiz.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#5f0099',
                  color: 'white',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  fontSize: '13px',
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
                startIcon={<ArrowForward />}
              >
                Start Quiz Now
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="images/quiz.png"
                alt="iPhone Screen"
                className="img-fluid"
                style={{
                  width: '100%',
                  animation: 'fadeInUp 0.7s',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Quiz;
