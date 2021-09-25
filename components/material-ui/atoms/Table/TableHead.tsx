import React from 'react';
import {
  default as MuiTableHead,
  TableHeadProps
} from '@material-ui/core/TableHead';

interface ITableHeadProps extends TableHeadProps {}

export const TableHead = (props: ITableHeadProps): JSX.Element => {
  return <MuiTableHead {...props}>{props.children}</MuiTableHead>;
};
