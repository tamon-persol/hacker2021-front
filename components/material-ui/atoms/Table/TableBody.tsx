import React from 'react';
import {
  default as MuiTableBody,
  TableBodyProps
} from '@material-ui/core/TableBody';

interface ITableBodyProps extends TableBodyProps {}

export const TableBody = (props: ITableBodyProps): JSX.Element => {
  return <MuiTableBody {...props}>{props.children}</MuiTableBody>;
};
