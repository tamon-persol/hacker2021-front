import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Select } from '.';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/Select',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutSize = (): JSX.Element => (
  <Select name="group">
    <option value="apple">りんご</option>
    <option value="banana">ばなな</option>
    <option value="strawberry">いちご</option>
  </Select>
);
export const withSize = (): JSX.Element => (
  <Select name="group" selectSize="s">
    <option value="apple">りんご</option>
    <option value="banana">ばなな</option>
    <option value="strawberry">いちご</option>
  </Select>
);
