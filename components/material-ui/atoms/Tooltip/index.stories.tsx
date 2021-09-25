import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tooltip } from '.';
import { Box } from 'components/material-ui/atoms/Box';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Tooltip',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const tooltip = (): JSX.Element => (
  <Box paddingTop={15}>
    <Tooltip
      title={
        <Box padding={1}>
          <h3>Title</h3>
          <p>A : 100</p>
          <p>B : 200</p>
          <p>C : 400</p>
        </Box>
      }
    >
      <button>Hover Me</button>
    </Tooltip>
  </Box>
);
