import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Box } from '.';
import { theme } from 'modules/styles/theme';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/Box',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutProps = (): JSX.Element => (
  <Box>
    <p>Text</p>
  </Box>
);

export const withProps = (): JSX.Element => (
  <Box bgcolor={theme.color.background2} color={theme.color.strong}>
    <p>Text</p>
  </Box>
);

export const FlexBox = (): JSX.Element => (
  <div style={{ width: '100%' }}>
    <Box
      display="flex"
      flexDirection="row"
      p={1}
      m={1}
      bgcolor="background.paper"
    >
      <Box p={1} bgcolor={theme.color.background2}>
        Item 1
      </Box>
      <Box p={1} bgcolor={theme.color.background2}>
        Item 2
      </Box>
      <Box p={1} bgcolor={theme.color.background2}>
        Item 3
      </Box>
    </Box>
  </div>
);
