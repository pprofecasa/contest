import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: '10px',
  },
}));

export default function index() {
  const classes = useStyles();

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
            <CardMedia
              image="https://sempreinter.com/wp-content/uploads/2019/12/emerson-palmieri-1-e1577450280772.jpg"
              title="NEXT JS Specialist"
              style={{ height: '150px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Nos interesa mucho su postulación
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Por favor, siga los siguientes pasos:
              </Typography>

              <ol>
                <li className={classes.list}>
                  Haga un clon del siguiente repositorio:{' '}
                  <a
                    href="https://github.com/huascarmm/nextJsContest"
                    target="_blank"
                  >
                    https://github.com/huascarmm/nextJsContest
                  </a>
                </li>
                <li className={classes.list}>
                  Programe una propuesta rápida de como optimizar el performance
                </li>
                <li className={classes.list}>
                  Haga deploy y un captura de pantalla del reporte de Audit de
                  Chrome
                </li>
                <li className={classes.list}>
                  Envíe tal captura a{' '}
                  <a href="mailto: personalprofecasa@gmail.com">
                    personalprofecasa@gmail.com
                  </a>{' '}
                  , añada además su nombre y número de WhatsApp
                </li>
              </ol>

              <Typography variant="body2" color="textSecondary" component="p">
                Habiendo recibido su captura de pantalla, nos comunicaremos con
                usted.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
}
