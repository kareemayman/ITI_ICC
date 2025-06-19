import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';

const daysInMonth = 30; // We'll use static 30 days for now

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Event Calendar
      </Typography>

      <Grid container spacing={2}>
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          return (
            <Grid item xs={12} sm={3} md={2} key={day}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  height: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                elevation={3}
              >
                <Typography variant="h6">{day}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
