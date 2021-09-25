import React from 'react';
import { default as MuiList, ListProps } from '@material-ui/core/List';

interface IListProps extends ListProps {}

export const List = (props: IListProps): JSX.Element => {
  return <MuiList {...props}>{props.children}</MuiList>;
};
