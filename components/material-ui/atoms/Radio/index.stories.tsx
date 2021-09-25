import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '.';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Radio',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const StandAlone = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControlLabel
        value="apple"
        control={
          <Radio
            color="primary"
            checked={selectedValue === 'apple'}
            onChange={handleChange}
            size={60}
          />
        }
        label="りんご"
      />
      <FormControlLabel
        value="banana"
        control={
          <Radio
            color="primary"
            checked={selectedValue === 'banana'}
            onChange={handleChange}
          />
        }
        label="ばなな"
      />
    </div>
  );
};
