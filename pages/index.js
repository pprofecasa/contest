import React from 'react';
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
} from '@material-ui/core';

export default function index() {
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
              image="https://www.timakin.com/static/0eff93544ae9742fcc9ca50d2ac8d754/3ddd4/thumbnail.png"
              title="NEXT JS Specialist"
              style={{ height: '100px' }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Freelancer Next.js
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hola, tenemos una web app desarrollada en React.js, basada en un
                template llamado Dandelion. Requerimos un desarrollador con
                especial experiencia en Next.js, para migrar el el sitio
                completo. Además, debe tener conocimientos en:
              </Typography>
              <ul>
                <li>React.js</li>
                <li>Redux</li>
                <li>Sagas</li>
              </ul>

              <Typography gutterBottom component="b">
                Remuneración y forma de trabajo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                El proyecto será a distancia, podemos definir un sistema de
                trabajo por hora, aunque coordinaremos un tiempo estimado para
                el proyecto. El pago pretendemos hacerlo por paypal aunque
                podemos coordinar otras formas.
              </Typography>
              <br />
              <Typography gutterBottom component="b">
                Postulación y selección
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Para postular, por favor siga las instrucciones del formulario
                de selección:
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container justify="center">
              <Link href="/form">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  component="a"
                >
                  Formulario de selección
                </Button>
              </Link>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
