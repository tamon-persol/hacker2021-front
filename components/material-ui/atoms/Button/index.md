# Button

## Usage
```jsx
import { Button } from 'components/atoms/Button'

<Button color="primary" variant="contained" fullWidth>
  Button
</Button>
```

## Props
Basically, [Material UI Button props](https://material-ui.com/ja/api/button/#props) are available.
Except for them, refer to the table below.

|Name|Required|Type|DefaultValue|Description|
|-|-|-|-|-|
|width|-|string|based on materal-ui|The width of the component.|
|height|-|string|based on materal-ui|The height of the component.|
|rounded|-|boolean \| string|based on materal-ui|The `borderRadius` value of the component. If you set `true`, `borderRadius` will be 56px. |
|bgcolor|-|string|based on materal-ui theme|The background color of the component.|
|borderColor|-|string|based on materal-ui theme|The border color of the component|
|onClick|-|(event: React.MouseEvent<HTMLButtonElement>) => void|-|The click hndler function|

## Note

`Button` is useing Material UI.

[FYI]

Button: https://material-ui.com/components/buttons/
