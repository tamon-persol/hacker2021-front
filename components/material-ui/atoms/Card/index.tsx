import React from 'react';
import { default as MuiCard, CardProps } from '@material-ui/core/Card';

interface ICardProps extends CardProps {}

export const Card = (props: ICardProps): JSX.Element => (
  <MuiCard {...props}>{props.children}</MuiCard>
);
