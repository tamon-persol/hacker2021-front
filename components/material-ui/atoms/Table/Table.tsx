import React from 'react';
import { default as MuiTable, TableProps } from '@material-ui/core/Table';

interface ITableProps extends TableProps {}

export const Table = (props: ITableProps): JSX.Element => {
  return <MuiTable {...props}>{props.children}</MuiTable>;
};
