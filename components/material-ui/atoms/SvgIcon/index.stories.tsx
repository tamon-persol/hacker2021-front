import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SvgIcon } from '.';
import Checked from 'assets/radio-checked.svg';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/SvgIcon',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const basic = (): JSX.Element => (
  <SvgIcon>
    <Checked />
  </SvgIcon>
);
