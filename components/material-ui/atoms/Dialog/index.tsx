import React from 'react';
import { default as MuiDialog, DialogProps } from '@material-ui/core/Dialog';

interface IDialogProps extends DialogProps {}

export const Dialog = (props: IDialogProps): JSX.Element => {
  return <MuiDialog {...props}>{props.children}</MuiDialog>;
};
