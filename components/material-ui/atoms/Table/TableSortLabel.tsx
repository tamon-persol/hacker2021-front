import React from 'react';
import {
  default as MuiTableSortLabel,
  TableSortLabelProps
} from '@material-ui/core/TableSortLabel';

interface ITableSortLabelProps extends TableSortLabelProps {}

export const TableSortLabel = (props: ITableSortLabelProps): JSX.Element => {
  return <MuiTableSortLabel {...props}>{props.children}</MuiTableSortLabel>;
};
