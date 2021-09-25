import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Box } from '.';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Box',
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
  <Box bgcolor="gray" color="white">
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
      <Box p={1} bgcolor="gray">
        Item 1
      </Box>
      <Box p={1} bgcolor="gray">
        Item 2
      </Box>
      <Box p={1} bgcolor="gray">
        Item 3
      </Box>
    </Box>
  </div>
);
