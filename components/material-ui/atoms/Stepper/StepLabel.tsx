import React from 'react';
import {
  default as MuiStepLabel,
  StepLabelProps
} from '@material-ui/core/StepLabel';

interface IStepLabelProps extends StepLabelProps {}

export const StepLabel = (props: IStepLabelProps): JSX.Element => {
  return <MuiStepLabel {...props}>{props.children}</MuiStepLabel>;
};
