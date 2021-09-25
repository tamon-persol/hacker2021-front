import React from 'react';
import {
  default as MuiListItemText,
  ListItemTextProps
} from '@material-ui/core/ListItemText';

interface IListItemTextProps extends ListItemTextProps {}

export const ListItemText = (props: IListItemTextProps): JSX.Element => {
  return <MuiListItemText {...props}>{props.children}</MuiListItemText>;
};
