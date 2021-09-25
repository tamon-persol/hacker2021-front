import React from 'react';
import {
  default as MuiTablePagenation,
  TablePaginationProps
} from '@material-ui/core/TablePagination';

type ITablePaginationProps = TablePaginationProps;

export const TablePagination = (props: ITablePaginationProps): JSX.Element => {
  return <MuiTablePagenation {...props}>{props.children}</MuiTablePagenation>;
};
