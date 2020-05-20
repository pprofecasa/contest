import React from 'react';
import { Container, Grid, Typography, Paper } from '@material-ui/core';

export default function index() {
  return (
    <Container maxWidth="sm">
      <Grid container justify="center">
        <Paper>
          <Typography align="center" variant="h3">
            Postulación Freelancer NEXT.js
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}
