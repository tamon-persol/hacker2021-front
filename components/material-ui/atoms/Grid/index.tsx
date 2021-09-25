import React from 'react';
import { default as MuiGrid, GridProps } from '@material-ui/core/Grid';

interface IProps extends GridProps {}

export const Grid = (props: IProps): JSX.Element => <MuiGrid {...props} />;
