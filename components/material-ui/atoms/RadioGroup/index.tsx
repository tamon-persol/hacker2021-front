import React from 'react';
import {
  default as MuiRadioGroup,
  RadioGroupProps
} from '@material-ui/core/RadioGroup';
import { FieldProps } from 'formik';

interface IRadioGroupProps extends RadioGroupProps {}
type IFormikRadioGruopProps = RadioGroupProps & FieldProps;

export const RadioGroup = (props: IRadioGroupProps): JSX.Element => {
  return <MuiRadioGroup {...props}>{props.children}</MuiRadioGroup>;
};

export const FormikRadioGroup = (
  props: IFormikRadioGruopProps
): JSX.Element => {
  const { field } = props;

  return (
    <MuiRadioGroup {...props} {...field}>
      {props.children}
    </MuiRadioGroup>
  );
};
