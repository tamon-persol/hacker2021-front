import React from 'react';
import { default as MuiBox, BoxProps } from '@material-ui/core/Box';

interface IProps extends BoxProps {}

export const Box = (props: IProps): JSX.Element => (
  <MuiBox {...props}>{props.children}</MuiBox>
);
