import React from 'react';
import {
  default as MuiStepContent,
  StepContentProps
} from '@material-ui/core/StepContent';

interface IStepContentProps extends StepContentProps {}

export const StepContent = (props: IStepContentProps): JSX.Element => {
  return <MuiStepContent {...props}>{props.children}</MuiStepContent>;
};
