import React from 'react';
import { default as MuiTooltip, TooltipProps } from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

interface ITooltipProps extends TooltipProps {
  bgcolor?: string;
}

// NOTE: Refer to https://material-ui.com/api/tooltip/#css
const useStyles = makeStyles({
  tooltip: {
    background: ({ bgcolor }: ITooltipProps) => bgcolor || ''
  },
  arrow: {
    color: ({ bgcolor }: ITooltipProps) => bgcolor || ''
  }
});

export const Tooltip = (props: ITooltipProps): JSX.Element => {
  const styles = useStyles(props);
  const classes = {
    tooltip: styles.tooltip,
    arrow: styles.arrow
  };

  return (
    <MuiTooltip classes={classes} arrow placement="top" {...props}>
      {props.children}
    </MuiTooltip>
  );
};
