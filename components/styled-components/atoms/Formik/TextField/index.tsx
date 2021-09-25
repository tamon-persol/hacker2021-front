import React from 'react';
import { FieldProps } from 'formik';
import styled from 'styled-components';
import { ITheme } from 'modules/styles/theme';

type ITextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & FieldProps;

export const FormikTextField = (props: ITextFieldProps): JSX.Element => {
  const { field, form, ...others } = props;
  const { touched, errors } = form;

  // NOTE: バリデーションNGかつ一度フォーカスしているときにエラーメッセージ表示する
  const hasError: boolean =
    errors[field.name] && touched[field.name] ? true : false;

  return (
    <>
      <StyledInput {...field} {...others} error={hasError} />
      {hasError && <ErrorMessage>{errors[field.name]}</ErrorMessage>}
    </>
  );
};

// NOTE: InputをスタイリングするためのPropsの型定義
type IStyledInputProps = {
  error: boolean;
} & ITheme;

const StyledInput = styled.input<IStyledInputProps>`
  width: 373px;
  height: 48px;
  border: 1px solid
    ${({ error, theme }: IStyledInputProps): string =>
      error ? theme.color.error : '#eae8e8'};
  background: #fff;
  color: ${({ theme }: IStyledInputProps): string => theme.color.darkGray};
  font-size: 18px;
  padding-left: 14px;
  outline: none;
  :focus {
    border: 1px solid
      ${({ error, theme }: IStyledInputProps): string =>
        error ? `${theme.color.error}` : '#5977f4'};
  }
  &::placeholder {
    color: #a6a6a6;
  }
`;

type IStyledErrorMessages = ITheme;

const ErrorMessage = styled.p<IStyledErrorMessages>`
  font-size: 16px;
  color: ${({ theme }: IStyledErrorMessages): string => theme.color.error};
  margin: 0;
`;
