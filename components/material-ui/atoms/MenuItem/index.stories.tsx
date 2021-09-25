import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MenuItem } from '.';
import { Select } from 'components/material-ui/atoms/Select';

import markdown from './index.md';

export default {
  title: 'material-ui/atoms/MenuItem',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withSelect = (): JSX.Element => (
  <Select name="grup">
    <MenuItem value="apple">りんご</MenuItem>
    <MenuItem value="banana">ばなな</MenuItem>
    <MenuItem value="strawberry">いちご</MenuItem>
  </Select>
);
