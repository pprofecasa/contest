import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  TextField,
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
            <form action="/gracias">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Datos Personales
                </Typography>
                <TextField
                  label="Nombre y apellidos"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Correo electrónico"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                />
              </CardContent>
              <CardActions>
                <Grid container justify="center" spacing={2}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Grid>
              </CardActions>
            </form>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
}
