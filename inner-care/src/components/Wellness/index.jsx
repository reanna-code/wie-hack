'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, CardMedia } from '@mui/material';

const Wellness = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'white',
        padding: '100px 0',
        position: 'relative',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        {/* Title and Description */}
        <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '20px', color: '#5f0099' }}>
          Wellness Centre
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '50px', color: '#555' }}>
          All your inner care methods in one place, personalized just for you.
        </Typography>

        <Grid container spacing={4}>
          {/* First Row */}
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardMedia
                component="img"
                alt="Meditation Techniques"
                height="140"
                image="images/meditation.png"
                sx={{ width: '100%', objectFit: 'contain', marginBottom: '20px' }}
              />
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

          <Grid item xs={12} sm={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardMedia
                component="img"
                alt="Personalized Tips"
                height="140"
                image="images/wellness.png"
                sx={{ width: '100%', objectFit: 'contain', marginBottom: '20px' }}
              />
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
          <Grid item xs={12} sm={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardMedia
                component="img"
                alt="Mindfulness Exercises"
                height="140"
                image="images/exercise.png"
                sx={{ width: '100%', objectFit: 'contain', marginBottom: '20px' }}
              />
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

          <Grid item xs={12} sm={6}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardMedia
                component="img"
                alt="Chat with Sarah"
                height="140"
                image="images/chat.png"
                sx={{ width: '100%', objectFit: 'contain', marginBottom: '20px' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                  Chat with a friend
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
