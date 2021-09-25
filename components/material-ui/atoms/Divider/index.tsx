import React from 'react';
import { default as MuiDivider, DividerProps } from '@material-ui/core/Divider';

interface IDivider extends DividerProps {}

export const Divider = (props: IDivider): JSX.Element => {
  return <MuiDivider {...props} />;
};
