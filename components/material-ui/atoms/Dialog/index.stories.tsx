import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Dialog } from '.';
import { Box } from 'components/material-ui/atoms/Box';
import { Button } from 'components/material-ui/atoms/Button';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Dialog',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const withoutToggle = (): JSX.Element => {
  return (
    <Dialog open={true}>
      <Box padding={4}>
        <h1>Title</h1>
        <p>TextTextTextTextTextTextText</p>
      </Box>
    </Dialog>
  );
};

export const withToggle = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box padding={4}>
          <h1>Title</h1>
          <p>TextTextTextTextTextTextText</p>
        </Box>
      </Dialog>
    </>
  );
};
