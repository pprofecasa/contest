import React, { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import Questionnaire from '../components/questionnaire';

export default function Form() {
  const [rate, setRate] = useState([0]);
  const [disabled, setDisabled] = useState(true);
  const [route, setRoute] = useState('/');

  const handleRate = (value) => {
    if (value) {
      setRate(value);
      setDisabled(false);
    } else {
      setRate([0]);
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (rate.length > 1) {
      if (rate[0] > 2 && rate[1] > 0) {
        setRoute('/accepted');
      } else {
        setRoute('/rejected');
      }
    }
  }, [rate]);

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
                Test de postulación
              </Typography>

              <Questionnaire defineUrl={handleRate} />
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <Link href="/">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    component="a"
                  >
                    {'< '}Atras
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href={route}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    component="a"
                    disabled={disabled}
                  >
                    Siguiente >
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
