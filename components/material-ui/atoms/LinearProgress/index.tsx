import React from 'react';
import {
  default as MuiLinearProgress,
  LinearProgressProps
} from '@material-ui/core/LinearProgress';
import { theme } from 'modules/styles/muiTheme';

import { makeStyles } from '@material-ui/core/styles';

interface ILinearProgressProps extends LinearProgressProps {
  width?: string;
}

// NOTE: Refer to https://material-ui.com/api/linear-progress/#css
const useStyles = makeStyles({
  root: {
    width: ({ width }: ILinearProgressProps) => width || '',
    backgroundColor: theme.palette.secondary.light
  }
});

export const LinearProgress = (props: ILinearProgressProps): JSX.Element => {
  const styles = useStyles(props);
  const classes = {
    root: styles.root
  };
  return <MuiLinearProgress classes={classes} {...props} />;
};
