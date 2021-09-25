import React from 'react';
import {
  default as MuiListItemIcon,
  ListItemIconProps
} from '@material-ui/core/ListItemIcon';

interface IListItemIconProps extends ListItemIconProps {}

export const ListItemIcon = (props: IListItemIconProps): JSX.Element => {
  return <MuiListItemIcon {...props}>{props.children}</MuiListItemIcon>;
};
