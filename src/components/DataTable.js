import React, { useState } from 'react'
// import PropTypes from "prop-types";
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import dayjs from 'dayjs'
import VisibilityIcon from '@material-ui/icons/Visibility'
import DeleteIcon from '@material-ui/icons/Delete'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import { CssBaseline } from '@material-ui/core'

const RowActions = ({
  row,
  handleDetails,
  handleEdit,
  handleDelete,
  customActions
}) => {
  return (
    <div>
      {/* {customActions &&
        customActions.map((customAction) => {
          return customAction.component(row)
        })} */}
      {handleDetails && (
        <Tooltip key={'details'} title='Details' placement='top'>
          <Button
            onClick={handleDetails}
            aria-label='details'
            color='primary'
            size='small'
            style={{
              margin: 5,
              backgroundColor: 'var(--blue)',
              color: 'white'
            }}
          >
            <VisibilityIcon fontSize='small' />
          </Button>
        </Tooltip>
      )}
      {handleEdit && (
        <Tooltip key={'edit'} title='Edit' placement='top'>
          <Button
            onClick={handleEdit}
            aria-label='edit'
            color='primary'
            variant='contained'
            size='small'
            style={{ margin: 5, boxShadow: 'none', color: 'white' }}
          >
            Edit
          </Button>
        </Tooltip>
      )}
      {handleDelete && (
        <Tooltip key={'delete'} title='Delete' placement='top'>
          <Button
            onClick={handleDelete}
            aria-label='delete'
            color='primary'
            size='small'
            style={{ margin: 5, backgroundColor: 'red', color: 'white' }}
          >
            <DeleteIcon fontSize='small' />
          </Button>
        </Tooltip>
      )}
    </div>
  )
}

const CustomDivider = () => {
  return (
    <td
      style={{
        backgroundColor: 'lightgrey',
        width: 1,
        height: '100%',
        position: 'absolute'
      }}
    ></td>
  )
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}
function EnhancedTableHead({
  classes,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  dataColumns,
  handleMultiSelect,
  ...props
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <tr style={{ position: 'relative' }}>
        <TableCell>
          <div>#</div>
        </TableCell>
        <CustomDivider />
        {handleMultiSelect && (
          <TableCell padding='checkbox'>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        )}

        {dataColumns.map((headCell, i) => (
          <React.Fragment key={i}>
            <TableCell
              // align={headCell.type !== "String" ? "right" : "left"}
              // padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
            <CustomDivider />
          </React.Fragment>
        ))}
        <CustomDivider />
        <TableCell align='center' key={'actionsHeader'}>
          Actions
        </TableCell>
      </tr>
    </TableHead>
  )
}
// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired
// }
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: '1 1 100%'
  }
}))
const EnhancedTableToolbar = ({ tableTitle, children, ...props }) => {
  const classes = useToolbarStyles()
  const { numSelected } = props

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          {tableTitle}
        </Typography>
      )}
      {children}
    </Toolbar>
  )
}
// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired
// }

