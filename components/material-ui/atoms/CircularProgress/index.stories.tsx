import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CircularProgress } from '.';
import markdown from './index.md';
import { Grid } from 'components/material-ui/atoms/Grid';
import { Box } from 'components/material-ui/atoms/Box';

export default {
  title: 'material-ui/atoms/CircularProgress',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutProps = (): JSX.Element => <CircularProgress />;

export const coverFullPage = (): JSX.Element => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <CircularProgress size={100} />
    <Box paddingTop={5}>Loading...</Box>
  </Grid>
);
