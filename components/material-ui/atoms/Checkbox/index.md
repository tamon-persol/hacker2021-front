# Checkbox

## Usage
```jsx
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from 'components/atoms/Checkbox';

<FormControlLabel
  control={
    <Checkbox
      color="primary"
      checked={state.apple}
      onChange={handleChange}
      name="apple"
    />
  }
  label="りんご"
/>
```

## Props
Basically, [Material UI Checkbox props](https://material-ui.com/ja/api/checkbox/#props) are available.
Except for them, refer to the table below.

|Name|Required|Type|DefaultValue|Description|
|-|-|-|-|-|
|size|-|number \| string|based on materal-ui|The size of the checkbox icon.|

## Note

`Checkbox` is useing Material UI.

[FYI]

Button: https://material-ui.com/components/checkboxes/
