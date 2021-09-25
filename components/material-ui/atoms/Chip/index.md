# Chip

## Usage
```jsx
import { Chip } from 'components/atoms/Chip'

<Chip avatar={<Avatar>M</Avatar>} label="icon" />
```

## Props
Basically, [Material UI Button props](https://material-ui.com/ja/api/chip/#props) are available.
Except for them, refer to the table below.

|Name|Required|Type|DefaultValue|Description|
|-|-|-|-|-|
|bgcolor|-|string|based on materal-ui theme|The background color of the component.|
|borderColor|-|string|based on materal-ui theme|The border color of the component|

`color` will be ignored, if you use both `color` and `bgcolor`.

## Note

`Chip` is useing Material UI.

[FYI]

Chip: https://material-ui.com/components/chips/
