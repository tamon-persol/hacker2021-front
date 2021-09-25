import React from 'react';
import { default as MuiRadio, RadioProps } from '@material-ui/core/Radio';
import { SvgIcon } from '@material-ui/core';
import Checked from 'assets/radio-checked.svg';
import UnChecked from 'assets/radio.svg';

interface IRadioProps extends Omit<RadioProps, 'size'> {
  size?: string | number;
}

export const Radio = (props: IRadioProps): JSX.Element => {
  const { size, ...others } = props;
  // NOTE: 限定的な範囲なので、styleを使ってインラインで装飾してます
  return (
    <MuiRadio
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
