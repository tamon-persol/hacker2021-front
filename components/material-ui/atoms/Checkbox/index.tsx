import React from 'react';
import {
  default as MuiCheckbox,
  CheckboxProps
} from '@material-ui/core/Checkbox';
import { SvgIcon } from '@material-ui/core';
import Checked from 'assets/checkbox-checked.svg';
import UnChecked from 'assets/checkbox.svg';
import { FieldProps } from 'formik';

interface ICheckboxProps extends Omit<CheckboxProps, 'size'> {
  size?: string | number;
}

type IFormikCheckboxProps = ICheckboxProps & FieldProps;

export const Checkbox = (props: ICheckboxProps): JSX.Element => {
  const { size, ...others } = props;
  // NOTE: 限定的な範囲なので、styleを使ってインラインで装飾してます
  return (
    <MuiCheckbox
      {...others}
      icon={
        <SvgIcon style={{ fontSize: size }}>
          <UnChecked />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon style={{ fontSize: size }}>
          <Checked />
        </SvgIcon>
      }
    />
  );
};

export const FormikCheckbox = (props: IFormikCheckboxProps): JSX.Element => {
  const { field, size, ...others } = props;

  // NOTE: 限定的な範囲なので、styleを使ってインラインで装飾してます
  return (
    <Checkbox
      {...others}
      {...field}
      icon={
        <SvgIcon style={{ fontSize: size }}>
          <UnChecked />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon style={{ fontSize: size }}>
          <Checked />
        </SvgIcon>
      }
    />
  );
};
