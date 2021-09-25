import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListItemIcon } from './ListItemIcon';
import { ListItemText } from './ListItemText';
import { ListSubheader } from './ListSubheader';
import { Checkbox } from 'components/material-ui/atoms/Checkbox';

import markdown from './index.md';

export default {
  title: 'material-ui/atoms/List',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '300px',
      backgroundColor: theme.palette.background.paper
    }
  })
);

export const basic = (): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          </ListItem>
        );
      })}
    </List>
  );
};

export const withCheckboxAndSubheader = (): JSX.Element => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      className={classes.root}
      subheader={<ListSubheader id="list-subheader">List Items</ListSubheader>}
    >
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            clickable
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          </ListItem>
        );
      })}
    </List>
  );
};
