import React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { theme, ITheme } from 'modules/styles/theme';
import { lighten } from 'polished';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  color?: keyof ITheme['theme']['color'];
  bgcolor?: keyof ITheme['theme']['color'];
  borderRadius?: string;
  rounded?: boolean;
}

export const Button: React.FC<IButtonProps> = (
  props: IButtonProps
): JSX.Element => <StyledButton {...props}>{props.children}</StyledButton>;

const defaultProps = {
  width: '380px',
  height: '48px',
  bgcolor: theme.color.primary,
  color: theme.color.background,
  borderRadius: '4px'
};

const StyledButton = styled.button<IButtonProps>`
  width: ${({ width }: IButtonProps): string => width || defaultProps.width};
  height: ${({ height }: IButtonProps): string =>
    height ? height : defaultProps.height};
  color: ${({ color }: IButtonProps): string =>
    color ? theme.color[color] : defaultProps.color};
  background: ${({ disabled, bgcolor }: IButtonProps): string =>
    disabled
      ? lighten(0.2, bgcolor ? theme.color[bgcolor] : defaultProps.bgcolor)
      : bgcolor
      ? theme.color[bgcolor]
      : defaultProps.bgcolor};
  font-size: 16px;
  border-radius: ${({ rounded }: IButtonProps): string =>
    rounded ? '56px' : defaultProps.borderRadius};
  outline: none;
  &:hover {
    ${({ disabled }: IButtonProps): CSSProp => {
      return disabled
        ? css`
            cursor: ${({ disabled }: IButtonProps): string =>
              disabled ? 'not-allowed' : 'cursor'};
          `
        : css`
            background: ${({ bgcolor }: IButtonProps): string =>
              lighten(
                0.05,
                bgcolor ? theme.color[bgcolor] : defaultProps.bgcolor
              )};
          `;
    }}
  }
  &:active {
    box-shadow: ${({ bgcolor }: IButtonProps): string =>
      `${bgcolor ? theme.color[bgcolor] : defaultProps.bgcolor} 0px 3px 7px`};
  }
`;
