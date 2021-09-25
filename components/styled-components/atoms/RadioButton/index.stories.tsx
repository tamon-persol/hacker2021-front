import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { RadioButton } from '.';
import { Box } from 'components/styled-components/atoms/Box';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/RadioButton',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withLabel = (): JSX.Element => (
  <form>
    <Box p={2}>
      <RadioButton name="group" value="apple" label="りんご" />
    </Box>
    <Box p={2}>
      <RadioButton name="group" value="banana" label="ばなな" />
    </Box>
    <Box p={2}>
      <RadioButton name="group" value="strawberry" label="いちご" />
    </Box>
  </form>
);

export const withSize = (): JSX.Element => (
  <>
    <form>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={18} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={20} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={24} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={28} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={30} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={34} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={40} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={44} />
      </Box>
      <Box p={2}>
        <RadioButton name="group" value="18" label="18" size={50} />
      </Box>
    </form>
  </>
);

export const withoutLabel = (): JSX.Element => (
  <form>
    <RadioButton name="group" value="banana" />
  </form>
);
