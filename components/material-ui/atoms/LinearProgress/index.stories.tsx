import React from 'react';
import { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { LinearProgress } from '.';
import markdown from './index.md';

export default {
  title: 'material-ui/atoms/LinearProgress',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

export const fullWidth = (): JSX.Element => (
  <LinearProgress variant="determinate" value={50} />
);

export const withSize = (): JSX.Element => (
  <LinearProgress variant="determinate" width="100px" value={25} />
);

export const withColor = (): JSX.Element => (
  <LinearProgress color="secondary" variant="determinate" value={25} />
);

export const withLoopProgressBar = (): JSX.Element => <LinearProgress />;

export const withProgressBar = (): JSX.Element => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgress variant="determinate" value={progress} />;
};
