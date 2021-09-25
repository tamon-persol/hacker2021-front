import React from 'react';
import {
  default as MuiListItem,
  ListItemProps
} from '@material-ui/core/ListItem';

interface IListItemProps extends Omit<ListItemProps, 'button'> {
  // NOTE: https://github.com/mui-org/material-ui/issues/14971
  clickable?: boolean;
}

export const ListItem = (props: IListItemProps): JSX.Element => {
  return (
    <MuiListItem button={props.clickable as false} {...props}>
      {props.children}
    </MuiListItem>
  );
};
