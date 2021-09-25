import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Grid } from '.';
import { theme } from 'modules/styles/theme';
import { Box } from 'components/styled-components/atoms/Box';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/Grid',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withXs12 = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs12
        </Box>
      </Grid>
    </Grid>
  );
};

export const withXs6 = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs6
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs6
        </Box>
      </Grid>
    </Grid>
  );
};

export const withXs3 = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs3
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs3
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs3
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          bgcolor={theme.color.background2}
          color={theme.color.primary}
          padding={4}
          textAlign="center"
          borderRadius={6}
        >
          xs3
        </Box>
      </Grid>
    </Grid>
  );
};
