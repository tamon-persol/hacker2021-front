# Grid

## Usage
```jsx
import { Grid } from 'components/atoms/Grid'
import { Box } from 'components/atoms/Box';
import { theme } from 'theme';

<Grid container spacing={2}>
  <Grid item xs={6}>
    <Box
      bgcolor={theme.color.background2}
      color={theme.color.primary}
      padding={4}
      textAlign="center"
      borderRadius={6}
    >
      xs6
    </Box>
  </Grid>
  <Grid item xs={6}>
    <Box
      bgcolor={theme.color.background2}
      color={theme.color.primary}
      padding={4}
      textAlign="center"
      borderRadius={6}
    >
      xs6
    </Box>
  </Grid>
</Grid>
```

## Props

Check here: https://material-ui.com/api/grid/#props

## Note

`Grid` is useing Material UI.

[FYI]

Grid: https://material-ui.com/components/grid/
