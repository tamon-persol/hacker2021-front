import React from 'react';
import { default as MuiStepper, StepperProps } from '@material-ui/core/Stepper';

interface IStepperProps extends StepperProps {}

export const Stepper = (props: IStepperProps): JSX.Element => {
  return <MuiStepper {...props}>{props.children}</MuiStepper>;
};