const DataTable = ({
  tableTitle,
  rowPath,
  rowData,
  dataColumns,
  handleRowClick,
  detailsHandler,
  editHandler,
  deleteHandler,
  customActions,
  handleMultiSelect,
  children,
  ...props
}) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(props.page ?? 0)
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage ?? 25)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  const handleSelectAllClick = (event, row) => {
    if (event.target.checked) {
      const newSelecteds = rowData.map((n) => n)
      setSelected(newSelecteds)
      if (handleMultiSelect) {
        handleMultiSelect(event, row, newSelecteds)
      }
      return
    }
    setSelected([])
    if (handleMultiSelect) {
      handleMultiSelect(event, row, [])
    }
  }
  const handleClick = (event, row) => {
    const selectedIndex = selected.map((value) => value._id).indexOf(row._id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row)
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
    if (handleMultiSelect) {
      handleMultiSelect(event, row, newSelected)
    }
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const isSelected = (id) => {
    selected.map((value) => value._id).indexOf(id) !== -1
  }
  return (
    <div>
      <CssBaseline />
      <Paper>
        <EnhancedTableToolbar
          tableTitle={tableTitle}
          numSelected={selected.length}
          children={children}
        />
        <TableContainer>
          <Table
            aria-labelledby='tableTitle'
            size={'medium'}
            aria-label='enhanced table'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(event, row) =>
                handleSelectAllClick(event, row)
              }
              onRequestSort={handleRequestSort}
              rowCount={rowData.length}
              dataColumns={dataColumns}
              handleMultiSelect={handleMultiSelect}
            />
            <TableBody>
              {stableSort(rowData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id)
                  const labelId = `enhanced-table-checkbox-${index}`
                  let itemIndex = page * rowsPerPage + (index + 1)

                  return (
                    <tr
                      hover
                      onClick={(event) => {
                        handleMultiSelect
                          ? handleClick(event, row)
                          : console.log('multiSelect is Deactivated')
                        handleRowClick
                          ? handleRowClick(event, row)
                          : console.log('handleRowClick is not implemented')
                      }}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                      style={{ position: 'relative' }}
                    >
                      <TableCell>
                        <div>{itemIndex}</div>
                      </TableCell>
                      <CustomDivider />
                      {handleMultiSelect && (
                        <>
                          <TableCell key={'checkbox'} padding='checkbox'>
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          <CustomDivider />
                        </>
                      )}

                      {dataColumns.map((rk, j) => {
                        if (rk.type === 'Array') {
                          return (
                            <React.Fragment
                              key={JSON.stringify(row[rk.property]) + '' + j}
                            >
                              <TableCell>{row[rk.property]?.length}</TableCell>
                              <CustomDivider />
                            </React.Fragment>
                          )
                        } else if (rk.type === 'Date') {
                          return (
                            <React.Fragment
                              key={JSON.stringify(row[rk.property]) + '' + j}
                            >
                              <TableCell>
                                {row[rk.property]
                                  ? dayjs(Number(row[rk.property])).format(
                                      'DD/MM/YYYY hh:mm A'
                                    )
                                  : 'N/A'}
                              </TableCell>
                              <CustomDivider />
                            </React.Fragment>
                          )
                        } else if (rk.type === 'Property') {
                          return (
                            <React.Fragment key={j}>
                              <TableCell
                                key={JSON.stringify(row[rk.property]) + '' + j}
                              >
                                {row[rk.property]
                                  ? row[rk.property][rk.nestedProperty]
                                  : 'N/A'}
                              </TableCell>
                              <CustomDivider />
                            </React.Fragment>
                          )
                        } else {
                          return (
                            <React.Fragment
                              key={JSON.stringify(row[rk.property]) + '' + j}
                            >
                              <TableCell>{row[rk.property]}</TableCell>
                              <CustomDivider />
                            </React.Fragment>
                          )
                        }
                      })}
                      <CustomDivider />
                      {
                        <TableCell key={'actions'} align='center' width={'20%'}>
                          <RowActions
                            row={row}
                            handleDetails={
                              detailsHandler ?? (() => detailsHandler(row))
                            }
                            handleEdit={editHandler ?? (() => editHandler(row))}
                            handleDelete={
                              deleteHandler ?? (() => deleteHandler(row))
                            }
                            customActions={customActions}
                          />
                        </TableCell>
                      }
                    </tr>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component='div'
          count={rowData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
const NewTable = () => {
  return (
    <div>
      <CssBaseline />
      <Paper>
        <TableContainer>
          <Table
            aria-labelledby='tableTitle'
            size={'medium'}
            aria-label='enhanced table'
          >
            <TableBody>
              <React.Fragment>
                <TableCell>something here</TableCell>
                <CustomDivider />
              </React.Fragment>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export { NewTable, DataTable }
