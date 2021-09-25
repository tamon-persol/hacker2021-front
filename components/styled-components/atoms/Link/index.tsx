import React from 'react';
import styled from 'styled-components';
import { default as NextLink, LinkProps } from 'next/link';
import { theme, ITheme } from 'modules/styles/theme';

interface ILinkProps extends LinkProps {
  color?: keyof ITheme['theme']['color'];
  underline?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<ILinkProps> = (props: ILinkProps): JSX.Element => {
  const { color, underline, ...others } = props;
  return (
    <NextLink {...others}>
      <StyledLink color={color} underline={underline}>
        {props.children}
      </StyledLink>
    </NextLink>
  );
};

interface IStyledLinkProps {
  color?: keyof ITheme['theme']['color'];
  underline?: boolean;
}

const StyledLink = styled.a<IStyledLinkProps>`
  text-decoration: ${({ underline }: IStyledLinkProps): string =>
    underline ? 'underline' : 'none'};
  color: ${({ color }: IStyledLinkProps): string =>
    color ? theme.color[color] : theme.color.basic};
  cursor: pointer;
`;
