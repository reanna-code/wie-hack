'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';

const Wellness = () => {
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
        <Grid container spacing={4}>
          {/* First Row */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                  Meditation techniques
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#5f0099',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                  Personalized tips
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#5f0099',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  Get Tips
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                  Mindfulness exercises
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#5f0099',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  Start Exercises
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                  Chat with Sarah
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#5f0099',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Wellness;
