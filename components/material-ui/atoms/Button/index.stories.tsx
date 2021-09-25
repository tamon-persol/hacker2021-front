import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FilterList } from '@material-ui/icons';
import { Button } from '.';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const textButton = (): JSX.Element => <Button>Button</Button>;

export const fullWidth = (): JSX.Element => (
  <Button color="primary" variant="contained" fullWidth>
    Button
  </Button>
);

export const disabled = (): JSX.Element => (
  <Button disabled variant="contained" color="default">
    Disabled
  </Button>
);

export const withIcon = (): JSX.Element => (
  <Button variant="contained" rounded bgcolor="#fff" startIcon={<FilterList />}>
    Icon
  </Button>
);

export const FlexibleSize = (): JSX.Element => (
  <Button
    variant="outlined"
    rounded="50%"
    height="120px"
    width="120px"
    color="primary"
  >
    PUSH!!
  </Button>
);
