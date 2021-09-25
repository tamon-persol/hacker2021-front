import React from 'react';
import {
  default as MuiTextField,
  TextFieldProps
} from '@material-ui/core/TextField';
import { FieldProps } from 'formik';

type ITextFieldProps = TextFieldProps;
type IFormikTextFieldProps = TextFieldProps & FieldProps;

export const TextField = (props: ITextFieldProps): JSX.Element => {
  // NOTE: 本プロダクトではoutlinedに統一するためvariant="outlined"に固定
  return <MuiTextField {...props} variant="outlined" />;
};

export const FormikTextField = (props: IFormikTextFieldProps): JSX.Element => {
  const { field, form, ...others } = props;
  const { touched, errors } = form;

  // NOTE: バリデーションNGかつ一度フォーカスしているときにエラーメッセージ表示する
  const hasError: boolean =
    errors[field.name] && touched[field.name] ? true : false;

  return (
    <TextField
      {...field}
      {...others}
      error={hasError}
      helperText={hasError ? errors[field.name] : ''}
    />
  );
};
