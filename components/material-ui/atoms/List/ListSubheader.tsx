import React from 'react';
import {
  default as MuiListSubheader,
  ListSubheaderProps
} from '@material-ui/core/ListSubheader';

interface IListSubheaderProps extends ListSubheaderProps {}

export const ListSubheader = (props: IListSubheaderProps): JSX.Element => {
  return <MuiListSubheader {...props}>{props.children}</MuiListSubheader>;
};
