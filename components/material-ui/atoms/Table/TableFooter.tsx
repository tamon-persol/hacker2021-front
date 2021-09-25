import React from 'react';
import {
  default as MuiTableFooter,
  TableFooterProps
} from '@material-ui/core/TableFooter';

interface ITableFooterProps extends TableFooterProps {}

export const TableFooter = (props: ITableFooterProps): JSX.Element => {
  return <MuiTableFooter {...props}>{props.children}</MuiTableFooter>;
};
