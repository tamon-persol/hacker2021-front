import React from 'react';
import styled from 'styled-components';
import { theme } from 'modules/styles/theme';

interface ISelectProps
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'type'> {
  selectSize?: string;
}

export const Select: React.FC<ISelectProps> = (
  props: ISelectProps
): JSX.Element => (
  <StyledSelect name={props.name} selectSize={props.selectSize}>
    {props.children}
  </StyledSelect>
);

interface IStyledSelectProps {
  selectSize?: string;
}

const StyledSelect = styled.select<IStyledSelectProps>`
  appearance: none;
  border: 1px solid ${theme.color.border};
  padding: 16px;
  background-image: url('/img/arrow-down.svg');
  background-position: right 10px center;
  width: ${({ selectSize }: IStyledSelectProps): string => {
    return selectSize ? (selectSize === 's' ? '100' : '300') : '300';
  }}px;
  &:focus {
    outline: none;
  }
`;
