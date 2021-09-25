import React from 'react';
import { default as MuiSelect, SelectProps } from '@material-ui/core/Select';
import { FieldProps } from 'formik';

interface ISelect extends SelectProps {}
type IFormikSelect = ISelect & FieldProps;

export const Select = (props: ISelect): JSX.Element => {
  // NOTE: 本プロダクトではoutlinedに統一するためvariant="outlined"に固定
  return (
    <MuiSelect {...props} variant="outlined">
      {props.children}
    </MuiSelect>
  );
};

export const FormikSelect = (props: IFormikSelect): JSX.Element => {
  const { field, ...others } = props;

  return (
    <MuiSelect {...field} {...others} {...props} variant="outlined">
      {props.children}
    </MuiSelect>
  );
};
