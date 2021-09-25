import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from './Table';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableSortLabel } from './TableSortLabel';
import { TableBody } from './TableBody';
import { TablePagination } from './TablePagenation';

import markdown from './index.md';

export default {
  title: 'material-ui/atoms/Table',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown }
  }
};

type IOrderBy = 'desc' | 'asc' | undefined;

interface IId {
  name: string;
  calories: number;
  fat: number;
}

interface IHeadCell {
  id: keyof IId;
  label: string;
}

const headCells: IHeadCell[] = [
  {
    id: 'name',
    label: 'Dessert (100g serving)'
  },
  { id: 'calories', label: 'Calories' },
  { id: 'fat', label: 'Fat (g)' }
];

const rows = [
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0
  },
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0
  },
  {
    name: 'Jelly Bean',
    calories: 375,
    fat: 0.0
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2
  },
  {
    name: 'Marshmallow',
    calories: 318,
    fat: 0
  },
  {
    name: 'Nougat',
    calories: 360,
    fat: 19.0
  },
  {
    name: 'Oreo',
    calories: 437,
    fat: 18.0
  }
];

export const basic = (): JSX.Element => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {headCells.map((cell) => {
            return (
              <TableCell key={cell.id}>
                <span>{cell.label}</span>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          return (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const withSortAndPagination = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [activeSortId, setActiveSortId] = useState(headCells[0].id);
  const [orderBy, setOrderBy] = useState<IOrderBy>('desc');
  const [data, setData] = useState(rows);

  const sort = (order: keyof IId, switchedOrderBy: IOrderBy) => {
    switch (switchedOrderBy) {
      case 'asc':
        if (typeof data[0][order] === 'string') {
          setData(
            [...data].sort((a, b) => {
              if (
                b[order].toString().toLowerCase() <
                a[order].toString().toLowerCase()
              )
                return -1;
              else if (
                b[order].toString().toLowerCase() >
                a[order].toString().toLowerCase()
              )
                return 1;
              return 0;
            })
          );
        } else {
          setData([...data].sort((a, b) => +b[order] - +a[order]));
        }
        break;
      case 'desc':
        if (typeof data[0][order] === 'string') {
          setData(
            [...data].sort((a, b) => {
              if (
                a[order].toString().toLowerCase() <
                b[order].toString().toLowerCase()
              )
                return -1;
              else if (
                a[order].toString().toLowerCase() >
                b[order].toString().toLowerCase()
              )
                return 1;
              return 0;
            })
          );
        } else {
          setData([...data].sort((a, b) => +a[order] - +b[order]));
        }
        break;
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (id: keyof IId) => () => {
    if (id === activeSortId) {
      const switchedOrderBy = orderBy === 'asc' ? 'desc' : 'asc';
      setOrderBy(switchedOrderBy);
      sort(id, switchedOrderBy);
    } else {
      sort(id, orderBy);
    }
    setActiveSortId(id);
  };

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {headCells.map((cell) => {
            return (
              <TableCell key={cell.id} sortDirection={false}>
                <TableSortLabel
                  active={activeSortId === cell.id}
                  direction={orderBy}
                  onClick={handleSort(cell.id)}
                >
                  <span>{cell.label}</span>
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Table>
  );
};
