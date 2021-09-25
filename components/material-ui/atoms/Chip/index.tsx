import React from 'react';
import { default as MuiChip, ChipProps } from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

interface IChipProps extends ChipProps {
  bgcolor?: string;
  borderColor?: string;
}

// NOTE: Refer to https://material-ui.com/api/chip/#css
const useStyles = makeStyles({
  root: {
    color: ({ color }: IChipProps) => color || '',
    background: ({ bgcolor }: IChipProps) => bgcolor || '',
    borderColor: ({ borderColor }: IChipProps) => borderColor || ''
  }
});

export const Chip = (props: IChipProps): JSX.Element => {
  const styles = useStyles(props);
  const classes = {
    root: styles.root
  };

  return <MuiChip classes={classes} {...props} />;
};
