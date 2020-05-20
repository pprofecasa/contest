import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

export default function Rejected() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                MUCHAS GRACIAS !
              </Typography>
              <Typography>Nos comunicaremos con usted brevemente</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
}
