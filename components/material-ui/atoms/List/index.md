# List

## Usage
```jsx
import { List } from 'comopnents/atoms/List';
import { ListItem } from 'comopnents/atoms/ListItem';
import { ListItemIcon } from 'comopnents/atoms/ListItemIcon';
import { ListItemText } from 'comopnents/atoms/ListItemText';
import { ListSubheader } from 'comopnents/atoms/ListSubheader';
import { Checkbox } from 'components/atoms/Checkbox';

<List
  subheader={<ListSubheader id="list-subheader">List Items</ListSubheader>}
>
  <ListItem
    key={value}
    role={undefined}
    dense
    clickable
    onClick={handleToggle(value)}
  >
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={checked.indexOf(value) !== -1}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': 'checkbox-list-label-1 }}
      />
    </ListItemIcon>
    <ListItemText id={labelId} primary={`Line item checkbox-list-label-1`} />
  </ListItem>
</List>
```

## Props

Basically, Material UI props are available.

- List: https://material-ui.com/api/list/#props
- ListItem: https://material-ui.com/api/list-item/#props
  - `button` property is disabled. use `clickable`.
  - NOTE: https://github.com/mui-org/material-ui/issues/14971
- ListItemIcon: https://material-ui.com/api/list-item-icon/#props
- ListItemText: https://material-ui.com/api/list-item-text/#props
- ListSubheader: https://material-ui.com/api/list-subheader/#props



## Note


`List` is useing Material UI.

[FYI]

Material UI List: https://material-ui.com/components/lists