import React from 'react';
import {
  default as MuiTableRow,
  TableRowProps
} from '@material-ui/core/TableRow';

interface ITableRow extends TableRowProps {}

export const TableRow = (props: ITableRow): JSX.Element => {
  return <MuiTableRow {...props}>{props.children}</MuiTableRow>;
};
