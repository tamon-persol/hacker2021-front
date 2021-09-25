import React from 'react';
import {
  default as MuiTableCell,
  TableCellProps
} from '@material-ui/core/TableCell';

interface ITableCellProps extends TableCellProps {}

export const TableCell = (props: ITableCellProps): JSX.Element => {
  return <MuiTableCell {...props}>{props.children}</MuiTableCell>;
};
