import React from 'react';
import { default as MuiStep, StepProps } from '@material-ui/core/Step';

interface IStepProps extends StepProps {}

export const Step = (props: IStepProps): JSX.Element => {
  return <MuiStep {...props}>{props.children}</MuiStep>;
};
