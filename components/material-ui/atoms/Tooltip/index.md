# Tooltip

## Usage
```jsx
import { Tooltip } from 'components/atoms/Tooltip'

<Tooltip
  title={
    <Box padding={1}>
      <h3>Title</h3>
      <p>A : 100</p>
      <p>B : 200</p>
      <p>C : 400</p>
    </Box>
  }
>
  <button>Hover Me</button>
</Tooltip>
```

## Props
Basically, [Material UI Tooltip props](https://material-ui.com/ja/api/tooltip/#props) are available.
Except for them, refer to the table below.

|Name|Required|Type|DefaultValue|Description|
|-|-|-|-|-|
|bgcolor|-|string|based on materal-ui theme|The background color of the component.|

## Note

`Tooltip` is useing Material UI.

[FYI]

Tooltip: https://material-ui.com/components/tooltips/
