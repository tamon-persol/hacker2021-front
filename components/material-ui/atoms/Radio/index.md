# Radio

## Usage
```jsx
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from 'components/atoms/Radio';

<FormControlLabel
  value="apple"
  control={
    <Radio
      color="primary"
      checked={selectedValue === 'apple'}
      onChange={handleChange}
      size={60}
    />
  }
  label="りんご"
/>
```

## Props
Basically, [Material UI Radio props](https://material-ui.com/ja/api/radio/#props) are available.
Except for them, refer to the table below.

|Name|Required|Type|DefaultValue|Description|
|-|-|-|-|-|
|size|-|number \| string|based on materal-ui|The size of the checkbox icon.|

## Note

`Radio` is useing Material UI.

[FYI]

Button: https://material-ui.com/components/radio-buttons/
