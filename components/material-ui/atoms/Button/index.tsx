import React from 'react';
import { default as MuiButton, ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface IButtonProps extends ButtonProps {
  width?: string;
  height?: string;
  rounded?: boolean | string;
  bgcolor?: string;
  labelColor?: string;
  borderColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// NOTE: Refer to https://material-ui.com/api/button/#css
const useStyles = makeStyles({
  root: {
    borderRadius: ({ rounded }: IButtonProps) =>
      typeof rounded === 'string' ? rounded : rounded ? '56px' : '',
    width: ({ width }: IButtonProps) => width || '',
    height: ({ height }: IButtonProps) => height || '',
    background: ({ bgcolor }: IButtonProps) => bgcolor || '',
    borderColor: ({ borderColor }: IButtonProps) => borderColor || ''
  },
  label: {
    color: ({ labelColor }: IButtonProps) => labelColor || ''
  }
});

export const Button = (props: IButtonProps): JSX.Element => {
  const styles = useStyles(props);
  const classes = {
    root: styles.root,
    label: styles.label
  };

  return (
    <MuiButton classes={classes} {...props}>
      {props.children}
    </MuiButton>
  );
};
