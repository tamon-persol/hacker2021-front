import React from 'react';
import { theme } from 'modules/styles/theme';
import styled from 'styled-components';

interface IRadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  // NOTE: 必要が出てくれば、ラベルのスタイルを受け取れるようにする
  label?: string;
  size?: number;
}

// FIXME: サイズによってボタンとラベルの間にズレがある
export const RadioButton: React.FC<IRadioButtonProps> = (
  props: IRadioButtonProps
): JSX.Element => (
  <StyledLabel>
    <StyledRadio {...props} type="radio" />
    <span>{props.label}</span>
  </StyledLabel>
);

interface IStyledRadioProps {
  size?: number;
}

const StyledLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const StyledRadio = styled.input<IStyledRadioProps>`
  display: none;

  + span {
    position: relative;
    padding-left: ${({ size }: IStyledRadioProps): number =>
      (size || 30) + 15}px;
    padding-top: ${({ size }: IStyledRadioProps): number => {
      const radioSize = size || 30;
      if (radioSize <= 30) return radioSize / 3 - 3;
      else if (radioSize < 30 && 32 <= radioSize) return radioSize / 3 - 2;
      else if (radioSize < 32 && 40 <= radioSize) return radioSize / 3 - 1;
      else return radioSize / 3;
    }}px;
  }

  + span:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ size }: IStyledRadioProps): number => size || 30}px;
    height: ${({ size }: IStyledRadioProps): number => size || 30}px;
    border: 1px solid #999;
    border-radius: 50%;
  }

  &:checked + span:after {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 6px;
    width: ${({ size }: IStyledRadioProps): number => (size || 30) - 10}px;
    height: ${({ size }: IStyledRadioProps): number => (size || 30) - 10}px;
    background: ${theme.color.primary};
    border-radius: 50%;
  }
`;
