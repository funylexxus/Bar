import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { EnhancedTableHead, TableToolbar } from './components'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import customAxios from 'src/utils/customAxios'
import _ from 'lodash'
import { Button, InputAdornment, TextField } from '@mui/material'
import { Magnify } from 'mdi-material-ui'
// import { useDrinks } from 'src/@core/hooks/useDrinks'
import { DrinksContext } from 'src/@core/context/drinksContext'
import { useContext } from 'react'

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

const DrinksTable = props => {
  const [sortOrder, setOrder] = useState('asc')
  const [sortField, setOrderBy] = useState('name')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [itemsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState([])
  const [pagination, setPagination] = useState({ totalCount: 5 })
  const [drinksResponse, getDrinks] = useContext(DrinksContext)

  useEffect(() => {
    getDrinks({ sortOrder, sortField, page: parseInt(page) + 1, itemsPerPage })
  }, [sortOrder, sortField, page, itemsPerPage])

  useMemo(() => {
    console.log('drinksResponse', drinksResponse)
    if (drinksResponse.name === 'AxiosError') {
      return
    }

    const formatedRows = _.map(
      drinksResponse.drinks,
      ({ _id, name, description, price, volume }, i) => ({
        id: i,
        _id,
        name,
        description,
        price,
        volume
      })
    )
    setRows(formatedRows)
    setPagination(drinksResponse.pagination)
  }, [drinksResponse])

  const handleRequestSort = (event, property) => {
    const isAsc = sortField === property && sortOrder === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const selectRow = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const deleteRow = async event => {
    const ids = _.map(selected, i => rows[i]._id)
    try {
      const {
        data: { deletedCount }
      } = await customAxios.delete(`${process.env.API_URL}/drinks`, {
        data: { ids }
      })

      if (deletedCount === selected.length) {
        setSelected([])
        getDrinks()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = event => {
    setDense(event.target.checked)
  }

  const downloadCSVData = (csv, fileName) => {
    const anchor = document.createElement('a')
    anchor.href = `data:text/csv;charset=utf-8,${encodeURI(csv)}}`
    anchor.target = '_blank'
    anchor.download = `${fileName}.csv` || 'export.csv'
    anchor.click()
    anchor.remove()
  }

  const exportCsv = async () => {
    try {
      console.log('exportCsv')
      const { data } = await customAxios.post(
        `${process.env.API_URL}/drinks/export`
      )
      downloadCSVData(data, 'drinks')
    } catch (error) {
      console.log(error)
    }
  }

  let timeout
  const search = event => {
    const keyword = event.target.value

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      getDrinks({ keyword })
    }, 1000)
  }

  const isSelected = id => selected.indexOf(id) !== -1

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', pt: 6 }}>
        <Box sx={{ ml: 6 }}>
          <TextField
            size='small'
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Magnify fontSize='small' />
                </InputAdornment>
              )
            }}
            onChange={search}
          />
        </Box>
        <TableToolbar numSelected={selected.length} deleteRow={deleteRow} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              sortOrder={sortOrder}
              sortField={sortField}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    onClick={event => selectRow(event, row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        color='primary'
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell align='right'>{row.volume}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={pagination.totalCount}
          rowsPerPage={itemsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Box sx={{ my: 3 }}>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label='Dense padding'
        />
        <Button variant='contained' onClick={exportCsv}>
          Export CSV
        </Button>
      </Box>
    </Box>
  )
}

export default DrinksTable
