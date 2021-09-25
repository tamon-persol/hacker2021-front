import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '.';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutProps = (): JSX.Element => <Button>Button</Button>;

export const withProps = (): JSX.Element => (
  <Button bgcolor="persolGray">Button</Button>
);

export const withDisabled = (): JSX.Element => (
  <Button disabled bgcolor="persolGray">
    Disabled
  </Button>
);

export const withIcon = (): JSX.Element => (
  <Button
    width={'131px'}
    height={'36px'}
    color="basic"
    bgcolor="border"
    rounded={true}
  >
    <img src="/img/filter.svg" alt="filtericon" />
    &nbsp;
    <span>icon</span>
  </Button>
);
