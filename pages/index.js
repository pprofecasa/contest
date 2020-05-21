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
                Somos un equipo de freelancer con clientes en Europa y Asia.
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Frecuentemente tenemos proyectos en React.js que necesitan ser
                migrados a Next.js, manteniendo un nivel de performance y SEO
                altos.
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Por ello convocamos a desarrolladores interesados en dominar
                Next.js, los probaremos al migrar un primer sitio con el fin de
                contratar dos de forma constante. Requieren saber:
              </Typography>
              <ul>
                <li>React.js</li>
                <li>Redux</li>
                <li>Sagas</li>
                <li>Inglés (nivel escrito suficiente)</li>
              </ul>

              <Typography gutterBottom component="b">
                Remuneración y forma de trabajo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                El proyecto será a distancia, un buen nivel salaríal y por
                trabajo hecho, pudiendo dedicarle el tiempo que quiera.
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
