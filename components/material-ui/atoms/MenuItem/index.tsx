import React from 'react';
import {
  default as MuiMenuItem,
  MenuItemProps
} from '@material-ui/core/MenuItem';

interface IMenuItem extends MenuItemProps {
  // NOTE: https://github.com/mui-org/material-ui/issues/21127
  button?: true;
}

export const MenuItem = (props: IMenuItem): JSX.Element => {
  return <MuiMenuItem {...props}>{props.children}</MuiMenuItem>;
};
