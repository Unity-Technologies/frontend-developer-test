import React from 'react';
import PropTypes from 'prop-types';

import TableMUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {formatTimestamp, sortData} from '../../../lib/helpers';
import {DIFF_TYPE, SORT_ORDER} from '../../../lib/constants';

const useStyles = makeStyles({
  tableHeadTypography: {
    fontWeight: 700,
  },
});

const Table = ({type, rows}) => {
  const [sortOrder, setSortOrder] = React.useState(SORT_ORDER.DESC);
  const [sortedRows, setSortedRows] = React.useState(sortData(rows, sortOrder));

  const classes = useStyles();

  const onClickSort = React.useCallback(() => {
    const newSortOrder = sortOrder === SORT_ORDER.DESC ? SORT_ORDER.ASC : SORT_ORDER.DESC;
    setSortOrder(newSortOrder);
    setSortedRows(sortData(sortedRows, newSortOrder));
  }, [sortOrder, sortedRows]);

  React.useEffect(() => {
    setSortedRows(sortData(rows, sortOrder));
  }, [rows, sortOrder]);

  return (
    <TableContainer>
      <TableMUI>
        <TableHead>
          <TableRow>
            <TableCell style={{width: '12%', minWidth: 110}}>
              <TableSortLabel
                active={true}
                direction={sortOrder}
                onClick={onClickSort}
              >
                <Typography variant="subtitle2" className={classes.tableHeadTypography}>
                  Date
                </Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell style={{width: '30%', minWidth: 310}}>
              <Typography variant="subtitle2" className={classes.tableHeadTypography}>
                {type === DIFF_TYPE.USERS ? 'User ID' : 'Project ID'}
              </Typography>
            </TableCell>
            <TableCell style={{width: '29%', minWidth: 150}}>
              <Typography variant="subtitle2" className={classes.tableHeadTypography}>
                Old Value
              </Typography>
            </TableCell>
            <TableCell style={{width: '29%', minWidth: 150}}>
              <Typography variant="subtitle2" className={classes.tableHeadTypography}>
                New Value
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => row.diff.map((diff) => (
            <TableRow key={row.id}>
              <TableCell>
                <Typography variant="subtitle2">{formatTimestamp(row.timestamp)}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{diff.oldValue}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{diff.newValue}</Typography>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};

Table.propTypes = {
  type: PropTypes.oneOf(Object.values(DIFF_TYPE)).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    diff: PropTypes.arrayOf(PropTypes.shape({
      oldValue: PropTypes.string.isRequired,
      newValue: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Table;
