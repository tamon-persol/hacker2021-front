# RadioGroup

## Usage
```jsx
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Radio } from 'components/atoms/Radio';
import { RadioGruop } from 'components/atoms/RadioGruop';

<RadioGroup row>
  <FormControlLabel
    value="apple"
    control={<Radio color="primary" />}
    label="りんご"
  />
  <FormControlLabel
    value="banana"
    control={<Radio color="primary" />}
    label="ばなな"
  />
</RadioGroup>
```

## Props
Basically, [Material UI RadioGruop props](https://material-ui.com/api/radio-group/#props) are available.

## Note

`RadioGruop` is useing Material UI.

[FYI]

RadioGruop: https://material-ui.com/components/radio-buttons/#radiogroup
