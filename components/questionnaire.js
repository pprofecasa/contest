import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Radio,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    marginTop: '-18px',
  },
}));

export default function Questionnaire({ defineUrl }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([10]);
  const [radio, setRadio] = React.useState(0);
  const [tech, setTech] = React.useState(0);

  const technologies = [
    { title: 'Redux', value: 0 },
    { title: 'Sagas', value: 1 },
    { title: 'Thunk', value: 2 },
    { title: 'Redux-form', value: 3 },
    { title: 'Babel', value: 4 },
  ];

  const levels = [
    { title: 'Ninguno, sólo proyectos de práctica', value: 1 },
    { title: 'Uno o dos proyectos', value: 2 },
    { title: 'Más de dos proyecto', value: 3 },
  ];

  useEffect(() => {
    let rate = radio && tech ? [tech, radio] : false;
    console.log(tech, radio, rate);
    defineUrl(rate);
  }, [radio, tech]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setTech(newChecked.length);
    setChecked(newChecked);
  };

  const handleRadio = (value) => () => {
    if (radio === value) {
      setRadio(0);
    } else {
      setRadio(value);
    }
  };

  return (
    <Fragment>
      <Typography gutterBottom component="b">
        1.¿Cuáles de estas tecnologías conoce?
      </Typography>
      <List>
        {technologies.map((option) => {
          const labelId = `checkbox-list-label-${option.value}`;

          return (
            <ListItem
              key={option.value}
              role={undefined}
              dense
              button
              onClick={handleToggle(option.value)}
              className={classes.list}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(option.value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={option.title} />
            </ListItem>
          );
        })}
      </List>

      <Typography gutterBottom component="b">
        2.¿En cuántos proyectos profesionales con Next.js participó?
      </Typography>
      <List>
        {levels.map((option) => {
          const labelId = `checkbox-list-label-${option.value}`;

          return (
            <ListItem
              key={option.value}
              role={undefined}
              dense
              button
              className={classes.list}
              onClick={handleRadio(option.value)}
            >
              <ListItemIcon>
                <Radio
                  edge="start"
                  checked={radio === option.value}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={option.title} />
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
}
