# Table

## Usage
```jsx
import { Table } from 'components/atoms/Table';
import { TableHead } from 'components/atoms/TableHead';
import { TableRow } from 'components/atoms/TableRow';
import { TableCell } from 'components/atoms/TableCell';
import { TableBody } from 'components/atoms/TableBody';

<Table aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>
       <span>Dessert</span>
      </TableCell>
      <TableCell>
       <span>Calories</span>
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell component="th" scope="row">
        Cupcake
      </TableCell>
      <TableCell align="right">305</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

Basically, Material UI props are available.

- Table: https://material-ui.com/api/table/#props
- TableBody: https://material-ui.com/api/table-body/#props
- TableCell: https://material-ui.com/api/table-cell/#props
- TableFooter: https://material-ui.com/api/table-footer/#props
- TableHead: https://material-ui.com/api/table-head/#props
- TablePagenation: https://material-ui.com/api/table-pagenation/#props
- TableRow: https://material-ui.com/api/table-row/#props
- TableSortLabel: https://material-ui.com/api/table-sort-label/#props

## Note

`Table` is useing Material UI.

[FYI]

Tabke: https://material-ui.com/components/tables/
