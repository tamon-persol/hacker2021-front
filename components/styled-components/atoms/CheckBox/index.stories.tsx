import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CheckBox } from '.';
import { Box } from 'components/styled-components/atoms/Box';
import markdown from './index.md';

export default {
  title: 'styled-components/atoms/CheckBox',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withLabel = (): JSX.Element => (
  <form>
    <Box p={2}>
      <CheckBox name="group" value="apple" label="りんご" />
    </Box>
    <Box p={2}>
      <CheckBox name="group" value="banana" label="ばなな" />
    </Box>
    <Box p={2}>
      <CheckBox name="group" value="strawberry" label="いちご" />
    </Box>
  </form>
);

export const withSize = (): JSX.Element => (
  <>
    <form>
      <Box p={2}>
        <CheckBox name="group" value="18" label="18" size={18} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="20" label="20" size={20} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="24" label="24" size={24} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="28" label="28" size={28} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="30" label="30" size={30} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="34" label="34" size={34} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="40" label="40" size={40} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="44" label="44" size={44} />
      </Box>
      <Box p={2}>
        <CheckBox name="group" value="50" label="50" size={50} />
      </Box>
    </form>
  </>
);

export const withoutLabel = (): JSX.Element => (
  <form>
    <CheckBox name="group" value="banana" />
  </form>
);
