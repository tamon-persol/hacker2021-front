import React from 'react';
import { default as NextLink, LinkProps } from 'next/link';

interface ILinkProps extends LinkProps {
  color?: string;
  underline?: boolean;
  children: React.ReactNode;
}

export const Link = (props: ILinkProps): JSX.Element => {
  const { color, underline, ...others } = props;
  return (
    <NextLink {...others}>
      {/* NOTE: 限定的な範囲なので、styleを使ってインラインで装飾してます */}
      <a style={{ color: color, textDecoration: underline ? '' : 'none' }}>
        {props.children}
      </a>
    </NextLink>
  );
};
