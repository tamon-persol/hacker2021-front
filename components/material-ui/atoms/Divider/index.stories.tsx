import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Divider } from '.';
import { Box } from 'components/material-ui/atoms/Box';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Divider',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const basic = (): JSX.Element => {
  return (
    <Box width="100px">
      <Box>りんご</Box>
      <Divider />
      <Box>ばなな</Box>
      <Divider />
      <Box>いちご</Box>
    </Box>
  );
};
