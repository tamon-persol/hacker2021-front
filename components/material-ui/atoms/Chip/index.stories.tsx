import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Chip } from '.';
import markdown from './index.md';
import { theme } from 'modules/styles/muiTheme';

export default {
  title: 'material-ui/atoms/Chip',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const composedLabelChip = (): JSX.Element => (
  <Chip
    label={
      <span>
        <b style={{ marginRight: '5px' }}>Text</b>
        <span style={{ color: 'blue' }}>127%</span>
      </span>
    }
  />
);

export const composedLabelChipWithOutline = (): JSX.Element => (
  <Chip
    label={
      <span>
        <b style={{ marginRight: '5px' }}>Text</b>
        <span style={{ color: theme.palette.primary.dark }}>127%</span>
      </span>
    }
    bgcolor={theme.palette.primary.light}
    variant="outlined"
    borderColor={theme.palette.primary.dark}
  />
);
