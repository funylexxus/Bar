import react from 'react'
import Box from '@mui/material/Box'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'

import { visuallyHidden } from '@mui/utils'

import Checkbox from '@mui/material/Checkbox'

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description'
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Price'
  },
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Volume'
  }
]

export function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    sortOrder,
    sortField,
    numSelected,
    rowCount,
    onRequestSort
  } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={sortField === headCell.id ? sortOrder : false}
          >
            <TableSortLabel
              active={sortField === headCell.id}
              direction={sortField === headCell.id ? sortOrder : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {sortField === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {sortOrder === 'desc'
                    ? 'sorted descending'
                    : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
