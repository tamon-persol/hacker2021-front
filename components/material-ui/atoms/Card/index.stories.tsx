import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withKnobs } from '@storybook/addon-knobs';

import { Card } from '.';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Card',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

const useStyles = makeStyles({
  root: {
    padding: 12
  }
});

export const basic = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <p>Card</p>
    </Card>
  );
};
