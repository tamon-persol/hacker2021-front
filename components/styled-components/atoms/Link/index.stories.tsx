import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Link } from '.';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/Link',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutProps = (): JSX.Element => <Link href="/">Link</Link>;
export const withProps = (): JSX.Element => (
  <Link href="/" color="primary" underline>
    Link
  </Link>
);
