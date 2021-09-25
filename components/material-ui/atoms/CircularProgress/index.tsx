import React from 'react';
import {
  default as MuiCircularProgress,
  CircularProgressProps
} from '@material-ui/core/CircularProgress';

interface ICircularProgress extends CircularProgressProps {}

export const CircularProgress = (props: ICircularProgress): JSX.Element => {
  return <MuiCircularProgress {...props} />;
};
