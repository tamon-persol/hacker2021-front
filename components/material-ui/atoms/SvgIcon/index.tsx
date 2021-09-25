import React from 'react';
import { default as MuiSvgIcon, SvgIconProps } from '@material-ui/core/SvgIcon';

interface ISvgIconProps extends SvgIconProps {}

export const SvgIcon = (props: ISvgIconProps): JSX.Element => {
  return <MuiSvgIcon {...props} />;
};
